/**
 * Greek-only sitemap, served at /sitemap-el.xml.
 *
 * Why a second sitemap when /sitemap.xml already contains every Greek URL:
 * Search Console reports "Discovered pages" and indexing status *per submitted
 * sitemap*. With one combined sitemap the Greek indexing rate is invisible — it
 * has to be inferred from the Pages report. A separate Greek sitemap gives a
 * number that can be tracked directly, and submitting a new sitemap is itself a
 * crawl trigger for the URLs inside it.
 *
 * Overlap with /sitemap.xml is intentional and allowed: a URL may appear in more
 * than one sitemap. Keep /sitemap.xml as the complete list so the already-submitted
 * sitemap is never narrowed.
 *
 * Written as a route handler rather than Next's `generateSitemaps()` because that
 * helper emits `/sitemap/<id>.xml` paths, and we want the plain filename.
 * `dynamic = 'force-static'` makes it export to `out/sitemap-el.xml`.
 */

import { getSiteUrl } from '@/lib/site-url'
import { getLocalizedPath } from '@/lib/localized-path'
import { getRouteLastModified } from '@/lib/route-lastmod'
import { SITEMAP_ROUTES, changeFrequencyForRoute, priorityForRoute } from '@/lib/sitemap-routes'

export const dynamic = 'force-static'

const BASE_URL = getSiteUrl()

/** Minimal XML text escaping. Our URLs are ASCII slugs, but never emit raw input. */
function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

function buildGreekSitemap(): string {
    const entries = SITEMAP_ROUTES.map((route) => {
        const loc = `${BASE_URL}${getLocalizedPath('el', route || '/')}`

        return [
            '<url>',
            `<loc>${escapeXml(loc)}</loc>`,
            `<lastmod>${getRouteLastModified(route).toISOString()}</lastmod>`,
            `<changefreq>${changeFrequencyForRoute(route)}</changefreq>`,
            `<priority>${priorityForRoute(route)}</priority>`,
            '</url>',
        ].join('\n')
    })

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entries,
        '</urlset>',
        '',
    ].join('\n')
}

export async function GET() {
    return new Response(buildGreekSitemap(), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    })
}
