"use server";

import { z } from "zod";
import { sendEmail, generateContactEmailHTML, generateNewsletterEmailHTML } from "@/lib/email";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
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

    // Send email via SMTP
    const emailResult = await sendEmail({
        to: process.env.SMTP_TO || "hello@sensear.music",
        subject: `🎵 New Contact Form Submission from ${data.name}`,
        html: emailHTML,
    });

    // Check if email was sent successfully
    if (!emailResult.success) {
        console.error("Failed to send email:", emailResult.error);
        return {
            errors: {
                _form: ["Failed to send email. Please try again or contact us directly at hello@sensear.music"],
            },
        };
    }

    console.log("✅ Contact form submitted and email sent:", data.name, data.email);

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
                subject: `🎵 New Newsletter Subscription from ${data.email}`,
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
                _form: ["Failed to subscribe. Please try again or contact us directly."],
            },
        };
    }

    console.log("✅ Newsletter subscription submitted and emails sent:", data.email);

    // Return success
    return {
        success: true,
    };
}
