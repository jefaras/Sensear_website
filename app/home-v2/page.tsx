import type { Metadata } from 'next';

import HomeV3, { generateMetadata as generateHomeMetadata } from '@/app/[lang]/page';

export async function generateMetadata(): Promise<Metadata> {
    const meta = await generateHomeMetadata({ params: Promise.resolve({ lang: 'en' }) });
    return { ...meta, robots: { index: false, follow: false } };
}

/**
 * Demo route for the v2 animated hero (English only). Reuses the full English
 * home page but swaps in <HeroFlow>. Not linked in nav/sitemap — for review.
 */
export default function HomeV2Demo() {
    return <HomeV3 params={Promise.resolve({ lang: 'en' })} heroVariant="flow" />;
}
