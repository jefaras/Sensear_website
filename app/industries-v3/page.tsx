import type { Metadata } from 'next';

import IndustriesV3, { generateMetadata as generateIndustriesV3Metadata } from '@/app/[lang]/industries-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateIndustriesV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishIndustriesV3Page() {
    return <IndustriesV3 params={Promise.resolve({ lang: 'en' })} />;
}
