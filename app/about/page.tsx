import type { Metadata } from 'next'

import AboutPage, { generateMetadata as generateAboutMetadata } from '@/app/[lang]/about/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateAboutMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekAboutPage() {
    return <AboutPage params={Promise.resolve({ lang: 'el' })} />
}
