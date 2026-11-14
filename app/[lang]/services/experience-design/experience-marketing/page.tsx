import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { localeAlternates } from '@/lib/seo';
import { getSiteUrl } from '@/lib/site-url';
import { V3Root } from '@/components/v3';
import { FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { ExperienceMarketing } from '@/components/service-detail-v3/ExperienceMarketing';

const ROUTE = '/services/experience-design/experience-marketing';

// JEF's final photos (13 Nov 2026); the hero is also the Open Graph image.
const IMAGES = {
    hero: '/images/services/experience-marketing/experience-marketing-hero.jpg',
    example: '/images/services/experience-marketing/experience-marketing-example.jpg',
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
