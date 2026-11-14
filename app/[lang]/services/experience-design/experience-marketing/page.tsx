import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { getSiteUrl } from '@/lib/site-url';
import { V3Root } from '@/components/v3';
import { FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { ExperienceMarketing } from '@/components/service-detail-v3/ExperienceMarketing';

const ROUTE = '/services/experience-design/experience-marketing';

// Photos of brief v2 (14 Nov 2026); the hero is also the Open Graph image. Until a new photo is in
// place under its name, its slot shows a placeholder (PENDING_IMAGES in
// components/service-detail-v3/ImagePlaceholder.tsx), and the page must not go live.
const IMAGES = {
    hero: '/images/services/experience-marketing/experience-marketing-hero.jpg',
    phases: [
        '/images/services/experience-marketing/experience-marketing-phase-before.jpg',
        '/images/services/experience-marketing/experience-marketing-phase-there.jpg',
        '/images/services/experience-marketing/experience-marketing-phase-after.jpg',
    ],
    // The vinyl bar, the v1 hero (renamed).
    sound: '/images/services/experience-marketing/experience-marketing-sound.jpg',
    cta: '/images/services/experience-marketing/experience-marketing-cta.jpg',
};

const EM = {
    el: { statement: 'Experience Marketing', cta: 'χώρο' },
    en: { statement: 'Experience Marketing', cta: 'space' },
};

const pageUrl = (lang: Locale) => (lang === 'el' ? `/el${ROUTE}/` : `${ROUTE}/`);

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = (await getDictionary(lang)).experience_marketing;
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
    const t = (await getDictionary(lang)).experience_marketing;

    return (
        <V3Root>
            <ServiceJsonLd name={t.hero.title} description={t.meta.description} url={pageUrl(lang)} areaServed="Greece" />
            <FaqJsonLd items={t.faq.items} url={pageUrl(lang)} />
            <ExperienceMarketing lang={lang} content={t} images={IMAGES} em={EM[lang]} />
        </V3Root>
    );
}
