import type { Metadata } from 'next'

import SitemapPage, { generateMetadata as generateSitemapMetadata } from '@/app/[lang]/sitemap-page/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateSitemapMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekSitemapPage() {
    return <SitemapPage params={Promise.resolve({ lang: 'el' })} />
}
