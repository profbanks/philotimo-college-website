# Running The Philotimo College Site Locally

This repository can run on localhost without Netlify.

## Start The College Website

The college GitHub files are stored locally in:

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
