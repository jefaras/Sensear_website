import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/services/audio-upgrades/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekAudioUpgradesPage() {
    return <Page params={Promise.resolve({ lang: 'el' })} />
}
