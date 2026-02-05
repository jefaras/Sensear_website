# 📧 SMTP Email Setup Guide for SensEar Contact Form

## ✅ What Has Been Implemented

Your contact form now sends emails via SMTP (Simple Mail Transfer Protocol) using your hosting provider's mail server. No database is required!

### Files Created/Modified:
1. ✅ `lib/email.ts` - Email utility with Nodemailer configuration
2. ✅ `app/actions.ts` - Updated to send emails instead of logging
3. ✅ `.env.local` - Environment variables for SMTP configuration
4. ✅ `.env.local.example` - Example file for reference
5. ✅ Installed `nodemailer` and `@types/nodemailer`

---

## 🌐 What to Ask Your Web Hosting Provider

When you migrate to the cloud, you need **SMTP credentials** from your hosting provider. Here's exactly what to request:

### Required Information from Hosting Provider:

1. **SMTP Server Hostname**
   - Example: `mail.sensear.music` or `smtp.sensear.music`
   - Question: *"What is the SMTP server hostname for sending emails?"*

2. **SMTP Port Number**
   - Common ports: `587` (TLS), `465` (SSL), or `25` (unencrypted)
   - Question: *"Which SMTP port should I use for sending emails?"*

3. **SMTP Authentication Credentials**
   - Username (usually your full email: `hello@sensear.music`)
   - Password (the email account password)
   - Question: *"What are the SMTP authentication credentials for hello@sensear.music?"*

4. **Encryption Method**
   - TLS (recommended), SSL, or none
   - Question: *"Does your SMTP server use TLS, SSL, or no encryption?"*

5. **Sending Limits** (Optional but important)
   - Question: *"Are there any daily/hourly email sending limits?"*
   - Question: *"Do I need to whitelist any IP addresses or domains?"*

---

## 📋 Email Template for Your Hosting Provider

Copy and send this to your hosting provider:

```
Subject: SMTP Configuration Request for sensear.music

Hello,

I need SMTP server credentials to send emails from my Next.js application hosted on your platform.

Please provide the following information:

1. SMTP Server Hostname (e.g., mail.sensear.music)
2. SMTP Port Number (e.g., 587, 465, or 25)
3. SMTP Username (for hello@sensear.music)
4. SMTP Password (for hello@sensear.music)
5. Encryption Type (TLS, SSL, or none)
6. Any sending limits or restrictions
7. Any IP whitelisting requirements

The emails will be sent from: hello@sensear.music
The emails will be sent to: hello@sensear.music

Thank you!
```

---

## 🔧 How to Configure Once You Get SMTP Credentials

### Step 1: Update `.env.local` file

Replace the placeholder values in `.env.local` with the real credentials from your hosting provider:

```env
SMTP_HOST=mail.sensear.music          # Replace with actual hostname
SMTP_PORT=587                          # Replace with actual port
SMTP_USER=hello@sensear.music         # Replace with actual username
SMTP_PASSWORD=your_actual_password     # Replace with actual password
SMTP_FROM=hello@sensear.music          # Email to send FROM
SMTP_TO=hello@sensear.music            # Email to send TO
SMTP_SECURE=false                      # Set to 'true' if using port 465 (SSL)
COMPANY_NAME=SensEar
```

### Step 2: Deploy to Production

When deploying to your hosting provider (Vercel, Netlify, etc.), add these same environment variables in your hosting dashboard:

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add each variable (SMTP_HOST, SMTP_PORT, etc.)
3. Redeploy your application

**For Other Hosts:**
- Add environment variables in your hosting control panel
- Ensure they're available to your Node.js application

---

## 🧪 Testing Locally

### Step 1: Add Real SMTP Credentials
Edit `.env.local` with credentials from your hosting provider.

### Step 2: Restart Development Server
```bash
npm run dev
```

### Step 3: Test the Contact Form
1. Navigate to `http://localhost:3000/en/contact`
2. Fill out and submit the form
3. Check your email inbox at `hello@sensear.music`

### Step 4: Check Console Logs
Look for these messages:
- ✅ `SMTP Server is ready to send emails` (connection successful)
- ✅ `Email sent successfully: <message-id>` (email sent)
- ❌ `SMTP Server connection failed` (check credentials)

---

## 🔒 Security Best Practices

1. **Never commit `.env.local` to Git** (already in `.gitignore`)
2. **Use strong passwords** for your email account
3. **Enable 2FA** on your email account if possible
4. **Use TLS/SSL encryption** (port 587 or 465)
5. **Rotate passwords regularly**

---

## 🚨 Troubleshooting

### Problem: "SMTP Server connection failed"
**Solution:** 
- Verify SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD are correct
- Check if your hosting provider requires IP whitelisting
- Try different ports (587, 465, 25)

### Problem: "Authentication failed"
**Solution:**
- Ensure SMTP_USER is the full email address
- Verify password is correct (no extra spaces)
- Some providers require "app passwords" instead of regular passwords

### Problem: "Connection timeout"
**Solution:**
- Check firewall settings
- Verify the SMTP port is not blocked
- Contact hosting provider to ensure SMTP is enabled

### Problem: Emails go to spam
**Solution:**
- Ask hosting provider to configure SPF, DKIM, and DMARC records
- Use a professional email address (not Gmail/Yahoo)
- Ensure reverse DNS is properly configured

---

## 📊 What Happens When Someone Submits the Form

1. User fills out contact form on your website
2. Form data is validated (name, email, message, etc.)
3. Beautiful HTML email is generated with all form data
4. Email is sent via SMTP to `hello@sensear.music`
5. User sees success message
6. You receive the email in your inbox!

**No database needed!** ✨

---

## 🎯 Alternative: Third-Party Email Services

If your hosting provider doesn't support SMTP or has strict limits, consider these alternatives:

1. **Resend** (https://resend.com) - Modern, developer-friendly
   - Free tier: 100 emails/day
   - Easy API integration

2. **SendGrid** (https://sendgrid.com) - Enterprise-grade
   - Free tier: 100 emails/day
   - Detailed analytics

3. **Mailgun** (https://mailgun.com) - Reliable and scalable
   - Free tier: 5,000 emails/month

Let me know if you need help integrating any of these!

---

## 📞 Support

If you encounter any issues:
1. Check the console logs for error messages
2. Verify environment variables are set correctly
3. Contact your hosting provider for SMTP support
4. Reach out to me for code-related issues

---

**Created:** 2026-02-02
**Last Updated:** 2026-02-02
