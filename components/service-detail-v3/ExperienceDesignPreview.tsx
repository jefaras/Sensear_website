import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Accordion } from '@/components/faq-v3';
import { NameLinks, TextLink, type ExperienceDesignContent } from './ExperienceDesign';
import { JourneyScroll } from './JourneyScroll';
import { LayersList } from './LayersList';
import { container, panel, h2Class, leadClass, itemTextClass, photoFrame, photoFade } from './styles';

/** `alt` overrides the dictionary alt when a photo is shown in a slot other than its own. */
type Img = { src: string; position?: string; alt?: string };

export interface ExperienceDesignPreviewProps {
    lang: Locale;
    content: ExperienceDesignContent & { moments: { journey_title: string; journey_image_alts: string[] } };
    images: {
        hero: string;
        forWhom: string;
        /** One photo per moment, in the rows' order. */
        journey: Img[];
        /** One photo per layer, in the items' order. */
        layers: Img[];
        method: string;
        sound: string;
        cta: string;
    };
    /** Per-locale emphasis words (exact substrings of the headings). */
    em: { statement: string; journey: string; cta: string };
}

/** The layer whose title links to the journey section ("The journey"). */
const JOURNEY_LAYER = 2;

/**
 * Experience Design, redesign preview (15 Nov 2026, /awwwards brief approved by JEF). The same copy
 * and photos as brief v2, in nine sections with a varied rhythm instead of six photo-and-text
 * zig-zags:
 * 1 hero (unchanged) · 2 statement + who it is for (one band, no photo) · 3 the five moments as a
 * pinned scroll journey · 4 the four layers as a numbered list with one crossfading photo ·
 * 5 the method as a wide photo band · 6 three numbered ways to start · 7 sound (the one remaining
 * photo-and-text split) · 8 FAQ · 9 closing CTA.
 */
export function ExperienceDesignPreview({ lang, content, images, em }: ExperienceDesignPreviewProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const journeyImages = images.journey.map((img, i) => ({ ...img, alt: content.moments.journey_image_alts[i] }));
    // A layer slot that shows the hero photo (a stand-in, see the route) takes the hero's alt text.
    const layerImages = images.layers.map((img) => (img.src === images.hero ? { ...img, alt: content.hero.image_alt } : img));

    return (
        <>
            {/* 1. Hero: unchanged from the live page (the free-assessment split). */}
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

            {/* 2. What it is + who it is for, in one panel band: the centred statement,
                then the immersive-room photo left of the audience line and the six industries. */}
            <section id="overview" className={`relative scroll-mt-[clamp(90px,7vw,120px)] overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
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

                <div className={`${container} mt-[clamp(72px,6.4vw,112px)]`}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] border-t border-[#faf6f1]/8 pt-[clamp(72px,6.4vw,112px)] lg:grid-cols-[0.95fr_1.05fr]">
                        {/* The immersive-room photo left, in the service pages' 4:4.6 frame (JEF, 15 Nov). */}
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
                                <p className={`mb-[clamp(20px,1.59vw,28px)] text-pretty ${leadClass}`}>{content.for_whom.intro}</p>
                            </ScrollReveal>
                            <NameLinks items={content.for_whom.industries} localizedPath={localizedPath} className="border-t border-[#faf6f1]/12 sm:grid-cols-2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The five moments, as the pinned scroll journey (id="journey"). Its own title (JEF, 15 Nov), no intro line, no switch. */}
            <JourneyScroll
                heading={emphasize(content.moments.journey_title, em.journey)}
                label={content.moments.journey_title}
                columns={content.moments.columns}
                rows={content.moments.rows}
                images={journeyImages}
            />

            {/* 4. The four layers: one crossfading photo left (4:4.6), the list right. */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(36px,3vw,53px)] ${h2Class}`}>{content.layers.title}</h2>
                    </ScrollReveal>
                    <LayersList items={content.layers.items} images={layerImages} linkIndex={JOURNEY_LAYER} linkHref="#journey" />
                </div>
            </section>

            {/* 5. The method: text left, the photo right in the service pages' 4:4.6 frame. The frame
                is taller than wide, so the guest journey map on the floor stays in view and the two
                people are visibly reading it (JEF, 15 Nov: the wide band cut the map off). */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.method.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(24px,1.9vw,33px)] text-pretty ${leadClass}`}>{content.method.body}</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.14}>
                                <TextLink href={localizedPath('/blog/from-service-to-experience')}>{content.method.link}</TextLink>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal direction="right">
                            <div className={`${photoFrame} aspect-[4/4.6]`}>
                                <Image src={images.method} alt={content.method.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-[50%_75%]" />
                                <div className={photoFade} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 6. How we start: three numbered steps in order, the first one marked by a gold rule
                (motion meaning of the stagger: read them in this order); the pricing note below. */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={20}
                />
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(40px,3.6vw,64px)] ${h2Class}`}>{content.ways_to_start.title}</h2>
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.12} className="grid grid-cols-1 gap-[clamp(36px,3vw,52px)] md:grid-cols-3 md:gap-[clamp(24px,2.4vw,44px)]">
                        {content.ways_to_start.items.map((item, i) => (
                            <div key={i} className="relative pt-[clamp(22px,2vw,32px)]">
                                <div
                                    aria-hidden="true"
                                    className={`absolute inset-x-0 top-0 ${i === 0 ? 'h-[2px]' : 'h-px bg-[#faf6f1]/14'}`}
                                    style={i === 0 ? { backgroundImage: 'var(--gold-text)' } : undefined}
                                />
                                <p className={`mb-[clamp(14px,1.2vw,20px)] text-[13px] font-bold tabular-nums ${i === 0 ? 'text-[#f0bd95]' : 'text-[#faf6f1]/55'}`}>{String(i + 1).padStart(2, '0')}</p>
                                <h3 className="se-gold-text mb-[clamp(10px,0.8vw,14px)] text-[clamp(1.3rem,1.6vw,1.7rem)] font-bold leading-[1.25]">{item.title}</h3>
                                <p className={itemTextClass}>{item.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>
                    <div className="mt-[clamp(48px,4.4vw,76px)] grid grid-cols-1 gap-[clamp(14px,1.4vw,24px)] border-t border-[#faf6f1]/8 pt-[clamp(28px,2.6vw,44px)]">
                        {content.ways_to_start.paragraphs.map((paragraph, i) => (
                            <ScrollReveal key={i} delay={0.08 + i * 0.04}>
                                <p className={`text-pretty ${leadClass}`}>{paragraph}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Sound in your venue: photo left in the service pages' 4:4.6 frame (JEF, 15 Nov). */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={21}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className={`${photoFrame} aspect-[4/4.6]`}>
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

            {/* 8. Questions we often hear */}
            <section className={`relative overflow-hidden py-[clamp(108px,8.52vw,150px)] ${panel}`}>
                <div className={container}>
                    <div className="grid grid-cols-1 gap-[clamp(28px,2.22vw,39px)] lg:grid-cols-[0.75fr_1.25fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className={h2Class}>{content.faq.title}</h2>
                        </ScrollReveal>
                        <Accordion items={content.faq.items} />
                    </div>
                </div>
            </section>

            {/* 9. Closing CTA (id="cta", set by PageCTA) */}
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
