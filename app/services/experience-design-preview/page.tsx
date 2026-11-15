import type { Metadata } from 'next'

import Page, { generateMetadata as generatePageMetadata } from '@/app/[lang]/services/experience-design-preview/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function EnglishExperienceDesignPreviewPage() {
    return <Page params={Promise.resolve({ lang: 'en' })} />
}
