import type { Metadata } from "next";
import "@/app/globals.css";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/dictionary";
import { i18n, type Locale } from "@/lib/i18n";
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { fontVariables } from "@/app/fonts";
import { ScrollToTop } from "@/components/ScrollToTop";

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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music';
    
    const title = lang === 'el' 
        ? 'SensEar Music - Μουσική Επιμέλεια & Sonic Branding'
        : 'SensEar Music - Bespoke Music Curation & Sonic Branding';
    
    const description = lang === 'el'
        ? 'Εξειδικευμένη μουσική επιμέλεια και sonic branding για ξενοδοχεία, εστιατόρια, retail και εκδηλώσεις. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του brand σας.'
        : 'Bespoke music curation and sonic branding for hospitality, retail, and events. We craft your brand\'s unique sonic identity through tailored playlists and audio experiences.';

    const keywords = lang === 'el'
        ? ['μουσική επιμέλεια', 'sonic branding', 'ηχητική ταυτότητα', 'μουσική ξενοδοχείων', 'μουσική εστιατορίων', 'playlist επιμέλεια', 'Αθήνα', 'Ελλάδα']
        : ['music curation', 'sonic branding', 'audio identity', 'hotel music', 'restaurant music', 'playlist curation', 'Athens', 'Greece', 'hospitality music', 'retail music'];

    return {
        title: {
            default: title,
            template: '%s | SensEar Music',
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
            canonical: `/${lang}`,
            languages: {
                'en': '/en',
                'el': '/el',
            },
        },
        openGraph: {
            type: 'website',
            locale: lang === 'el' ? 'el_GR' : 'en_US',
            url: `${baseUrl}/${lang}`,
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
    // Cast to Locale type - middleware ensures only valid locales reach here
    const locale = lang as Locale;
    const dict = await getDictionary(locale);

    return (
        <html lang={lang} className={fontVariables}>
            <head>
                {/* Preconnect to Supabase CDN for faster image loading */}
                <link rel="preconnect" href="https://qtrypzzcjebvfcihiynt.supabase.co" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://qtrypzzcjebvfcihiynt.supabase.co" />
                {/* Preload critical images for LCP optimization */}
                <link rel="preload" as="image" href="/images/backgrounds/background-texture-warm-silver.jpg" />
                <link rel="preload" as="image" href="/images/carousel/carousel-home-interior.jpg" />
                {/* Critical CSS for above-the-fold content - reduces render blocking */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            /* Critical hero section styles */
                            .bg-\\[\\#faebe3\\]{background-color:#faebe3}
                            .min-h-\\[90vh\\]{min-height:90vh}
                            .pt-32{padding-top:8rem}
                            .pb-32{padding-bottom:8rem}
                            .slide-up-1{opacity:0;animation:slideUp 0.8s ease-out forwards}
                            .slide-up-2{opacity:0;animation:slideUp 0.8s ease-out 0.2s forwards}
                            .slide-up-4{opacity:0;animation:slideUp 0.8s ease-out 0.6s forwards}
                            @keyframes slideUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
                            .text-\\[2\\.2rem\\]{font-size:2.2rem}
                            .font-extrabold{font-weight:800}
                            .leading-\\[1\\.1\\]{line-height:1.1}
                            .text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity,1))}
                            .mb-6{margin-bottom:1.5rem}
                            .text-lg{font-size:1.125rem;line-height:1.75rem}
                            .text-black\\/65{color:#000000a6}
                            .leading-relaxed{line-height:1.625}
                            .max-w-xl{max-width:36rem}
                            .flex{display:flex}
                            .flex-col{flex-direction:column}
                            .gap-4{gap:1rem}
                            .sm\\:flex-row{flex-direction:row}
                            .w-full{width:100%}
                            .sm\\:w-auto{width:auto}
                            .px-10{padding-left:2.5rem;padding-right:2.5rem}
                            .py-6{padding-top:1.5rem;padding-bottom:1.5rem}
                            .text-xl{font-size:1.25rem;line-height:1.75rem}
                            .md\\:text-2xl{font-size:1.5rem;line-height:2rem}
                            .md\\:text-\\[4rem\\]{font-size:4rem}
                            .lg\\:text-\\[4\\.8rem\\]{font-size:4.8rem}
                            .sm\\:text-\\[3\\.2rem\\]{font-size:3.2rem}
                            @media(min-width:640px){.sm\\:text-\\[3\\.2rem\\]{font-size:3.2rem}.sm\\:flex-row{flex-direction:row}.sm\\:w-auto{width:auto}}
                            @media(min-width:768px){.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-\\[4rem\\]{font-size:4rem}}
                            @media(min-width:1024px){.lg\\:text-\\[4\\.8rem\\]{font-size:4.8rem}}
                        `,
                    }}
                />
                {/* Self-hosted fonts via next/font/google - no external requests needed */}
                <OrganizationJsonLd />
                <LocalBusinessJsonLd />
                <WebSiteJsonLd />
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
                <ScrollToTop />
            </body>
        </html>
    );
}
