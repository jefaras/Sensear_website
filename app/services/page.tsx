import type { Metadata } from 'next'

import ServicesPage, { generateMetadata as generateServicesMetadata } from '@/app/[lang]/services/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateServicesMetadata({ params: Promise.resolve({ lang: 'el' }) })
}

export default function GreekServicesPage() {
    return <ServicesPage params={Promise.resolve({ lang: 'el' })} />
}
