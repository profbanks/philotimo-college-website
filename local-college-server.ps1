param(
  [int]$Port = 4181,
  [string]$RootPath = $(if (Test-Path -LiteralPath (Join-Path $PSScriptRoot "college-export")) { Join-Path $PSScriptRoot "college-export" } else { $PSScriptRoot }),
  [string]$DataPath = $(if (Test-Path -LiteralPath (Join-Path $PSScriptRoot "college-export")) { Join-Path $PSScriptRoot "college-export\data\local-college-state.json" } else { Join-Path $PSScriptRoot "data\local-college-state.json" })
)

$ErrorActionPreference = "Stop"

$root = (Resolve-Path -LiteralPath $RootPath).Path
$dataDirectory = Split-Path -Parent $DataPath
if (-not (Test-Path -LiteralPath $dataDirectory)) {
  New-Item -ItemType Directory -Path $dataDirectory | Out-Null
}

$adminCode = if ($env:COLLEGE_ADMIN_ACCESS_CODE) { $env:COLLEGE_ADMIN_ACCESS_CODE } elseif ($env:ADMIN_ACCESS_CODE) { $env:ADMIN_ACCESS_CODE } else { "PHILOTIMO-COLLEGE-ADMIN" }
$sessions = @{}
$server = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $Port)

function New-EmptyState {
  [pscustomobject][ordered]@{
    applications = @()
    contacts = @()
    verifications = @()
    pinRequests = @()
    courseRegistrations = @()
    notifications = @()
  }
}

function Normalize-State {
  param($State)

  $normalized = New-EmptyState
  if (-not $State) { return $normalized }

  foreach ($key in @("applications", "contacts", "verifications", "pinRequests", "courseRegistrations", "notifications")) {
    if ($State.PSObject.Properties.Name -contains $key -and $State.$key) {
      $normalized.$key = @($State.$key)
    }
  }

  return $normalized
}

function Read-State {
  if (-not (Test-Path -LiteralPath $DataPath)) {
    return Write-State -State (New-EmptyState)
  }

  $raw = Get-Content -LiteralPath $DataPath -Raw
  if ([string]::IsNullOrWhiteSpace($raw)) { return New-EmptyState }
  return Normalize-State -State ($raw | ConvertFrom-Json)
}

function Write-State {
  param($State)

  $normalized = Normalize-State -State $State
  $normalized | ConvertTo-Json -Depth 30 | Set-Content -LiteralPath $DataPath -Encoding UTF8
  return $normalized
}

function Clean {
  param($Value)
  if ($null -eq $Value) { return "" }
  return [string]$Value.ToString().Trim()
}

function Clean-Array {
  param($Value)
  if ($null -eq $Value) { return @() }
  if ($Value -is [array]) { return @($Value) }
  return @($Value)
}

function New-Record {
  param([hashtable]$Fields)

  $record = [ordered]@{
    id = [guid]::NewGuid().ToString()
    createdAt = (Get-Date).ToUniversalTime().ToString("o")
  }
  foreach ($key in $Fields.Keys) { $record[$key] = $Fields[$key] }
  return [pscustomobject]$record
}

function Require-Fields {
  param($Payload, [string[]]$Fields)

  $missing = @()
  foreach ($field in $Fields) {
    if (-not ($Payload.PSObject.Properties.Name -contains $field)) {
      $missing += $field
    } elseif (-not (Clean $Payload.$field)) {
      $missing += $field
    }
  }

  if ($missing.Count) {
    $suffix = if ($missing.Count -eq 1) { "" } else { "s" }
    throw "Missing required field${suffix}: $($missing -join ', ')"
  }
}

function New-Reference {
  $suffix = [guid]::NewGuid().ToString("N").Substring(0, 5).ToUpperInvariant()
  return "PHI-$(Get-Date -Format yyyy)-$suffix"
}

function Get-SurnamePassword {
  param([string]$FullName)

  $parts = @((Clean $FullName).Split(" ", [StringSplitOptions]::RemoveEmptyEntries))
  if (-not $parts.Count) { return "PHILOTIMO" }
  return $parts[$parts.Count - 1].ToUpperInvariant()
}

function New-MatricNumber {
  param($State)

  $year = Get-Date -Format yyyy
  $existing = @($State.applications | Where-Object { Clean $_.matricNumber })
  return "PHC/$year/{0:D4}" -f ($existing.Count + 1)
}

function New-BiodataPin {
  $suffix = [guid]::NewGuid().ToString("N").Substring(0, 6).ToUpperInvariant()
  return "PHI-BIO-$(Get-Date -Format yyyy)-$suffix"
}

function New-CourseRegistrationReference {
  param($State)

  $year = Get-Date -Format yyyy
  $existing = @($State.courseRegistrations | Where-Object { Clean $_.registrationReference })
  return "PHI-CR/$year/{0:D4}" -f ($existing.Count + 1)
}

function Public-Application {
  param($Application)

  if (-not $Application) { return $null }
  return [pscustomobject][ordered]@{
    reference = $Application.reference
    matricNumber = Clean $Application.matricNumber
    fullName = $Application.fullName
    programme = $Application.programme
    level = $Application.level
    status = $Application.status
    admissionStatus = $Application.admissionStatus
    paymentStatus = $Application.paymentStatus
    screeningStatus = $Application.screeningStatus
    adminNote = Clean $Application.adminNote
    createdAt = $Application.createdAt
  }
}

function Send-EmailNotification {
  param($Notification)

  if (-not (Clean $Notification.to)) {
    return [pscustomobject]@{ status = "skipped"; error = "No email address is attached to this record."; sentAt = "" }
  }

  if (-not (Clean $env:SMTP_HOST)) {
    return [pscustomobject]@{ status = "not-configured"; error = "SMTP_HOST is not configured, so the email was saved but not sent."; sentAt = "" }
  }

  $port = if (Clean $env:SMTP_PORT) { [int](Clean $env:SMTP_PORT) } else { 587 }
  $from = if (Clean $env:SMTP_FROM) { Clean $env:SMTP_FROM } else { "no-reply@philotimo.local" }
  $fromName = if (Clean $env:SMTP_FROM_NAME) { Clean $env:SMTP_FROM_NAME } else { "PHILOTIMO College Admissions" }
  $enableSsl = if (Clean $env:SMTP_ENABLE_SSL) { [Convert]::ToBoolean((Clean $env:SMTP_ENABLE_SSL)) } else { $true }

  $message = $null
  $client = $null
  try {
    $message = [System.Net.Mail.MailMessage]::new()
    $message.From = [System.Net.Mail.MailAddress]::new($from, $fromName)
    $message.To.Add((Clean $Notification.to))
    $message.Subject = Clean $Notification.subject
    $message.Body = Clean $Notification.body
    $message.IsBodyHtml = $false

    $client = [System.Net.Mail.SmtpClient]::new((Clean $env:SMTP_HOST), $port)
    $client.EnableSsl = $enableSsl
    if (Clean $env:SMTP_USERNAME) {
      $client.Credentials = [System.Net.NetworkCredential]::new((Clean $env:SMTP_USERNAME), (Clean $env:SMTP_PASSWORD))
    }

    $client.Send($message)
    return [pscustomobject]@{ status = "sent"; error = ""; sentAt = (Get-Date).ToUniversalTime().ToString("o") }
  } catch {
    return [pscustomobject]@{ status = "failed"; error = $_.Exception.Message; sentAt = "" }
  } finally {
    if ($message) { $message.Dispose() }
    if ($client) { $client.Dispose() }
  }
}

function Add-EmailNotification {
  param(
    $State,
    [string]$To,
    [string]$Subject,
    [string]$Body,
    [string]$RelatedType,
    [string]$RelatedId
  )

  $notification = New-Record @{
    to = Clean $To
    subject = Clean $Subject
    body = Clean $Body
    relatedType = Clean $RelatedType
    relatedId = Clean $RelatedId
    provider = "smtp"
    status = "queued"
    sentAt = ""
    error = ""
  }

  $delivery = Send-EmailNotification -Notification $notification
  $notification.status = $delivery.status
  $notification.sentAt = $delivery.sentAt
  $notification.error = $delivery.error
  $State.notifications = @($notification) + @($State.notifications)
  return $notification
}

function New-CollegeApplicationEmail {
  param($Application, [string]$Action)

  $subject = switch ($Action) {
    "screen-application" { "PHILOTIMO College application: screening update" }
    "approve-application" { "PHILOTIMO College application approved" }
    "reject-application" { "PHILOTIMO College application update" }
    "reopen-application" { "PHILOTIMO College application reopened" }
    "enroll-student" { "PHILOTIMO College enrolment confirmation" }
    "mark-payment-cleared" { "PHILOTIMO College payment cleared" }
    "mark-payment-pending" { "PHILOTIMO College payment status update" }
    default { "PHILOTIMO College application update" }
  }

  $matricLine = if (Clean $Application.matricNumber) { "Matric number: $($Application.matricNumber)`r`n" } else { "" }
  $noteLine = if (Clean $Application.adminNote) { "Office note: $($Application.adminNote)`r`n" } else { "" }
  $body = @"
Dear $($Application.fullName),

Your PHILOTIMO College application has been updated.

Reference: $($Application.reference)
$($matricLine)Programme: $($Application.programme)
Level: $($Application.level)
Admission status: $($Application.admissionStatus)
Screening status: $($Application.screeningStatus)
Payment status: $($Application.paymentStatus)
$($noteLine)
For enquiries, contact PHILOTIMO College admissions on 0902 550 2176 or 0703 901 5243.

Honour in Service; Dignity in Labour.
"@

  return [pscustomobject]@{ subject = $subject; body = $body }
}

function Read-HttpRequest {
  param([IO.Stream]$Stream)

  $reader = [IO.StreamReader]::new($Stream, [Text.Encoding]::UTF8, $false, 8192, $true)
  $line = $reader.ReadLine()
  if ([string]::IsNullOrWhiteSpace($line)) { return $null }

  $parts = $line.Split(" ")
  $headers = @{}
  while ($true) {
    $headerLine = $reader.ReadLine()
    if ($null -eq $headerLine -or $headerLine -eq "") { break }
    $separator = $headerLine.IndexOf(":")
    if ($separator -gt 0) {
      $headers[$headerLine.Substring(0, $separator).Trim().ToLowerInvariant()] = $headerLine.Substring($separator + 1).Trim()
    }
  }

  $body = ""
  if ($headers.ContainsKey("content-length")) {
    $length = [int]$headers["content-length"]
    if ($length -gt 0) {
      $buffer = New-Object char[] $length
      $read = $reader.Read($buffer, 0, $length)
      if ($read -gt 0) { $body = -join $buffer[0..($read - 1)] }
    }
  }

  return [pscustomobject]@{
    Method = $parts[0]
    Path = ([Uri]::UnescapeDataString($parts[1].Split("?")[0]))
    Headers = $headers
    Body = $body
  }
}

function Get-BodyJson {
  param($Request)

  if ([string]::IsNullOrWhiteSpace($Request.Body)) { return [pscustomobject]@{} }
  return $Request.Body | ConvertFrom-Json
}

function Write-HttpResponse {
  param(
    [IO.Stream]$Stream,
    [int]$StatusCode,
    [string]$ContentType,
    [byte[]]$Body,
    [bool]$HeadOnly = $false
  )

  $statusText = switch ($StatusCode) {
    200 { "OK" }
    201 { "Created" }
    400 { "Bad Request" }
    401 { "Unauthorized" }
    403 { "Forbidden" }
    404 { "Not Found" }
    405 { "Method Not Allowed" }
    500 { "Internal Server Error" }
    default { "OK" }
  }
  $header = "HTTP/1.1 $StatusCode $statusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nAccess-Control-Allow-Origin: *`r`nAccess-Control-Allow-Headers: Content-Type, Authorization`r`nAccess-Control-Allow-Methods: GET, POST, OPTIONS`r`nConnection: close`r`n`r`n"
  $headerBytes = [Text.Encoding]::UTF8.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if (-not $HeadOnly) { $Stream.Write($Body, 0, $Body.Length) }
}

function Send-Json {
  param([IO.Stream]$Stream, [int]$StatusCode, $Body)

  $json = $Body | ConvertTo-Json -Depth 30
  $bytes = [Text.Encoding]::UTF8.GetBytes($json)
  Write-HttpResponse -Stream $Stream -StatusCode $StatusCode -ContentType "application/json; charset=utf-8" -Body $bytes
}

function Send-Text {
  param([IO.Stream]$Stream, [int]$StatusCode, [string]$Text)

  $bytes = [Text.Encoding]::UTF8.GetBytes($Text)
  Write-HttpResponse -Stream $Stream -StatusCode $StatusCode -ContentType "text/plain; charset=utf-8" -Body $bytes
}

function Get-MimeType {
  param([string]$Path)

  switch ([IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "text/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".svg" { "image/svg+xml" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".webp" { "image/webp" }
    ".ico" { "image/x-icon" }
    default { "application/octet-stream" }
  }
}

function Get-BearerToken {
  param($Request)

  if ($Request.Headers.ContainsKey("authorization") -and $Request.Headers["authorization"].StartsWith("Bearer ")) {
    return $Request.Headers["authorization"].Substring(7)
  }
  return ""
}

function Test-Admin {
  param($Request)

  $token = Get-BearerToken -Request $Request
  return $token -and $sessions.ContainsKey($token) -and $sessions[$token] -gt (Get-Date)
}

function Find-ApplicationByReference {
  param($State, [string]$Reference)

  $cleanReference = (Clean $Reference).ToUpperInvariant()
  return @($State.applications | Where-Object {
    (Clean $_.reference).ToUpperInvariant() -eq $cleanReference -or
    (Clean $_.matricNumber).ToUpperInvariant() -eq $cleanReference
  })[0]
}

function Find-PinRequestByPin {
  param($State, [string]$Pin)

  $cleanPin = (Clean $Pin).ToUpperInvariant()
  return @($State.pinRequests | Where-Object { (Clean $_.pin).ToUpperInvariant() -eq $cleanPin })[0]
}

function Invoke-AdminAction {
  param($State, $Payload)

  $action = Clean $Payload.action
  $id = Clean $Payload.id
  $note = Clean $Payload.note

  if ($action -in @("screen-application", "approve-application", "reject-application", "reopen-application", "enroll-student", "mark-payment-cleared", "mark-payment-pending")) {
    $application = @($State.applications | Where-Object { $_.id -eq $id })[0]
    if (-not $application) { throw "Application was not found." }

    if ($action -eq "screen-application") {
      $application.status = "screening"
      $application.screeningStatus = "Invited for departmental screening"
      $application.admissionStatus = "Under departmental screening"
    } elseif ($action -eq "approve-application") {
      $application.status = "approved"
      $application.screeningStatus = "Eligible"
      $application.admissionStatus = "Approved for admission processing"
    } elseif ($action -eq "reject-application") {
      $application.status = "rejected"
      $application.screeningStatus = "Not cleared"
      $application.admissionStatus = "Not approved at this time"
    } elseif ($action -eq "reopen-application") {
      $application.status = "pending"
      $application.screeningStatus = "Awaiting review"
      $application.admissionStatus = "Received for admissions screening"
    } elseif ($action -eq "enroll-student") {
      $application.status = "enrolled"
      $application.screeningStatus = "Cleared"
      $application.admissionStatus = "Enrolled as a student"
      if (-not (Clean $application.matricNumber)) { $application.matricNumber = New-MatricNumber -State $State }
    } elseif ($action -eq "mark-payment-cleared") {
      $application.paymentStatus = "cleared"
    } elseif ($action -eq "mark-payment-pending") {
      $application.paymentStatus = "pending"
    }

    if ($note) { $application.adminNote = $note }
    $emailContent = New-CollegeApplicationEmail -Application $application -Action $action
    $email = Add-EmailNotification -State $State -To $application.email -Subject $emailContent.subject -Body $emailContent.body -RelatedType "application" -RelatedId $application.id
    return [pscustomobject]@{ message = "$($application.fullName)'s application is now $($application.status)."; email = $email }
  }

  if ($action -in @("issue-biodata-pin", "reject-biodata-pin", "reopen-biodata-pin")) {
    $request = @($State.pinRequests | Where-Object { $_.id -eq $id })[0]
    if (-not $request) { throw "E-biodata PIN request was not found." }

    if ($action -eq "issue-biodata-pin") {
      $request.status = "issued"
      $request.issuedAt = (Get-Date).ToUniversalTime().ToString("o")
      if (-not (Clean $request.pin)) { $request.pin = New-BiodataPin }
      $body = @"
Dear $($request.fullName),

PHILOTIMO College has verified your e-biodata PIN payment.

Student ID: $($request.studentId)
Programme: $($request.programme)
Semester: $($request.semester)
E-biodata PIN: $($request.pin)

Use this PIN to register your semester courses on the student portal. Keep it private.

Honour in Service; Dignity in Labour.
"@
      $email = Add-EmailNotification -State $State -To $request.email -Subject "PHILOTIMO College e-biodata PIN issued" -Body $body -RelatedType "pinRequest" -RelatedId $request.id
      return [pscustomobject]@{ message = "E-biodata PIN has been issued to $($request.fullName)."; email = $email }
    }

    if ($action -eq "reject-biodata-pin") {
      $request.status = "rejected"
      $request.issuedAt = ""
      $body = @"
Dear $($request.fullName),

PHILOTIMO College has reviewed your e-biodata PIN payment request.

Status: rejected
Payment reference: $($request.paymentReference)
Programme: $($request.programme)
Semester: $($request.semester)

Please contact the admissions office with corrected payment details or clearer proof of payment.
"@
      $email = Add-EmailNotification -State $State -To $request.email -Subject "PHILOTIMO College e-biodata PIN payment review" -Body $body -RelatedType "pinRequest" -RelatedId $request.id
      return [pscustomobject]@{ message = "$($request.fullName)'s e-biodata PIN request has been rejected."; email = $email }
    }

    $request.status = "pending"
    $request.issuedAt = ""
    $body = @"
Dear $($request.fullName),

PHILOTIMO College has reopened your e-biodata PIN payment request for another review.

Payment reference: $($request.paymentReference)
Programme: $($request.programme)
Semester: $($request.semester)

The admissions office will update you after review.
"@
    $email = Add-EmailNotification -State $State -To $request.email -Subject "PHILOTIMO College e-biodata PIN review reopened" -Body $body -RelatedType "pinRequest" -RelatedId $request.id
    return [pscustomobject]@{ message = "$($request.fullName)'s e-biodata PIN request has been moved back to pending."; email = $email }
  }

  if ($action -in @("approve-course-registration", "reject-course-registration", "reopen-course-registration")) {
    $registration = @($State.courseRegistrations | Where-Object { $_.id -eq $id })[0]
    if (-not $registration) { throw "Course registration was not found." }

    if ($action -eq "approve-course-registration") {
      $registration.status = "approved"
      $registration.reviewedAt = (Get-Date).ToUniversalTime().ToString("o")
    } elseif ($action -eq "reject-course-registration") {
      $registration.status = "rejected"
      $registration.reviewedAt = (Get-Date).ToUniversalTime().ToString("o")
    } else {
      $registration.status = "submitted"
      $registration.reviewedAt = ""
    }

    $body = @"
Dear $($registration.fullName),

PHILOTIMO College has updated your semester course registration.

Registration reference: $($registration.registrationReference)
Student ID: $($registration.studentId)
Programme: $($registration.programme)
Semester: $($registration.semester)
Status: $($registration.status)

Please keep your registration reference for departmental records.
"@
    $email = Add-EmailNotification -State $State -To $registration.email -Subject "PHILOTIMO College course registration update" -Body $body -RelatedType "courseRegistration" -RelatedId $registration.id
    return [pscustomobject]@{ message = "$($registration.fullName)'s course registration is now $($registration.status)."; email = $email }
  }

  if ($action -eq "close-contact") {
    $contact = @($State.contacts | Where-Object { $_.id -eq $id })[0]
    if (-not $contact) { throw "Contact enquiry was not found." }
    $contact.status = "responded"
    if ($note) { $contact.adminNote = $note }
    $body = @"
Dear $($contact.name),

Thank you for contacting PHILOTIMO College. Your enquiry has been reviewed by the admissions office.

Message received:
$($contact.message)

Please contact 0902 550 2176 or 0703 901 5243 if you need further assistance.
"@
    $email = Add-EmailNotification -State $State -To $contact.email -Subject "PHILOTIMO College enquiry update" -Body $body -RelatedType "contact" -RelatedId $contact.id
    return [pscustomobject]@{ message = "$($contact.name)'s enquiry has been marked as responded."; email = $email }
  }

  if ($action -eq "review-verification") {
    $verification = @($State.verifications | Where-Object { $_.id -eq $id })[0]
    if (-not $verification) { throw "Verification request was not found." }
    $verification.status = "reviewed"
    if ($note) { $verification.adminNote = $note }
    return [pscustomobject]@{ message = "Verification request $($verification.certificate) has been reviewed."; email = [pscustomobject]@{ status = "skipped"; error = "No email address is attached to certificate verification requests."; to = "" } }
  }

  throw "Unsupported admin action."
}

function Handle-Api {
  param($Request, [IO.Stream]$Stream)

  $route = $Request.Path -replace "^/api", ""
  if (-not $route) { $route = "/" }

  if ($Request.Method -eq "OPTIONS") {
    Send-Json -Stream $Stream -StatusCode 200 -Body @{ ok = $true }
    return
  }

  if ($route -eq "/health" -and $Request.Method -eq "GET") {
    Send-Json -Stream $Stream -StatusCode 200 -Body @{ ok = $true; service = "Philotimo College local backend" }
    return
  }

  if ($route -eq "/admin/login" -and $Request.Method -eq "POST") {
    $payload = Get-BodyJson -Request $Request
    if ((Clean $payload.adminCode) -ne $adminCode) {
      Send-Json -Stream $Stream -StatusCode 401 -Body @{ message = "Administrator access is required." }
      return
    }
    $token = [guid]::NewGuid().ToString("N")
    $sessions[$token] = (Get-Date).AddHours(8)
    Send-Json -Stream $Stream -StatusCode 200 -Body @{ token = $token; expiresInHours = 8 }
    return
  }

  if ($route -eq "/admin/state" -and $Request.Method -eq "GET") {
    if (-not (Test-Admin -Request $Request)) {
      Send-Json -Stream $Stream -StatusCode 401 -Body @{ message = "Administrator access is required." }
      return
    }
    Send-Json -Stream $Stream -StatusCode 200 -Body (Read-State)
    return
  }

  if ($route -eq "/admin/action" -and $Request.Method -eq "POST") {
    if (-not (Test-Admin -Request $Request)) {
      Send-Json -Stream $Stream -StatusCode 401 -Body @{ message = "Administrator access is required." }
      return
    }
    $payload = Get-BodyJson -Request $Request
    $state = Read-State
    $result = Invoke-AdminAction -State $state -Payload $payload
    $saved = Write-State -State $state
    Send-Json -Stream $Stream -StatusCode 200 -Body @{ message = $result.message; email = $result.email; state = $saved }
    return
  }

  if ($Request.Method -ne "POST") {
    Send-Json -Stream $Stream -StatusCode 405 -Body @{ message = "Method not allowed." }
    return
  }

  $state = Read-State
  $payload = Get-BodyJson -Request $Request

  switch ($route) {
    "/applications" {
      Require-Fields -Payload $payload -Fields @("fullName", "phone", "email", "state", "programme", "level", "qualification")
      $reference = New-Reference
      $record = New-Record @{
        reference = $reference
        matricNumber = ""
        fullName = Clean $payload.fullName
        phone = Clean $payload.phone
        email = Clean $payload.email
        state = Clean $payload.state
        programme = Clean $payload.programme
        level = Clean $payload.level
        qualification = Clean $payload.qualification
        status = "pending"
        admissionStatus = "Received for admissions screening"
        screeningStatus = "Awaiting review"
        paymentStatus = "pending"
        adminNote = ""
        tempPassword = Get-SurnamePassword -FullName (Clean $payload.fullName)
      }
      $state.applications = @($record) + @($state.applications)
      Write-State -State $state | Out-Null
      Send-Json -Stream $Stream -StatusCode 201 -Body @{
        message = "Application submitted. Reference: $($record.reference). Portal password: $($record.tempPassword)."
        record = Public-Application -Application $record
        tempPassword = $record.tempPassword
      }
    }
    "/admission-status" {
      Require-Fields -Payload $payload -Fields @("reference")
      $application = Find-ApplicationByReference -State $state -Reference (Clean $payload.reference)
      if (-not $application) {
        Send-Json -Stream $Stream -StatusCode 404 -Body @{ message = "Application reference was not found." }
        return
      }
      Send-Json -Stream $Stream -StatusCode 200 -Body @{ record = Public-Application -Application $application }
    }
    "/student/login" {
      Require-Fields -Payload $payload -Fields @("studentId", "password")
      $application = Find-ApplicationByReference -State $state -Reference (Clean $payload.studentId)
      if (-not $application -or (Clean $payload.password).ToUpperInvariant() -ne (Clean $application.tempPassword).ToUpperInvariant()) {
        Send-Json -Stream $Stream -StatusCode 401 -Body @{ message = "Invalid portal details." }
        return
      }
      Send-Json -Stream $Stream -StatusCode 200 -Body @{ message = "Portal access confirmed."; record = Public-Application -Application $application }
    }
    "/contacts" {
      Require-Fields -Payload $payload -Fields @("name", "email", "message")
      $record = New-Record @{ name = Clean $payload.name; email = Clean $payload.email; message = Clean $payload.message; status = "new"; adminNote = "" }
      $state.contacts = @($record) + @($state.contacts)
      Write-State -State $state | Out-Null
      Send-Json -Stream $Stream -StatusCode 201 -Body @{ message = "Thank you, $($record.name). Your enquiry has been saved for the admissions office."; record = $record }
    }
    "/certificate-verifications" {
      Require-Fields -Payload $payload -Fields @("certificate")
      $record = New-Record @{ certificate = Clean $payload.certificate; status = "pending"; adminNote = "" }
      $state.verifications = @($record) + @($state.verifications)
      Write-State -State $state | Out-Null
      Send-Json -Stream $Stream -StatusCode 201 -Body @{ message = "Verification request received. The administrator will review it."; record = $record }
    }
    "/biodata-pin-requests" {
      Require-Fields -Payload $payload -Fields @("fullName", "studentId", "email", "phone", "programme", "semester", "amountPaid", "paymentReference", "paymentDate", "proofFileName", "proofFileType", "proofDataUrl")
      $record = New-Record @{
        fullName = Clean $payload.fullName
        studentId = Clean $payload.studentId
        email = Clean $payload.email
        phone = Clean $payload.phone
        programme = Clean $payload.programme
        semester = Clean $payload.semester
        amountPaid = Clean $payload.amountPaid
        paymentReference = Clean $payload.paymentReference
        paymentDate = Clean $payload.paymentDate
        proofFileName = Clean $payload.proofFileName
        proofFileType = Clean $payload.proofFileType
        proofFileSize = Clean $payload.proofFileSize
        proofDataUrl = Clean $payload.proofDataUrl
        status = "pending"
        pin = ""
        issuedAt = ""
        linkedRegistrationId = ""
      }
      $state.pinRequests = @($record) + @($state.pinRequests)
      Write-State -State $state | Out-Null
      Send-Json -Stream $Stream -StatusCode 201 -Body @{ message = "$($record.fullName), your e-biodata PIN payment request has been submitted for admin verification."; record = $record }
    }
    "/course-registrations" {
      Require-Fields -Payload $payload -Fields @("pin", "studentId", "email", "programme", "semester")
      $courses = @($payload.courses)
      if (-not $courses.Count) { throw "Please select at least one course before registration." }

      $pinRequest = Find-PinRequestByPin -State $state -Pin (Clean $payload.pin)
      if (-not $pinRequest) { throw "The e-biodata PIN was not found." }
      if ($pinRequest.status -ne "issued") { throw "This e-biodata PIN has not been issued for course registration." }
      if (Clean $pinRequest.linkedRegistrationId) { throw "This e-biodata PIN has already been used for course registration." }

      if ((Clean $pinRequest.studentId).ToUpperInvariant() -ne (Clean $payload.studentId).ToUpperInvariant()) {
        throw "This e-biodata PIN does not match the supplied student ID."
      }
      if ((Clean $pinRequest.programme) -ne (Clean $payload.programme) -or (Clean $pinRequest.semester) -ne (Clean $payload.semester)) {
        throw "This e-biodata PIN does not match the selected department and semester."
      }

      $cleanCourses = @($courses | ForEach-Object {
        [pscustomobject]@{
          code = Clean $_.code
          title = Clean $_.title
          unit = Clean $_.unit
        }
      })
      $totalUnits = 0
      foreach ($course in $cleanCourses) {
        $unitValue = 0
        [int]::TryParse((Clean $course.unit), [ref]$unitValue) | Out-Null
        $totalUnits += $unitValue
      }

      $record = New-Record @{
        registrationReference = New-CourseRegistrationReference -State $state
        pinRequestId = $pinRequest.id
        pin = Clean $payload.pin
        fullName = Clean $pinRequest.fullName
        studentId = Clean $payload.studentId
        email = Clean $payload.email
        programme = Clean $payload.programme
        semester = Clean $payload.semester
        courses = $cleanCourses
        totalUnits = $totalUnits
        status = "submitted"
        reviewedAt = ""
      }
      $state.courseRegistrations = @($record) + @($state.courseRegistrations)
      $pinRequest.linkedRegistrationId = $record.id
      Write-State -State $state | Out-Null
      Send-Json -Stream $Stream -StatusCode 201 -Body @{ message = "$($record.fullName), your semester course registration has been submitted for departmental review."; record = $record }
    }
    default {
      Send-Json -Stream $Stream -StatusCode 404 -Body @{ message = "API route not found." }
    }
  }
}

function Serve-Static {
  param($Request, [IO.Stream]$Stream)

  if ($Request.Method -notin @("GET", "HEAD")) {
    Send-Text -Stream $Stream -StatusCode 405 -Text "Method not allowed"
    return
  }

  $path = $Request.Path.TrimStart("/")
  if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }
  $path = $path -replace "/", [IO.Path]::DirectorySeparatorChar
  $target = [IO.Path]::GetFullPath((Join-Path $root $path))

  if (-not $target.StartsWith($root, [StringComparison]::OrdinalIgnoreCase)) {
    Send-Text -Stream $Stream -StatusCode 403 -Text "Forbidden"
  } elseif (Test-Path -LiteralPath $target -PathType Leaf) {
    $body = [IO.File]::ReadAllBytes($target)
    Write-HttpResponse -Stream $Stream -StatusCode 200 -ContentType (Get-MimeType -Path $target) -Body $body -HeadOnly:($Request.Method -eq "HEAD")
  } else {
    Send-Text -Stream $Stream -StatusCode 404 -Text "File not found"
  }
}

$server.Start()
Write-Host "Philotimo College local site running at http://localhost:$Port/"
Write-Host "Admin code: $adminCode"
Write-Host "Local data: $DataPath"
Write-Host "Serving $root"

try {
  while ($true) {
    $client = $server.AcceptTcpClient()
    $client.ReceiveTimeout = 3000
    $client.SendTimeout = 3000
    try {
      $stream = $client.GetStream()
      $request = Read-HttpRequest -Stream $stream
      if (-not $request) { continue }

      if ($request.Path.StartsWith("/api")) {
        Handle-Api -Request $request -Stream $stream
      } else {
        Serve-Static -Request $request -Stream $stream
      }
    } catch {
      if ($stream) { Send-Json -Stream $stream -StatusCode 400 -Body @{ message = $_.Exception.Message } }
    } finally {
      $client.Close()
    }
  }
} finally {
  $server.Stop()
}
