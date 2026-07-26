import Image from 'next/image';
import { Building2, Heart, Lightbulb, SlidersHorizontal } from 'lucide-react';
import { DriftOrb } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

const ICONS = [Lightbulb, Building2, SlidersHorizontal, Heart];

interface DifferentiatorsProps {
    content: {
        kicker: string;
        title: string;
        subtitle: string;
        image_alt: string;
        items: { title: string; description: string }[];
    };
}

export function Differentiators({ content }: DifferentiatorsProps) {
    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{ bottom: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                duration={20}
                reverse
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.92fr_1.08fr]">
                    <ScrollReveal direction="left" className="order-2 lg:order-1">
                        <div className="relative aspect-[4/4.4] overflow-hidden rounded-lg">
                            <Image
                                src="/images/about/about-unique-approach.jpg"
                                alt={content.image_alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 46vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                        </div>
                    </ScrollReveal>

                    <div className="order-1 lg:order-2">
                        <ScrollReveal delay={0.06}>
                            <h2
                                className="se-html mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
                                dangerouslySetInnerHTML={{ __html: content.title }}
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[600px] text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">
                                {content.subtitle}
                            </p>
                        </ScrollReveal>
                        <StaggerChildren staggerDelay={0.08}>
                            {content.items.map((item, i) => {
                                const Icon = ICONS[i] ?? Lightbulb;
                                return (
                                    <div
                                        key={item.title}
                                        className={`flex gap-[clamp(18px,1.42vw,25px)] border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] ${i === content.items.length - 1 ? 'border-b' : ''}`}
                                    >
                                        <span
                                            className="flex h-[53px] w-[53px] flex-none items-center justify-center rounded-full border border-[#f0bd95]/40 text-[#f0bd95]"
                                            aria-hidden="true"
                                        >
                                            <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
                                        </span>
                                        <div>
                                            <h3 className="mb-1.5 text-[clamp(1.15rem,1.31vw,1.44rem)] font-bold">{item.title}</h3>
                                            <p className="text-[clamp(0.92rem,1.05vw,1.15rem)] leading-[1.55] text-[#faf6f1]/60">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </StaggerChildren>
                    </div>
                </div>
            </div>
        </section>
    );
}
