import type { Metadata } from "next";
import "@/app/globals.css";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/dictionary";
import { i18n, type Locale } from "@/lib/i18n";
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { ClientEnhancements } from "@/components/ClientEnhancements";
import { fontVariables } from "@/app/fonts";
import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site-url";

// Dynamic imports for heavy components to reduce initial bundle size
// Navbar and Footer are loaded client-side after initial render
const Navbar = dynamic(() => import("@/components/Navbar").then((mod) => mod.Navbar), {
    ssr: true, // Keep SSR for SEO and initial paint
    loading: () => (
        <div className="h-20 bg-white border-b border-gray-100 animate-pulse" aria-hidden="true">
            {/* Navbar skeleton placeholder */}
        </div>
    ),
});

const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer), {
    ssr: true, // Keep SSR for SEO
    loading: () => (
        <div className="h-64 bg-gray-900 animate-pulse" aria-hidden="true">
            {/* Footer skeleton placeholder */}
        </div>
    ),
});

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const baseUrl = getSiteUrl();
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const requestHeaders = await headers();
    const requestPath = requestHeaders.get("x-pathname");
    const normalizedPath = requestPath && requestPath.startsWith("/") ? requestPath : `/${lang}`;

    const title = dict.home?.meta?.title ?? "SensEar Music";
    const description = dict.home?.meta?.description ?? "Bespoke music curation and sonic branding.";

    const keywords = lang === 'el'
        ? ['μουσική επιμέλεια', 'sonic branding', 'ηχητική ταυτότητα', 'μουσική ξενοδοχείων', 'μουσική εστιατορίων', 'playlist επιμέλεια', 'Αθήνα', 'Ελλάδα']
        : ['music curation', 'sonic branding', 'audio identity', 'hotel music', 'restaurant music', 'playlist curation', 'Athens', 'Greece', 'hospitality music', 'retail music'];

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
            canonical: normalizedPath,
            languages: {
                'en': '/en',
                'el': '/el',
            },
        },
        openGraph: {
            type: 'website',
            locale: lang === 'el' ? 'el_GR' : 'en_US',
            url: `${baseUrl}${normalizedPath}`,
            siteName: 'SensEar Music',
            title,
            description,
            images: [
                {
                    // Note: For production, replace SVG with JPG/PNG for better social media compatibility
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
            // Note: For production, replace SVG with JPG/PNG for better social media compatibility
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
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const nonce = (await headers()).get("x-nonce") ?? undefined;
    // Cast to Locale type - middleware ensures only valid locales reach here
    const locale = lang as Locale;
    const dict = await getDictionary(locale);

    return (
        <html lang={lang} className={fontVariables}>
            <head>
                {/* Structured data only; hero media priority is handled in the homepage with next/image */}
                <OrganizationJsonLd nonce={nonce} />
                <LocalBusinessJsonLd nonce={nonce} />
                <WebSiteJsonLd nonce={nonce} />
            </head>
            <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
                    Skip to main content
                </a>
                <Navbar lang={locale} navigation={dict.navigation} />
                <main id="main-content" className="flex-grow">
                    {children}
                </main>
                <Footer lang={locale} dict={dict} />
                <ClientEnhancements />
            </body>
        </html>
    );
}
