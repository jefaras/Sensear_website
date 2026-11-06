import Image from 'next/image';
import { ScrollReveal } from '@/components/motion';
import { DriftOrb } from '@/components/v3';

interface AboutProps {
    p1: string;
    p2: string;
    imageAlt: string;
}

export function About({ p1, p2, imageAlt }: AboutProps) {
    return (
        <section className="relative py-[clamp(108px,8.52vw,150px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{
                    top: '6%',
                    left: '-8%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.12),rgba(240,189,149,0) 62%)',
                    filter: 'blur(22px)',
                }}
                duration={19}
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                {/* Photo left, statement right on desktop, so the section alternates with
                    Services below (text left, photo right). On phones the text stays first. */}
                <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[0.85fr_1.5fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                    <div className="se-html lg:order-2">
                        <ScrollReveal>
                            {/* The dictionary separates the statement's sentences with <br />; each
                                one is set as its own paragraph. */}
                            <div className="mb-[clamp(28px,2.22vw,39px)]">
                                {p1.split(/<br\s*\/?>/).map((sentence, i) => (
                                    <p
                                        key={i}
                                        className={`text-[clamp(1.55rem,2.65vw,2.45rem)] font-semibold leading-[1.32] tracking-[-0.01em] ${i > 0 ? 'mt-[0.6em]' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: sentence }}
                                    />
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p
                                className="max-w-[710px] text-[clamp(1.06rem,1.2vw,1.32rem)] leading-[1.65] text-[#faf6f1]/62"
                                dangerouslySetInnerHTML={{ __html: p2 }}
                            />
                        </ScrollReveal>
                    </div>
                    <ScrollReveal direction="left" delay={0.15} className="lg:order-1">
                        <div className="relative aspect-[3/3.7] overflow-hidden rounded-lg">
                            <Image
                                src="/images/carousel/carousel-venue-atmosphere-1.jpg"
                                alt={imageAlt}
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
