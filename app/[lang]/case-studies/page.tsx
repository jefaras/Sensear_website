import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { localeAlternates } from '@/lib/seo';
import { DriftOrb, PageCTA, V3Root, emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';
import { CaseRow, Hero } from '@/components/case-studies-v3';

/* v3 embed styling: brand-gold player + cleaner chrome. Preserves the exact
   track URLs + secret_tokens from the live page; only the color and display
   flags change (per the Case Studies v3 spec). */
const goldify = (scUrl: string) =>
    scUrl
        .replace('color=%23ff5500', 'color=%23f0bd95')
        .replace('hide_related=false', 'hide_related=true')
        .replace('show_comments=true', 'show_comments=false')
        .replace('show_teaser=true', 'show_teaser=false');

/* scUrl/scLink are optional: a case study without a published track yet renders
   a "coming soon" placeholder instead of the SoundCloud embed. */
type CaseAsset = { img: string; scUrl?: string; scLink?: string };

const RAW_ASSETS: CaseAsset[] = [
    {
        img: '/images/case-studies/case-study-beach-house.webp',
        scUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2232613925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        scLink: 'https://soundcloud.com/sensear_music/beach-house-antiparos-morning-playlist-sample',
    },
    {
        img: '/images/case-studies/case-study-pelicanos.webp',
        scUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292320%3Fsecret_token%3Ds-nZKQRmscC5Z&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        scLink: 'https://soundcloud.com/sensear_music/pelicanos-sifnos-jazzy-playlist-1/s-nZKQRmscC5Z',
    },
    {
        img: '/images/case-studies/case-study-yam.jpg',
        scUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292317%3Fsecret_token%3Ds-un8Lzx2ibpI&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        scLink: 'https://soundcloud.com/sensear_music/yam-antiparos-night-playlist-2/s-un8Lzx2ibpI',
    },
    {
        img: '/images/case-studies/case-study-hera.webp',
        // SoundCloud clip pending; CaseRow shows the localized "coming soon" note.
    },
    {
        img: '/images/case-studies/case-study-levantis.webp',
        scUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2231959406&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        scLink: 'https://soundcloud.com/sensear_music/levantis-sample',
    },
];

const assetMap = RAW_ASSETS.map((a) => ({ ...a, scUrl: a.scUrl ? goldify(a.scUrl) : undefined }));

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        alternates: localeAlternates(lang, '/case-studies'),
        title: dict.case_studies.meta.title,
        description: dict.case_studies.meta.description,
    };
}

export default async function CaseStudiesV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.case_studies;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const em = lang === 'el'
        ? { intro: 'πέρα', cases: 'διαδρομές', cta: 'ξεκινά εδώ' }
        : { intro: 'beyond', cases: 'journeys', cta: 'starts here' };

    return (
        <V3Root>
            <Hero lang={lang} hero={content.hero} />

            {/* Statement */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={21}
                />
                <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(27px,2.1vw,37px)] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="mb-[clamp(28px,2.22vw,39px)] text-[clamp(2.19rem,4.6vw,3.68rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                            {emphasize(content.intro.title, em.intro)}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <p className="mx-auto mb-[clamp(17px,1.31vw,23px)] max-w-[1010px] text-[clamp(1.38rem,2.3vw,1.84rem)] leading-[1.5] text-[#faf6f1]">
                            {content.intro.p1}
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.18}>
                        <p className="mx-auto max-w-[870px] text-[clamp(1.17rem,1.73vw,1.4rem)] leading-[1.65] text-[#faf6f1]/58">
                            {content.intro.p2}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Cases */}
            <section id="cases" className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mx-auto mb-[clamp(72px,5.68vw,100px)] max-w-[900px] text-center">
                        <ScrollReveal delay={0.06}>
                            <h2
                                className="se-html mb-[clamp(15px,1.19vw,21px)] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
                                dangerouslySetInnerHTML={{ __html: content.cases.title }}
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">{content.cases.subtitle}</p>
                        </ScrollReveal>
                    </div>

                    {content.items.map((item: any, i: number) => (
                        <CaseRow
                            key={item.title}
                            item={item}
                            image={assetMap[i].img}
                            scUrl={assetMap[i].scUrl}
                            scLink={assetMap[i].scLink}
                            listenPrefix={content.cases.listen_prefix}
                            comingSoonLabel={content.cases.coming_soon}
                            imageSide={i % 2 === 0 ? 'left' : 'right'}
                            isLast={i === content.items.length - 1}
                        />
                    ))}
                </div>
            </section>

            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.subtitle}
                primaryLabel={content.cta.contact}
                primaryHref={localizedPath('/contact')}
                ghostLabel={content.cta.services}
                ghostHref={localizedPath('/services')}
                bgImage="/images/case-studies/case-studies-hero.jpg"
            />
        </V3Root>
    );
}
