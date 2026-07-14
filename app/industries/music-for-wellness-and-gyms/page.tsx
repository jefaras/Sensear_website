import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/industries/music-for-wellness-and-gyms/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekWellnessGymsPage() {
    return <Page params={Promise.resolve({ lang: 'en' })} />
}
