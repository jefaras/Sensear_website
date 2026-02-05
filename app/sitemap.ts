import { MetadataRoute } from 'next'

// Base URL - In production this should be your actual domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
    // List of all static routes in the application
    // Note: Dynamic routes (like specific blog posts or case studies) should be fetched from your database/source here
    const routes = [
        '', // Home
        '/about',
        '/services',
        '/services/signature-playlists',
        '/services/event-soundtracks',
        '/services/sonic-strategy',
        '/services/audio-upgrades',
        '/industries',
        '/industries/hotels-resorts',
        '/industries/restaurants-bars',
        '/industries/retail-stores',
        '/industries/wellness-gyms',
        '/industries/events-experiences',
        '/industries/art-museums-fashion',
        '/case-studies',
        '/blog',
        '/contact',
    ]

    const locales = ['en', 'el']

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${BASE_URL}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            })
        })
    })

    return sitemapEntries
}
