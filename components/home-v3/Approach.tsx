import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, Kicker, MorphCTA, emphasize } from '@/components/v3';

interface ApproachItem {
    title: string;
    desc: string;
}

interface ApproachProps {
    lang: Locale;
    kicker: string;
    title: string;
    subtitle: string;
    items: ApproachItem[];
    cta: string;
}

export function Approach({ lang, kicker, title, subtitle, items, cta }: ApproachProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'επαναπροσδιορίζουμε' : 'redefine';

    return (
        <section className="relative bg-[#0e0d0c] py-[130px]">
            <DriftOrb
                className="h-[42vw] max-h-[520px] w-[42vw] max-w-[520px]"
                style={{
                    top: '-6%',
                    right: '8%',
                    background: 'radial-gradient(circle,rgba(250,235,227,0.08),rgba(250,235,227,0) 62%)',
                    filter: 'blur(22px)',
                }}
                duration={21}
            />
            <div className="relative z-10 mx-auto max-w-[1380px] px-6 sm:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <ScrollReveal direction="left">
                        <div className="relative aspect-[4/4.4] overflow-hidden rounded-lg">
                            <Image
                                src="/images/homepage/vinyl-records-music-curation.jpg"
                                alt={lang === 'el' ? 'Μουσικός σχεδιασμός SensEar' : 'SensEar music curation'}
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                        </div>
                    </ScrollReveal>

                    <div>
                        <ScrollReveal>
                            <Kicker className="mb-[18px]">{kicker}</Kicker>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[18px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                                {emphasize(title, emWord)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mb-10 max-w-[560px] text-[1.1rem] text-[#faf6f1]/60">{subtitle}</p>
                        </ScrollReveal>

                        <div className="flex flex-col">
                            {items.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.06}>
                                    <div className="flex gap-[22px] border-t border-[#faf6f1]/12 py-6 last:border-b">
                                        <span className="w-[34px] shrink-0 text-[13px] font-bold text-[#faf6f1]/40">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <div className="mb-1.5 text-[1.3rem] font-bold">{item.title}</div>
                                            <p className="text-[1rem] leading-[1.55] text-[#faf6f1]/55">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal delay={0.18}>
                            <div className="mt-9">
                                <MorphCTA href={localizedPath('/case-studies')}>{cta}</MorphCTA>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
