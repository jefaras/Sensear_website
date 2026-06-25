import Image from 'next/image';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb, Kicker } from '@/components/v3';

interface AboutProps {
    kicker: string;
    p1: string;
    p2: string;
}

export function About({ kicker, p1, p2 }: AboutProps) {
    return (
        <section className="relative py-[130px]">
            <DriftOrb
                className="h-[44vw] max-h-[540px] w-[44vw] max-w-[540px]"
                style={{
                    top: '6%',
                    left: '-8%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.12),rgba(240,189,149,0) 62%)',
                    filter: 'blur(22px)',
                }}
                duration={19}
            />
            <div className="relative z-10 mx-auto max-w-[1380px] px-6 sm:px-8">
                <ScrollReveal>
                    <Kicker className="mb-[52px]">{kicker}</Kicker>
                </ScrollReveal>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.5fr_0.85fr] lg:gap-16">
                    <div className="se-html">
                        <ScrollReveal>
                            <p
                                className="mb-[34px] text-[clamp(1.5rem,2.7vw,2.5rem)] font-semibold leading-[1.32] tracking-[-0.01em]"
                                dangerouslySetInnerHTML={{ __html: p1 }}
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p
                                className="max-w-[620px] text-[1.15rem] leading-[1.65] text-[#faf6f1]/62"
                                dangerouslySetInnerHTML={{ __html: p2 }}
                            />
                        </ScrollReveal>
                    </div>
                    <ScrollReveal direction="right" delay={0.15}>
                        <div className="aspect-[3/3.7] overflow-hidden rounded-lg">
                            <Image
                                src="/images/carousel/carousel-venue-atmosphere-1.jpg"
                                alt={p1 ? 'Curated venue atmosphere' : ''}
                                fill
                                sizes="(max-width: 1024px) 100vw, 35vw"
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
