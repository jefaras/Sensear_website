import type { Metadata } from 'next'

import PrivacyPage, { generateMetadata as generatePrivacyMetadata } from '@/app/[lang]/privacy/page'

export async function generateMetadata(): Promise<Metadata> {
    return generatePrivacyMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekPrivacyPage() {
    return <PrivacyPage params={Promise.resolve({ lang: 'en' })} />
}
