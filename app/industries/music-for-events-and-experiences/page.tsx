import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/industries/music-for-events-and-experiences/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekEventsExperiencesPage() {
    return <Page params={Promise.resolve({ lang: 'en' })} />
}
