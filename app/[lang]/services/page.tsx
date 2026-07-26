import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { localeAlternates } from '@/lib/seo';
import { DriftOrb, PageCTA, V3Root, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Hero, HowItWorks, ServiceCard, ServiceRow } from '@/components/services-v3';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        alternates: localeAlternates(lang, '/services'),
        title: dict.services_page.meta.title,
        description: dict.services_page.meta.description,
    };
}

export default async function ServicesV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.services_page;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const em = lang === 'el'
        ? { intro: 'επιχείρησή', services: 'εκκίνησής', delivery: 'λειτουργούν', cta: 'αφετηρία' }
        : { intro: 'business', services: 'starting', delivery: 'deliver', cta: 'possibilities' };

    return (
        <V3Root>
            <Hero lang={lang} hero={content.hero} />

            {/* Statement */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={21}
                />
                <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(27px,2.1vw,37px)] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2.19rem,4.6vw,3.68rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                            {emphasize(content.intro.title, em.intro)}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <p
                            className="se-html se-html-gold mx-auto mb-[clamp(17px,1.31vw,23px)] max-w-[970px] text-[clamp(1.38rem,2.3vw,1.84rem)] leading-[1.5] text-[#faf6f1]"
                            dangerouslySetInnerHTML={{ __html: content.intro.p1 }}
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <p
                            className="se-html se-html-gold mx-auto max-w-[970px] text-[clamp(1.09rem,1.44vw,1.38rem)] leading-[1.6] text-[#faf6f1]/58"
                            dangerouslySetInnerHTML={{ __html: content.intro.p2 }}
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '8%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mx-auto mb-[clamp(72px,5.68vw,100px)] max-w-[900px] text-center">
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                                {emphasize(content.starting_point.title, em.services)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">{content.starting_point.subtitle}</p>
                        </ScrollReveal>
                    </div>

                    <ServiceRow
                        service={content.services.playlists}
                        href={localizedPath('/services/signature-playlists')}
                        image="/images/services/service-signature-playlists.jpg"
                        imageSide="left"
                    />
                    <ServiceRow
                        service={content.services.events}
                        href={localizedPath('/services/event-soundtracks')}
                        image="/images/services/service-event-soundtracks.jpg"
                        imageSide="right"
                    />

                    <StaggerChildren className="grid grid-cols-1 gap-[clamp(25px,1.99vw,35px)] md:grid-cols-2" staggerDelay={0.1}>
                        <ServiceCard
                            service={content.services.strategy}
                            href={localizedPath('/services/sonic-identity')}
                            image="/images/services/service-sonic-strategy.jpg"
                        />
                        <ServiceCard
                            service={content.services.upgrades}
                            href={localizedPath('/services/audio-upgrades')}
                            image="/images/services/service-audio-upgrades.jpg"
                        />
                    </StaggerChildren>
                </div>
            </section>

            <HowItWorks lang={lang} emWord={em.delivery} delivery={content.delivery} />

            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.subtitle}
                primaryLabel={content.cta.contact_btn}
                primaryHref={localizedPath('/contact')}
                ghostLabel={content.cta.industries_btn}
                ghostHref={localizedPath('/industries')}
                bgImage="/images/services/services-hero-strategic-music.jpg"
            />
        </V3Root>
    );
}
