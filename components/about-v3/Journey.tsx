import Image from 'next/image';
import { DriftOrb, Kicker, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

const bold = (text: string) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

interface JourneyProps {
    emWord: string;
    journey: {
        subtitle: string;
        kicker: string;
        lede: string;
        timeline: { year: string; text: string }[];
        image: string;
        image_alt: string;
    };
}

export function Journey({ emWord, journey }: JourneyProps) {
    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                duration={19}
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="grid grid-cols-1 items-start gap-[clamp(60px,4.72vw,83px)] lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <ScrollReveal>
                            <Kicker className="mb-[clamp(15px,1.19vw,21px)]">{journey.kicker}</Kicker>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h2 className="mb-[clamp(13px,1.02vw,18px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                                {emphasize(journey.subtitle, emWord)}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mb-[clamp(40px,3.13vw,55px)] max-w-[600px] text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">
                                {journey.lede}
                            </p>
                        </ScrollReveal>
                        <StaggerChildren staggerDelay={0.08}>
                            {journey.timeline.map((item, i) => (
                                <div
                                    key={item.year}
                                    className={`flex gap-[clamp(22px,1.7vw,30px)] border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] ${i === journey.timeline.length - 1 ? 'border-b' : ''}`}
                                >
                                    <span className="se-gold-text font-didot w-[83px] flex-none text-[clamp(1.38rem,1.57vw,1.73rem)]">
                                        {item.year}
                                    </span>
                                    <p
                                        className="se-html text-[clamp(0.97rem,1.1vw,1.21rem)] leading-[1.65] text-[#faf6f1]/72"
                                        dangerouslySetInnerHTML={{ __html: bold(item.text) }}
                                    />
                                </div>
                            ))}
                        </StaggerChildren>
                    </div>

                    <ScrollReveal direction="right" delay={0.15}>
                        <div className="relative overflow-hidden rounded-lg lg:sticky lg:top-[140px]">
                            <div className="relative aspect-[4/4.6]">
                                <Image
                                    src={journey.image}
                                    alt={journey.image_alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
