// JSON-LD Structured Data Components for SEO

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music'

export function OrganizationJsonLd() {
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SensEar Music',
        description: 'Bespoke music curation and sonic branding for hospitality and retail businesses.',
        url: baseUrl,
        logo: `${baseUrl}/images/brand/sensear-logo-color.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+30-697-699-4212',
            contactType: 'customer service',
            email: 'hello@sensear.music',
            availableLanguage: ['English', 'Greek']
        },
        sameAs: [
            'https://www.instagram.com/sensear.music',
            'https://www.linkedin.com/company/sensear-music',
            'https://soundcloud.com/sensear_music'
        ],
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
        description: 'Bespoke music curation and sonic branding services for hospitality, retail, and events.',
        url: baseUrl,
        telephone: '+30-697-699-4212',
        email: 'hello@sensear.music',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'GR'
        },
        priceRange: '$$',
        openingHours: 'Mo-Fr 09:00-18:00',
        image: `${baseUrl}/images/brand/sensear-logo-color.png`
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
        description: 'Bespoke music curation and sonic branding for hospitality and retail businesses.',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/en/blog?search={search_term_string}`
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
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
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
        }
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
