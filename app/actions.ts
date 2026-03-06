"use server";

import { z } from "zod";
import { sendEmail, generateContactEmailHTML, generateNewsletterEmailHTML } from "@/lib/email";

async function verifyRecaptchaToken(token: string | null): Promise<true | string> {
    if (!token) return "Missing token from client.";

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.warn("RECAPTCHA_SECRET_KEY is missing, bypassing security check for development");
        return true;
    }

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();
        if (data.success && data.score >= 0.5) {
            return true;
        }

        // Return exactly what Google is upset about
        if (data["error-codes"]) {
            return `Google reCAPTCHA Rejected: ${data["error-codes"].join(", ")}`;
        } else if (data.success === true && data.score < 0.5) {
            return `Google reCAPTCHA Rejected: Score too low (${data.score})`;
        }

        return `Google reCAPTCHA Rejected: Unknown reason`;

    } catch (error: any) {
        console.error("reCAPTCHA verification error:", error);
        return `reCAPTCHA Server Fetch Error: ${error?.message || "Unknown error"}`;
    }
}

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    surname: z.string().min(2, "Surname must be at least 2 characters"),
    business_name: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine(val => val.replace(/\D/g, '').length === 10, "Phone number must contain exactly 10 digits"),
    country_code: z.string().optional(),
    venue_type: z.string().min(1, "Please select a venue type"),
    service_interest: z.string().min(1, "Please select a service interest"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const newsletterSchema = z.object({
    email: z.string().email("Invalid email address"),
    source: z.string().optional(),
});

export async function submitContactForm(formData: FormData) {
    // Verify reCAPTCHA token
    const token = formData.get("g-recaptcha-response")?.toString() || null;
    const verifyResult = await verifyRecaptchaToken(token);

    if (verifyResult !== true) {
        return {
            errors: {
                _form: [`${verifyResult}`],
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
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const data = validatedFields.data;

    // Generate email HTML
    const emailHTML = generateContactEmailHTML({
        ...data,
        phone: data.country_code ? `${data.country_code} ${data.phone}` : data.phone
    });

    // Send email to all recipients
    const recipients = process.env.SMTP_TO ? process.env.SMTP_TO.split(',').map(e => e.trim()) : ["jefaraz@gmail.com", "info@sensear.music"];

    const emailResults = await Promise.all(
        recipients.map(recipient =>
            sendEmail({
                to: recipient,
                subject: `[SensEar] New Contact Form Submission from ${data.name}`,
                html: emailHTML,
            })
        )
    );

    // Check if all emails were sent successfully
    const failedEmails = emailResults.filter(result => !result.success);
    if (failedEmails.length > 0) {
        console.error("Failed to send some contact form emails:", failedEmails);
        return {
            errors: {
                _form: [`Failed to send email. Server Error: ${String((failedEmails[0].error as any)?.message || failedEmails[0].error)}`],
            },
        };
    }

    console.log("Success! Contact form submitted and emails sent:", data.name, data.email);

    // Return success
    return {
        success: true,
    };
}

export async function submitNewsletterForm(formData: FormData) {
    // Verify reCAPTCHA token
    const token = formData.get("g-recaptcha-response")?.toString() || null;

    // TEMPORARY BYPASS FOR NEWSLETTER (IF NEEDED LATER, NOT ACTIVE NOW)
    const verifyResult = await verifyRecaptchaToken(token);

    if (verifyResult !== true) {
        return {
            errors: {
                _form: [`${verifyResult}`],
            }
        };
    }

    // Validate form data
    const validatedFields = newsletterSchema.safeParse({
        email: formData.get("email"),
        source: formData.get("source"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const data = validatedFields.data;

    // Generate email HTML
    const emailHTML = generateNewsletterEmailHTML({
        email: data.email,
        source: data.source || "Website",
    });

    // Send email to both recipients
    const recipients = ["jefaraz@gmail.com", "info@sensear.music"];

    const emailResults = await Promise.all(
        recipients.map(recipient =>
            sendEmail({
                to: recipient,
                subject: `[SensEar] New Newsletter Subscription from ${data.email}`,
                html: emailHTML,
            })
        )
    );

    // Check if all emails were sent successfully
    const failedEmails = emailResults.filter(result => !result.success);
    if (failedEmails.length > 0) {
        console.error("Failed to send some newsletter emails:", failedEmails);
        return {
            errors: {
                _form: [`Failed to subscribe. Server Error: ${String((failedEmails[0].error as any)?.message || failedEmails[0].error)}`],
            },
        };
    }

    console.log("Success! Newsletter subscription submitted and emails sent:", data.email);

    // Return success
    return {
        success: true,
    };
}
