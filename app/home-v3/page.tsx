import type { Metadata } from 'next';

import HomeV3, { generateMetadata as generateHomeV3Metadata } from '@/app/[lang]/home-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateHomeV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishHomeV3Page() {
    return <HomeV3 params={Promise.resolve({ lang: 'en' })} />;
}
