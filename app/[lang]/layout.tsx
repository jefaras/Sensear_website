import { notFound } from 'next/navigation'

import { type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
    return [{ lang: 'en' }]
}

export default async function EnglishOnlyLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    if ((lang as Locale) !== 'en') {
        notFound()
    }

    return children
}
