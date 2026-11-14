import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { getSiteUrl } from '@/lib/site-url';
import { V3Root } from '@/components/v3';
import { FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { ExperienceDesign } from '@/components/service-detail-v3/ExperienceDesign';

const ROUTE = '/services/experience-design';

// JEF's chosen photos. A replacement keeps the same file name, so nothing here changes.
// Brief v2 (14 Nov 2026) moves them between sections. The journey card keeps the live page's
// speedboat photo and alt text (JEF, 14 Nov), in place of the new photo the brief planned.
const IMAGES = {
    hero: '/images/services/experience-design/experience-design-hero.jpg',
    // Visitors in the room with blue light projections (v1 "Perfect for").
    forWhom: '/images/services/experience-design/experience-design-for-whom.jpg',
    // The evening reception in the stone quarry (v1 hotel section).
    moments: '/images/services/experience-design/experience-design-hotel-moments.jpg',
    layers: [
        { src: '/images/services/experience-design/experience-design-layer-story.jpg' },
        { src: '/images/services/experience-design/experience-design-layer-team.jpg' },
        { src: '/images/services/experience-design/experience-design-layer-journey.jpg', position: '50% 25%' },
        { src: '/images/services/experience-design/experience-design-layer-details.jpg', position: '50% 25%' },
    ],
    method: '/images/services/experience-design/experience-design-method.jpg',
    // The round dinner table with wall projections (v1 "What's included").
    included: '/images/services/experience-design/experience-design-included.jpg',
    // The orchestra in the shell by the sea (v1 event section).
    sound: '/images/services/experience-design/experience-design-events.jpg',
    cta: '/images/services/experience-design/experience-design-cta.jpg',
};

const EM = {
    el: { statement: 'Σχεδιασμός Εμπειρίας', cta: 'χώρο' },
    en: { statement: 'Experience Design', cta: 'venue' },
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
        <V3Root>
            <ServiceJsonLd name={t.hero.title} description={t.meta.description} url={pageUrl(lang)} areaServed="Greece" />
            <FaqJsonLd items={t.faq.items} url={pageUrl(lang)} />
            <ExperienceDesign lang={lang} content={t} images={IMAGES} em={EM[lang]} />
        </V3Root>
    );
}
