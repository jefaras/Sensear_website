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
const IMAGES = {
    hero: '/images/services/experience-design/experience-design-hero.jpg',
    hotelMoments: '/images/services/experience-design/experience-design-hotel-moments.jpg',
    events: '/images/services/experience-design/experience-design-events.jpg',
    layers: [
        { src: '/images/services/experience-design/experience-design-layer-story.jpg' },
        { src: '/images/services/experience-design/experience-design-layer-team.jpg' },
        { src: '/images/services/experience-design/experience-design-layer-journey.jpg', position: '50% 25%' },
        { src: '/images/services/experience-design/experience-design-layer-details.jpg', position: '50% 25%' },
    ],
    included: '/images/services/experience-design/experience-design-included.jpg',
    forWhom: '/images/services/experience-design/experience-design-for-whom.jpg',
    process: '/images/services/experience-design/experience-design-process.jpg',
    method: '/images/services/experience-design/experience-design-method.jpg',
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
