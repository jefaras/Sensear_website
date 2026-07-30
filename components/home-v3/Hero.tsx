'use client';

import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, GhostButton, MorphCTA } from '@/components/v3';
// import { SideRail, SpinningBadge } from '@/components/v3'; // side-rail removed; spinning badge disabled
// import { EQWidget } from './EQWidget'; // now-playing pill disabled

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
    const ledeBold = [hero.subtitle[0], hero.subtitle[1]].filter(Boolean).join(' ');
    const ledeMuted = hero.subtitle[2];

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden py-[clamp(115px,9.09vw,160px)] pb-[clamp(58px,4.6vw,81px)]">
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

            <div className="mx-auto w-full max-w-[min(1760px,100%)] pl-[clamp(20px,1.59vw,28px)] pr-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] lg:pl-[clamp(70px,5.51vw,97px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                    <div>
                        <ScrollReveal delay={0.15}>
                            {/* Matches the other hero H1s at the top of the scale (5.5rem here,
                                5.64rem there) and shares their leading and tracking. The vw
                                coefficient has to be lower than the shared 6.21vw: this headline is
                                four lines rather than two, and at 6.21vw the intended breaks wrap
                                into seven lines and push the hero past the viewport. 5vw is the
                                largest coefficient that holds the four lines, measured at 1280px
                                where the text column is 589px wide.
                                The title carries its own breaks and <em> tags because it emphasises
                                two phrases and emphasizeHeadline handles only one; .se-html gives
                                those tags the identical Didot italic gold treatment as <Em>. */}
                            <h1
                                className="se-html mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.3rem,5vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.022em]"
                                dangerouslySetInnerHTML={{ __html: hero.title }}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="mb-[clamp(35px,2.73vw,48px)] max-w-[640px]">
                                <p className="text-[clamp(1.02rem,1.19vw,1.3rem)] leading-[1.6] text-[#faf6f1]/75">
                                    {ledeBold}
                                </p>
                                {ledeMuted && (
                                    <p className="mt-[clamp(12px,0.91vw,16px)] text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/60">
                                        {ledeMuted}
                                    </p>
                                )}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.45}>
                            <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                                {/* Primary CTA scrolls down to the on-page Services overview (#services); the
                                    full /services page is reached from the CTA inside that section. */}
                                <MorphCTA href="#services">{hero.cta}</MorphCTA>
                                <GhostButton href="#cta">{hero.secondary_cta}</GhostButton>
                            </div>
                        </ScrollReveal>

                        {/* Now-playing pill disabled
                        <ScrollReveal delay={0.6}>
                            <EQWidget label={hero.now_playing_label} track={hero.now_playing_track} />
                        </ScrollReveal>
                        */}
                    </div>

                    <ScrollReveal direction="right" delay={0.5}>
                        <div className="relative">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/images/carousel/carousel-event-venue.jpg"
                                    alt={lang === 'el' ? 'Επιμελημένη ατμόσφαιρα σε χώρο εκδήλωσης' : 'Curated atmosphere in an event venue'}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.55))]" />
                            </div>
                            {/* Hero image caption — hidden for now
                            <div className="absolute bottom-[25px] left-[25px] right-[25px]">
                                <div className="se-gold-text mb-1 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.3em]">
                                    {hero.featured_kicker}
                                </div>
                                <div className="font-didot text-[clamp(1.38rem,1.57vw,1.73rem)] text-[#faf6f1]">{hero.featured_caption}</div>
                            </div>
                            */}
                            {/* Spinning badge disabled
                            <SpinningBadge lines={hero.badge} className="absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                            */}
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="absolute bottom-[30px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
                <span className="text-[clamp(10px,0.68vw,12px)] font-semibold tracking-[0.3em] text-[#faf6f1]/40">{hero.scroll_label}</span>
                <div className="h-[35px] w-px animate-[se-cue_1.8s_ease-in-out_infinite] bg-[linear-gradient(rgba(250,246,241,0.5),rgba(250,246,241,0))]" />
            </div>
        </section>
    );
}
