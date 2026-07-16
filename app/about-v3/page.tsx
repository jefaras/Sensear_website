import type { Metadata } from 'next';

import AboutV3, { generateMetadata as generateAboutV3Metadata } from '@/app/[lang]/about-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateAboutV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishAboutV3Page() {
    return <AboutV3 params={Promise.resolve({ lang: 'en' })} />;
}
