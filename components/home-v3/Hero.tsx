'use client';

import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, GhostButton, Kicker, MorphCTA, SideRail, SpinningBadge, emphasize } from '@/components/v3';
import { EQWidget } from './EQWidget';

interface HeroProps {
    lang: Locale;
    hero: {
        title: string;
        subtitle: string[];
        cta: string;
        side_label: string;
        kicker: string;
        secondary_cta: string;
        now_playing_label: string;
        now_playing_track: string;
        featured_kicker: string;
        featured_caption: string;
        badge: string[];
        scroll_label: string;
    };
}

export function Hero({ lang, hero }: HeroProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'Μοναδικών' : 'Unique';
    const ledeBold = hero.subtitle[0] + ' ' + hero.subtitle[1];
    const ledeMuted = hero.subtitle[2];

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden py-[140px] pb-[70px]">
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
                                {hero.kicker}
                            </Kicker>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <h1 className="mb-[30px] text-[clamp(2.9rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.022em]">
                                {emphasize(hero.title, emWord, true)}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="mb-[42px] max-w-[520px]">
                                <p className="text-[clamp(1.05rem,1.5vw,1.32rem)] font-semibold leading-[1.45]">
                                    {ledeBold}
                                </p>
                                {ledeMuted && (
                                    <p className="mt-[14px] text-[1.02rem] leading-[1.6] text-[#faf6f1]/60">
                                        {ledeMuted}
                                    </p>
                                )}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.45}>
                            <div className="flex flex-wrap items-center gap-7">
                                <MorphCTA href={localizedPath('/services')}>{hero.cta}</MorphCTA>
                                <GhostButton href={localizedPath('/contact')}>{hero.secondary_cta}</GhostButton>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <EQWidget label={hero.now_playing_label} track={hero.now_playing_track} />
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="right" delay={0.5}>
                        <div className="relative">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/images/carousel/carousel-event-venue.jpg"
                                    alt={lang === 'el' ? 'Επιμελημένη ατμόσφαιρα — χώρος εκδήλωσης' : 'Curated atmosphere — event venue'}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.55))]" />
                            </div>
                            <div className="absolute bottom-[22px] left-[22px] right-[22px]">
                                <div className="se-gold-text mb-1 text-[10px] font-bold tracking-[0.3em]">
                                    {hero.featured_kicker}
                                </div>
                                <div className="font-didot text-[1.5rem] text-[#faf6f1]">{hero.featured_caption}</div>
                            </div>
                            <SpinningBadge lines={hero.badge} className="absolute -right-[18px] -top-[18px] h-24 w-24" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="absolute bottom-[26px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#faf6f1]/40">{hero.scroll_label}</span>
                <div className="h-[30px] w-px animate-[se-cue_1.8s_ease-in-out_infinite] bg-[linear-gradient(rgba(250,246,241,0.5),rgba(250,246,241,0))]" />
            </div>
        </section>
    );
}
