'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, MorphCTA, emphasize } from '@/components/v3';

interface ServiceItem {
    title: string;
    desc: string;
    link: string;
}

interface ServicePreview {
    img: string;
    cap: string;
}

interface ServicesProps {
    lang: Locale;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    previewPlaceholder: string;
    previews: ServicePreview[];
    cta: string;
}

const DEFAULT_PREVIEW_IMG = '/images/about/about-journey-team-collaboration.jpg';

export function Services({ lang, title, subtitle, items, previewPlaceholder, previews, cta }: ServicesProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'αναβαθμίζουμε' : 'reimagine';
    const [hovered, setHovered] = useState<number | null>(null);

    const activePreview = hovered !== null ? previews[hovered] : null;
    const previewImg = activePreview?.img ?? DEFAULT_PREVIEW_IMG;
    const previewCap = activePreview?.cap ?? previewPlaceholder;

    return (
        <section id="services" className="relative scroll-mt-[clamp(90px,7vw,120px)] bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb
                className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                style={{
                    bottom: '4%',
                    right: '-6%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.11),rgba(240,189,149,0) 62%)',
                    filter: 'blur(24px)',
                }}
                duration={24}
                reverse
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal delay={0.06}>
                    <h2 className="mb-[clamp(15px,1.19vw,21px)] max-w-[1040px] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {emphasize(title, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                    {subtitle && (
                        <p className="mb-[clamp(25px,1.99vw,35px)] max-w-[780px] text-[clamp(1.01rem,1.15vw,1.26rem)] text-[#faf6f1]/60">{subtitle}</p>
                    )}
                </ScrollReveal>

                <div className="grid grid-cols-1 items-start gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.35fr_0.65fr] lg:gap-[clamp(41px,3.24vw,57px)]">
                    <div className="border-t border-[#faf6f1]/12">
                        {items.map((item, i) => (
                            <Link
                                key={i}
                                href={localizedPath(`/${item.link}`)}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="se-svc flex items-baseline gap-[clamp(20px,1.59vw,28px)] border-b border-[#faf6f1]/12 py-[clamp(28px,2.22vw,39px)] text-[#faf6f1] no-underline"
                            >
                                <span className="w-[39px] shrink-0 text-[clamp(12px,0.85vw,15px)] font-bold tabular-nums text-[#faf6f1]/40">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="flex-1">
                                    <div className="se-svc-title text-[clamp(1.61rem,2.76vw,2.42rem)] font-bold tracking-[-0.01em]">
                                        {item.title}
                                    </div>
                                    <p className="mt-2 max-w-[640px] text-[clamp(0.92rem,1.05vw,1.15rem)] text-[#faf6f1]/55">{item.desc}</p>
                                </div>
                                <span className="se-svc-arrow se-gold-text self-center text-[clamp(18px,1.31vw,23px)]">→</span>
                            </Link>
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-[140px]">
                        <div className="relative aspect-[3/3.8] overflow-hidden rounded-lg bg-[#161412]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                                style={{ backgroundImage: `url('${previewImg}')` }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[clamp(12px,0.91vw,16px)]">
                                <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#faf6f1]/25 bg-[#0b0a0a]/40 backdrop-blur-[4px]">
                                    <span className="se-gold-text text-[clamp(13px,0.91vw,16px)]">♪</span>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.7))]" />
                            <div className="pointer-events-none absolute bottom-[21px] left-[21px] right-[21px] font-didot text-[clamp(1.06rem,1.2vw,1.32rem)] text-[#faf6f1]">
                                {previewCap}
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollReveal delay={0.18}>
                    <div className="mt-[clamp(35px,2.73vw,48px)]">
                        <MorphCTA href={localizedPath('/services')}>
                            {cta}
                        </MorphCTA>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
