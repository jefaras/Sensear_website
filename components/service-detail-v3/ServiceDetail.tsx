import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, SplitHero, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface Section5 {
    title: string;
    items: { title: string; description: string }[];
    image_alt?: string;
}

interface ServiceContent {
    hero: {
        title: string;
        subtitle: string;
        description: string;
        side_label: string;
        explore_cta: string;
        image_kicker: string;
        image_caption: string;
        image_alt: string;
    };
    // paragraphs[0] is the one-sentence definition (lead style); the rest are body paragraphs.
    intro: { title: string; paragraphs: string[] };
    what_we_do: { title: string; items: { title: string; description: string }[]; image_alt?: string };
    perfect_for: { title: string; items: { title: string; description: string; link: string }[]; image_alt?: string };
    // Optional blocks: a page shows them only once its dictionary has them (T6, page by page).
    case_study?: { kicker: string; title: string; paragraphs: string[]; link_label?: string; link?: string; image_alt?: string };
    process?: { title: string; steps: { title: string; description: string }[] };
    pricing?: { title: string; body: string };
    cta: { title: string; description: string; button: string; location: string };
}

interface ServiceDetailProps {
    lang: Locale;
    content: ServiceContent;
    /** Section 5 object (dict key differs per service: licensed/staging/identity/clarity). */
    section5: Section5;
    images: { hero: string; feature: string; forwhom: string; section5: string; case?: string };
    /** Per-locale emphasis words already resolved by the route file. Empty string = no emphasis. */
    em: { statement: string; feature: string; forwhom: string; section5: string; cta: string };
}

export const GoldDotRows = ({ items }: { items: { title: string; description: string }[] }) => (
    <StaggerChildren staggerDelay={0.08}>
        {items.map((item, i) => (
            <div
                key={i}
                className={`flex gap-[clamp(17px,1.31vw,23px)] border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] ${i === items.length - 1 ? 'border-b' : ''}`}
            >
                <span className="mt-[0.6em] h-[7px] w-[7px] flex-none rounded-full bg-[image:var(--gold)]" aria-hidden="true" />
                <div>
                    <h3 className="mb-1.5 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold">{item.title}</h3>
                    <p className="text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/58">{item.description}</p>
                </div>
            </div>
        ))}
    </StaggerChildren>
);

export function ServiceDetail({ lang, content, section5, images, em }: ServiceDetailProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    // A title ending in a colon ("Sonic Identity:") is completed by the subtitle,
    // so both go inside the H1; it looks the same, but the H1 reads as a full phrase.
    const subtitleInH1 = content.hero.title.trim().endsWith(':');
    const section5Tall = Array.isArray(section5.items) && section5.items.length > 2;

    // Case band pieces (2b), arranged below with or without a photo.
    const caseStudy = content.case_study;
    // Pages with a case band run the zig-zag from the other side: case photo left, then right,
    // left, right for sections 3 to 5. Only desktop columns swap; phones keep the source order.
    const flip = Boolean(caseStudy);
    const caseHeader = caseStudy && (
        <ScrollReveal delay={0.06}>
            <p className="se-gold-text font-didot mb-[clamp(10px,0.8vw,14px)] text-[clamp(1.29rem,1.46vw,1.61rem)]">{caseStudy.kicker}</p>
            <h2 className={`text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] ${images.case ? 'mb-[clamp(28px,2.22vw,39px)]' : ''}`}>{caseStudy.title}</h2>
        </ScrollReveal>
    );
    const caseBody = caseStudy && (
        <>
            {caseStudy.paragraphs.map((paragraph, i) => (
                <ScrollReveal key={i} delay={0.12 + i * 0.06}>
                    <p
                        className="se-html mb-[clamp(15px,1.19vw,21px)] max-w-[680px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                </ScrollReveal>
            ))}
            {caseStudy.link && caseStudy.link_label && (
                <ScrollReveal delay={0.3}>
                    <Link
                        href={localizedPath(`/${caseStudy.link}`)}
                        className="mt-[clamp(8px,0.6vw,11px)] inline-flex items-center gap-[9px] border-b border-[#faf6f1]/25 pb-[3px] text-[clamp(13px,0.92vw,16px)] font-semibold text-[#faf6f1]/70 no-underline transition-colors hover:text-[#faf6f1]"
                    >
                        {caseStudy.link_label}
                    </Link>
                </ScrollReveal>
            )}
        </>
    );
    const subtitleClass = 'se-gold-text font-didot mb-[clamp(23px,1.82vw,32px)] text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.2]';

    return (
        <>
            {/* 1. Hero */}
            <SplitHero image={{ src: images.hero, alt: content.hero.image_alt }}>
                {subtitleInH1 ? (
                    <ScrollReveal delay={0.12}>
                        <h1>
                            <span className="mb-[clamp(18px,1.4vw,24px)] block text-[clamp(2.65rem,5.29vw,4.72rem)] font-extrabold leading-[1.07] tracking-[-0.022em]">
                                {content.hero.title}
                            </span>{' '}
                            <span className={`block font-normal ${subtitleClass}`}>{content.hero.subtitle}</span>
                        </h1>
                    </ScrollReveal>
                ) : (
                    <>
                        <ScrollReveal delay={0.12}>
                            <h1 className="mb-[clamp(18px,1.4vw,24px)] text-[clamp(2.65rem,5.29vw,4.72rem)] font-extrabold leading-[1.07] tracking-[-0.022em]">
                                {content.hero.title}
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.18}>
                            <p className={subtitleClass}>{content.hero.subtitle}</p>
                        </ScrollReveal>
                    </>
                )}
                <ScrollReveal delay={0.24}>
                    <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[600px] text-[clamp(1.08rem,1.5vw,1.3rem)] leading-[1.6] text-[#faf6f1]/72">
                        {content.hero.description}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                        <MorphCTA href="#overview">{content.hero.explore_cta}</MorphCTA>
                        <GhostButton href="#cta">{content.cta.button}</GhostButton>
                    </div>
                </ScrollReveal>
            </SplitHero>

            {/* 2. Statement — anchor target for the hero's "explore" CTA */}
            <section id="overview" className="relative scroll-mt-[clamp(90px,7vw,120px)] overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={21}
                />
                <div className="relative z-10 mx-auto max-w-[1080px] px-[clamp(27px,2.1vw,37px)] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                            {emphasize(content.intro.title, em.statement, true)}
                        </h2>
                    </ScrollReveal>
                    {content.intro.paragraphs.map((paragraph, i) => (
                        <ScrollReveal key={i} delay={0.12 + i * 0.06}>
                            <p
                                className={`se-html mx-auto ${
                                    i === 0
                                        ? 'mb-[clamp(17px,1.31vw,23px)] max-w-[900px] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.5] text-[#faf6f1]'
                                        : 'max-w-[820px] text-[clamp(1.09rem,1.44vw,1.38rem)] leading-[1.65] text-[#faf6f1]/58'
                                } ${i > 0 && i < content.intro.paragraphs.length - 1 ? 'mb-[clamp(15px,1.19vw,21px)]' : ''}`}
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 2b. Case (optional): one real venue as proof, linked to the case studies. It continues
                the statement on the same panel colour, with no divider; the divider sits above
                section 3 instead, where the colour changes back. */}
            {content.case_study && (
                // id: anchor target for the example links on the services page (e.g. /services/audio-upgrades/#case-study).
                <section id="case-study" className="relative overflow-hidden bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                    <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                        {/* With a photo: photo left, text right (text first on phones). Without one
                            (e.g. a client who cannot be named yet): title left, text right. */}
                        <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                            {images.case ? (
                                <>
                                    <div className="lg:order-2">
                                        {caseHeader}
                                        {caseBody}
                                    </div>
                                    <ScrollReveal direction="left" className="lg:order-1">
                                        <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                            <Image src={images.case} alt={content.case_study.image_alt ?? content.case_study.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                                        </div>
                                    </ScrollReveal>
                                </>
                            ) : (
                                <>
                                    <div>{caseHeader}</div>
                                    <div>{caseBody}</div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* 3. Feature list (what_we_do): image left (right when flipped). With a case band above,
                the divider sits here, between the case and the service lists, instead of above section 4. */}
            <section className={`relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)] ${content.case_study ? 'border-t border-[#faf6f1]/8' : ''}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className={`grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] ${flip ? 'lg:grid-cols-[1.05fr_0.95fr]' : 'lg:grid-cols-[0.95fr_1.05fr]'}`}>
                        <ScrollReveal direction={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : undefined}>
                            <div className="relative aspect-[4/4.4] overflow-hidden rounded-lg">
                                <Image src={images.feature} alt={content.what_we_do.image_alt ?? content.what_we_do.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                                    {emphasize(content.what_we_do.title, em.feature)}
                                </h2>
                            </ScrollReveal>
                            <GoldDotRows items={content.what_we_do.items} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. For whom (perfect_for): text left, image right (swapped when flipped). With a case
                band, sections 3 and 4 share the page colour so nothing splits the two lists. */}
            <section className={`relative overflow-hidden py-[clamp(101px,7.95vw,140px)] ${content.case_study ? '' : 'border-t border-[#faf6f1]/8 bg-[#0e0d0c]'}`}>
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={20}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className={`grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] ${flip ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.05fr_0.95fr]'}`}>
                        <div className={flip ? 'lg:order-2' : undefined}>
                            <ScrollReveal delay={0.06}>
                                <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                                    {emphasize(content.perfect_for.title, em.forwhom)}
                                </h2>
                            </ScrollReveal>
                            <StaggerChildren staggerDelay={0.08}>
                                {content.perfect_for.items.map((item, i) => {
                                    const rowClass = `block border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] no-underline ${i === content.perfect_for.items.length - 1 ? 'border-b' : ''}`;
                                    const row = (
                                        <>
                                            <span className="font-didot mb-1 block text-[clamp(1.35rem,1.6vw,1.55rem)] text-[#faf6f1] transition-colors group-hover:text-[#f0bd95]">
                                                {item.title}
                                            </span>
                                            <span className="block text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.55] text-[#faf6f1]/58">{item.description}</span>
                                        </>
                                    );
                                    // An item with no industry page is plain text, not a link to the home page.
                                    return item.link ? (
                                        <Link key={i} href={localizedPath(`/${item.link}`)} className={`group ${rowClass}`}>
                                            {row}
                                        </Link>
                                    ) : (
                                        <div key={i} className={rowClass}>
                                            {row}
                                        </div>
                                    );
                                })}
                            </StaggerChildren>
                        </div>
                        <ScrollReveal direction={flip ? 'left' : 'right'} className={flip ? 'lg:order-1' : undefined}>
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={images.forwhom} alt={content.perfect_for.image_alt ?? content.perfect_for.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 5. Section 5 (licensed/staging/identity/clarity): image left (right when flipped) */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '10%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={22}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    {/* With a full list beside it, the portrait photo gets the same tall frame as
                        sections 3 and 4; a single-item section keeps the shorter 4:3 frame. */}
                    <div className={`grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] ${!section5Tall ? 'lg:grid-cols-2' : flip ? 'lg:grid-cols-[1.05fr_0.95fr]' : 'lg:grid-cols-[0.95fr_1.05fr]'}`}>
                        <ScrollReveal direction={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : undefined}>
                            <div className={`relative overflow-hidden rounded-lg ${section5Tall ? 'aspect-[4/4.4]' : 'aspect-[4/3]'}`}>
                                <Image src={images.section5} alt={section5.image_alt ?? section5.title} fill sizes={section5Tall ? '(max-width: 1024px) 100vw, 46vw' : '(max-width: 1024px) 100vw, 50vw'} className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.45))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                                    {emphasize(section5.title, em.section5)}
                                </h2>
                            </ScrollReveal>
                            {Array.isArray(section5.items) && <GoldDotRows items={section5.items} />}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5b. Process and pricing (optional) */}
            {(content.process || content.pricing) && (
                <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                    <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                        {content.process && (
                            <>
                                <ScrollReveal delay={0.06}>
                                    <h2 className="mb-[clamp(36px,3vw,53px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">{content.process.title}</h2>
                                </ScrollReveal>
                                <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-x-[clamp(28px,2.22vw,39px)] sm:grid-cols-2 lg:grid-cols-4">
                                    {content.process.steps.map((step, i) => (
                                        <div key={i} className="h-full border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)]">
                                            <span className="se-gold-text font-didot mb-[clamp(10px,0.8vw,14px)] block text-[clamp(1.6rem,2vw,2.2rem)] leading-none">{String(i + 1).padStart(2, '0')}</span>
                                            <h3 className="mb-1.5 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold">{step.title}</h3>
                                            <p className="text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/58">{step.description}</p>
                                        </div>
                                    ))}
                                </StaggerChildren>
                            </>
                        )}
                        {content.pricing && (
                            <div className={`grid grid-cols-1 gap-[clamp(20px,1.59vw,28px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[clamp(53px,4.2vw,74px)] ${content.process ? 'mt-[clamp(70px,5.5vw,97px)]' : ''}`}>
                                <ScrollReveal delay={0.06}>
                                    <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">{content.pricing.title}</h2>
                                </ScrollReveal>
                                <ScrollReveal delay={0.12}>
                                    <p
                                        className="se-html max-w-[680px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66"
                                        dangerouslySetInnerHTML={{ __html: content.pricing.body }}
                                    />
                                </ScrollReveal>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* 6. Contact CTA */}
            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.description}
                primaryLabel={content.cta.button}
                primaryHref={localizedPath('/contact')}
                bgImage={images.hero}
                bgAlt={content.hero.image_alt}
            />
        </>
    );
}
