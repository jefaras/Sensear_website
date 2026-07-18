import type { Metadata } from 'next';

import SitemapPageV3, { generateMetadata as generateSitemapV3Metadata } from '@/app/[lang]/sitemap-page-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateSitemapV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishSitemapPageV3() {
    return <SitemapPageV3 params={Promise.resolve({ lang: 'en' })} />;
}
