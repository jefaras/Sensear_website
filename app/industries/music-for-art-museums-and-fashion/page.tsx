import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/industries/music-for-art-museums-and-fashion/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekArtMuseumsFashionPage() {
    return <Page params={Promise.resolve({ lang: 'el' })} />
}
