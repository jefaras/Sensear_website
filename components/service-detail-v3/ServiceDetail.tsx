import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface Section5 {
    kicker: string;
    title: string;
    items: { title: string; description: string }[];
}

interface ServiceContent {
    hero: {
        title: string;
        subtitle: string;
        description: string;
        side_label: string;
        kicker: string;
        image_kicker: string;
        image_caption: string;
    };
    intro: { kicker: string; title: string; p1: string; p2: string };
    what_we_do: { kicker: string; title: string; items: { title: string; description: string }[] };
    perfect_for: { kicker: string; title: string; items: { title: string; description: string; link: string }[] };
    cta: { kicker: string; title: string; description: string; button: string; location: string };
}

interface ServiceDetailProps {
    lang: Locale;
    content: ServiceContent;
    /** Section 5 object (dict key differs per service: licensed/staging/identity/clarity). */
    section5: Section5;
    images: { hero: string; feature: string; forwhom: string; section5: string };
    /** Per-locale emphasis words already resolved by the route file. Empty string = no emphasis. */
    em: { statement: string; feature: string; forwhom: string; section5: string; cta: string };
    phoneLine: string;
    /** Short nav label for the hero breadcrumb (e.g. "Services"). */
    servicesNav: string;
    /** Fuller label for the ghost buttons (e.g. "View our services"). */
    servicesLink: string;
}

const GoldDotRows = ({ items }: { items: { title: string; description: string }[] }) => (
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

export function ServiceDetail({ lang, content, section5, images, em, phoneLine, servicesNav, servicesLink }: ServiceDetailProps) {
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
                            <ScrollReveal>
                                <div className="mb-[clamp(25px,1.99vw,35px)] flex items-center gap-[clamp(12px,0.91vw,16px)]">
                                    <Link
                                        href={localizedPath('/services')}
                                        className="text-[clamp(11px,0.8vw,14px)] font-semibold uppercase tracking-[0.2em] text-[#faf6f1]/50 no-underline transition-colors hover:text-[#faf6f1]"
                                    >
                                        {servicesNav}
                                    </Link>
                                    <span className="h-px w-[21px] bg-[#faf6f1]/30" />
                                    <span className="se-gold-text text-[clamp(11px,0.8vw,14px)] font-bold tracking-[0.2em]">{content.hero.kicker}</span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.12}>
                                <h1 className="mb-[clamp(18px,1.4vw,24px)] text-[clamp(2.65rem,5.29vw,4.72rem)] font-extrabold leading-[1.07] tracking-[-0.022em]">
                                    {content.hero.title}
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.18}>
                                <p className="se-gold-text font-didot mb-[clamp(23px,1.82vw,32px)] text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.2]">
                                    {content.hero.subtitle}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.24}>
                                <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[600px] text-[clamp(1.08rem,1.5vw,1.3rem)] leading-[1.6] text-[#faf6f1]/72">
                                    {content.hero.description}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                                    <MorphCTA href={localizedPath('/contact')}>{content.cta.button}</MorphCTA>
                                    <GhostButton href={localizedPath('/services')}>{servicesLink}</GhostButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="right" delay={0.4}>
                            <div className="relative">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                    <Image src={images.hero} alt={content.hero.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_48%,rgba(11,10,10,0.55))]" />
                                </div>
                                {/* Hero image caption & rotating badge — hidden for now
                                <div className="absolute bottom-[25px] left-[25px] right-[25px]">
                                    <div className="se-gold-text mb-1 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.3em]">{content.hero.image_kicker}</div>
                                    <div className="font-didot text-[clamp(1.38rem,1.57vw,1.73rem)] text-[#faf6f1]">{content.hero.image_caption}</div>
                                </div>
                                <SpinningBadge lines={['★ SENSEAR ★', 'EST · ATH']} className="absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                                */}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 2. Statement */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
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
                    <ScrollReveal delay={0.12}>
                        <p className="se-html mx-auto mb-[clamp(17px,1.31vw,23px)] max-w-[900px] text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.5] text-[#faf6f1]" dangerouslySetInnerHTML={{ __html: content.intro.p1 }} />
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <p className="se-html mx-auto max-w-[820px] text-[clamp(1.09rem,1.44vw,1.38rem)] leading-[1.65] text-[#faf6f1]/58" dangerouslySetInnerHTML={{ __html: content.intro.p2 }} />
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. Feature list (what_we_do): image left */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className="relative aspect-[4/4.4] overflow-hidden rounded-lg">
                                <Image src={images.feature} alt={content.what_we_do.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
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

            {/* 4. For whom (perfect_for): text left, image right */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }}
                    duration={20}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                                    {emphasize(content.perfect_for.title, em.forwhom)}
                                </h2>
                            </ScrollReveal>
                            <StaggerChildren staggerDelay={0.08}>
                                {content.perfect_for.items.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={localizedPath(`/${item.link}`)}
                                        className={`group block border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] no-underline ${i === content.perfect_for.items.length - 1 ? 'border-b' : ''}`}
                                    >
                                        <span className="font-didot mb-1 block text-[clamp(1.35rem,1.6vw,1.55rem)] text-[#faf6f1] transition-colors group-hover:text-[#f0bd95]">
                                            {item.title}
                                        </span>
                                        <span className="block text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.55] text-[#faf6f1]/58">{item.description}</span>
                                    </Link>
                                ))}
                            </StaggerChildren>
                        </div>
                        <ScrollReveal direction="right">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={images.forwhom} alt={content.perfect_for.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 5. Section 5 (licensed/staging/identity/clarity): image left */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '10%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={22}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2">
                        <ScrollReveal direction="left">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                <Image src={images.section5} alt={section5.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
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

            {/* 6. Contact CTA */}
            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.description}
                primaryLabel={content.cta.button}
                primaryHref={localizedPath('/contact')}
                ghostLabel={servicesLink}
                ghostHref={localizedPath('/services')}
                bgImage={images.hero}
                phoneLine={phoneLine}
                location={content.cta.location}
            />
        </>
    );
}
