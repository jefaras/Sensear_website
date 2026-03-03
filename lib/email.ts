import nodemailer from 'nodemailer';

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

// Clean the SMTP host from environment variables to prevent EBADNAME and HTTP prefix errors
let smtpHost = (process.env.SMTP_HOST || '').replace(/^https?:\/\//i, '').trim();

// Automatically correct the host if the user accidentally put the base domain instead of the mail server
if (smtpHost === 'sensear.music' || !smtpHost) {
    smtpHost = 'mail.sensear.music';
}

// Create reusable transporter using SMTP
const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    ignoreTLS: process.env.SMTP_SECURE !== 'true', // completely disable STARTTLS if secure is false
    name: 'sensear.music', // Explicitly set EHLO domain to prevent local hostname defaults
    tls: {
        rejectUnauthorized: false // Bypass SSL host mismatch since the host cert only covers sensear.music, not mail.sensear.music
    },
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    }
});

// Verify transporter configuration
export async function verifyEmailConnection() {
    try {
        await transporter.verify();
        console.log('Success! SMTP Server is ready to send emails');
        return true;
    } catch (error) {
        console.error('Error! SMTP Server connection failed:', error);
        return false;
    }
}

// Send email function
export async function sendEmail({ to, subject, html, text }: EmailOptions) {
    try {
        // Ensure we only use the first email address for the 'from' field if a list is provided
        const fromEmail = (process.env.SMTP_FROM || '').split(',')[0].trim();

        const info = await transporter.sendMail({
            from: `"${process.env.COMPANY_NAME || 'SensEar'}" <${fromEmail}>`,
            to,
            subject,
            html,
            text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
        });

        console.log('Success! Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error! Email sending failed:', error);
        return { success: false, error };
    }
}

// Generate contact form email HTML template
export function generateContactEmailHTML(data: {
    name: string;
    email: string;
    phone?: string;
    venue_type: string;
    service_interest: string;
    message: string;
}) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 8px; margin-top: 20px; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: bold; color: #000; margin-bottom: 5px; }
        .field-value { color: #555; }
        .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SENSEAR</h1>
            <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">👤 Name:</div>
                <div class="field-value">${data.name}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            ${data.phone ? `
            <div class="field">
                <div class="field-label">📱 Phone:</div>
                <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            ` : ''}
            
            <div class="field">
                <div class="field-label">🏢 Venue Type:</div>
                <div class="field-value">${data.venue_type}</div>
            </div>
            
            <div class="field">
                <div class="field-label">🎯 Service Interest:</div>
                <div class="field-value">${data.service_interest}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the SensEar contact form</p>
            <p>Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Athens' })} (Athens Time)</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}

// Generate newsletter subscription email HTML template
export function generateNewsletterEmailHTML(data: {
    email: string;
    source: string;
}) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 8px; margin-top: 20px; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: bold; color: #000; margin-bottom: 5px; }
        .field-value { color: #555; }
        .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SENSEAR</h1>
            <p>New Newsletter Subscription</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">📧 Subscriber Email:</div>
                <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            <div class="field">
                <div class="field-label">📍 Subscription Source:</div>
                <div class="field-value">${data.source}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the SensEar newsletter subscription form</p>
            <p>Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Athens' })} (Athens Time)</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}
