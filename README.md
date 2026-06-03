# PHILOTIMO College Website

Website and localhost backend for PHILOTIMO College of Health Sciences and Information Technology.

## Local Admin

Run the local server from the project root:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\local-college-server.ps1
```

Open:

```text
http://localhost:4181/
```

Admin desk:

```text
http://localhost:4181/?admin=1#admin
```

Default local admin code:

```text
PHILOTIMO-COLLEGE-ADMIN
```

The local backend stores applications, contact enquiries, verification requests, e-biodata PIN requests, and semester course registrations in:

```text
data\local-college-state.json
```

## Email Notifications

Admin actions create email notices for applicants immediately. To send real emails from localhost, set SMTP environment variables before starting `local-college-server.ps1`:

```powershell
$env:SMTP_HOST = "smtp.example.com"
$env:SMTP_PORT = "587"
$env:SMTP_USERNAME = "your-smtp-username"
$env:SMTP_PASSWORD = "your-smtp-password"
$env:SMTP_FROM = "admissions@yourdomain.com"
$env:SMTP_FROM_NAME = "PHILOTIMO College Admissions"
```

If SMTP is not configured, the notice is saved locally and the admin dashboard reports that email delivery is not configured yet.

## E-Biodata PIN And Course Registration

Students submit proof of payment for an e-biodata PIN from:

```text
http://localhost:4181/#course-registration
```

The administrator verifies the payment in the hidden admin desk and issues a PIN. The student then uses that PIN to register the courses loaded for the selected department and semester. Each PIN is tied to one student ID, programme, and semester, and can only be used once.

The public course lists are prepared from NBTE/professional-body curriculum planning references and should be reviewed by academic officers before official registration windows open.
