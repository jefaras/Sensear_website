import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, MorphCTA, emphasize } from '@/components/v3';

interface ApproachItem {
    title: string;
    desc: string;
}

interface ApproachProps {
    lang: Locale;
    title: string;
    subtitle: string;
    items: ApproachItem[];
    cta: string;
}

export function Approach({ lang, title, subtitle, items, cta }: ApproachProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'επαναπροσδιορίζουμε' : 'redefine';

    return (
        <section className="relative bg-[#0e0d0c] py-[clamp(108px,8.52vw,150px)]">
            <DriftOrb
                className="h-[42vw] max-h-[600px] w-[42vw] max-w-[600px]"
                style={{
                    top: '-6%',
                    right: '8%',
                    background: 'radial-gradient(circle,rgba(250,235,227,0.08),rgba(250,235,227,0) 62%)',
                    filter: 'blur(22px)',
                }}
                duration={21}
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[clamp(53px,4.2vw,74px)]">
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
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                                {emphasize(title, emWord)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mb-[clamp(33px,2.61vw,46px)] max-w-[640px] text-[clamp(1.01rem,1.15vw,1.26rem)] text-[#faf6f1]/60">{subtitle}</p>
                        </ScrollReveal>

                        <div className="flex flex-col">
                            {items.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.06}>
                                    <div className="flex gap-[clamp(18px,1.42vw,25px)] border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] last:border-b">
                                        <span className="w-[39px] shrink-0 text-[clamp(12px,0.85vw,15px)] font-bold text-[#faf6f1]/40">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <div className="mb-1.5 text-[clamp(1.2rem,1.36vw,1.5rem)] font-bold">{item.title}</div>
                                            <p className="text-[clamp(0.92rem,1.05vw,1.15rem)] leading-[1.55] text-[#faf6f1]/55">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal delay={0.18}>
                            <div className="mt-[clamp(30px,2.33vw,41px)]">
                                <MorphCTA href={localizedPath('/case-studies')}>{cta}</MorphCTA>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
