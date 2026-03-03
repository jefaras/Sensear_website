"use server";

import { z } from "zod";
import { sendEmail, generateContactEmailHTML, generateNewsletterEmailHTML } from "@/lib/email";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    surname: z.string().min(2, "Surname must be at least 2 characters"),
    business_name: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(6, "Phone number is required"),
    venue_type: z.string().min(1, "Please select a venue type"),
    service_interest: z.string().min(1, "Please select a service interest"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const newsletterSchema = z.object({
    email: z.string().email("Invalid email address"),
    source: z.string().optional(),
});

export async function submitContactForm(formData: FormData) {
    // Validate form data
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        surname: formData.get("surname"),
        business_name: formData.get("business_name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
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
    const emailHTML = generateContactEmailHTML(data);

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
