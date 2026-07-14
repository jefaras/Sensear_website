import type { Metadata } from 'next'

import FAQPage, { generateMetadata as generateFaqMetadata } from '@/app/[lang]/faq/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateFaqMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekFaqPage() {
    return <FAQPage params={Promise.resolve({ lang: 'en' })} />
}
