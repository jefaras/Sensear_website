import type { Metadata } from 'next';

import ServicesV3, { generateMetadata as generateServicesV3Metadata } from '@/app/[lang]/services-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateServicesV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishServicesV3Page() {
    return <ServicesV3 params={Promise.resolve({ lang: 'en' })} />;
}
