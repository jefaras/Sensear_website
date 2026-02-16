# H2 Line Height Audit and Fix Plan

## Executive Summary

This audit identifies **62 occurrences** of H2 elements with the font size pattern `text-[2.7rem] md:text-[3.45rem]` that exhibit excessive line height (~82.8px). The fix involves reducing the line height to 62.1px (25% reduction) for visual consistency.

## Line Height Analysis

| Property | Current Value | Target Value | Change |
|----------|---------------|--------------|--------|
| Desktop Font Size | 3.45rem (55.2px) | 3.45rem (55.2px) | No change |
| Line Height | ~82.8px (1.5 ratio) | 62.1px (1.125 ratio) | -25% |
| Mobile Font Size | 2.7rem (43.2px) | 2.7rem (43.2px) | No change |

## Affected Files Summary

| File | Occurrences |
|------|-------------|
| [`app/[lang]/page.tsx`](app/[lang]/page.tsx) | 5 |
| [`app/[lang]/services/page.tsx`](app/[lang]/services/page.tsx) | 2 |
| [`app/[lang]/services/sonic-strategy/page.tsx`](app/[lang]/services/sonic-strategy/page.tsx) | 4 |
| [`app/[lang]/services/signature-playlists/page.tsx`](app/[lang]/services/signature-playlists/page.tsx) | 4 |
| [`app/[lang]/services/audio-upgrades/page.tsx`](app/[lang]/services/audio-upgrades/page.tsx) | 4 |
| [`app/[lang]/services/event-soundtracks/page.tsx`](app/[lang]/services/event-soundtracks/page.tsx) | 5 |
| [`app/[lang]/industries/page.tsx`](app/[lang]/industries/page.tsx) | 2 |
| [`app/[lang]/industries/music-for-restaurants-and-bars/page.tsx`](app/[lang]/industries/music-for-restaurants-and-bars/page.tsx) | 5 |
| [`app/[lang]/industries/music-for-retail-stores/page.tsx`](app/[lang]/industries/music-for-retail-stores/page.tsx) | 5 |
| [`app/[lang]/industries/music-for-wellness-and-gyms/page.tsx`](app/[lang]/industries/music-for-wellness-and-gyms/page.tsx) | 5 |
| [`app/[lang]/industries/music-for-hotels-and-resorts/page.tsx`](app/[lang]/industries/music-for-hotels-and-resorts/page.tsx) | 5 |
| [`app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx`](app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx) | 5 |
| [`app/[lang]/industries/music-for-events-and-experiences/page.tsx`](app/[lang]/industries/music-for-events-and-experiences/page.tsx) | 5 |
| [`app/[lang]/contact/page.tsx`](app/[lang]/contact/page.tsx) | 1 |
| [`app/[lang]/case-studies/page.tsx`](app/[lang]/case-studies/page.tsx) | 1 |
| [`app/[lang]/about/page.tsx`](app/[lang]/about/page.tsx) | 2 |
| **Total** | **62** |

## Detailed Occurrences by File

### 1. Home Page - [`app/[lang]/page.tsx`](app/[lang]/page.tsx)

**Line 114:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
    {dict.home.services.title}
```

**Line 178:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
    {dict.home.expertise.title}
```

**Line 225:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 text-black">
    {dict.home.enhance.title}
```

**Line 284:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-20 text-white">{dict.home.clients.title}</h2>
```

**Line 341:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{dict.home.blog.title}</h2>
```

---

### 2. Services Page - [`app/[lang]/services/page.tsx`](app/[lang]/services/page.tsx)

**Line 131:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.starting_point.title}</h2>
```

**Line 278:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.delivery.title}</h2>
```

---

### 3. Sonic Strategy Page - [`app/[lang]/services/sonic-strategy/page.tsx`](app/[lang]/services/sonic-strategy/page.tsx)

**Line 29:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }} />
```

**Line 36:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-4 text-black text-center">{t.what_we_do.title}</h2>
```

**Line 51:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.perfect_for.title}</h2>
```

**Line 69:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.identity.title}</h2>
```

**Line 83:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 4. Signature Playlists Page - [`app/[lang]/services/signature-playlists/page.tsx`](app/[lang]/services/signature-playlists/page.tsx)

**Line 102:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.what_we_do.title}</h2>
```

**Line 135:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.perfect_for.title}</h2>
```

**Line 163:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.licensed.title}</h2>
```

**Line 196:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 5. Audio Upgrades Page - [`app/[lang]/services/audio-upgrades/page.tsx`](app/[lang]/services/audio-upgrades/page.tsx)

**Line 29:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }} />
```

**Line 36:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-4 text-black text-center">{t.what_we_do.title}</h2>
```

**Line 51:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.perfect_for.title}</h2>
```

**Line 69:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.clarity.title}</h2>
```

**Line 83:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 6. Event Soundtracks Page - [`app/[lang]/services/event-soundtracks/page.tsx`](app/[lang]/services/event-soundtracks/page.tsx)

**Line 58:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }} />
```

**Line 70:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.what_we_do.title}</h2>
```

**Line 90:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.perfect_for.title}</h2>
```

**Line 112:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.staging.title}</h2>
```

**Line 132:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 7. Industries Page - [`app/[lang]/industries/page.tsx`](app/[lang]/industries/page.tsx)

**Line 121:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.expertise.title}</h2>
```

**Line 191:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.connect.title}</h2>
```

---

### 8. Music for Restaurants and Bars - [`app/[lang]/industries/music-for-restaurants-and-bars/page.tsx`](app/[lang]/industries/music-for-restaurants-and-bars/page.tsx)

**Line 30:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}></h2>
```

**Line 37:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{t.what_we_do.title}</h2>
```

**Line 48:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.ideal_for.title}</h2>
```

**Line 59:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.how_we_help.title}</h2>
```

**Line 79:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 9. Music for Retail Stores - [`app/[lang]/industries/music-for-retail-stores/page.tsx`](app/[lang]/industries/music-for-retail-stores/page.tsx)

**Line 30:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}></h2>
```

**Line 37:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{t.what_we_do.title}</h2>
```

**Line 48:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.ideal_for.title}</h2>
```

**Line 59:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.how_we_help.title}</h2>
```

**Line 70:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 10. Music for Wellness and Gyms - [`app/[lang]/industries/music-for-wellness-and-gyms/page.tsx`](app/[lang]/industries/music-for-wellness-and-gyms/page.tsx)

**Line 30:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}></h2>
```

**Line 37:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{t.what_we_do.title}</h2>
```

**Line 48:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.ideal_for.title}</h2>
```

**Line 59:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.how_we_help.title}</h2>
```

**Line 70:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 11. Music for Hotels and Resorts - [`app/[lang]/industries/music-for-hotels-and-resorts/page.tsx`](app/[lang]/industries/music-for-hotels-and-resorts/page.tsx)

**Line 34:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}></h2>
```

**Line 43:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{t.what_we_do.title}</h2>
```

**Line 56:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.ideal_for.title}</h2>
```

**Line 69:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.how_we_help.title}</h2>
```

**Line 91:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 12. Music for Art Museums and Fashion - [`app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx`](app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx)

**Line 30:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}></h2>
```

**Line 37:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{t.what_we_do.title}</h2>
```

**Line 48:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.ideal_for.title}</h2>
```

**Line 59:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-center">{t.how_we_help.title}</h2>
```

**Line 79:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 13. Music for Events and Experiences - [`app/[lang]/industries/music-for-events-and-experiences/page.tsx`](app/[lang]/industries/music-for-events-and-experiences/page.tsx)

**Line 74:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}>
```

**Line 90:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{t.what_we_do.title}</h2>
```

**Line 124:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">{t.ideal_for.title}</h2>
```

**Line 149:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-center">{t.how_we_help.title}</h2>
```

**Line 181:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{t.cta.title}</h2>
```

---

### 14. Contact Page - [`app/[lang]/contact/page.tsx`](app/[lang]/contact/page.tsx)

**Line 67:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6">
    {dict.contact.intro.title}
```

---

### 15. Case Studies Page - [`app/[lang]/case-studies/page.tsx`](app/[lang]/case-studies/page.tsx)

**Line 149:**
```tsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">
    {lang === 'el' ? 'Τέσσερις χώροι, τέσσερις διαφορετικές διαδρομές' : 'Four venues, four journeys'}
```

---

### 16. About Page - [`app/[lang]/about/page.tsx`](app/[lang]/about/page.tsx)

**Line 180:**
```tsx
<h2 id="team-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 text-black">
    {lang === 'el' ? 'Γνωρίστε την ομάδα' : 'Meet the team'}
```

**Line 351:**
```tsx
<h2 id="differentiators-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4">
    {lang === 'el' ? 'Τι μας ξεχωρίζει' : 'What sets us apart'}
```

---

## Solution Approach

### Option 1: Add Custom Line Height Class to Tailwind Config (Recommended)

Add a custom line height utility in [`tailwind.config.ts`](tailwind.config.ts):

```typescript
theme: {
  extend: {
    lineHeight: {
      'heading': '1.125',  // 62.1px for 55.2px font size
    }
  }
}
```

Then add `leading-heading` class to all affected H2 elements.

### Option 2: Use Arbitrary Value in Tailwind

Add `leading-[1.125]` class directly to each H2 element. This is a quick fix but less maintainable.

### Option 3: Create Global CSS Rule

Add a CSS rule in [`app/globals.css`](app/globals.css) that targets these specific H2 elements:

```css
h2.text-\[2\.7rem\] {
  line-height: 1.125;
}
```

## Recommended Implementation

**Option 1** is recommended because:
1. It creates a reusable utility class
2. It's maintainable and follows Tailwind conventions
3. It can be easily adjusted in one place if needed

## Implementation Steps

1. Add `leading-heading` line height utility to [`tailwind.config.ts`](tailwind.config.ts)
2. Update all 62 H2 elements to include the `leading-heading` class
3. Test across all affected pages to verify visual consistency

## Files to Modify

| File | Changes Required |
|------|-----------------|
| [`tailwind.config.ts`](tailwind.config.ts) | Add lineHeight extension |
| [`app/[lang]/page.tsx`](app/[lang]/page.tsx) | 5 H2 elements |
| [`app/[lang]/services/page.tsx`](app/[lang]/services/page.tsx) | 2 H2 elements |
| [`app/[lang]/services/sonic-strategy/page.tsx`](app/[lang]/services/sonic-strategy/page.tsx) | 5 H2 elements |
| [`app/[lang]/services/signature-playlists/page.tsx`](app/[lang]/services/signature-playlists/page.tsx) | 4 H2 elements |
| [`app/[lang]/services/audio-upgrades/page.tsx`](app/[lang]/services/audio-upgrades/page.tsx) | 5 H2 elements |
| [`app/[lang]/services/event-soundtracks/page.tsx`](app/[lang]/services/event-soundtracks/page.tsx) | 5 H2 elements |
| [`app/[lang]/industries/page.tsx`](app/[lang]/industries/page.tsx) | 2 H2 elements |
| [`app/[lang]/industries/music-for-restaurants-and-bars/page.tsx`](app/[lang]/industries/music-for-restaurants-and-bars/page.tsx) | 5 H2 elements |
| [`app/[lang]/industries/music-for-retail-stores/page.tsx`](app/[lang]/industries/music-for-retail-stores/page.tsx) | 5 H2 elements |
| [`app/[lang]/industries/music-for-wellness-and-gyms/page.tsx`](app/[lang]/industries/music-for-wellness-and-gyms/page.tsx) | 5 H2 elements |
| [`app/[lang]/industries/music-for-hotels-and-resorts/page.tsx`](app/[lang]/industries/music-for-hotels-and-resorts/page.tsx) | 5 H2 elements |
| [`app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx`](app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx) | 5 H2 elements |
| [`app/[lang]/industries/music-for-events-and-experiences/page.tsx`](app/[lang]/industries/music-for-events-and-experiences/page.tsx) | 5 H2 elements |
| [`app/[lang]/contact/page.tsx`](app/[lang]/contact/page.tsx) | 1 H2 element |
| [`app/[lang]/case-studies/page.tsx`](app/[lang]/case-studies/page.tsx) | 1 H2 element |
| [`app/[lang]/about/page.tsx`](app/[lang]/about/page.tsx) | 2 H2 elements |

**Note:** Some H2 elements already have `leading-tight` class (line-height: 1.25). These should be updated to use the new `leading-heading` class for consistency.
