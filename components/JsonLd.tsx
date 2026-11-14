// JSON-LD Structured Data Components for SEO
import { getSiteUrl } from "@/lib/site-url";

const baseUrl = getSiteUrl();

const sameAs = [
    'https://www.instagram.com/sensear.music',
    'https://www.linkedin.com/company/sensear-music',
    'https://soundcloud.com/sensear_music',
    'https://www.facebook.com/61575909304249/',
    // Google Business Profile "SensEar.Music"
    'https://maps.google.com/?cid=13226295565397032732'
];

export function OrganizationJsonLd() {
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SensEar Music',
        description: 'SensEar is a music curation studio in Athens for hotels, restaurants, retail and events.',
        url: baseUrl,
        logo: `${baseUrl}/images/brand/sensear-logo-color.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+30-697-699-4212',
            contactType: 'customer service',
            email: 'hello@sensear.music',
            availableLanguage: ['English', 'Greek']
        },
        sameAs,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'GR'
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
    )
}

export function LocalBusinessJsonLd() {
    const business = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'SensEar Music',
        description: 'Music curation studio in Athens: Signature Playlists, Event Soundtracks, Sonic Identity, Audio Upgrades and Experience Design for hotels, restaurants, retail and events across Greece.',
        url: baseUrl,
        telephone: '+30-697-699-4212',
        email: 'hello@sensear.music',
        // No street address: the only real one is private (see CLAUDE.md).
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Athens',
            addressCountry: 'GR'
        },
        // Matches the Google Business Profile hours; Sunday closed.
        openingHours: ['Mo-Fr 10:00-21:00', 'Sa 10:00-17:00'],
        image: `${baseUrl}/images/brand/sensear-logo-color.png`,
        sameAs
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
        />
    )
}

export function WebSiteJsonLd() {
    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SensEar Music',
        description: 'SensEar is a music curation studio in Athens for hotels, restaurants, retail and events.',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/blog/?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
    )
}

interface BreadcrumbItem {
    name: string
    url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
    )
}

interface ServiceJsonLdProps {
    name: string
    description: string
    url: string
    /** Country name, e.g. "Greece". Omitted from the markup when not given. */
    areaServed?: string
}

export function ServiceJsonLd({ name, description, url, areaServed }: ServiceJsonLdProps) {
    const service = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: `${baseUrl}${url}`,
        provider: {
            '@type': 'Organization',
            name: 'SensEar Music',
            url: baseUrl
        },
        ...(areaServed && { areaServed: { '@type': 'Country', name: areaServed } })
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
    )
}

interface ArticleJsonLdProps {
    title: string
    description: string
    url: string
    image?: string
    datePublished?: string
    dateModified?: string
    author?: string
}

export function ArticleJsonLd({ 
    title, 
    description, 
    url, 
    image, 
    datePublished, 
    dateModified,
    author = 'SensEar Music'
}: ArticleJsonLdProps) {
    const article = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: `${baseUrl}${url}`,
        ...(image && { image: `${baseUrl}${image}` }),
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        author: {
            '@type': 'Organization',
            name: author,
            url: baseUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'SensEar Music',
            url: baseUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/images/brand/sensear-logo-color.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}${url}`
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
        />
    )
}

interface FaqJsonLdItem {
    question: string
    answer: string
}

/**
 * FAQPage structured data, server-rendered so it is present without executing JavaScript.
 *
 * Google restricted FAQ rich results to authoritative government and health sites, so this
 * will not produce a rich result and is not worth expanding the page for. It is emitted
 * because it states the questions and answers as data for any consumer that reads
 * structured data, and because the markup must mirror the visible copy: both come from the
 * same dictionary entries, so they cannot drift apart.
 */
export function FaqJsonLd({ items, url }: { items: FaqJsonLdItem[]; url: string }) {
    const faq = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${baseUrl}${url}`,
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
    )
}
