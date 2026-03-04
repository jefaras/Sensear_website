import { getDictionary } from "@/lib/dictionary";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import type { Locale } from "@/lib/i18n";
import React from "react";

export default async function TestFormsPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-[#faebe3] min-h-screen py-32">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-black mb-12 text-center">
                    Forms Test Page ({lang.toUpperCase()})
                </h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form Test */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h2 className="text-2xl font-bold text-black mb-6 border-b pb-4">
                            Contact Form
                        </h2>
                        <ContactForm labels={dict.contact.form} />
                    </div>

                    {/* Newsletter Form Test */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        <h2 className="text-2xl font-bold text-black mb-6 border-b pb-4">
                            Newsletter Form
                        </h2>
                        <div className="bg-black/5 p-8 rounded-xl">
                            <NewsletterForm
                                placeholder={dict.footer.newsletter.placeholder}
                                buttonText={dict.footer.newsletter.button}
                                variant="cta"
                            />
                        </div>
                        <div className="mt-8 bg-black p-8 rounded-xl">
                            <h3 className="text-white mb-4">Footer Variant Test:</h3>
                            <NewsletterForm
                                placeholder={dict.footer.newsletter.placeholder}
                                buttonText={dict.footer.newsletter.button}
                                variant="footer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
