import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { DriftOrb, Kicker, SideRail, SpinningBadge } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface HeroProps {
    lang: Locale;
    hero: {
        title: string;
        subtitle: string;
        side_label: string;
        kicker: string;
        image_kicker: string;
        image_caption: string;
        badge: string[];
    };
    sectionKicker: string;
}

export function Hero({ lang, hero, sectionKicker }: HeroProps) {
    return (
        <section className="relative flex min-h-[92vh] items-center overflow-hidden py-[130px] pb-[70px]">
            <DriftOrb
                className="h-[60vw] w-[60vw] max-h-[760px] max-w-[760px]"
                style={{
                    top: '-10%',
                    right: '-5%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.17),rgba(240,189,149,0) 62%)',
                }}
                duration={16}
            />
            <DriftOrb
                className="h-[50vw] w-[50vw] max-h-[620px] max-w-[620px]"
                style={{
                    bottom: '-15%',
                    left: '-10%',
                    background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)',
                }}
                duration={22}
                reverse
            />

            <SideRail>{hero.side_label}</SideRail>

            <div className="mx-auto w-full max-w-[1380px] pl-6 pr-6 sm:px-8 lg:pl-[84px]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                    <div>
                        <ScrollReveal>
                            <Kicker variant="hero" className="mb-[30px]">
                                {hero.kicker} — {sectionKicker}
                            </Kicker>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <h1 className="mb-[30px] text-[clamp(2.9rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.022em]">
                                {hero.title}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="max-w-[520px] text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.5] text-[#faf6f1]/72">
                                {hero.subtitle}
                            </p>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="right" delay={0.5}>
                        <div className="relative">
                            <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/images/blog/blog-faq-default.jpg"
                                    alt={lang === 'el' ? 'Πώς λειτουργεί — ήχος, αδειοδότηση & υπηρεσίες' : 'How it works — sound, licensing & service'}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.6))]" />
                            </div>
                            <div className="absolute bottom-[22px] left-[22px] right-[22px]">
                                <div className="se-gold-text mb-1 text-[10px] font-bold tracking-[0.3em]">
                                    {hero.image_kicker}
                                </div>
                                <div className="font-didot text-[1.5rem] text-[#faf6f1]">{hero.image_caption}</div>
                            </div>
                            <SpinningBadge lines={hero.badge} className="absolute -right-[18px] -top-[18px] h-24 w-24" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
