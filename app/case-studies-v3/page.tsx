import type { Metadata } from 'next';

import CaseStudiesV3, { generateMetadata as generateCaseStudiesV3Metadata } from '@/app/[lang]/case-studies-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateCaseStudiesV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishCaseStudiesV3Page() {
    return <CaseStudiesV3 params={Promise.resolve({ lang: 'en' })} />;
}
