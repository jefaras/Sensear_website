import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { getSiteUrl } from '@/lib/site-url';
import { V3Root } from '@/components/v3';
import { FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { ExperienceDesign } from '@/components/service-detail-v3/ExperienceDesign';

const ROUTE = '/services/experience-design';

// TODO: replace image. All four are existing site photos standing in until JEF supplies
// ed-hero, ed-hotel-moments, ed-method and ed-cta (brief, section 8). Final files go to
// /images/services/experience-design/experience-design-<name>.jpg, like the other service pages.
const IMAGES = {
    hero: '/images/industries/hotels-resorts-luxury-hotel-lobby.jpg',
    hotelMoments: '/images/industries/hotels-resorts-curated-music-ambiance.jpg',
    // TODO: replace image (ed-included, ed-for-whom). Existing site photos standing in.
    included: '/images/industries/restaurants-bars-restaurant-dining-room.jpg',
    forWhom: '/images/industries/industry-restaurants-bars.jpg',
    method: '/images/about/about-unique-approach.jpg',
    cta: '/images/industries/restaurants-bars-restaurant-dining-room.jpg',
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
        openGraph: {
            type: 'website',
            siteName: 'SensEar Music',
            locale: lang === 'el' ? 'el_GR' : 'en_US',
            url: pageUrl(lang),
            title: t.meta.title,
            description: t.meta.description,
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            title: t.meta.title,
            description: t.meta.description,
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
