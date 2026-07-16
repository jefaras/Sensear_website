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
        <section className="relative flex min-h-[92vh] items-center overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(58px,4.6vw,81px)]">
            <DriftOrb
                className="h-[60vw] w-[60vw] max-h-[870px] max-w-[870px]"
                style={{
                    top: '-10%',
                    right: '-5%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.17),rgba(240,189,149,0) 62%)',
                }}
                duration={16}
            />
            <DriftOrb
                className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]"
                style={{
                    bottom: '-15%',
                    left: '-10%',
                    background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)',
                }}
                duration={22}
                reverse
            />

            <SideRail>{hero.side_label}</SideRail>

            <div className="mx-auto w-full max-w-[min(1760px,100%)] pl-[clamp(20px,1.59vw,28px)] pr-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] lg:pl-[clamp(70px,5.51vw,97px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                    <div>
                        <ScrollReveal>
                            <Kicker variant="hero" className="mb-[clamp(25px,1.99vw,35px)]">
                                {hero.kicker} — {sectionKicker}
                            </Kicker>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(3.33rem,6.9vw,6.21rem)] font-extrabold leading-[0.98] tracking-[-0.022em]">
                                {hero.title}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="max-w-[600px] text-[clamp(1.38rem,2.3vw,1.73rem)] leading-[1.5] text-[#faf6f1]/72">
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
                            <div className="absolute bottom-[25px] left-[25px] right-[25px]">
                                <div className="se-gold-text mb-1 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.3em]">
                                    {hero.image_kicker}
                                </div>
                                <div className="font-didot text-[clamp(1.38rem,1.57vw,1.73rem)] text-[#faf6f1]">{hero.image_caption}</div>
                            </div>
                            <SpinningBadge lines={hero.badge} className="absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
