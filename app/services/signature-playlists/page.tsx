import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/services/signature-playlists/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekSignaturePlaylistsPage() {
    return <Page params={Promise.resolve({ lang: 'en' })} />
}
