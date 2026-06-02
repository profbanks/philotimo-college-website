# Running The Philotimo College Site Locally

This repository can run on localhost without Netlify.

## Start The College Website

In this shared workspace, the college GitHub files are stored locally in:

```text
college-export
```

From the workspace folder, run:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\local-college-server.ps1
```

Then open:

```text
http://localhost:4181/
```

## GitHub

The college website repository is:

```text
https://github.com/profbanks/philotimo-college-website
```

The existing Netlify deployment can remain online, but this local version does not depend on Netlify.

## Local Backend And Admin

The localhost server also provides the college backend API for:

- course applications and admission status checks
- student portal login using application reference/matric number
- administrator approval, rejection, payment tracking, and enrolment
- contact enquiries and certificate verification requests

Default local admin code:

```text
PHILOTIMO-COLLEGE-ADMIN
```

Local records are stored on this computer at:

```text
college-export\data\local-college-state.json
```
