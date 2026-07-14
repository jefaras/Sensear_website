import type { Metadata } from 'next'

import CaseStudiesPage, { generateMetadata as generateCaseStudiesMetadata } from '@/app/[lang]/case-studies/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateCaseStudiesMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekCaseStudiesPage() {
    return <CaseStudiesPage params={Promise.resolve({ lang: 'en' })} />
}
