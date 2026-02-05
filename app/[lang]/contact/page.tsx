import { getDictionary } from "@/lib/dictionary";
import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n";
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.contact.meta.title,
        description: dict.contact.meta.description,
    };
}

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="bg-[#faebe3]">
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: `url('${dict.contact.hero.background_image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="w-full px-6 md:px-12 lg:px-16 container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1]">
                                {dict.contact.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                {dict.contact.hero.subtitle}
                            </p>
                        </div>

                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%] overflow-hidden rounded-2xl shadow-2xl">
                                <div className="relative aspect-square">
                                    <img
                                        src={dict.contact.hero.image}
                                        alt={dict.contact.hero.image_alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#faebe3]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6">
                            {dict.contact.intro.title}
                        </h2>
                        <p className="text-xl text-black/60 font-medium mb-12">
                            {dict.contact.intro.subtitle}
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-xl">
                        <h3 className="text-2xl font-bold text-black mb-2">
                            {dict.contact.form.title}
                        </h3>
                        <p className="text-base text-black/60 mb-6">
                            {dict.contact.form.subtitle}
                        </p>

                        <ContactForm labels={dict.contact.form} />
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        {dict.contact.contact_info.title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.contact_info.phone.label}</h3>
                            <p className="text-white text-lg mb-1">{dict.contact.contact_info.phone.value}</p>
                            <p className="text-white/60 text-sm">{dict.contact.contact_info.phone.note}</p>
                        </div>
                        {/* Email */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.contact_info.email.label}</h3>
                            <p className="text-white text-lg mb-1">{dict.contact.contact_info.email.value}</p>
                            <p className="text-white/60 text-sm">{dict.contact.contact_info.email.note}</p>
                        </div>
                        {/* Location */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.contact_info.location.label}</h3>
                            <p className="text-white text-lg mb-1">{dict.contact.contact_info.location.value}</p>
                            <p className="text-white/60 text-sm">{dict.contact.contact_info.location.note}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#faebe3]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-black text-center mb-4">
                        {dict.contact.faq.title}
                    </h2>
                    <p className="text-center text-black/60 mb-12">
                        {dict.contact.faq.subtitle}
                    </p>
                    <div className="space-y-4">
                        {dict.contact.faq.items.map((item: { question: string; answer: string }, index: number) => (
                            <details key={index} className="bg-white rounded-xl shadow-md group">
                                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                    <span className="text-lg font-semibold text-black">{item.question}</span>
                                    <span className="text-2xl text-black/60 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-black/70 leading-relaxed">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href={`/${lang}/faq`}>
                            <button className="group relative bg-black text-white hover:bg-black/80 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2">
                                {dict.contact.faq.read_all_cta}
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
