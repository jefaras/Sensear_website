import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, emphasizeHeadline } from '@/components/v3';
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
        side_label: string;
        kicker: string;
        primary_cta: string;
        secondary_cta: string;
        badge: string[];
    };
    featured: Article;
    featuredBadge: string;
    readFull: string;
}

export function Hero({ lang, hero, featured, featuredBadge, readFull }: HeroProps) {
    const emWord = lang === 'el' ? 'επιμέλειας' : 'Curation';

    return (
        <section className="relative flex min-h-[92vh] items-center overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(58px,4.6vw,81px)]">
            <DriftOrb
                className="h-[60vw] w-[60vw] max-h-[870px] max-w-[870px]"
                style={{ top: '-10%', right: '-5%', background: 'radial-gradient(circle,rgba(240,189,149,0.17),rgba(240,189,149,0) 62%)' }}
                duration={16}
            />
            <DriftOrb
                className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]"
                style={{ bottom: '-15%', left: '-10%', background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)' }}
                duration={22}
                reverse
            />

            <div className="mx-auto w-full max-w-[min(1760px,100%)] pl-[clamp(20px,1.59vw,28px)] pr-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] lg:pl-[clamp(70px,5.51vw,97px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                    <div>
                        <ScrollReveal delay={0.15}>
                            <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.99rem,6.21vw,5.64rem)] font-extrabold leading-[1.02] tracking-[-0.022em]">
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
                    </div>

                    <ScrollReveal direction="right" delay={0.5}>
                        <div className="relative">
                            <Link href={getLocalizedPath(lang, `/blog/${featured.link}`)} className="group block no-underline">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                    <Image
                                        src={featured.image}
                                        alt={featured.alt || featured.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_45%,rgba(11,10,10,0.55)_70%,rgba(11,10,10,0.9))]" />
                                    <span className="absolute left-[25px] top-[25px] rounded-full bg-[image:var(--gold)] px-[clamp(12px,0.91vw,16px)] py-2 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.22em] text-[#0b0a0a]">
                                        {featuredBadge}
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 p-[clamp(27px,2.1vw,37px)]">
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
                                </div>
                            </Link>
                            {/* Rotating badge — hidden for now
                            <SpinningBadge lines={hero.badge} className="pointer-events-none absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                            */}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
