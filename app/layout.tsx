import type { Metadata } from 'next'
import { Suspense } from 'react'

import '@/app/globals.css'

import { GtmPageview } from '@/components/analytics/GtmPageview'
import { ClientEnhancements } from '@/components/ClientEnhancements'
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/JsonLd'
import { LocalizedSiteChrome } from '@/components/LocalizedSiteChrome'
import { MotionProvider } from '@/components/motion'
import { fontVariables } from '@/app/fonts'
import { getDictionary } from '@/lib/dictionary'
import { getSiteUrl } from '@/lib/site-url'

const baseUrl = getSiteUrl()
const defaultDescription = 'Bespoke music curation and sonic branding.'

export const metadata: Metadata = {
    title: {
        default: 'SensEar Music',
        template: '%s | SensEar',
    },
    description: defaultDescription,
    keywords: [
        'music curation',
        'sonic branding',
        'audio identity',
        'hotel music',
        'restaurant music',
        'playlist curation',
        'Athens',
        'Greece',
        'μουσική επιμέλεια',
        'ηχητική ταυτότητα',
    ],
    authors: [{ name: 'SensEar Music' }],
    creator: 'SensEar Music',
    publisher: 'SensEar Music',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(baseUrl),
    openGraph: {
        type: 'website',
        url: baseUrl,
        siteName: 'SensEar Music',
        title: 'SensEar Music',
        description: defaultDescription,
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
        title: 'SensEar Music',
        description: defaultDescription,
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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [elDict, enDict] = await Promise.all([
        getDictionary('el'),
        getDictionary('en'),
    ])

    // Data for the global dark FooterV3 (mounted once in LocalizedSiteChrome).
    const footerV3Data = (d: typeof enDict) => ({
        footer: d.home.footer,
        services: d.home.services.items,
        industries: d.home.expertise.items,
        email: d.home.contact_cta.secondary_email_label,
        phoneLine: d.home.contact_cta.phone_line,
    })

    return (
        <html lang="en" className={fontVariables}>
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6GPN6WM');`,
                    }}
                />
                {/* End Google Tag Manager */}
                <OrganizationJsonLd />
                <LocalBusinessJsonLd />
                <WebSiteJsonLd />
            </head>
            <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P6GPN6WM"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <MotionProvider>
                    <LocalizedSiteChrome
                        navigation={{ el: elDict.navigation, en: enDict.navigation }}
                        footerV3={{ el: footerV3Data(elDict), en: footerV3Data(enDict) }}
                    >
                        {children}
                    </LocalizedSiteChrome>
                    <Suspense fallback={null}>
                        <GtmPageview />
                    </Suspense>
                    <ClientEnhancements />
                </MotionProvider>
            </body>
        </html>
    )
}
