import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, Kicker, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface HowItWorksProps {
    lang: Locale;
    emWord: string;
    delivery: {
        kicker: string;
        title: string;
        subtitle: string;
        points: { link: string; link_text: string; text: string }[];
    };
}

export function HowItWorks({ lang, emWord, delivery }: HowItWorksProps) {
    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                duration={19}
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.9fr_1.1fr]">
                    <ScrollReveal direction="left" className="order-2 lg:order-1">
                        <div className="relative aspect-[4/4.2] overflow-hidden rounded-lg">
                            <Image
                                src="/images/services/services-delivery-process.jpg"
                                alt={delivery.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                        </div>
                    </ScrollReveal>

                    <div className="order-1 lg:order-2">
                        <ScrollReveal>
                            <Kicker className="mb-[clamp(15px,1.19vw,21px)]">{delivery.kicker}</Kicker>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                                {emphasize(delivery.title, emWord)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[640px] text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">
                                {delivery.subtitle}
                            </p>
                        </ScrollReveal>
                        <StaggerChildren staggerDelay={0.08}>
                            {delivery.points.map((point, i) => (
                                <div
                                    key={point.link}
                                    className={`flex gap-[clamp(18px,1.42vw,25px)] border-t border-[#faf6f1]/12 py-[clamp(18px,1.42vw,25px)] ${i === delivery.points.length - 1 ? 'border-b' : ''}`}
                                >
                                    <span className="w-[39px] shrink-0 text-[clamp(12px,0.85vw,15px)] font-bold tabular-nums text-[#faf6f1]/40">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <Link
                                            href={getLocalizedPath(lang, `/${point.link}`)}
                                            className="se-navlink mb-1 inline-block text-[clamp(1.15rem,1.31vw,1.44rem)] font-bold text-[#faf6f1] no-underline"
                                        >
                                            {point.link_text}
                                        </Link>
                                        <p className="text-[clamp(0.92rem,1.05vw,1.15rem)] leading-[1.55] text-[#faf6f1]/55">{point.text}</p>
                                    </div>
                                </div>
                            ))}
                        </StaggerChildren>
                    </div>
                </div>
            </div>
        </section>
    );
}
