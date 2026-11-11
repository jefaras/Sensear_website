import type { Locale } from '@/lib/i18n';
import { SplitHero } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface HeroProps {
    lang: Locale;
    hero: {
        title: string;
        subtitle: string;
        image_alt: string;
    };
}

export function Hero({ hero }: HeroProps) {
    return (
        <SplitHero image={{ src: '/images/blog/blog-faq-default.jpg', alt: hero.image_alt }}>
            <ScrollReveal delay={0.15}>
                <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.3rem,4.6vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.022em]">
                    {hero.title}
                </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <p className="max-w-[600px] text-[clamp(1.21rem,1.73vw,1.47rem)] leading-[1.55] text-[#faf6f1]/72">
                    {hero.subtitle}
                </p>
            </ScrollReveal>
        </SplitHero>
    );
}
