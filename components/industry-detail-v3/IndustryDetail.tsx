import Image from 'next/image';
import { Check } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { DriftOrb, GhostButton, MorphCTA, PageCTA, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface Item { title: string; description: string }

interface IndustryContent {
    hero: { title: string; subtitle: string; description: string; image: string; image_alt: string; side_label: string; kicker: string; explore_cta: string; image_kicker: string; image_caption: string };
    intro: { kicker: string; title: string; p1: string; p2: string };
    what_we_do: { kicker: string; title: string; subtitle: string; image: string; items: Item[] };
    ideal_for: { kicker: string; title: string; image: string; items: Item[] };
    how_we_help: {
        kicker: string; title: string; image: string; items: Item[];
        cta_title?: string; cta_description?: string; cta_button?: string; cta_link?: string;
    };
    cta: { kicker: string; title: string; description: string; button: string; location: string };
}

type EmSet = { intro: string; method: string; forwhom: string; results: string; cta: string; portfolio: string };

interface IndustryDetailProps {
    lang: Locale;
    content: IndustryContent;
    em: EmSet;
}

export function IndustryDetail({ lang, content, em }: IndustryDetailProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const hw = content.how_we_help;
    const hasPortfolio = Boolean(hw.cta_title && hw.cta_button && hw.cta_link);

    return (
        <>
            {/* 1. Hero */}
            <section className="relative flex min-h-[92vh] items-center overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(58px,4.6vw,81px)]">
                <DriftOrb className="h-[60vw] w-[60vw] max-h-[870px] max-w-[870px]" style={{ top: '-10%', right: '-5%', background: 'radial-gradient(circle,rgba(240,189,149,0.17),rgba(240,189,149,0) 62%)' }} duration={16} />
                <DriftOrb className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]" style={{ bottom: '-15%', left: '-10%', background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)' }} duration={22} reverse />
                <div className="mx-auto w-full max-w-[min(1760px,100%)] pl-[clamp(20px,1.59vw,28px)] pr-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] lg:pl-[clamp(70px,5.51vw,97px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                        <div>
                            <ScrollReveal delay={0.12}>
                                <h1 className="mb-[clamp(18px,1.4vw,24px)] text-[clamp(2.65rem,5.29vw,4.72rem)] font-extrabold leading-[1.07] tracking-[-0.022em]">
                                    {content.hero.title}
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.18}>
                                <p className="se-gold-text font-didot mb-[clamp(23px,1.82vw,32px)] text-[clamp(1.5rem,2.8vw,2.3rem)] leading-[1.2]">
                                    {content.hero.subtitle}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.24}>
                                <p className="mb-[clamp(35px,2.73vw,48px)] max-w-[540px] text-[clamp(1.05rem,1.5vw,1.28rem)] leading-[1.6] text-[#faf6f1]/72">
                                    {content.hero.description}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <div className="flex flex-wrap items-center gap-[clamp(23px,1.82vw,32px)]">
                                    <MorphCTA href="#overview">{content.hero.explore_cta}</MorphCTA>
                                    <GhostButton href="#cta">{content.cta.button}</GhostButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="right" delay={0.4}>
                            <div className="relative">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                    <Image src={content.hero.image} alt={content.hero.image_alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
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

            {/* 2. Statement — anchor target for the hero's "explore" CTA */}
            <section id="overview" className="relative scroll-mt-[clamp(90px,7vw,120px)] overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]" style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }} duration={21} />
                <div className="relative z-10 mx-auto max-w-[1080px] px-[clamp(27px,2.1vw,37px)] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="se-html mb-[clamp(28px,2.22vw,39px)] text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                            {emphasize(content.intro.title, em.intro, true)}
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

            {/* 3. Method (what_we_do): image left */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]" style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }} duration={23} />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
                        <ScrollReveal direction="left">
                            <div className="relative aspect-[4/4.4] overflow-hidden rounded-lg">
                                <Image src={content.what_we_do.image} alt={content.what_we_do.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className="mb-[clamp(15px,1.19vw,21px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                                    {emphasize(content.what_we_do.title, em.method)}
                                </h2>
                            </ScrollReveal>
                            {content.what_we_do.subtitle && (
                                <ScrollReveal delay={0.1}>
                                    <p className="mb-[clamp(28px,2.22vw,39px)] max-w-[600px] text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">{content.what_we_do.subtitle}</p>
                                </ScrollReveal>
                            )}
                            <StaggerChildren staggerDelay={0.08}>
                                {content.what_we_do.items.map((item, i) => (
                                    <div key={i} className={`flex gap-[clamp(17px,1.31vw,23px)] border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] ${i === content.what_we_do.items.length - 1 ? 'border-b' : ''}`}>
                                        <span className="mt-[0.6em] h-[7px] w-[7px] flex-none rounded-full bg-[image:var(--gold)]" aria-hidden="true" />
                                        <div>
                                            <h3 className="mb-1.5 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold">{item.title}</h3>
                                            <p className="se-html text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/58" dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    </div>
                                ))}
                            </StaggerChildren>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. For whom (ideal_for): text left, image right */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]" style={{ bottom: '4%', left: '-6%', background: 'radial-gradient(circle,rgba(250,235,227,0.07),rgba(250,235,227,0) 62%)' }} duration={20} />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <ScrollReveal delay={0.06}>
                                <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                                    {emphasize(content.ideal_for.title, em.forwhom)}
                                </h2>
                            </ScrollReveal>
                            <StaggerChildren staggerDelay={0.08}>
                                {content.ideal_for.items.map((item, i) => (
                                    <div key={i} className={`border-t border-[#faf6f1]/12 py-[clamp(20px,1.59vw,28px)] ${i === content.ideal_for.items.length - 1 ? 'border-b' : ''}`}>
                                        <span className="font-didot mb-1 block text-[clamp(1.35rem,1.6vw,1.55rem)] text-[#faf6f1]">{item.title}</span>
                                        <span className="block text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.55] text-[#faf6f1]/58">{item.description}</span>
                                    </div>
                                ))}
                            </StaggerChildren>
                        </div>
                        <ScrollReveal direction="right">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={content.ideal_for.image} alt={content.ideal_for.title} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 5. Results + portfolio mini-CTA (how_we_help) */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]" style={{ top: '10%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }} duration={22} />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mx-auto mb-[clamp(46px,3.64vw,64px)] max-w-[880px] text-center">
                        <ScrollReveal delay={0.06}>
                            <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                                {emphasize(content.how_we_help.title, em.results)}
                            </h2>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2">
                        <ScrollReveal direction="left">
                            <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
                                <Image src={content.how_we_help.image} alt={content.how_we_help.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                        </ScrollReveal>
                        <div>
                            <StaggerChildren staggerDelay={0.08}>
                                {content.how_we_help.items.map((item, i) => (
                                    <div key={i} className={`flex items-start gap-[clamp(17px,1.31vw,23px)] border-t border-[#faf6f1]/12 py-[clamp(18px,1.42vw,25px)] ${i === content.how_we_help.items.length - 1 ? 'border-b' : ''}`}>
                                        <span className="mt-1 flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full border border-[#f0bd95]/40" aria-hidden="true">
                                            <Check className="h-[13px] w-[13px] text-[#f0bd95]" strokeWidth={2.4} />
                                        </span>
                                        <div>
                                            <h3 className="mb-1.5 text-[clamp(1.12rem,1.28vw,1.4rem)] font-bold">{item.title}</h3>
                                            <p className="text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/62">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </StaggerChildren>
                        </div>
                    </div>

                    {hasPortfolio && (
                        <div className="mx-auto mt-[clamp(64px,5vw,90px)] max-w-[680px] text-center">
                            <ScrollReveal>
                                <h3 className="mb-[clamp(13px,1.02vw,18px)] text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-[1.12] tracking-[-0.02em]">
                                    {emphasize(hw.cta_title!, em.portfolio)}
                                </h3>
                            </ScrollReveal>
                            <ScrollReveal delay={0.08}>
                                <p className="mx-auto mb-[clamp(23px,1.82vw,32px)] max-w-[560px] text-[clamp(1rem,1.15vw,1.2rem)] leading-[1.6] text-[#faf6f1]/65">{hw.cta_description}</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.16}>
                                <GhostButton href={localizedPath(`/${hw.cta_link}`)}>{hw.cta_button}</GhostButton>
                            </ScrollReveal>
                        </div>
                    )}
                </div>
            </section>

            {/* 6. Contact CTA */}
            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.description}
                primaryLabel={content.cta.button}
                primaryHref={localizedPath('/contact')}
                bgImage={content.hero.image}
            />
        </>
    );
}
