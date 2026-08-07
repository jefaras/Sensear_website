/**
 * Single source of truth for the routes that appear in the sitemaps.
 *
 * Consumed by `app/sitemap.ts` (all locales) and `app/sitemap-el.xml/route.ts`
 * (Greek only). Keeping one list means the two sitemaps cannot drift apart when a
 * page is added or removed.
 *
 * Route format: leading slash, no trailing slash; `''` is the home page. This
 * matches what `getLocalizedPath` and `getRouteLastModified` expect.
 */

export const SITEMAP_ROUTES = [
    '', // Home
    '/about',
    '/services',
    '/services/signature-playlists',
    '/services/event-soundtracks',
    '/services/sonic-identity',
    '/services/audio-upgrades',
    '/industries',
    '/industries/music-for-hotels-and-resorts',
    '/industries/music-for-restaurants-and-bars',
    '/industries/music-for-retail-stores',
    '/industries/music-for-wellness-and-gyms',
    '/industries/music-for-events-and-experiences',
    '/industries/music-for-art-museums-and-fashion',
    '/case-studies',
    '/blog',
    '/blog/how-top-hospitality-brands-design-sound',
    '/blog/three-reasons-make-music-hospitality',
    '/blog/brand-music-converts-browsers-buyers',
    '/blog/what-exactly-does-music-curator-do',
    '/blog/music-curation-cycle-venues',
    '/blog/building-brand-people-can-hear',
    '/blog/background-music-shapes-customer-behavior',
    '/blog/service-environment-shapes-wait-time',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/sitemap-page',
] as const

export type SitemapRoute = (typeof SITEMAP_ROUTES)[number]

/** Home is `daily`, everything else `weekly`. */
export function changeFrequencyForRoute(route: string): 'daily' | 'weekly' {
    return route === '' ? 'daily' : 'weekly'
}

/** Home 1.0, service/industry detail pages 0.9, everything else 0.8. */
export function priorityForRoute(route: string): number {
    if (route === '') return 1

    return route.includes('/services/') || route.includes('/industries/') ? 0.9 : 0.8
}
