import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

/**
 * Canonical + hreflang alternates for a page that exists in both locales.
 * English is the default locale served at unprefixed root URLs; Greek lives
 * under /el. `path` is the unprefixed route (e.g. "/about" or "/"), and the
 * returned URLs are relative — `metadataBase` in the root layout resolves
 * them to absolute https://sensear.music URLs.
 */
export function localeAlternates(lang: Locale, path: string): Metadata["alternates"] {
    const suffix = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
    const en = suffix;
    const el = suffix === "/" ? "/el/" : `/el${suffix}`;

    return {
        canonical: lang === "el" ? el : en,
        languages: {
            en,
            el,
            "x-default": en,
        },
    };
}
