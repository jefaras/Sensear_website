module.exports = [
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/lib/email.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateContactEmailHTML",
    ()=>generateContactEmailHTML,
    "generateNewsletterEmailHTML",
    ()=>generateNewsletterEmailHTML,
    "sendEmail",
    ()=>sendEmail,
    "verifyEmailConnection",
    ()=>verifyEmailConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
;
// Clean the SMTP host from environment variables to prevent EBADNAME and HTTP prefix errors
let smtpHost = (process.env.SMTP_HOST || '').replace(/^https?:\/\//i, '').trim();
// Automatically correct the host if the user accidentally put the base domain instead of the mail server
if (smtpHost === 'sensear.music' || !smtpHost) {
    smtpHost = 'mail.sensear.music';
}
// Create reusable transporter using SMTP
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
    host: smtpHost,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    ignoreTLS: process.env.SMTP_SECURE !== 'true',
    name: 'sensear.music',
    tls: {
        rejectUnauthorized: false // Bypass SSL host mismatch since the host cert only covers sensear.music, not mail.sensear.music
    },
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});
async function verifyEmailConnection() {
    try {
        await transporter.verify();
        console.log('Success! SMTP Server is ready to send emails');
        return true;
    } catch (error) {
        console.error('Error! SMTP Server connection failed:', error);
        return false;
    }
}
async function sendEmail({ to, subject, html, text }) {
    try {
        // Ensure we only use the first email address for the 'from' field if a list is provided
        const fromEmail = (process.env.SMTP_FROM || '').split(',')[0].trim();
        const info = await transporter.sendMail({
            from: `"${process.env.COMPANY_NAME || 'SensEar'}" <${fromEmail}>`,
            to,
            subject,
            html,
            text: text || html.replace(/<[^>]*>/g, '')
        });
        console.log('Success! Email sent successfully:', info.messageId);
        return {
            success: true,
            messageId: info.messageId
        };
    } catch (error) {
        console.error('Error! Email sending failed:', error);
        return {
            success: false,
            error
        };
    }
}
function generateContactEmailHTML(data) {
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
                <div class="field-value">${data.name} ${data.surname}</div>
            </div>
            
            ${data.business_name ? `
            <div class="field">
                <div class="field-label">💼 Business Name:</div>
                <div class="field-value">${data.business_name}</div>
            </div>
            ` : ''}
            
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
            <p>Received at: ${new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Athens'
    })} (Athens Time)</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}
function generateNewsletterEmailHTML(data) {
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
            <p>Received at: ${new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Athens'
    })} (Athens Time)</p>
        </div>
    </div>
</body>
</html>
    `.trim();
}
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d95e467e282307a7308d2e55eb8d0d5c9a0d04d8":"submitContactForm","40df08ee095886368fb9400a0d42a79e1be75ed6bc":"submitNewsletterForm"},"",""] */ __turbopack_context__.s([
    "submitContactForm",
    ()=>submitContactForm,
    "submitNewsletterForm",
    ()=>submitNewsletterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function verifyTurnstileToken(token) {
    if (!token) return false;
    if (!process.env.TURNSTILE_SECRET_KEY) {
        console.warn("TURNSTILE_SECRET_KEY is missing, bypassing security check for development");
        return true;
    }
    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: token
            })
        });
        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error("Turnstile verification error:", error);
        return false;
    }
}
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name must be at least 2 characters"),
    surname: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Surname must be at least 2 characters"),
    business_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>val.replace(/\D/g, '').length === 10, "Phone number must contain exactly 10 digits"),
    country_code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    venue_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Please select a venue type"),
    service_interest: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Please select a service interest"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Message must be at least 10 characters")
});
const newsletterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address"),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
async function submitContactForm(formData) {
    // Verify turnstile token first
    const token = formData.get("cf-turnstile-response")?.toString() || null;
    const isValidToken = await verifyTurnstileToken(token);
    if (!isValidToken) {
        return {
            errors: {
                _form: [
                    "Security verification failed. Please try again."
                ]
            }
        };
    }
    // Validate form data
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        surname: formData.get("surname"),
        business_name: formData.get("business_name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        country_code: formData.get("country_code"),
        venue_type: formData.get("venue_type"),
        service_interest: formData.get("service_interest"),
        message: formData.get("message")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    const data = validatedFields.data;
    // Generate email HTML
    const emailHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateContactEmailHTML"])({
        ...data,
        phone: data.country_code ? `${data.country_code} ${data.phone}` : data.phone
    });
    // Send email to all recipients
    const recipients = process.env.SMTP_TO ? process.env.SMTP_TO.split(',').map((e)=>e.trim()) : [
        "jefaraz@gmail.com",
        "info@sensear.music"
    ];
    const emailResults = await Promise.all(recipients.map((recipient)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])({
            to: recipient,
            subject: `[SensEar] New Contact Form Submission from ${data.name}`,
            html: emailHTML
        })));
    // Check if all emails were sent successfully
    const failedEmails = emailResults.filter((result)=>!result.success);
    if (failedEmails.length > 0) {
        console.error("Failed to send some contact form emails:", failedEmails);
        return {
            errors: {
                _form: [
                    `Failed to send email. Server Error: ${String(failedEmails[0].error?.message || failedEmails[0].error)}`
                ]
            }
        };
    }
    console.log("Success! Contact form submitted and emails sent:", data.name, data.email);
    // Return success
    return {
        success: true
    };
}
async function submitNewsletterForm(formData) {
    // Verify turnstile token first
    const token = formData.get("cf-turnstile-response")?.toString() || null;
    const isValidToken = await verifyTurnstileToken(token);
    if (!isValidToken) {
        return {
            errors: {
                _form: [
                    "Security verification failed. Please try again."
                ]
            }
        };
    }
    // Validate form data
    const validatedFields = newsletterSchema.safeParse({
        email: formData.get("email"),
        source: formData.get("source")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    const data = validatedFields.data;
    // Generate email HTML
    const emailHTML = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNewsletterEmailHTML"])({
        email: data.email,
        source: data.source || "Website"
    });
    // Send email to both recipients
    const recipients = [
        "jefaraz@gmail.com",
        "info@sensear.music"
    ];
    const emailResults = await Promise.all(recipients.map((recipient)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])({
            to: recipient,
            subject: `[SensEar] New Newsletter Subscription from ${data.email}`,
            html: emailHTML
        })));
    // Check if all emails were sent successfully
    const failedEmails = emailResults.filter((result)=>!result.success);
    if (failedEmails.length > 0) {
        console.error("Failed to send some newsletter emails:", failedEmails);
        return {
            errors: {
                _form: [
                    `Failed to subscribe. Server Error: ${String(failedEmails[0].error?.message || failedEmails[0].error)}`
                ]
            }
        };
    }
    console.log("Success! Newsletter subscription submitted and emails sent:", data.email);
    // Return success
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContactForm,
    submitNewsletterForm
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContactForm, "40d95e467e282307a7308d2e55eb8d0d5c9a0d04d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitNewsletterForm, "40df08ee095886368fb9400a0d42a79e1be75ed6bc", null);
}),
"[project]/.next-internal/server/app/[lang]/case-studies/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/[lang]/case-studies/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40df08ee095886368fb9400a0d42a79e1be75ed6bc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitNewsletterForm"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$lang$5d2f$case$2d$studies$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[lang]/case-studies/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1582d2fc._.js.map