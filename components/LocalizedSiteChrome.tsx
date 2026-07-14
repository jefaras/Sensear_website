"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Locale } from "@/lib/i18n";
import { getPathLocale } from "@/lib/localized-path";

type NavigationLabels = {
    home: string;
    services: string;
    industries: string;
    case_studies: string;
    about: string;
    blog: string;
    contact: string;
};

interface LocalizedSiteChromeProps {
    children: ReactNode;
    navigation: Record<Locale, NavigationLabels>;
    footer: Record<Locale, any>;
}

export function LocalizedSiteChrome({ children, navigation, footer }: LocalizedSiteChromeProps) {
    const pathname = usePathname() || "/";
    const lang: Locale = getPathLocale(pathname);
    const isHomepageConcept = pathname === "/homepage-concept";

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
                Skip to main content
            </a>
            {!isHomepageConcept && <Navbar lang={lang} navigation={navigation[lang]} />}
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            {!isHomepageConcept && <Footer lang={lang} dict={{ footer: footer[lang] }} />}
        </>
    );
}
