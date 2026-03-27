import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'
import { getLocalizedPath } from '@/lib/localized-path'

const BASE_URL = getSiteUrl()

export default function sitemap(): MetadataRoute.Sitemap {
    // List of all static routes in the application
    const routes = [
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
    ]

    const locales = ['el', 'en'] as const

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${BASE_URL}${getLocalizedPath(locale, route || '/')}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'daily' : 'weekly',
                priority: route === '' ? 1 : route.includes('/services/') || route.includes('/industries/') ? 0.9 : 0.8,
            })
        })
    })

    return sitemapEntries
}
