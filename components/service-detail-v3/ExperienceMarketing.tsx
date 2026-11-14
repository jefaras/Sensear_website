import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Accordion } from '@/components/faq-v3';
import { container, h2Class, itemTextClass, leadClass, panel, photoFade, photoFrame } from './ExperienceDesign';
import { ImagePlaceholder, SlotImage, isPending } from './ImagePlaceholder';

type Item = { title: string; description: string };

export interface ExperienceMarketingContent {
    meta: { title: string; description: string };
    back_link: string;
    hero: { title: string; subtitle: string; description: string; explore_cta: string; contact_cta: string; image_alt: string };
    intro: { title: string; paragraphs: string[] };
    phases: { title: string; intro: string; items: (Item & { measure: string; image_alt: string })[]; closing: string };
    ways: { title: string; items: Item[]; paragraphs: string[] };
    sound: { title: string; body: string; image_alt: string };
    faq: { title: string; items: { question: string; answer: string }[] };
    cta: { title: string; description: string; button: string; image_alt: string };
}

interface ExperienceMarketingProps {
    lang: Locale;
    content: ExperienceMarketingContent;
    /** `phases` holds one photo per phase card, in the dictionary's order. */
    images: { hero: string; phases: string[]; sound: string; cta: string };
    /** Per-locale emphasis words (exact substrings of the headings). */
    em: { statement: string; cta: string };
}

/**
 * Experience Marketing (/services/experience-design/experience-marketing/), brief v2 (14 Nov 2026):
 * seven sections, built from the Experience Design page's parts. The page sits under Experience
 * Design, so the hero carries a back link in place of a breadcrumb, styled like the journal
 * articles' "Back to the journal". Photo slots that wait for a new picture show a placeholder
 * (see ImagePlaceholder).
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
                    <SlotImage src={images.hero} alt={content.hero.image_alt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-center" />
                    {!isPending(images.hero) && <div className="absolute inset-0 bg-[#0b0a0a]/10" />}
                </div>
            </section>

            {/* 2. What it is and who it is for: anchor target for the hero's "explore" CTA. The last
                paragraph carries the link to Experience Design from the dictionaries. */}
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
                                className={`se-html ${
                                    i === 0
                                        ? 'mx-auto mb-[clamp(17px,1.31vw,23px)] max-w-[900px] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.5] text-[#faf6f1]'
                                        : 'mx-auto mb-[clamp(15px,1.19vw,21px)] max-w-[820px] text-[clamp(1.09rem,1.44vw,1.38rem)] leading-[1.65] text-[#faf6f1]/58'
                                }`}
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 3. The three phases: the layer cards of the Experience Design page, with 4:5 frames so
                the people in the photos stay whole, and a small measure line at the foot of each card.
                [JEF: replace this example with a real one when you have a completed project.] */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.phases.title}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className={`mb-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.phases.intro}</p>
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 gap-[clamp(28px,2.22vw,39px)] sm:grid-cols-2 lg:grid-cols-3">
                        {content.phases.items.map((item, i) => (
                            <div key={i} className="flex h-full flex-col">
                                <div className="relative mb-[clamp(18px,1.42vw,25px)] aspect-[4/5] overflow-hidden rounded-lg">
                                    <SlotImage src={images.phases[i]} alt={item.image_alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                                </div>
                                <h3 className="mb-3 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold leading-[1.28]">{item.title}</h3>
                                <p className={`mb-[clamp(16px,1.3vw,22px)] ${itemTextClass}`}>{item.description}</p>
                                <p className="mt-auto border-t border-[#faf6f1]/12 pt-[clamp(12px,0.95vw,17px)] text-[clamp(0.84rem,0.92vw,1rem)] leading-[1.5] text-[#faf6f1]/50">
                                    {item.measure}
                                </p>
                            </div>
                        ))}
                    </StaggerChildren>
                    <ScrollReveal delay={0.1}>
                        <p className={`mt-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.phases.closing}</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. How we work together and what you get: two cards, then three paragraphs (the second
                carries the link to Experience Design). */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
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
                    <div className="mt-[clamp(36px,3vw,53px)]">
                        {content.ways.paragraphs.map((paragraph, i) => (
                            <ScrollReveal key={i} delay={0.1 + i * 0.04}>
                                <p className={`se-html ${i > 0 ? 'mt-[clamp(14px,1.1vw,19px)]' : ''} ${leadClass}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The sound of your brand: the vinyl bar photo left, the paragraph with its two links right */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '6%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={21}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className={`${photoFrame} aspect-[4/5]`}>
                                <SlotImage src={images.sound} alt={content.sound.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.sound.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.12}>
                                <p className={`se-html ${leadClass}`} dangerouslySetInnerHTML={{ __html: content.sound.body }} />
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Questions we often hear */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <div className="grid grid-cols-1 gap-[clamp(28px,2.22vw,39px)] lg:grid-cols-[0.75fr_1.25fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className={h2Class}>{content.faq.title}</h2>
                        </ScrollReveal>
                        <Accordion items={content.faq.items} />
                    </div>
                </div>
            </section>

            {/* 7. Closing CTA (id="cta", set by PageCTA). While its photo is pending, the band stays
                dark and a square placeholder sits above the heading. */}
            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.description}
                primaryLabel={content.cta.button}
                primaryHref={localizedPath('/contact')}
                bgImage={images.cta}
                bgAlt={content.cta.image_alt}
                bgPlaceholder={
                    isPending(images.cta) ? (
                        <ImagePlaceholder src={images.cta} alt={content.cta.image_alt} className="aspect-square w-[clamp(180px,15vw,240px)]" />
                    ) : undefined
                }
            />
        </>
    );
}
