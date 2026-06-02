param(
  [int]$Port = 4181,
  [string]$RootPath = $(if (Test-Path -LiteralPath (Join-Path $PSScriptRoot "college-export")) { Join-Path $PSScriptRoot "college-export" } else { $PSScriptRoot })
)

$ErrorActionPreference = "Stop"

$root = (Resolve-Path -LiteralPath $RootPath).Path
$server = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $Port)

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

  return [pscustomobject]@{
    Method = $parts[0]
    Path = ([Uri]::UnescapeDataString($parts[1].Split("?")[0]))
    Headers = $headers
  }
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
    403 { "Forbidden" }
    404 { "Not Found" }
    405 { "Method Not Allowed" }
    500 { "Internal Server Error" }
    default { "OK" }
  }
  $header = "HTTP/1.1 $StatusCode $statusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [Text.Encoding]::UTF8.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if (-not $HeadOnly) { $Stream.Write($Body, 0, $Body.Length) }
}

function Send-Text {
  param([IO.Stream]$Stream, [int]$StatusCode, [string]$Text)

  $bytes = [Text.Encoding]::UTF8.GetBytes($Text)
  Write-HttpResponse -Stream $Stream -StatusCode $StatusCode -ContentType "text/plain; charset=utf-8" -Body $bytes
}

$server.Start()
Write-Host "Philotimo College site running at http://localhost:$Port/"
Write-Host "Serving $root"

try {
  while ($true) {
    $client = $server.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $request = Read-HttpRequest -Stream $stream
      if (-not $request) { continue }

      if ($request.Method -notin @("GET", "HEAD")) {
        Send-Text -Stream $stream -StatusCode 405 -Text "Method not allowed"
        continue
      }

      $path = $request.Path.TrimStart("/")
      if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }
      $path = $path -replace "/", [IO.Path]::DirectorySeparatorChar
      $target = [IO.Path]::GetFullPath((Join-Path $root $path))

      if (-not $target.StartsWith($root, [StringComparison]::OrdinalIgnoreCase)) {
        Send-Text -Stream $stream -StatusCode 403 -Text "Forbidden"
      } elseif (Test-Path -LiteralPath $target -PathType Leaf) {
        $body = [IO.File]::ReadAllBytes($target)
        Write-HttpResponse -Stream $stream -StatusCode 200 -ContentType (Get-MimeType -Path $target) -Body $body -HeadOnly:($request.Method -eq "HEAD")
      } else {
        Send-Text -Stream $stream -StatusCode 404 -Text "File not found"
      }
    } catch {
      if ($stream) { Send-Text -Stream $stream -StatusCode 500 -Text $_.Exception.Message }
    } finally {
      $client.Close()
    }
  }
} finally {
  $server.Stop()
}
