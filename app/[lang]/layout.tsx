import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";
import { i18n, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: "SensEar Music",
    description: "Bespoke music curation and sonic branding.",
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <html lang={lang}>
            <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
                <Navbar lang={lang} navigation={dict.navigation} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer lang={lang} dict={dict} />
            </body>
        </html>
    );
}
