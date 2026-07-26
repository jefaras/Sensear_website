import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { ContactForm } from '@/components/ContactForm';
import { DriftOrb, V3Root, emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';
import { localeAlternates } from '@/lib/seo';
import { Details, Faq, Hero } from '@/components/contact-v3';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        alternates: localeAlternates(lang, '/contact'),
        title: dict.contact.meta.title,
        description: dict.contact.meta.description,
    };
}

export default async function ContactV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const c = dict.contact;
    const home = dict.home;
    const em = lang === 'el'
        ? { intro: 'ήχο', details: 'όπως σας βολεύει', faq: 'Ερωτήσεις' }
        : { intro: 'sound', details: 'however suits you', faq: 'Questions' };

    return (
        <V3Root>
            <Hero lang={lang} hero={c.hero} />

            {/* Form */}
            <section id="form" className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={21}
                />
                <div className="relative z-10 mx-auto max-w-[1040px] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mx-auto mb-[clamp(40px,3.12vw,55px)] max-w-[760px] text-center">
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                                {emphasize(c.intro.title, em.intro)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="text-[clamp(1.02rem,1.24vw,1.32rem)] leading-[1.6] text-[#faf6f1]/60">{c.intro.subtitle}</p>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.16}>
                        <div className="relative">
                            <Image
                                src="/images/contact/vinyl-record-contact-form-bg.webp"
                                alt=""
                                aria-hidden="true"
                                width={760}
                                height={760}
                                className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] max-w-none -translate-x-1/2 -translate-y-1/2 animate-[se-spin_60s_linear_infinite] rounded-full object-cover opacity-[0.12]"
                            />
                            <div className="relative rounded-[14px] border border-[#faf6f1]/10 bg-[rgba(15,13,12,0.72)] p-[clamp(28px,4vw,52px)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] backdrop-blur-[6px]">
                                <ContactForm labels={c.form} variant="dark" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Details emWord={em.details} contactInfo={c.contact_info} />

            <Faq lang={lang} emWord={em.faq} faq={c.faq} />
        </V3Root>
    );
}
