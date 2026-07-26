import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getSiteUrl()

    return {
        rules: [
            // Anthropic / Claude: allow user-initiated fetches + search index, block training crawler
            { userAgent: 'Claude-User', allow: '/' },
            { userAgent: 'Claude-SearchBot', allow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
            // OpenAI: allow search + user fetches, block training crawler
            // (blocking GPTBot does not prevent ChatGPT Search visibility)
            { userAgent: 'OAI-SearchBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'OAI-AdsBot', allow: '/' },
            // Google / Gemini
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'GoogleOther', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'VertexAIBot', allow: '/' },
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
