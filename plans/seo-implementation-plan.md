# SEO Implementation Plan - Remaining Critical Fixes

## Overview
Based on the Lighthouse SEO audit, the following critical issues need to be addressed:

1. **robots.txt returning HTTP 500** - Critical issue preventing proper crawling
2. **Missing Open Graph tags** - Social media sharing not optimized
3. **Missing Twitter Card tags** - Twitter sharing not optimized
4. **Missing canonical URLs** - Potential duplicate content issues
5. **Missing hreflang tags** - Bilingual SEO not implemented
6. **Missing structured data** - No rich results in search

## Root Cause Analysis

### robots.txt 500 Error
The middleware is intercepting the `/robots.txt` request and trying to redirect it to a language-prefixed URL (e.g., `/el/robots.txt`). This causes an error because:
1. There is no `app/robots.ts` file to handle the robots.txt route
2. The middleware matcher doesn't exclude static special files

### Terminal Error
```
TypeError: dictionaries[locale] is not a function
at getDictionary (lib\dictionary.ts:9:75)
```
This error occurs when the middleware redirects `/robots.txt` to `/el/robots.txt`, and the layout tries to load a dictionary for a non-existent locale.

## Implementation Plan

### Phase 1: Fix robots.txt (Critical)

#### Step 1.1: Create `app/robots.ts`
Create a Next.js special file for robots.txt generation:

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music'
    
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
```

#### Step 1.2: Update Middleware Matcher
Update `middleware.ts` to exclude special files:

```typescript
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml|.*\\..*).*)'],
}
```

### Phase 2: Add Meta Tags (High Priority)

#### Step 2.1: Update Layout with Open Graph Tags
Update `app/[lang]/layout.tsx` to include:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
    const { lang } = await params
    const dict = await getDictionary(lang)
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music'
    
    return {
        title: {
            default: 'SensEar Music',
            template: '%s | SensEar Music'
        },
        description: dict.meta?.description || 'Bespoke music curation and sonic branding for hospitality and retail.',
        openGraph: {
            type: 'website',
            locale: lang === 'el' ? 'el_GR' : 'en_US',
            url: `${baseUrl}/${lang}`,
            siteName: 'SensEar Music',
            title: 'SensEar Music - Bespoke Music Curation',
            description: 'Bespoke music curation and sonic branding for hospitality and retail.',
            images: [
                {
                    url: `${baseUrl}/images/brand/sensear-og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'SensEar Music Curation'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'SensEar Music - Bespoke Music Curation',
            description: 'Bespoke music curation and sonic branding for hospitality and retail.',
            images: [`${baseUrl}/images/brand/sensear-og-image.jpg`]
        },
        alternates: {
            canonical: `${baseUrl}/${lang}`,
            languages: {
                'en': `${baseUrl}/en`,
                'el': `${baseUrl}/el`
            }
        },
        robots: {
            index: true,
            follow: true
        }
    }
}
```

### Phase 3: Structured Data (High Priority)

#### Step 3.1: Create JSON-LD Component
Create `components/JsonLd.tsx`:

```typescript
// components/JsonLd.tsx
export function OrganizationJsonLd() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music'
    
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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sensear.music'
    
    const business = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'SensEar Music',
        description: 'Bespoke music curation and sonic branding services.',
        url: baseUrl,
        telephone: '+30-697-699-4212',
        email: 'hello@sensear.music',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'GR'
        },
        priceRange: '$$',
        openingHours: 'Mo-Fr 09:00-18:00'
    }
    
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
        />
    )
}
```

#### Step 3.2: Add to Layout
Add the JSON-LD component to `app/[lang]/layout.tsx`:

```typescript
import { OrganizationJsonLd, LocalBusinessJsonLd } from '@/components/JsonLd'

// In the return statement:
<html lang={lang}>
    <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
    </head>
    <body>
        {/* ... */}
    </body>
</html>
```

### Phase 4: Accessibility Improvements (Medium Priority)

#### Step 4.1: Add ARIA Labels to Navigation
Update `components/Navbar.tsx`:

- Add `role="navigation"` and `aria-label="Main navigation"` to nav element
- Add `aria-expanded` to mobile menu toggle
- Add `aria-label` to all icon buttons

#### Step 4.2: Add ARIA Labels to Footer
Update `components/Footer.tsx`:

- Add `role="contentinfo"` to footer element
- Add `aria-label` to social media links

#### Step 4.3: Add Skip Links
Create a skip link for keyboard navigation:

```typescript
// Add to layout.tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
    Skip to main content
</a>
<main id="main-content" className="flex-grow">
    {children}
</main>
```

### Phase 5: Create OG Image (Medium Priority)

Create an Open Graph image at `public/images/brand/sensear-og-image.jpg`:
- Dimensions: 1200x630 pixels
- Include logo and tagline
- Use brand colors

## Files to Create/Modify

### New Files
1. `app/robots.ts` - Robots.txt generator
2. `components/JsonLd.tsx` - Structured data components
3. `public/images/brand/sensear-og-image.jpg` - OG image (needs design)

### Files to Modify
1. `middleware.ts` - Exclude robots.txt and sitemap.xml
2. `app/[lang]/layout.tsx` - Add meta tags and JSON-LD
3. `components/Navbar.tsx` - Add ARIA labels
4. `components/Footer.tsx` - Add ARIA labels

## Verification Steps

After implementation:
1. Test `/robots.txt` returns valid content (not 500)
2. Test `/sitemap.xml` returns valid XML
3. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
4. Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
5. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
6. Run Lighthouse SEO audit again

## Expected Results

After implementing all fixes:
- Lighthouse SEO score should increase from current to 90+
- robots.txt should return HTTP 200 with valid content
- Open Graph tags should enable proper social sharing
- Structured data should enable rich results in Google Search
- Accessibility improvements should increase Lighthouse Accessibility score
