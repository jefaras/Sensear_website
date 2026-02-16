# Sonic Strategy → Sonic Identity: Global Find-and-Replace Implementation Plan

## Overview

This document provides a step-by-step technical guide for renaming "Sonic Strategy" to "Sonic Identity" across the English website. The changes affect:

- **Visible text content** (headings, descriptions, CTAs)
- **Metadata** (page titles, descriptions, Open Graph tags)
- **Internal hyperlinks** (navigation, cross-page links)
- **URI slugs** (actual URL paths)

## Impact Analysis

### Files Requiring Changes

| Category | Files | Changes Required |
|----------|-------|------------------|
| **Directory Structure** | `app/[lang]/services/sonic-strategy/` | Rename to `sonic-identity/` |
| **Dictionary (EN)** | `dictionaries/en.json` | ~20+ text replacements |
| **Dictionary (EL)** | `dictionaries/el.json` | ~10+ text replacements |
| **Components** | `components/services/ServicesSectionAlt1.tsx`, `components/services/ServicesSectionAlt2.tsx` | Link href updates |
| **Pages** | `app/[lang]/services/page.tsx`, `app/[lang]/services/audio-upgrades/page.tsx` | Link href updates |
| **Sitemap** | `app/sitemap.ts` | URL path update |
| **Middleware** | `middleware.ts` | Add redirect for old URL |

### Files NOT Requiring Changes (Legacy/Build Artifacts)

The following files reference "sonic-strategy" but should NOT be modified:
- `Base44_sensear_files_EN_GR/` - Legacy source files (not used in production)
- `.next/` - Build cache (regenerated on build)
- `plans/` - Documentation files (historical reference)

---

## Phase 1: Rename Directory Structure (URI Slug Change)

### Step 1.1: Rename the Page Directory

The most critical change is renaming the actual route directory:

```bash
# From: app/[lang]/services/sonic-strategy/
# To:   app/[lang]/services/sonic-identity/
```

**Action Required:**
1. Create new directory: `app/[lang]/services/sonic-identity/`
2. Move `page.tsx` from `sonic-strategy/` to `sonic-identity/`
3. Delete the old `sonic-strategy/` directory

**Code Change in [`app/[lang]/services/sonic-identity/page.tsx`](app/[lang]/services/sonic-identity/page.tsx):**

```tsx
// Update the function name (line 7)
export default async function SonicIdentityPage({ params }: { params: Promise<{ lang: Locale }> }) {
    // ... rest of the component
}
```

---

## Phase 2: Update Dictionary Files

### Step 2.1: Update [`dictionaries/en.json`](dictionaries/en.json)

The English dictionary contains the majority of visible text. Below are all required changes:

#### Change 1: Home Page Services Section (Line 45-47)

```json
// BEFORE
{
    "title": "Sonic Strategy",
    "desc": "Your music identity, unified across all locations & communication channels.",
    "link": "services/sonic-strategy"
}

// AFTER
{
    "title": "Sonic Identity",
    "desc": "Your music identity, unified across all locations & communication channels.",
    "link": "services/sonic-identity"
}
```

#### Change 2: Services Page Metadata (Line 1466)

```json
// BEFORE
"description": "Discover our services: Signature Playlists, Sonic Strategy, Event Soundtracks, and Audio Upgrades."

// AFTER
"description": "Discover our services: Signature Playlists, Sonic Identity, Event Soundtracks, and Audio Upgrades."
```

#### Change 3: Services Page Strategy Section (Lines 1498-1504)

```json
// BEFORE
"strategy": {
    "title": "Sonic Strategy",
    "subtitle": "Your audio DNA",
    "description": "...",
    "ideal_for": "For brands with multiple locations or marketing channels.",
    "cta": "Explore Sonic Strategy",
    "link": "services/sonic-strategy"
}

// AFTER
"strategy": {
    "title": "Sonic Identity",
    "subtitle": "Your audio DNA",
    "description": "...",
    "ideal_for": "For brands with multiple locations or marketing channels.",
    "cta": "Explore Sonic Identity",
    "link": "services/sonic-identity"
}
```

#### Change 4: Services Page Summary Section (Lines 1525-1527)

```json
// BEFORE
{
    "text": "unifies your brand's sound.",
    "link_text": "Sonic Strategy",
    "link": "services/sonic-strategy"
}

// AFTER
{
    "text": "unifies your brand's sound.",
    "link_text": "Sonic Identity",
    "link": "services/sonic-identity"
}
```

#### Change 5: Services Page Breadcrumbs (Lines 1570-1572)

```json
// BEFORE
{
    "label": "Sonic Strategy",
    "link": "services/sonic-strategy"
}

// AFTER
{
    "label": "Sonic Identity",
    "link": "services/sonic-identity"
}
```

#### Change 6: Audio Upgrades CTA Section (Line 1795)

```json
// BEFORE
"sonic_strategy": "Sonic Strategy",

// AFTER
"sonic_strategy": "Sonic Identity",
```

#### Change 7: Sonic Strategy Page Metadata (Lines 1886-1892)

```json
// BEFORE
"sonic_strategy": {
    "meta": {
        "title": "Sonic Strategy | SensEar",
        "description": "Strategic sonic identity design for brands..."
    },
    "hero": {
        "title": "Sonic Strategy:",
        "subtitle": "Defining how your brand sounds.",
        ...
    }
}

// AFTER
"sonic_identity": {
    "meta": {
        "title": "Sonic Identity | SensEar",
        "description": "Strategic sonic identity design for brands..."
    },
    "hero": {
        "title": "Sonic Identity:",
        "subtitle": "Defining how your brand sounds.",
        ...
    }
}
```

**IMPORTANT:** The dictionary key `"sonic_strategy"` should be renamed to `"sonic_identity"` throughout the file.

#### Change 8: Audio Upgrades Page CTA (Lines 2052-2054)

```json
// BEFORE
"signature_playlists": "Signature Playlists",
"sonic_strategy": "Sonic Strategy",
"complete_identity": "for complete audio identity."

// AFTER
"signature_playlists": "Signature Playlists",
"sonic_identity": "Sonic Identity",
"complete_identity": "for complete audio identity."
```

### Step 2.2: Update [`dictionaries/el.json`](dictionaries/el.json)

The Greek dictionary has fewer changes since the Greek translation already uses "Hχητική Tαυτότητα" (Sonic Identity). However, URL slugs need updating:

#### Change 1: Home Page Services Link (Line 47)

```json
// BEFORE
"link": "services/sonic-strategy"

// AFTER
"link": "services/sonic-identity"
```

#### Change 2: Services Page Links (Lines 397, 1484, 1507, 1551)

Replace all occurrences of:
```json
"link": "services/sonic-strategy"
```
With:
```json
"link": "services/sonic-identity"
```

#### Change 3: Services Page Metadata (Line 1446)

```json
// BEFORE
"description": "Ανακαλύψτε τις υπηρεσίες μας: Επιμελημένες Playlists, Sonic Strategy, Μουσική Εκδηλώσεων και Ακουστική Αναβάθμιση."

// AFTER
"description": "Ανακαλύψτε τις υπηρεσίες μας: Επιμελημένες Playlists, Sonic Identity, Μουσική Εκδηλώσεων και Ακουστική Αναβάθμιση."
```

---

## Phase 3: Update Component Files

### Step 3.1: Update [`components/services/ServicesSectionAlt1.tsx`](components/services/ServicesSectionAlt1.tsx)

```tsx
// Line 52 - BEFORE
<Link href={`/${lang}/contact?interest=sonic-strategy`}>

// Line 52 - AFTER
<Link href={`/${lang}/contact?interest=sonic-identity`}>
```

### Step 3.2: Update [`components/services/ServicesSectionAlt2.tsx`](components/services/ServicesSectionAlt2.tsx)

```tsx
// Line 54 - BEFORE
<Link href={`/${lang}/contact?interest=sonic-strategy`} className="flex-shrink-0">

// Line 54 - AFTER
<Link href={`/${lang}/contact?interest=sonic-identity`} className="flex-shrink-0">
```

---

## Phase 4: Update Page Files

### Step 4.1: Update [`app/[lang]/services/page.tsx`](app/[lang]/services/page.tsx)

```tsx
// Line 232 - BEFORE
<Link href={`/${lang}/services/sonic-strategy`}>

// Line 232 - AFTER
<Link href={`/${lang}/services/sonic-identity`}>
```

### Step 4.2: Update [`app/[lang]/services/audio-upgrades/page.tsx`](app/[lang]/services/audio-upgrades/page.tsx)

```tsx
// Line 86 - BEFORE
<Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">{t.cta.sonic_strategy}</Link>

// Line 86 - AFTER
<Link href={`/${lang}/services/sonic-identity`} className="underline hover:text-black font-semibold">{t.cta.sonic_identity}</Link>
```

---

## Phase 5: Update Sitemap

### Step 5.1: Update [`app/sitemap.ts`](app/sitemap.ts)

```typescript
// Line 15 - BEFORE
'/services/sonic-strategy',

// Line 15 - AFTER
'/services/sonic-identity',
```

---

## Phase 6: Update Sitemap Page Component

### Step 7.1: Update [`app/[lang]/sitemap-page/page.tsx`](app/[lang]/sitemap-page/page.tsx)

```tsx
// Line 38 - BEFORE
{ name: dict.services_page.services.strategy.title, path: `/${lang}/services/sonic-strategy` },

// Line 38 - AFTER
{ name: dict.services_page.services.strategy.title, path: `/${lang}/services/sonic-identity` },
```

---

## Phase 7: Verification Steps

### Step 8.1: Build and Test

```bash
# Clear build cache
rm -rf .next

# Rebuild the project
npm run build

# Run development server
npm run dev
```

### Step 8.2: Verify All URLs

Test the following URLs return 200 OK:
- `http://localhost:3000/en/services/sonic-identity`
- `http://localhost:3000/el/services/sonic-identity`

Test that old URLs return 404 (since no redirect is needed for a non-live site):
- `http://localhost:3000/en/services/sonic-strategy`
- `http://localhost:3000/el/services/sonic-strategy`

### Step 7.2: Check for Broken Links

Run a link checker or manually verify:

1. **Navigation Links:**
   - Services dropdown → Sonic Identity link
   - Footer services links

2. **Cross-Page Links:**
   - Home page → Services section
   - Services page → Sonic Identity card
   - Audio Upgrades page → CTA section
   - All industry pages → Related services section

3. **Internal Content Links:**
   - Blog posts referencing sonic strategy
   - Case studies linking to services

### Step 7.3: Run Playwright Tests

```bash
npx playwright test
```

---

## Summary of Changes

| File | Type | Changes |
|------|------|---------|
| `app/[lang]/services/sonic-strategy/` | Directory | Rename to `sonic-identity/` |
| `dictionaries/en.json` | Dictionary | ~20 text/link replacements |
| `dictionaries/el.json` | Dictionary | ~10 link replacements |
| `components/services/ServicesSectionAlt1.tsx` | Component | 1 link update |
| `components/services/ServicesSectionAlt2.tsx` | Component | 1 link update |
| `app/[lang]/services/page.tsx` | Page | 1 link update |
| `app/[lang]/services/audio-upgrades/page.tsx` | Page | 1 link update |
| `app/sitemap.ts` | Config | 1 URL update |
| `app/[lang]/sitemap-page/page.tsx` | Page | 1 link update |

> **Note:** No redirect middleware is needed since the website is not yet live.

---

## Post-Implementation Checklist

- [ ] Directory renamed from `sonic-strategy` to `sonic-identity`
- [ ] All dictionary entries updated in `en.json`
- [ ] All dictionary entries updated in `el.json`
- [ ] Component link hrefs updated
- [ ] Page link hrefs updated
- [ ] Sitemap URL updated
- [ ] Build succeeds without errors
- [ ] New URL `/en/services/sonic-identity` returns 200
- [ ] Old URL `/en/services/sonic-strategy` redirects (301)
- [ ] No broken internal links
- [ ] All tests pass
