import { MorphCTA, SplitHero, emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface HeroProps {
    hero: {
        title: string;
        subtitle: string;
        image_alt: string;
        primary_cta: string;
    };
}

export function Hero({ hero }: HeroProps) {
    const emWord = 'soundtrack';

    return (
        <SplitHero image={{ src: '/images/about/about-hero.jpg', alt: hero.image_alt }}>
            <ScrollReveal delay={0.15}>
                <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.3rem,4.6vw,5.5rem)] font-extrabold leading-[1.04] tracking-[-0.022em]">
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
        </SplitHero>
    );
}
