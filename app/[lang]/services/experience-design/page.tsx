import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { getSiteUrl } from '@/lib/site-url';
import { V3Root } from '@/components/v3';
import { FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { ExperienceDesignJourney } from '@/components/service-detail-v3/ExperienceDesignJourney';

const ROUTE = '/services/experience-design';
const DIR = '/images/services/experience-design';

// The /awwwards redesign (JEF, 15 Nov 2026), live from 16 Nov in place of brief v2.
// JEF's photos. "Who it is for": the red "Ring for drinks" wall. Journey, in order:
// before = the party flyer, arrival = the entrance on the white horse, main moment = the feather
// dancers, close = walking out through the screen corridor, after = the woman on the speedboat.
// Every photo is portrait, so each carries the focal point the 4:4.6 frames should keep.
const IMAGES = {
    hero: `${DIR}/experience-design-hero.jpg`,
    // Framed high, so the "Ring for drinks" sign stays in the 4:4.6 crop.
    forWhom: { src: `${DIR}/experience-design-for-whom-drinks.jpg`, position: '50% 10%' },
    journey: [
        { src: `${DIR}/experience-design-journey-before-flyer.webp`, position: '50% 20%' },
        { src: `${DIR}/experience-design-journey-arrival-horse.jpg`, position: '50% 35%' },
        { src: `${DIR}/experience-design-journey-main-dancers.jpg`, position: '50% 45%' },
        { src: `${DIR}/experience-design-journey-close-corridor.jpg`, position: '50% 55%' },
        { src: `${DIR}/experience-design-layer-journey.jpg`, position: '50% 40%' },
    ],
    layers: [
        { src: `${DIR}/experience-design-layer-story.jpg` },
        { src: `${DIR}/experience-design-layer-team.jpg` },
        // The disco-ball pool table; ExperienceDesignJourney gives it its own alt text.
        { src: `${DIR}/experience-design-layer-journey-disco.jpg` },
        { src: `${DIR}/experience-design-layer-details.jpg`, position: '50% 25%' },
    ],
    method: `${DIR}/experience-design-method.jpg`,
    sound: `${DIR}/experience-design-events.jpg`,
    cta: `${DIR}/experience-design-cta.jpg`,
};

const EM = {
    el: { statement: 'Σχεδιασμός Εμπειρίας', journey: 'στιγμές', cta: 'χώρο' },
    en: { statement: 'Experience Design', journey: 'moments', cta: 'venue' },
};

const pageUrl = (lang: Locale) => (lang === 'el' ? `/el${ROUTE}/` : `${ROUTE}/`);

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = (await getDictionary(lang)).experience_design;
    const image = { url: IMAGES.hero, alt: t.hero.image_alt };

    return {
        alternates: localeAlternates(lang, ROUTE),
        title: t.meta.title,
        description: t.meta.description,
        // A page-level openGraph replaces the root one, so it repeats the site-wide fields.
        // Title and description are left out: Next.js fills them from the page's own, with the suffix.
        openGraph: {
            type: 'website',
            siteName: 'SensEar Music',
            locale: lang === 'el' ? 'el_GR' : 'en_US',
            url: pageUrl(lang),
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            images: [`${getSiteUrl()}${IMAGES.hero}`],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const t = (await getDictionary(lang)).experience_design;

    return (
        // clipOverflow: the pinned journey needs position: sticky, which overflow-x: hidden breaks.
        <V3Root clipOverflow>
            <ServiceJsonLd name={t.hero.title} description={t.meta.description} url={pageUrl(lang)} areaServed="Greece" />
            <FaqJsonLd items={t.faq.items} url={pageUrl(lang)} />
            <ExperienceDesignJourney lang={lang} content={t} images={IMAGES} em={EM[lang]} />
        </V3Root>
    );
}
