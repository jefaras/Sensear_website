import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'
import { getLocalizedPath } from '@/lib/localized-path'
import { getRouteLastModified } from '@/lib/route-lastmod'
import { SITEMAP_ROUTES, changeFrequencyForRoute, priorityForRoute } from '@/lib/sitemap-routes'

export const dynamic = 'force-static'

const BASE_URL = getSiteUrl()

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en', 'el'] as const

    const sitemapEntries: MetadataRoute.Sitemap = []

    SITEMAP_ROUTES.forEach((route) => {
        // Resolved once per route so both locales share the same date and the
        // git lookup isn't repeated.
        const lastModified = getRouteLastModified(route)

        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${BASE_URL}${getLocalizedPath(locale, route || '/')}`,
                lastModified,
                changeFrequency: changeFrequencyForRoute(route),
                priority: priorityForRoute(route),
            })
        })
    })

    return sitemapEntries
}
