import { getDictionary } from "@/lib/dictionary";
import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import Image from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Instagram, Facebook, Linkedin, ThumbsUp } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "@/components/motion";

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
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('${dict.contact.hero.background_image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <ScrollReveal>
                                <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1]">
                                    {dict.contact.hero.title}
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                    {dict.contact.hero.subtitle}
                                </p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={0.2} className="w-full flex justify-end">
                            <div className="w-full max-w-[740px]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <Image
                                        src={dict.contact.hero.image}
                                        alt={dict.contact.hero.image_alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 740px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#faebe3] relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 w-full">
                        <ScrollReveal>
                            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6 leading-heading">
                                {dict.contact.intro.title}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p className="text-xl text-black/60 font-medium mb-12">
                                {dict.contact.intro.subtitle}
                            </p>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.16}>
                        <div className="relative w-full max-w-xl mx-auto py-24 md:py-32 flex justify-center items-center min-h-[1280px] sm:min-h-[1320px] md:min-h-[1180px] lg:min-h-[1120px]">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center items-center" aria-hidden="true">
                                <Image
                                    src="/images/homepage/vinyl-records-music-curation-optimized.jpg"
                                    alt="Vinyl record background"
                                    width={1060}
                                    height={1060}
                                    sizes="(max-width: 640px) 1080px, (max-width: 1024px) 1120px, 1060px"
                                    loading="eager"
                                    className="object-cover rounded-full select-none w-[1080px] h-[1080px] sm:w-[1120px] sm:h-[1120px] md:w-[1060px] md:h-[1060px] max-w-none"
                                />
                            </div>

                            <StaggerChildren className="relative z-10 w-full px-4 sm:px-8" staggerDelay={0.08}>
                                <div className="space-y-0">
                                    <ContactForm labels={dict.contact.form} variant="vinyl" />
                                </div>
                            </StaggerChildren>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-20 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            {dict.contact.contact_info.title}
                        </h2>
                    </ScrollReveal>
                    <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.contact_info.phone.label}</h3>
                            <div className="flex justify-center mt-3 mb-2">
                                <Image src="/images/brand/contact-phone.png" alt="+30 6976994212" width={200} height={20} sizes="200px" className="h-5 w-auto" />
                            </div>
                            <p className="text-white/60 text-sm">{dict.contact.contact_info.phone.note}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.contact_info.email.label}</h3>
                            <div className="flex justify-center mt-3 mb-2">
                                <Image src="/images/brand/contact-email.png" alt="hello@sensear.music" width={200} height={20} sizes="200px" loading="eager" className="h-5 w-auto" />
                            </div>
                            <p className="text-white/60 text-sm">{dict.contact.contact_info.email.note}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ThumbsUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.contact.contact_info.social.label}</h3>
                            <div className="flex justify-center gap-8 mt-2 mb-2">
                                <a href="https://www.facebook.com/61575909304249/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors" aria-label="Facebook">
                                    <Facebook className="w-6 h-6 text-white" />
                                </a>
                                <a href="https://www.instagram.com/sensear.music" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors" aria-label="Instagram">
                                    <Instagram className="w-6 h-6 text-white" />
                                </a>
                                <a href="https://www.linkedin.com/company/sensear-music/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6 text-white" />
                                </a>
                            </div>
                            <p className="text-white/60 text-sm">{dict.contact.contact_info.social.note}</p>
                        </div>
                    </StaggerChildren>

                    <ScrollReveal delay={0.16}>
                        <div className="flex flex-col items-center justify-center mt-16 text-center">
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
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-20 bg-[#faebe3]">
                <div className="max-w-4xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold text-black text-center mb-4">
                            {dict.contact.faq.title}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="text-center text-black/60 mb-12">
                            {dict.contact.faq.subtitle}
                        </p>
                    </ScrollReveal>
                    <StaggerChildren className="space-y-4" staggerDelay={0.08}>
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
                    </StaggerChildren>
                    <ScrollReveal delay={0.16}>
                        <div className="flex justify-center mt-10">
                            <AnimatedButton href="faq" lang={lang}>
                                {dict.contact.faq.read_all_cta}
                            </AnimatedButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
