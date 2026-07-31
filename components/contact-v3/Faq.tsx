'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface FaqProps {
    lang: Locale;
    emWord: string;
    faq: {
        title: string;
        subtitle: string;
        items: { question: string; answer: string }[];
        read_all_cta: string;
    };
}

export function Faq({ lang, emWord, faq }: FaqProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    // One-open-at-a-time: when a <details> opens, close its siblings.
    const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
        const opened = e.currentTarget;
        if (!opened.open || !rootRef.current) return;
        rootRef.current.querySelectorAll('details[open]').forEach((el) => {
            if (el !== opened) (el as HTMLDetailsElement).open = false;
        });
    };

    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]" style={{ bottom: '4%', right: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }} duration={20} reverse />
            <div className="relative z-10 mx-auto max-w-[880px] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="mb-[clamp(40px,3.12vw,55px)] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                            {emphasize(faq.title, emWord)}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <p className="text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">{faq.subtitle}</p>
                    </ScrollReveal>
                </div>

                <div ref={rootRef}>
                    <StaggerChildren staggerDelay={0.06} className="space-y-[clamp(13px,1.02vw,18px)]">
                        {faq.items.map((item, i) => (
                            <details key={i} onToggle={handleToggle} className="group rounded-[12px] border border-[#faf6f1]/10 bg-[#141210]">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-[clamp(20px,1.7vw,28px)] text-[clamp(1rem,1.1vw,1.1rem)] font-bold text-[#faf6f1]">
                                    <span>{item.question}</span>
                                    <span className="se-gold-text shrink-0 text-2xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <div className="px-[clamp(20px,1.7vw,28px)] pb-[clamp(20px,1.7vw,26px)] text-[clamp(0.94rem,1.06vw,1.1rem)] leading-[1.7] text-[#faf6f1]/62">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </StaggerChildren>
                </div>

                <ScrollReveal delay={0.1}>
                    <div className="mt-[clamp(40px,3.12vw,55px)] text-center">
                        <Link
                            href={getLocalizedPath(lang, '/faq')}
                            className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#faf6f1]/35 px-[clamp(27px,2.1vw,37px)] py-[clamp(13px,1.02vw,18px)] text-[clamp(14px,0.97vw,17px)] font-bold text-[#faf6f1] no-underline transition-colors hover:border-transparent hover:bg-[image:var(--gold)] hover:text-[#0b0a0a]"
                        >
                            {faq.read_all_cta}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
