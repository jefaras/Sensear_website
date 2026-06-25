'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, Kicker, emphasize } from '@/components/v3';

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
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    previewPlaceholder: string;
    previews: ServicePreview[];
}

const DEFAULT_PREVIEW_IMG = '/images/about/about-journey-team-collaboration.jpg';

export function Services({ lang, kicker, title, subtitle, items, previewPlaceholder, previews }: ServicesProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'αναβαθμίζουμε' : 'reimagine';
    const [hovered, setHovered] = useState<number | null>(null);

    const activePreview = hovered !== null ? previews[hovered] : null;
    const previewImg = activePreview?.img ?? DEFAULT_PREVIEW_IMG;
    const previewCap = activePreview?.cap ?? previewPlaceholder;

    return (
        <section className="relative bg-[#0e0d0c] py-[120px]">
            <DriftOrb
                className="h-[46vw] max-h-[560px] w-[46vw] max-w-[560px]"
                style={{
                    bottom: '4%',
                    right: '-6%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.11),rgba(240,189,149,0) 62%)',
                    filter: 'blur(24px)',
                }}
                duration={24}
                reverse
            />
            <div className="relative z-10 mx-auto max-w-[1380px] px-6 sm:px-8">
                <ScrollReveal>
                    <Kicker className="mb-[18px]">{kicker}</Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                    <h2 className="mb-[18px] max-w-[900px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {emphasize(title, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                    <p className="mb-[30px] max-w-[680px] text-[1.1rem] text-[#faf6f1]/60">{subtitle}</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-[50px]">
                    <div className="border-t border-[#faf6f1]/12">
                        {items.map((item, i) => (
                            <Link
                                key={i}
                                href={localizedPath(`/${item.link}`)}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="flex items-baseline gap-6 border-b border-[#faf6f1]/12 py-[34px] text-[#faf6f1] no-underline transition-colors hover:text-[#faf6f1]"
                            >
                                <span className="w-[34px] shrink-0 text-[13px] font-bold tabular-nums text-[#faf6f1]/40">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="flex-1">
                                    <div className="text-[clamp(1.4rem,2.4vw,2.1rem)] font-bold tracking-[-0.01em]">
                                        {item.title}
                                    </div>
                                    <p className="mt-2 max-w-[560px] text-[1rem] text-[#faf6f1]/55">{item.desc}</p>
                                </div>
                                <span className="se-gold-text self-center text-[20px]">→</span>
                            </Link>
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-[120px]">
                        <div className="relative aspect-[3/3.8] overflow-hidden rounded-lg bg-[#161412]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                                style={{ backgroundImage: `url('${previewImg}')` }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[14px]">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#faf6f1]/25 bg-[#0b0a0a]/40 backdrop-blur-[4px]">
                                    <span className="se-gold-text text-[14px]">♪</span>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.7))]" />
                            <div className="pointer-events-none absolute bottom-[18px] left-[18px] right-[18px] font-didot text-[1.15rem] text-[#faf6f1]">
                                {previewCap}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
