import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { V3Root, DriftOrb, emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';
import { Hero, Accordion } from '@/components/faq-v3';
import { ContactCTA } from '@/components/home-v3';
import { FaqJsonLd } from '@/components/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        alternates: localeAlternates(lang, '/faq'),
        title: dict.faq_page.meta.title,
        description: dict.faq_page.meta.description,
    };
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
            {/* Built from the same content.items the accordion renders, so the structured data
                cannot drift away from the visible copy. */}
            <FaqJsonLd items={content.items} url={lang === 'el' ? '/el/faq/' : '/faq/'} />

            <Hero lang={lang} hero={content.hero} />

            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)] pb-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[40vw] max-h-[550px] w-[40vw] max-w-[550px]"
                    style={{ top: '10%', right: '-8%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={20}
                />
                <div className="relative z-10 mx-auto max-w-[1060px] px-[clamp(20px,1.59vw,28px)]">
                    <ScrollReveal delay={0.08}>
                        <h2 className="mb-[clamp(50px,3.92vw,69px)] text-center text-[clamp(2.53rem,5.18vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                            {emphasize(content.title, titleEmWord)}
                        </h2>
                    </ScrollReveal>
                    <Accordion items={content.items} />
                </div>
            </section>

            <ContactCTA
                lang={lang}
                cta={{
                    title: ctaTitleHtml,
                    subtitle: content.cta.subtitle,
                    primary_cta: home.contact_cta.primary_cta,
                    explore_template: home.contact_cta.explore_template,
                    explore_services: home.contact_cta.explore_services,
                    explore_industries: home.contact_cta.explore_industries,
                    background_image: '/images/contact/contact-hero-venue-consultation.jpg',
                }}
            />
        </V3Root>
    );
}
