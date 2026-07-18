import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { V3Root } from '@/components/v3';
import { IndustryDetail } from './IndustryDetail';

type EmSet = { intro: string; method: string; forwhom: string; results: string; cta: string; portfolio: string };

interface SlugConfig {
    ns: string;
    em: { el: EmSet; en: EmSet };
}

// Emphasis words are exact substrings of each locale's actual dict heading. EN
// what_we_do/ideal_for/how_we_help headings are generic ("What we do"/"Ideal for"/
// "How we help"), so they carry no em word (''), matching the existing copy; EL
// headings are descriptive and take the design's gold-italic word.
export const INDUSTRY_CONFIG: Record<string, SlugConfig> = {
    'music-for-hotels-and-resorts': {
        ns: 'hotels_resorts',
        em: {
            el: { intro: 'φιλοξενίας', method: 'εμπειρία', forwhom: 'premium', results: 'ξενοδοχείο', cta: 'ήχο', portfolio: 'πράξη' },
            en: { intro: 'journey', method: '', forwhom: '', results: '', cta: 'atmosphere', portfolio: 'action' },
        },
    },
    'music-for-restaurants-and-bars': {
        ns: 'restaurants_bars',
        em: {
            el: { intro: 'καλεσμένος', method: 'εστίασης', forwhom: 'εστιατόρια', results: 'μεταμορφώνει', cta: 'ατμόσφαιρα', portfolio: 'πράξη' },
            en: { intro: 'atmosphere', method: '', forwhom: '', results: '', cta: 'atmosphere', portfolio: 'action' },
        },
    },
    'music-for-events-and-experiences': {
        ns: 'events_experiences',
        em: {
            el: { intro: 'χρονισμό', method: 'σχεδιασμός', forwhom: 'events', results: 'ρυθμός', cta: 'ατμόσφαιρα', portfolio: '' },
            en: { intro: 'timing', method: '', forwhom: '', results: '', cta: 'atmosphere', portfolio: '' },
        },
    },
    'music-for-retail-stores': {
        ns: 'retail_stores',
        em: {
            el: { intro: 'ταξίδι', method: 'λιανικής', forwhom: 'retail', results: 'κατάστημά', cta: 'εμπειρία', portfolio: '' },
            en: { intro: 'journey', method: '', forwhom: '', results: '', cta: 'atmosphere', portfolio: '' },
        },
    },
    'music-for-wellness-and-gyms': {
        ns: 'wellness_gyms',
        em: {
            el: { intro: 'σώμα', method: 'ευεξίας', forwhom: 'premium', results: 'χώρο', cta: 'ατμόσφαιρα', portfolio: '' },
            en: { intro: 'mind', method: '', forwhom: '', results: '', cta: 'atmosphere', portfolio: '' },
        },
    },
    'music-for-art-museums-and-fashion': {
        ns: 'art_museums_fashion',
        em: {
            el: { intro: 'ακρίβεια', method: 'μόδα', forwhom: 'μόδα', results: 'event', cta: 'ατμόσφαιρα', portfolio: 'πράξη' },
            en: { intro: 'precision', method: '', forwhom: '', results: '', cta: 'atmosphere', portfolio: 'action' },
        },
    },
};

export async function buildIndustryMetadata(lang: Locale, slug: string): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const t = (dict as any)[INDUSTRY_CONFIG[slug].ns];
    return {
        title: t.meta?.title ?? t.hero.title,
        description: t.meta?.description ?? t.hero.description,
        openGraph: {
            title: t.meta?.title ?? t.hero.title,
            description: t.meta?.description ?? t.hero.description,
            type: 'website',
            ...(t.hero.image && { images: [{ url: t.hero.image, width: 1200, height: 630, alt: t.hero.image_alt }] }),
        },
    };
}

export async function IndustryDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
    const dict = await getDictionary(lang);
    const cfg = INDUSTRY_CONFIG[slug];
    const content = (dict as any)[cfg.ns];
    const home = dict.home;

    return (
        <V3Root>
            <IndustryDetail
                lang={lang}
                content={content}
                em={cfg.em[lang]}
                phoneLine={home.contact_cta.phone_line}
                industriesNav={dict.navigation.industries}
                servicesLink={home.contact_cta.services_link}
            />
        </V3Root>
    );
}
