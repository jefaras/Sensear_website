import type { Metadata } from 'next'

import FaqV3, { generateMetadata as generateFaqV3Metadata } from '@/app/[lang]/faq-v3/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateFaqV3Metadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekFaqV3Page() {
    return <FaqV3 params={Promise.resolve({ lang: 'el' })} />
}
