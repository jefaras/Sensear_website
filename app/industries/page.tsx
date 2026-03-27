import type { Metadata } from 'next'

import IndustriesPage, { generateMetadata as generateIndustriesMetadata } from '@/app/[lang]/industries/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateIndustriesMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekIndustriesPage() {
    return <IndustriesPage params={Promise.resolve({ lang: 'el' })} />
}
