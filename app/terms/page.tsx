import type { Metadata } from 'next'

import TermsPage, { generateMetadata as generateTermsMetadata } from '@/app/[lang]/terms/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateTermsMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekTermsPage() {
    return <TermsPage params={Promise.resolve({ lang: 'el' })} />
}
