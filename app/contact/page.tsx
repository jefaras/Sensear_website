import type { Metadata } from 'next'

import ContactPage, { generateMetadata as generateContactMetadata } from '@/app/[lang]/contact/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateContactMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekContactPage() {
    return <ContactPage params={Promise.resolve({ lang: 'en' })} />
}
