import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { GhostButton, MorphCTA, SplitHero, emphasizeHeadline } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface Article {
    title: string;
    desc: string;
    tag: string;
    link: string;
    image: string;
    alt?: string;
}

interface HeroProps {
    lang: Locale;
    hero: {
        title: string;
        subtitle: string;
        primary_cta: string;
        secondary_cta: string;
    };
    featured: Article;
    featuredBadge: string;
    readFull: string;
}

export function Hero({ lang, hero, featured, featuredBadge, readFull }: HeroProps) {
    // The journal keeps its English name in both locales (JEF, 6 Nov).
    const emWord = 'Curation';

    // The photo column is the featured-article card: the whole column links to the article,
    // with its badge, title and description over the photo (gradient kept for legibility).
    const featuredCard = (
        <Link href={getLocalizedPath(lang, `/blog/${featured.link}`)} className="group absolute inset-0 block no-underline">
            <Image
                src={featured.image}
                alt={featured.alt || featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.55)_70%,rgba(11,10,10,0.9))]" />
            <span className="absolute left-[25px] top-[25px] rounded-full bg-[image:var(--gold)] px-[clamp(12px,0.91vw,16px)] py-2 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.22em] text-[#0b0a0a] lg:top-[110px]">
                {featuredBadge}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-[clamp(27px,2.1vw,37px)] lg:pb-[clamp(40px,4vh,64px)]">
                <h2 className="mb-[clamp(12px,0.91vw,16px)] text-[clamp(1.73rem,2.76vw,2.42rem)] font-extrabold leading-[1.12] tracking-[-0.015em] text-[#faf6f1]">
                    {featured.title}
                </h2>
                <p className="mb-[clamp(15px,1.19vw,21px)] max-w-[600px] text-[clamp(0.92rem,1.05vw,1.15rem)] leading-[1.55] text-[#faf6f1]/72">
                    {featured.desc}
                </p>
                <span className="se-gold-text inline-flex items-center gap-2 text-[clamp(13px,0.91vw,16px)] font-semibold">
                    {readFull} →
                </span>
            </div>
        </Link>
    );

    return (
        <SplitHero imageSlot={featuredCard}>
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
                    <MorphCTA href="#journal">{hero.primary_cta}</MorphCTA>
                    <GhostButton href="#cta">{hero.secondary_cta}</GhostButton>
                </div>
            </ScrollReveal>
        </SplitHero>
    );
}
