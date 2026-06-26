import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { V3Root, Kicker, DriftOrb, emphasize, FooterV3 } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';
import { Hero, Accordion } from '@/components/faq-v3';
import { ContactCTA } from '@/components/home-v3';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return { title: dict.faq_page.meta.title, description: dict.faq_page.meta.description };
}

export default async function FaqV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.faq_page;
    const home = dict.home;
    const titleEmWord = lang === 'el' ? 'απαντημένες' : 'Answered';
    const ctaEmWord = lang === 'el' ? 'Ας μιλήσουμε' : "Let's Talk";
    const ctaTitleHtml = content.cta.title.includes(ctaEmWord)
        ? content.cta.title.replace(ctaEmWord, `<em>${ctaEmWord}</em>`)
        : content.cta.title;

    return (
        <V3Root>
            <Hero lang={lang} hero={content.hero} sectionKicker={content.section_kicker} />

            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[120px] pb-[130px]">
                <DriftOrb
                    className="h-[40vw] max-h-[480px] w-[40vw] max-w-[480px]"
                    style={{ top: '10%', right: '-8%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={20}
                />
                <div className="relative z-10 mx-auto max-w-[920px] px-6">
                    <ScrollReveal>
                        <Kicker variant="gold" className="mb-[18px] justify-center">
                            {content.section_kicker}
                        </Kicker>
                    </ScrollReveal>
                    <ScrollReveal delay={0.08}>
                        <h2 className="mb-[60px] text-center text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                            {emphasize(content.title, titleEmWord)}
                        </h2>
                    </ScrollReveal>
                    <Accordion items={content.items} />
                </div>
            </section>

            <ContactCTA
                lang={lang}
                cta={{
                    kicker: content.cta.kicker,
                    title: ctaTitleHtml,
                    subtitle: content.cta.subtitle,
                    primary_cta: home.contact_cta.primary_cta,
                    call_label: home.contact_cta.call_label,
                    services_link: home.contact_cta.services_link,
                    background_image: '/images/contact/contact-hero-venue-consultation.jpg',
                }}
            />

            <FooterV3
                lang={lang}
                footer={home.footer}
                navigation={dict.navigation}
                services={home.services.items}
                industries={home.expertise.items}
                email={home.contact_cta.secondary_email_label}
                phoneLine={home.contact_cta.phone_line}
            />
        </V3Root>
    );
}
