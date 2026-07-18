import type { Metadata } from 'next';

import ContactV3, { generateMetadata as generateContactV3Metadata } from '@/app/[lang]/contact-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateContactV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishContactV3Page() {
    return <ContactV3 params={Promise.resolve({ lang: 'en' })} />;
}
