import type { Locale } from '@/lib/i18n';
import { GhostButton, MorphCTA, SplitHero, emphasizeHeadline } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface HeroProps {
    lang: Locale;
    hero: {
        title: string;
        subtitle: string;
        primary_cta: string;
        secondary_cta: string;
        image_alt: string;
    };
}

export function Hero({ lang, hero }: HeroProps) {
    // Mid-sentence word: emphasizeHeadline breaks the line before and after it, so this
    // yields "Four ways / to shape how your space sounds" and the Greek equivalent.
    const emWord = lang === 'el' ? 'τρόποι' : 'ways';

    return (
        <SplitHero image={{ src: '/images/services/services-hero-strategic-music.jpg', alt: hero.image_alt }}>
            <ScrollReveal delay={0.15}>
                <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.3rem,4.6vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.022em]">
                    {emphasizeHeadline(hero.title, emWord)}
                </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[620px] text-[clamp(1.21rem,1.73vw,1.47rem)] font-medium leading-[1.55] text-[#faf6f1]/72">
                    {hero.subtitle}
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
                <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                    <MorphCTA href="#services">{hero.primary_cta}</MorphCTA>
                    <GhostButton href="#cta">{hero.secondary_cta}</GhostButton>
                </div>
            </ScrollReveal>
        </SplitHero>
    );
}
