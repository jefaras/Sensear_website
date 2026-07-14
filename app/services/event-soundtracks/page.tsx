import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/services/event-soundtracks/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekEventSoundtracksPage() {
    return <Page params={Promise.resolve({ lang: 'en' })} />
}
