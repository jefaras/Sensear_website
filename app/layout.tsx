import type { Metadata } from 'next'
import { headers } from 'next/headers'

import '@/app/globals.css'

import { ClientEnhancements } from '@/components/ClientEnhancements'
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/JsonLd'
import { Footer } from '@/components/Footer'
import { MotionProvider } from '@/components/motion'
import { Navbar } from '@/components/Navbar'
import { fontVariables } from '@/app/fonts'
import { getDictionary } from '@/lib/dictionary'
import { getPathLocale, getAlternatePath } from '@/lib/localized-path'
import { getSiteUrl } from '@/lib/site-url'

export async function generateMetadata(): Promise<Metadata> {
    const requestHeaders = await headers()
    const pathname = requestHeaders.get('x-pathname') ?? '/'
    const lang = getPathLocale(pathname)
    const canonicalPath = getAlternatePath(pathname, lang)
    const baseUrl = getSiteUrl()
    const dict = await getDictionary(lang)

    const title = dict.home?.meta?.title ?? 'SensEar Music'
    const description = dict.home?.meta?.description ?? 'Bespoke music curation and sonic branding.'

    const keywords = lang === 'el'
        ? ['μουσική επιμέλεια', 'sonic branding', 'ηχητική ταυτότητα', 'μουσική ξενοδοχείων', 'μουσική εστιατορίων', 'playlist επιμέλεια', 'Αθήνα', 'Ελλάδα']
        : ['music curation', 'sonic branding', 'audio identity', 'hotel music', 'restaurant music', 'playlist curation', 'Athens', 'Greece', 'hospitality music', 'retail music']

    return {
        title: {
            default: title,
            template: '%s | SensEar',
        },
        description,
        keywords,
        authors: [{ name: 'SensEar Music' }],
        creator: 'SensEar Music',
        publisher: 'SensEar Music',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: canonicalPath,
            languages: {
                en: getAlternatePath(pathname, 'en'),
                el: getAlternatePath(pathname, 'el'),
                'x-default': getAlternatePath(pathname, 'el'),
            },
        },
        openGraph: {
            type: 'website',
            locale: lang === 'el' ? 'el_GR' : 'en_US',
            url: `${baseUrl}${canonicalPath}`,
            siteName: 'SensEar Music',
            title,
            description,
            images: [
                {
                    url: `${baseUrl}/images/brand/sensear-og-image.svg`,
                    width: 1200,
                    height: 630,
                    alt: 'SensEar Music - Bespoke Music Curation',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${baseUrl}/images/brand/sensear-og-image.svg`],
            creator: '@sensear_music',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const requestHeaders = await headers()
    const pathname = requestHeaders.get('x-pathname') ?? '/'
    const lang = getPathLocale(pathname)
    const nonce = requestHeaders.get('x-nonce') ?? undefined
    const dict = await getDictionary(lang)

    return (
        <html lang={lang} className={fontVariables}>
            <head>
                <OrganizationJsonLd nonce={nonce} />
                <LocalBusinessJsonLd nonce={nonce} />
                <WebSiteJsonLd nonce={nonce} />
            </head>
            <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
                <MotionProvider>
                    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
                        Skip to main content
                    </a>
                    <Navbar lang={lang} navigation={dict.navigation} />
                    <main id="main-content" className="flex-grow">
                        {children}
                    </main>
                    <Footer lang={lang} dict={dict} />
                    <ClientEnhancements />
                </MotionProvider>
            </body>
        </html>
    )
}
