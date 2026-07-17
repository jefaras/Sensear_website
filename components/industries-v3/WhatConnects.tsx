import Image from 'next/image';
import { Check } from 'lucide-react';
import { DriftOrb, Kicker, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface WhatConnectsProps {
    emWord: string;
    connect: {
        kicker: string;
        title: string;
        subtitle: string;
        points: string[];
        conclusion: string;
    };
}

export function WhatConnects({ emWord, connect }: WhatConnectsProps) {
    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{ bottom: '4%', right: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                duration={20}
                reverse
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                    <ScrollReveal className="order-2 lg:order-1">
                        <div className="relative aspect-[4/4.2] overflow-hidden rounded-lg">
                            <Image
                                src="/images/industries/industries-connected-worlds.png"
                                alt={connect.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 46vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                        </div>
                    </ScrollReveal>

                    <div className="order-1 lg:order-2">
                        <ScrollReveal>
                            <Kicker className="mb-[clamp(15px,1.19vw,21px)]">{connect.kicker}</Kicker>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                                {emphasize(connect.title, emWord)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mb-[clamp(28px,2.22vw,39px)] max-w-[600px] text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">
                                {connect.subtitle}
                            </p>
                        </ScrollReveal>
                        <StaggerChildren staggerDelay={0.06}>
                            {connect.points.map((point, i) => (
                                <div
                                    key={i}
                                    className={`flex items-start gap-[clamp(17px,1.31vw,23px)] border-t border-[#faf6f1]/12 py-[clamp(17px,1.31vw,23px)] ${i === connect.points.length - 1 ? 'border-b' : ''}`}
                                >
                                    <span
                                        className="mt-0.5 flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full border border-[#f0bd95]/40"
                                        aria-hidden="true"
                                    >
                                        <Check className="h-[13px] w-[13px] text-[#f0bd95]" strokeWidth={2.4} />
                                    </span>
                                    <p className="text-[clamp(1.02rem,1.15vw,1.27rem)] leading-[1.5] text-[#faf6f1]/72">{point}</p>
                                </div>
                            ))}
                        </StaggerChildren>
                        <ScrollReveal delay={0.1}>
                            <p className="se-gold-text font-didot mt-[clamp(30px,2.42vw,42px)] text-[clamp(1.29rem,1.46vw,1.61rem)] leading-[1.4]">
                                {connect.conclusion}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
