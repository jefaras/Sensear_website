import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Accordion } from '@/components/faq-v3';
import { MomentsTable, type MomentsTableContent } from './MomentsTable';

type Item = { title: string; description: string };
type NameLink = { title: string; link: string };

export interface ExperienceDesignContent {
    hero: { title: string; subtitle: string; description: string; explore_cta: string; audit_cta: string; image_alt: string };
    intro: { title: string; paragraphs: string[] };
    for_whom: { title: string; intro: string; industries: NameLink[]; image_alt: string };
    moments: MomentsTableContent & { title: string; intro: string; image_alt: string };
    layers: { title: string; items: (Item & { image_alt: string })[] };
    method: { title: string; body: string; link: string; image_alt: string };
    ways_to_start: { title: string; items: Item[]; paragraphs: string[]; image_alt: string };
    sound_fit: { title: string; intro: string; items: NameLink[]; image_alt: string };
    faq: { title: string; items: { question: string; answer: string }[] };
    cta: { title: string; description: string; button: string; image_alt: string };
}

interface ExperienceDesignProps {
    lang: Locale;
    content: ExperienceDesignContent;
    /** `layers` holds one image per layer card, in the dictionary's order; `position` is a CSS
        object-position for photos whose subject sits off-centre. */
    images: {
        hero: string;
        forWhom: string;
        moments: string;
        layers: { src: string; position?: string }[];
        method: string;
        included: string;
        sound: string;
        cta: string;
    };
    /** Per-locale emphasis words (exact substrings of the headings). */
    em: { statement: string; cta: string };
}

// Shared section shells, matching ServiceDetail.
export const container = 'relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]';
export const panel = 'border-t border-[#faf6f1]/8 bg-[#0e0d0c]';
export const h2Class = 'text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]';
export const leadClass = 'max-w-[680px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66';
export const h3Class = 'mb-1.5 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold';
export const itemTextClass = 'text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/58';
/** The section photos' frame: rounded, with the dark fade at the bottom. */
export const photoFrame = 'relative overflow-hidden rounded-lg';
export const photoFade = 'absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]';

/** The "Perfect for" link rows (Didot names between thin rules), without the short descriptions. */
export const NameLinks = ({ items, localizedPath, className = '' }: { items: NameLink[]; localizedPath: (path: string) => string; className?: string }) => (
    <StaggerChildren staggerDelay={0.06} className={`grid grid-cols-1 gap-x-[clamp(28px,2.22vw,39px)] ${className}`}>
        {items.map((item, i) => (
            <Link
                key={i}
                href={localizedPath(`/${item.link}`)}
                className="font-didot group block h-full border-b border-[#faf6f1]/12 py-[clamp(14px,1.1vw,19px)] text-[clamp(1.35rem,1.6vw,1.55rem)] text-[#faf6f1] no-underline transition-colors hover:text-[#f0bd95]"
            >
                {item.title}
            </Link>
        ))}
    </StaggerChildren>
);

/** Small uppercase text link with an arrow, styled like the journal's "Back to the journal". */
export const TextLink = ({ href, children }: { href: string; children: string }) => (
    <Link
        href={href}
        className="group inline-flex items-center gap-2 text-[clamp(12px,0.85vw,15px)] font-bold uppercase tracking-[0.18em] text-[#f0bd95] no-underline transition-colors hover:text-[#faf6f1]"
    >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
);

/**
 * Experience Design (/services/experience-design/), brief v2 (14 Nov 2026): ten sections. The brief's
 * eight, plus "Who it is for" and "The method behind it" as headed sections of their own (JEF, 14 Nov).
 * Photo sections zig-zag as on the live page and the other service pages: the hero photo is right,
 * so the next photo starts left, then right, left, right, left (who it is for, moments, method,
 * how we start, sound). Columns are 0.95fr photo / 1.05fr text, and each photo keeps the frame it had on
 * the live page (4:4.4 for the quarry and the orchestra, 4:4.6 for the others). On phones a left
 * photo sits above its text and a right photo below it, as the source order runs.
 * Backgrounds alternate between the panel and the plain page.
 */
export function ExperienceDesign({ lang, content, images, em }: ExperienceDesignProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);

    return (
        <>
            {/* 1. Hero, in the free-assessment page's split: text left, a full-bleed photo filling the
                right half from top to bottom (below the text on phones). */}
            <section className="relative grid min-h-[100dvh] grid-cols-1 overflow-hidden lg:grid-cols-[1.04fr_0.96fr]">
                <DriftOrb
                    className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]"
                    style={{ bottom: '-15%', left: '-10%', background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)' }}
                    duration={22}
                    reverse
                />
                <div className="relative z-10 flex items-end justify-center px-5 pb-14 pt-36 sm:px-8 sm:pb-16 lg:items-center lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:pb-[clamp(4rem,8vh,6.5rem)] lg:pt-24">
                    <div className="w-full max-w-[720px]">
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
                                <GhostButton href="#cta">{content.hero.audit_cta}</GhostButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="relative min-h-[52vh] overflow-hidden border-t border-[#faf6f1]/10 lg:min-h-full lg:border-l lg:border-t-0">
                    <Image src={images.hero} alt={content.hero.image_alt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-center" />
                    <div className="absolute inset-0 bg-[#0b0a0a]/10" />
                </div>
            </section>

            {/* 2. What it is: anchor target for the hero's "explore" CTA, the centred statement. */}
            <section id="overview" className={`relative scroll-mt-[clamp(90px,7vw,120px)] overflow-hidden pt-[clamp(101px,7.95vw,140px)] ${panel}`}>
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
                    <ScrollReveal delay={0.12}>
                        <p className="mx-auto mb-[clamp(17px,1.31vw,23px)] max-w-[900px] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.5] text-[#faf6f1]">{content.intro.paragraphs[0]}</p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <p className="mx-auto max-w-[820px] text-[clamp(1.09rem,1.44vw,1.38rem)] leading-[1.65] text-[#faf6f1]/58">{content.intro.paragraphs[1]}</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. Who it is for (JEF, 14 Nov: every section carries a title). It continues the statement's
                panel without a rule between them. The immersive-room photo left (zig-zag: left); the
                audience line and the six industries (footer names) right. */}
            <section className="relative overflow-hidden border-b border-b-[#faf6f1]/8 bg-[#0e0d0c] pb-[clamp(101px,7.95vw,140px)] pt-[clamp(70px,5.5vw,97px)]">
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className={`${photoFrame} aspect-[4/4.6]`}>
                                <Image src={images.forWhom} alt={content.for_whom.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.for_whom.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(20px,1.59vw,28px)] ${leadClass}`}>{content.for_whom.intro}</p>
                            </ScrollReveal>
                            <NameLinks items={content.for_whom.industries} localizedPath={localizedPath} className="border-t border-[#faf6f1]/12 sm:grid-cols-2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The five moments, in a venue and at an event: the two-column moments table left,
                the quarry photo right. Venue and event carry equal weight (see MomentsTable). */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.moments.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.moments.intro}</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.14}>
                                <MomentsTable columns={content.moments.columns} rows={content.moments.rows} />
                            </ScrollReveal>
                        </div>
                        <ScrollReveal direction="right">
                            <div className={`${photoFrame} aspect-[4/4.4]`}>
                                <Image src={images.moments} alt={content.moments.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 5. Four layers we design: the image cards. */}
            <section className={`relative overflow-hidden pt-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(36px,3vw,53px)] ${h2Class}`}>{content.layers.title}</h2>
                    </ScrollReveal>
                    {/* Image cards, styled like the homepage journal cards */}
                    <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 gap-[clamp(20px,1.59vw,28px)] sm:grid-cols-2 lg:grid-cols-4">
                        {content.layers.items.map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="relative mb-[clamp(18px,1.42vw,25px)] aspect-[4/3] overflow-hidden rounded-lg">
                                    <Image
                                        src={images.layers[i].src}
                                        alt={item.image_alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover"
                                        style={images.layers[i].position ? { objectPosition: images.layers[i].position } : undefined}
                                    />
                                </div>
                                <h3 className="mb-3 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold leading-[1.28]">{item.title}</h3>
                                <p className={itemTextClass}>{item.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* 6. The method behind it (JEF, 14 Nov: every section carries a title). It continues the
                layers' panel without a rule between them. The method photo left (zig-zag: left); the
                title, the paragraph and the Journal link right. */}
            <section className="relative overflow-hidden bg-[#0e0d0c] pb-[clamp(101px,7.95vw,140px)] pt-[clamp(70px,5.5vw,97px)]">
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className={`${photoFrame} aspect-[4/4.6]`}>
                                <Image src={images.method} alt={content.method.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.method.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(24px,1.9vw,33px)] ${leadClass}`}>{content.method.body}</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.14}>
                                <TextLink href={localizedPath('/blog/from-service-to-experience')}>{content.method.link}</TextLink>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. How we start and what you get: the three ways to start and the
                two paragraphs left, the round-table photo right. */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={20}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(28px,2.22vw,39px)] ${h2Class}`}>{content.ways_to_start.title}</h2>
                            </ScrollReveal>
                            <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-[clamp(14px,1.1vw,19px)]">
                                {content.ways_to_start.items.map((item, i) => (
                                    <div key={i} className="rounded-[12px] border border-[#faf6f1]/10 bg-[rgba(250,246,241,0.04)] p-[clamp(22px,1.82vw,32px)]">
                                        <h3 className="se-gold-text mb-[clamp(10px,0.8vw,14px)] text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold">{item.title}</h3>
                                        <p className={itemTextClass}>{item.description}</p>
                                    </div>
                                ))}
                            </StaggerChildren>
                            {content.ways_to_start.paragraphs.map((paragraph, i) => (
                                <ScrollReveal key={i} delay={0.1 + i * 0.04}>
                                    <p className={`${i === 0 ? 'mt-[clamp(28px,2.22vw,39px)]' : 'mt-[clamp(14px,1.1vw,19px)]'} ${leadClass}`}>{paragraph}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal direction="right">
                            <div className={`${photoFrame} aspect-[4/4.6]`}>
                                <Image src={images.included} alt={content.ways_to_start.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 8. Sound in your venue: the three sound services as name links, right of the orchestra photo (zig-zag: left). */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={21}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className={`${photoFrame} aspect-[4/4.4]`}>
                                <Image src={images.sound} alt={content.sound_fit.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.sound_fit.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(28px,2.22vw,39px)] ${leadClass}`}>{content.sound_fit.intro}</p>
                            </ScrollReveal>
                            <NameLinks items={content.sound_fit.items} localizedPath={localizedPath} className="max-w-[680px] border-t border-[#faf6f1]/12" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Questions we often hear */}
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

            {/* 10. Closing CTA (id="cta", set by PageCTA) */}
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
