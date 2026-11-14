import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Accordion } from '@/components/faq-v3';
import { GoldDotRows } from './ServiceDetail';
import { LinkedRows, container, h2Class, h3Class, itemTextClass, leadClass, panel } from './ExperienceDesign';

type Item = { title: string; description: string };
type LinkedItem = Item & { link: string };

export interface ExperienceMarketingContent {
    meta: { title: string; description: string };
    back_link: string;
    hero: { title: string; subtitle: string; description: string; explore_cta: string; contact_cta: string; image_alt: string };
    intro: { title: string; paragraphs: string[] };
    for_whom: { title: string; intro: string; items: Item[] };
    example: { title: string; intro: string; items: Item[]; closing: string; image_alt: string };
    ways: { title: string; items: Item[] };
    no_space: { title: string; body: string };
    included: { title: string; items: Item[]; closing: string };
    pricing: { title: string; method: string; link_label: string; body: string };
    sound_fit: { title: string; intro: string; items: LinkedItem[] };
    faq: { title: string; items: { question: string; answer: string }[] };
    cta: { title: string; description: string; button: string; image_alt: string };
}

interface ExperienceMarketingProps {
    lang: Locale;
    content: ExperienceMarketingContent;
    images: { hero: string; example: string; cta: string };
    /** Per-locale emphasis words (exact substrings of the headings). */
    em: { statement: string; cta: string };
}

/** Bordered H3 items in columns, the "From first call to launch" grid without the step numbers. */
const ItemGrid = ({ items, className }: { items: Item[]; className: string }) => (
    <StaggerChildren staggerDelay={0.08} className={`grid grid-cols-1 gap-x-[clamp(28px,2.22vw,39px)] ${className}`}>
        {items.map((item, i) => (
            <div key={i} className="h-full border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)]">
                <h3 className={h3Class}>{item.title}</h3>
                <p className={itemTextClass}>{item.description}</p>
            </div>
        ))}
    </StaggerChildren>
);

/**
 * Experience Marketing (/services/experience-design/experience-marketing/). Built from the
 * Experience Design page's sections (JEF's brief, 13 Nov 2026): same hero, statement, photo +
 * gold-dot rows, cards, two-column text rows, linked rows, accordion and closing CTA. The page
 * sits under Experience Design, so the hero carries a back link in place of a breadcrumb, styled
 * like the journal articles' "Back to the journal".
 */
export function ExperienceMarketing({ lang, content, images, em }: ExperienceMarketingProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);

    return (
        <>
            {/* 1. Hero: the Experience Design hero, with the back link above the H1 */}
            <section className="relative grid min-h-[100dvh] grid-cols-1 overflow-hidden lg:grid-cols-[1.04fr_0.96fr]">
                <DriftOrb
                    className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]"
                    style={{ bottom: '-15%', left: '-10%', background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)' }}
                    duration={22}
                    reverse
                />
                <div className="relative z-10 flex items-end justify-center px-5 pb-14 pt-36 sm:px-8 sm:pb-16 lg:items-center lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:pb-[clamp(4rem,8vh,6.5rem)] lg:pt-24">
                    <div className="w-full max-w-[720px]">
                        <ScrollReveal>
                            <Link
                                href={localizedPath('/services/experience-design')}
                                className="group mb-[clamp(28px,2.22vw,39px)] inline-flex items-center gap-2 text-[clamp(12px,0.85vw,15px)] font-bold uppercase tracking-[0.18em] text-[#faf6f1]/50 no-underline transition-colors hover:text-[#f0bd95]"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                {content.back_link}
                            </Link>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <h1 className="mb-[clamp(18px,1.4vw,24px)] text-[clamp(2.65rem,5.29vw,4.72rem)] font-extrabold leading-[1.07] tracking-[-0.022em]">
                                {content.hero.title}
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.18}>
                            <p className="se-gold-text font-didot mb-[clamp(23px,1.82vw,32px)] text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.2]">{content.hero.subtitle}</p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.24}>
                            <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[600px] text-[clamp(1.08rem,1.5vw,1.3rem)] leading-[1.6] text-[#faf6f1]/72">
                                {content.hero.description}
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                                <MorphCTA href="#overview">{content.hero.explore_cta}</MorphCTA>
                                <GhostButton href="#cta">{content.hero.contact_cta}</GhostButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="relative min-h-[52vh] overflow-hidden border-t border-[#faf6f1]/10 lg:min-h-full lg:border-l lg:border-t-0">
                    <Image src={images.hero} alt={content.hero.image_alt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-center" />
                    <div className="absolute inset-0 bg-[#0b0a0a]/10" />
                </div>
            </section>

            {/* 2. What Experience Marketing is: anchor target for the hero's "explore" CTA */}
            <section id="overview" className={`relative scroll-mt-[clamp(90px,7vw,120px)] overflow-hidden border-b border-b-[#faf6f1]/8 py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={21}
                />
                <div className="relative z-10 mx-auto max-w-[1080px] px-[clamp(27px,2.1vw,37px)] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                            {emphasize(content.intro.title, em.statement)}
                        </h2>
                    </ScrollReveal>
                    {content.intro.paragraphs.map((paragraph, i) => (
                        <ScrollReveal key={i} delay={0.12 + i * 0.06}>
                            <p
                                className={
                                    i === 0
                                        ? 'mx-auto mb-[clamp(17px,1.31vw,23px)] max-w-[900px] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.5] text-[#faf6f1]'
                                        : 'mx-auto mb-[clamp(15px,1.19vw,21px)] max-w-[820px] text-[clamp(1.09rem,1.44vw,1.38rem)] leading-[1.65] text-[#faf6f1]/58'
                                }
                            >
                                {paragraph}
                            </p>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 3. Who it is for and what you gain: intro + two H3 items */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.for_whom.title}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className={`mb-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.for_whom.intro}</p>
                    </ScrollReveal>
                    <ItemGrid items={content.for_whom.items} className="md:grid-cols-2" />
                </div>
            </section>

            {/* 4. What it can look like: image left, moments right (the hotel example's layout).
                [JEF: replace this example with a real one when you have a completed project.] */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '6%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={21}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                                <Image src={images.example} alt={content.example.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.example.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(28px,2.22vw,39px)] ${leadClass}`}>{content.example.intro}</p>
                            </ScrollReveal>
                            <GoldDotRows items={content.example.items} />
                            <ScrollReveal delay={0.1}>
                                <p className={`mt-[clamp(24px,1.9vw,33px)] ${leadClass}`}>{content.example.closing}</p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Two ways to work with us (cards) and 6. No space of your own? (as "How pricing works") */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(36px,3vw,53px)] ${h2Class}`}>{content.ways.title}</h2>
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-[clamp(17px,1.31vw,23px)] md:grid-cols-2">
                        {content.ways.items.map((item, i) => (
                            <div key={i} className="h-full rounded-[12px] border border-[#faf6f1]/10 bg-[rgba(250,246,241,0.04)] p-[clamp(22px,1.82vw,32px)]">
                                <h3 className="se-gold-text mb-[clamp(10px,0.8vw,14px)] text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold">{item.title}</h3>
                                <p className={itemTextClass}>{item.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>

                    <div className="mt-[clamp(70px,5.5vw,97px)] grid grid-cols-1 gap-[clamp(20px,1.59vw,28px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className={h2Class}>{content.no_space.title}</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className={leadClass}>{content.no_space.body}</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 7. What's included and how we measure it: six H3 items + closing paragraph */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={20}
                />
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(36px,3vw,53px)] ${h2Class}`}>{content.included.title}</h2>
                    </ScrollReveal>
                    <ItemGrid items={content.included.items} className="sm:grid-cols-2 lg:grid-cols-3" />
                    <ScrollReveal delay={0.1}>
                        <p className={`mt-[clamp(24px,1.9vw,33px)] ${leadClass}`}>{content.included.closing}</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* 8. How we work and how pricing works: heading left, text right with the link to the steps */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <div className={container}>
                    <div className="grid grid-cols-1 gap-[clamp(20px,1.59vw,28px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className={h2Class}>{content.pricing.title}</h2>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.12}>
                                <p className={leadClass}>{content.pricing.method}</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.14}>
                                <div className="mb-[clamp(24px,1.9vw,33px)] mt-[clamp(16px,1.3vw,22px)]">
                                    <GhostButton href={localizedPath('/services/experience-design')} size="md" arrow>
                                        {content.pricing.link_label}
                                    </GhostButton>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.16}>
                                <p className={leadClass}>{content.pricing.body}</p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Where sound fits: links to three sound services */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.sound_fit.title}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className={`mb-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.sound_fit.intro}</p>
                    </ScrollReveal>
                    <LinkedRows items={content.sound_fit.items} localizedPath={localizedPath} className="md:grid-cols-3" />
                </div>
            </section>

            {/* 10. Questions we often hear */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <div className={container}>
                    <div className="grid grid-cols-1 gap-[clamp(28px,2.22vw,39px)] lg:grid-cols-[0.75fr_1.25fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className={h2Class}>{content.faq.title}</h2>
                        </ScrollReveal>
                        <Accordion items={content.faq.items} />
                    </div>
                </div>
            </section>

            {/* 11. Closing CTA (id="cta", set by PageCTA) */}
            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.description}
                primaryLabel={content.cta.button}
                primaryHref={localizedPath('/contact')}
                bgImage={images.cta}
                bgAlt={content.cta.image_alt}
            />
        </>
    );
}
