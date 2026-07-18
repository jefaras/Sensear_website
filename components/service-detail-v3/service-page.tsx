import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { V3Root } from '@/components/v3';
import { ServiceDetail } from './ServiceDetail';

type EmSet = { statement: string; feature: string; forwhom: string; section5: string; cta: string };

interface SlugConfig {
    ns: string;
    section5Key: 'licensed' | 'staging' | 'identity' | 'clarity';
    images: { hero: string; feature: string; forwhom: string; section5: string };
    em: { el: EmSet; en: EmSet };
}

const img = (slug: string, name: string) => `/images/services/${slug}/${slug}-${name}.jpg`;

// Per-service config. Emphasis words are exact substrings of each locale's actual
// dict heading (EN what_we_do/perfect_for are generic "What we do"/"Perfect for",
// so they carry no emphasis word — '' is a graceful no-op).
export const SERVICE_CONFIG: Record<string, SlugConfig> = {
    'signature-playlists': {
        ns: 'signature_playlists',
        section5Key: 'licensed',
        images: { hero: img('signature-playlists', 'hero'), feature: img('signature-playlists', 'curation'), forwhom: img('signature-playlists', 'hotel-room'), section5: img('signature-playlists', 'vinyl-collection') },
        em: {
            el: { statement: 'ατμόσφαιρα', feature: 'curation', forwhom: 'premium', section5: 'επαγγελματική', cta: 'ήχο' },
            en: { statement: 'atmosphere', feature: '', forwhom: '', section5: 'business', cta: 'sound' },
        },
    },
    'event-soundtracks': {
        ns: 'event_soundtracks',
        section5Key: 'staging',
        images: { hero: img('event-soundtracks', 'hero'), feature: img('event-soundtracks', 'planning'), forwhom: img('event-soundtracks', 'venue'), section5: img('event-soundtracks', 'process') },
        em: {
            el: { statement: 'εκδήλωση', feature: 'premium', forwhom: 'premium', section5: 'Επαγγελματική', cta: 'ταξίδι' },
            en: { statement: 'timeline', feature: '', forwhom: '', section5: 'staging', cta: 'journey' },
        },
    },
    'sonic-identity': {
        ns: 'sonic_identity',
        section5Key: 'identity',
        images: { hero: img('sonic-identity', 'hero'), feature: img('sonic-identity', 'workshop'), forwhom: img('sonic-identity', 'development'), section5: img('sonic-identity', 'implementation') },
        em: {
            el: { statement: 'ταυτότητα', feature: 'branding', forwhom: 'brands', section5: 'ταυτότητα', cta: 'ταυτότητα' },
            en: { statement: 'identity', feature: '', forwhom: '', section5: 'identity', cta: 'identity' },
        },
    },
    'audio-upgrades': {
        ns: 'audio_upgrades',
        section5Key: 'clarity',
        images: { hero: img('audio-upgrades', 'hero'), feature: img('audio-upgrades', 'assessment'), forwhom: img('audio-upgrades', 'venue'), section5: img('audio-upgrades', 'clarity') },
        em: {
            el: { statement: 'φιλόξενη', feature: 'αναβάθμισης', forwhom: 'χώρους', section5: 'καθαρότητα', cta: 'ήχο' },
            en: { statement: 'atmosphere', feature: '', forwhom: '', section5: 'clarity', cta: 'sound' },
        },
    },
};

export async function buildServiceMetadata(lang: Locale, slug: string): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const t = (dict as any)[SERVICE_CONFIG[slug].ns];
    return { title: t.meta?.title ?? t.hero.title, description: t.meta?.description ?? t.hero.description };
}

export async function ServiceDetailPage({ lang, slug }: { lang: Locale; slug: string }) {
    const dict = await getDictionary(lang);
    const cfg = SERVICE_CONFIG[slug];
    const content = (dict as any)[cfg.ns];
    const home = dict.home;

    return (
        <V3Root>
            <ServiceDetail
                lang={lang}
                content={content}
                section5={content[cfg.section5Key]}
                images={cfg.images}
                em={cfg.em[lang]}
                phoneLine={home.contact_cta.phone_line}
                servicesNav={dict.navigation.services}
                servicesLink={home.contact_cta.services_link}
            />
        </V3Root>
    );
}
