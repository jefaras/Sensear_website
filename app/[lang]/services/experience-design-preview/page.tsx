import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { V3Root } from '@/components/v3';
import { ExperienceDesignPreview } from '@/components/service-detail-v3/ExperienceDesignPreview';

// Redesign preview of /services/experience-design/ (15 Nov 2026). Not linked, not in the sitemap,
// and noindex: it exists only for JEF's review. The live page and its route are unchanged.

const DIR = '/images/services/experience-design';

// The same photos as brief v2. Journey order: before, arrival, main moment, close, after. "Who it
// is for" keeps the immersive-room photo (JEF, 15 Nov), so the main moment takes the round table
// with projections, the same table as "before" once the evening is under way.
const IMAGES = {
    hero: `${DIR}/experience-design-hero.jpg`,
    forWhom: `${DIR}/experience-design-for-whom.jpg`,
    journey: [
        { src: `${DIR}/experience-design-services-block.jpg` },
        { src: `${DIR}/experience-design-process.jpg` },
        { src: `${DIR}/experience-design-included.jpg` },
        { src: `${DIR}/experience-design-hotel-moments.jpg` },
        { src: `${DIR}/experience-design-layer-journey.jpg`, position: '50% 25%' },
    ],
    layers: [
        { src: `${DIR}/experience-design-layer-story.jpg` },
        { src: `${DIR}/experience-design-layer-team.jpg` },
        // TEMPORARY: the hero photo, until JEF picks a photo for this layer (all 13 page photos
        // are in use). ExperienceDesignPreview gives it the hero's alt text.
        { src: `${DIR}/experience-design-hero.jpg` },
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

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = (await getDictionary(lang)).experience_design;
    return {
        title: `${t.meta.title} (preview)`,
        description: t.meta.description,
        robots: { index: false, follow: false },
    };
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const t = (await getDictionary(lang)).experience_design;

    return (
        <V3Root clipOverflow>
            <ExperienceDesignPreview lang={lang} content={t} images={IMAGES} em={EM[lang]} />
        </V3Root>
    );
}
