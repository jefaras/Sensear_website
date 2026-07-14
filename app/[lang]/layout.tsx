import { notFound } from 'next/navigation'

import { type Locale } from '@/lib/i18n'

export const dynamicParams = false

export async function generateStaticParams() {
    return [{ lang: 'el' }]
}

export default async function GreekOnlyLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    if ((lang as Locale) !== 'el') {
        notFound()
    }

    return children
}
