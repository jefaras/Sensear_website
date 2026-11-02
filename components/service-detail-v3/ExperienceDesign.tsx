import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Accordion } from '@/components/faq-v3';
import { GoldDotRows } from './ServiceDetail';

type Item = { title: string; description: string };
type LinkedItem = Item & { link: string };

export interface ExperienceDesignContent {
    hero: { title: string; subtitle: string; description: string; explore_cta: string; audit_cta: string; image_alt: string };
    intro: { title: string; paragraphs: string[] };
    hotel_moments: { title: string; intro: string; items: Item[]; closing: string; image_alt: string };
    layers: { title: string; intro: string; items: Item[] };
    what_we_do: { title: string; items: Item[]; image_alt?: string };
    perfect_for: { title: string; items: LinkedItem[]; image_alt?: string };
    process: { title: string; steps: Item[] };
    ways_to_start: { title: string; items: Item[] };
    pricing: { title: string; body: string };
    method: { title: string; intro: string; items: Item[]; closing: string; image_alt: string };
    sound_fit: { title: string; intro: string; items: LinkedItem[] };
    faq: { title: string; items: { question: string; answer: string }[] };
    cta: { title: string; description: string; button: string };
}

interface ExperienceDesignProps {
    lang: Locale;
    content: ExperienceDesignContent;
    images: { hero: string; hotelMoments: string; included: string; forWhom: string; method: string; cta: string };
    /** Per-locale emphasis words (exact substrings of the headings). */
    em: { statement: string; cta: string };
}

// Shared section shells, matching ServiceDetail.
const container = 'relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]';
const panel = 'border-t border-[#faf6f1]/8 bg-[#0e0d0c]';
const h2Class = 'text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]';
const leadClass = 'max-w-[680px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66';
const h3Class = 'mb-1.5 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold';
const itemTextClass = 'text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/58';

/** "Perfect for"-style rows, laid out in columns because the section carries no photo. */
const LinkedRows = ({ items, localizedPath, className }: { items: LinkedItem[]; localizedPath: (path: string) => string; className: string }) => (
    <StaggerChildren staggerDelay={0.08} className={`grid grid-cols-1 gap-x-[clamp(28px,2.22vw,39px)] ${className}`}>
        {items.map((item, i) => (
            <Link key={i} href={localizedPath(`/${item.link}`)} className="group block h-full border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] no-underline">
                <span className="font-didot mb-1 block text-[clamp(1.35rem,1.6vw,1.55rem)] text-[#faf6f1] transition-colors group-hover:text-[#f0bd95]">{item.title}</span>
                <span className="block text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.55] text-[#faf6f1]/58">{item.description}</span>
            </Link>
        ))}
    </StaggerChildren>
);

export function ExperienceDesign({ lang, content, images, em }: ExperienceDesignProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);

    return (
        <>
            {/* 1. Hero */}
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
                    <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                        <div>
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

                        <ScrollReveal direction="right" delay={0.4}>
                            <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                <Image src={images.hero} alt={content.hero.image_alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_48%,rgba(11,10,10,0.55))]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 2. What Experience Design is: anchor target for the hero's "explore" CTA */}
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

            {/* 3. What it can look like in a hotel: image left, moments right.
                JEF: replace this section with a real case study, or add one after it, once a project is completed. */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className="relative aspect-[4/4.4] overflow-hidden rounded-lg">
                                <Image src={images.hotelMoments} alt={content.hotel_moments.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.hotel_moments.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(28px,2.22vw,39px)] ${leadClass}`}>{content.hotel_moments.intro}</p>
                            </ScrollReveal>
                            <GoldDotRows items={content.hotel_moments.items} />
                            <ScrollReveal delay={0.1}>
                                <p className={`mt-[clamp(24px,1.9vw,33px)] ${leadClass}`}>{content.hotel_moments.closing}</p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Four layers we design */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.layers.title}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className={`mb-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.layers.intro}</p>
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-x-[clamp(28px,2.22vw,39px)] sm:grid-cols-2 lg:grid-cols-4">
                        {content.layers.items.map((item, i) => (
                            <div key={i} className="h-full border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)]">
                                <span className="mb-[clamp(14px,1.1vw,19px)] block h-[7px] w-[7px] rounded-full bg-[image:var(--gold)]" aria-hidden="true" />
                                <h3 className={h3Class}>{item.title}</h3>
                                <p className={itemTextClass}>{item.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* 5. What's included: list left, image right (image first on phones). The page's photo
                sections alternate sides: hotel moments left, this one right, perfect for left, method right. */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', left: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={20}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <ScrollReveal direction="right" className="lg:order-2">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={images.included} alt={content.what_we_do.image_alt ?? content.what_we_do.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(28px,2.22vw,39px)] ${h2Class}`}>{content.what_we_do.title}</h2>
                            </ScrollReveal>
                            <GoldDotRows items={content.what_we_do.items} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Perfect for: image left, rows right (rows first on phones), as in the flipped service pages */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '4%', right: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={21}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="lg:order-2">
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(28px,2.22vw,39px)] ${h2Class}`}>{content.perfect_for.title}</h2>
                            </ScrollReveal>
                            <StaggerChildren staggerDelay={0.08}>
                                {content.perfect_for.items.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={localizedPath(`/${item.link}`)}
                                        className={`group block border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] no-underline ${i === content.perfect_for.items.length - 1 ? 'border-b' : ''}`}
                                    >
                                        <span className="font-didot mb-1 block text-[clamp(1.35rem,1.6vw,1.55rem)] text-[#faf6f1] transition-colors group-hover:text-[#f0bd95]">{item.title}</span>
                                        <span className="block text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.55] text-[#faf6f1]/58">{item.description}</span>
                                    </Link>
                                ))}
                            </StaggerChildren>
                        </div>
                        <ScrollReveal direction="left" className="lg:order-1">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={images.forWhom} alt={content.perfect_for.image_alt ?? content.perfect_for.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 7. From first call to launch: numbered steps, as in the service pages' process block */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '10%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={22}
                />
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(36px,3vw,53px)] ${h2Class}`}>{content.process.title}</h2>
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-x-[clamp(28px,2.22vw,39px)] sm:grid-cols-2 lg:grid-cols-3">
                        {content.process.steps.map((step, i) => (
                            <div key={i} className="h-full border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)]">
                                <span className="se-gold-text font-didot mb-[clamp(10px,0.8vw,14px)] block text-[clamp(1.6rem,2vw,2.2rem)] leading-none">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className={h3Class}>{step.title}</h3>
                                <p className={itemTextClass}>{step.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* 8. Ways to start (three cards) and 9. How pricing works */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(36px,3vw,53px)] ${h2Class}`}>{content.ways_to_start.title}</h2>
                    </ScrollReveal>
                    <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-[clamp(17px,1.31vw,23px)] md:grid-cols-3">
                        {content.ways_to_start.items.map((item, i) => (
                            <div key={i} className="h-full rounded-[12px] border border-[#faf6f1]/10 bg-[rgba(250,246,241,0.04)] p-[clamp(22px,1.82vw,32px)]">
                                <h3 className="se-gold-text mb-[clamp(10px,0.8vw,14px)] text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold">{item.title}</h3>
                                <p className={itemTextClass}>{item.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>

                    <div className="mt-[clamp(70px,5.5vw,97px)] grid grid-cols-1 gap-[clamp(20px,1.59vw,28px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[clamp(53px,4.2vw,74px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className={h2Class}>{content.pricing.title}</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className={leadClass}>{content.pricing.body}</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 10. The method behind it: text left, image right */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={20}
                />
                <div className={container}>
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.method.title}</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className={`mb-[clamp(28px,2.22vw,39px)] ${leadClass}`}>{content.method.intro}</p>
                            </ScrollReveal>
                            <GoldDotRows items={content.method.items} />
                            <ScrollReveal delay={0.1}>
                                <p className={`mt-[clamp(24px,1.9vw,33px)] ${leadClass}`}>{content.method.closing}</p>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal direction="right">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={images.method} alt={content.method.image_alt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 11. Where sound fits: links to the four sound services */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${panel}`}>
                <div className={container}>
                    <ScrollReveal delay={0.06}>
                        <h2 className={`mb-[clamp(17px,1.31vw,23px)] ${h2Class}`}>{content.sound_fit.title}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className={`mb-[clamp(36px,3vw,53px)] ${leadClass}`}>{content.sound_fit.intro}</p>
                    </ScrollReveal>
                    <LinkedRows items={content.sound_fit.items} localizedPath={localizedPath} className="sm:grid-cols-2 lg:grid-cols-4" />
                </div>
            </section>

            {/* 12. Questions we often hear */}
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

            {/* 13. Closing CTA (id="cta", set by PageCTA) */}
            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.description}
                primaryLabel={content.cta.button}
                primaryHref={localizedPath('/contact')}
                bgImage={images.cta}
            />
        </>
    );
}
