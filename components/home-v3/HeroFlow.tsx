'use client';

import Image from 'next/image';
import type { MouseEvent } from 'react';
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, GhostButton, Kicker, MorphCTA, emphasizeHeadline } from '@/components/v3';

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

/**
 * HeroFlow — v2 of the home hero. Identical layout/copy to <Hero>, but the
 * featured image "flows" in on load (drifting in from the left and settling to
 * the right), then keeps a slow perpetual float + a subtle rhythmic "beat"
 * pulse, and tilts in 3D toward the cursor (parallax). Fully disabled for
 * users who prefer reduced motion.
 */
export function HeroFlow({ lang, hero }: HeroProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'Μοναδικών' : 'Unique';
    const ledeBold = hero.subtitle[0] + ' ' + hero.subtitle[1];
    const ledeMuted = hero.subtitle[2];
    const reduce = useReducedMotion();

    // Mouse-parallax: normalized cursor offset (-0.5..0.5) → spring-smoothed tilt/translate.
    const mvx = useMotionValue(0);
    const mvy = useMotionValue(0);
    const springCfg = { stiffness: 90, damping: 20, mass: 0.5 };
    const rotateY = useSpring(useTransform(mvx, [-0.5, 0.5], [-10, 10]), springCfg);
    const rotateX = useSpring(useTransform(mvy, [-0.5, 0.5], [8, -8]), springCfg);
    const parallaxX = useSpring(useTransform(mvx, [-0.5, 0.5], [-22, 22]), springCfg);
    const parallaxY = useSpring(useTransform(mvy, [-0.5, 0.5], [-16, 16]), springCfg);

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mvx.set((e.clientX - r.left) / r.width - 0.5);
        mvy.set((e.clientY - r.top) / r.height - 0.5);
    };
    const handleLeave = () => {
        mvx.set(0);
        mvy.set(0);
    };

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
                        <ScrollReveal>
                            <Kicker variant="hero" className="mb-[clamp(25px,1.99vw,35px)]">
                                {hero.kicker}
                            </Kicker>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(3.8rem,7.7vw,7.1rem)] font-extrabold leading-[0.96] tracking-[-0.024em]">
                                {emphasizeHeadline(hero.title, emWord)}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="mb-[clamp(35px,2.73vw,48px)] max-w-[640px]">
                                <p className="text-[clamp(1.55rem,2.3vw,2.05rem)] font-semibold leading-[1.35]">
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
                                {/* Primary CTA scrolls down to the on-page Services overview (#services). */}
                                <MorphCTA href="#services">{hero.cta}</MorphCTA>
                                <GhostButton href={localizedPath('/contact')}>{hero.secondary_cta}</GhostButton>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Animated featured image (v2). perspective on the wrapper enables the 3D tilt. */}
                    <div className="relative [perspective:1400px]" onMouseMove={handleMove} onMouseLeave={handleLeave}>
                        <m.div
                            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -90, scale: 0.9, filter: 'blur(12px)' }}
                            animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                            style={{ willChange: 'transform, filter, opacity' }}
                        >
                            {/* perpetual float + rightward sway + slow rhythmic beat */}
                            <m.div
                                animate={reduce ? undefined : { y: [0, -16, 0], x: [0, 9, 0], scale: [1, 1.02, 1] }}
                                transition={
                                    reduce
                                        ? undefined
                                        : {
                                              y: { duration: 9, ease: 'easeInOut', repeat: Infinity },
                                              x: { duration: 12, ease: 'easeInOut', repeat: Infinity },
                                              scale: { duration: 2.6, ease: 'easeInOut', repeat: Infinity },
                                          }
                                }
                            >
                                {/* mouse parallax tilt */}
                                <m.div style={reduce ? undefined : { rotateX, rotateY, x: parallaxX, y: parallaxY, transformStyle: 'preserve-3d' }}>
                                    <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg shadow-[0_50px_110px_-30px_rgba(0,0,0,0.85)]">
                                        <Image
                                            src="/images/carousel/carousel-event-venue.jpg"
                                            alt={lang === 'el' ? 'Επιμελημένη ατμόσφαιρα — χώρος εκδήλωσης' : 'Curated atmosphere — event venue'}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.55))]" />
                                        {/* rhythm sheen — warm light pulsing to an implied beat */}
                                        <m.div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-0"
                                            style={{
                                                background:
                                                    'radial-gradient(120% 80% at 30% 18%, rgba(240,189,149,0.4), rgba(240,189,149,0) 55%)',
                                                mixBlendMode: 'screen',
                                            }}
                                            animate={reduce ? undefined : { opacity: [0.05, 0.26, 0.05] }}
                                            transition={reduce ? undefined : { duration: 2.6, ease: 'easeInOut', repeat: Infinity }}
                                        />
                                    </div>
                                </m.div>
                            </m.div>
                        </m.div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[30px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
                <span className="text-[clamp(10px,0.68vw,12px)] font-semibold tracking-[0.3em] text-[#faf6f1]/40">{hero.scroll_label}</span>
                <div className="h-[35px] w-px animate-[se-cue_1.8s_ease-in-out_infinite] bg-[linear-gradient(rgba(250,246,241,0.5),rgba(250,246,241,0))]" />
            </div>
        </section>
    );
}
