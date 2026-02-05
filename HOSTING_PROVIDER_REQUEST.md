# 📧 Quick Reference: What to Ask Your Hosting Provider

## Copy This Message to Your Hosting Provider:

---

**Subject:** SMTP Configuration Request for sensear.music

Hello,

I need SMTP credentials to send emails from my website contact form.

**Please provide:**

1. **SMTP Server Hostname** (e.g., mail.sensear.music or smtp.sensear.music)
2. **SMTP Port Number** (e.g., 587, 465, or 25)
3. **SMTP Username** (for hello@sensear.music)
4. **SMTP Password** (for hello@sensear.music)
5. **Encryption Type** (TLS, SSL, or none)
6. **Daily/Hourly Sending Limits** (if any)
7. **IP Whitelisting Requirements** (if any)

**Email Configuration:**
- Sending FROM: hello@sensear.music
- Sending TO: hello@sensear.music
- Purpose: Contact form submissions from website

Thank you!

---

## Common SMTP Configurations by Provider:

### cPanel/WHM Hosting
```
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=hello@sensear.music
SMTP_PASSWORD=[your email password]
SMTP_SECURE=false
```

### Plesk Hosting
```
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=465
SMTP_USER=hello@sensear.music
SMTP_PASSWORD=[your email password]
SMTP_SECURE=true
```

### Generic Hosting
```
SMTP_HOST=mail.sensear.music
SMTP_PORT=587
SMTP_USER=hello@sensear.music
SMTP_PASSWORD=[your email password]
SMTP_SECURE=false
```

---

## ✅ Checklist Before Going Live:

- [ ] Get SMTP credentials from hosting provider
- [ ] Update `.env.local` with real credentials
- [ ] Test contact form locally
- [ ] Verify email arrives in inbox
- [ ] Add environment variables to production hosting dashboard
- [ ] Deploy to production
- [ ] Test contact form on live site
- [ ] Check spam folder if emails don't arrive
- [ ] Ask hosting provider to configure SPF/DKIM records

---

## 🚀 Ready to Deploy?

Once you have SMTP credentials:
1. Update `.env.local` file
2. Add same variables to your hosting dashboard (Vercel/Netlify/etc.)
3. Deploy your site
4. Test the contact form!

**No database needed - emails go straight to your inbox!** 📬
