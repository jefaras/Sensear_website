import { MetadataRoute } from 'next'

// Base URL - In production this should be your actual domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music'

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
        '/contact',
        '/faq',
        '/privacy',
        '/terms',
        '/sitemap-page',
    ]

    const locales = ['en', 'el']

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${BASE_URL}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'daily' : 'weekly',
                priority: route === '' ? 1 : route.includes('/services/') || route.includes('/industries/') ? 0.9 : 0.8,
            })
        })
    })

    return sitemapEntries
}
