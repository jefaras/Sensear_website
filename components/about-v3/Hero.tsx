import Image from 'next/image';
import { DriftOrb, MorphCTA, emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface HeroProps {
    hero: {
        title: string;
        subtitle: string;
        image_alt: string;
        side_label: string;
        primary_cta: string;
        secondary_cta: string;
        image_kicker: string;
        image_caption: string;
        badge: string[];
    };
}

export function Hero({ hero }: HeroProps) {
    const emWord = 'soundtrack';

    return (
        <section className="relative flex min-h-[92vh] items-center overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(58px,4.6vw,81px)]">
            <DriftOrb
                className="h-[60vw] w-[60vw] max-h-[870px] max-w-[870px]"
                style={{
                    top: '-10%',
                    right: '-5%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.17),rgba(240,189,149,0) 62%)',
                }}
                duration={16}
            />
            <DriftOrb
                className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]"
                style={{
                    bottom: '-15%',
                    left: '-10%',
                    background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)',
                }}
                duration={22}
                reverse
            />

            <div className="mx-auto w-full max-w-[min(1760px,100%)] pl-[clamp(20px,1.59vw,28px)] pr-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] lg:pl-[clamp(70px,5.51vw,97px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                    <div>
                        <ScrollReveal delay={0.15}>
                            <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.76rem,5.75vw,5.29rem)] font-extrabold leading-[1.04] tracking-[-0.022em]">
                                {/* emphasize, not emphasizeHeadline: the latter forces a line break
                                    after the emphasised word, which stranded the Greek possessive
                                    on a line of its own. This headline wraps naturally instead. */}
                                {emphasize(hero.title, emWord)}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[620px] text-[clamp(1.21rem,1.73vw,1.47rem)] font-medium leading-[1.55] text-[#faf6f1]/72">
                                {hero.subtitle}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.45}>
                            <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                                <MorphCTA href="#team">{hero.primary_cta}</MorphCTA>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="right" delay={0.5}>
                        <div className="relative">
                            <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/images/about/about-hero.jpg"
                                    alt={hero.image_alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.6))]" />
                            </div>
                            {/* Hero image caption & rotating badge — hidden for now
                            <div className="absolute bottom-[25px] left-[25px] right-[25px]">
                                <div className="se-gold-text mb-1 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.3em]">
                                    {hero.image_kicker}
                                </div>
                                <div className="font-didot text-[clamp(1.38rem,1.57vw,1.73rem)] text-[#faf6f1]">{hero.image_caption}</div>
                            </div>
                            <SpinningBadge lines={hero.badge} className="absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                            */}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
