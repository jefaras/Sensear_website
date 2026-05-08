# Static PHP forms deployment notes

These files support the static export forms on Plesk/LiteSpeed:

- `public/contact.php` → handles contact form submissions.
- `public/newsletter.php` → handles newsletter subscriptions.
- `public/form-lib.php` → shared validation, reCAPTCHA verification, email templates, and SMTP sending.
- `public/form-config.example.php` → copy to `form-config.php` on the server and fill in real secrets.

## Server setup

After uploading the rebuilt `out/` contents to `test.sensear.music`, copy:

```text
form-config.example.php
```

to:

```text
form-config.php
```

inside the test subdomain document root.

Then edit `form-config.php` in Plesk File Manager and set:

- SMTP password
- reCAPTCHA secret key
- SMTP encryption mode if needed: `none`, `starttls`, or `ssl`
- recipient list

Do not commit or publicly share the real `form-config.php` file.

## reCAPTCHA requirement

The Google reCAPTCHA v3 key must allow the hostname:

```text
test.sensear.music
```

If the Google reCAPTCHA admin console only allows `sensear.music`, submissions from the test subdomain will fail before email sending.

## Rebuild and package

Run from the project root on `static-export-test`:

```powershell
npm run build
if (Test-Path static-export-test.zip) { Remove-Item static-export-test.zip -Force }
tar.exe -a -cf static-export-test.zip -C out .
```

Upload the new ZIP to the Plesk document root for `test.sensear.music`, extract it, then create/edit `form-config.php` there.
