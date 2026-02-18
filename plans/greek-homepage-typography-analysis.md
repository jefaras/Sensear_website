# Greek Homepage Typography Analysis & Action Plan

## Executive Summary

This report analyzes typography differences between the English and Greek versions of the SensEar website homepage. The core issue is that **Inter font (used for Greek) appears approximately 12% larger than Space Grotesk/Outfit (used for English)** at the same font-size values due to different font metrics (x-height, cap-height).

---

## Current Greek Typography Overrides

The following Greek-specific CSS rules are already in place in [`globals.css`](app/globals.css):

| Element | Current Override | Status |
|---------|-----------------|--------|
| H1 headings | 12% reduction with responsive breakpoints | ✅ Implemented |
| Hero subtitle paragraphs | Reduced sizes with breakpoints | ✅ Implemented |
| Hero CTA button | Reduced font-size | ✅ Implemented |
| Navigation menu | 0.9125rem with letter-spacing | ✅ Implemented |
| Mobile nav links | 1rem size | ✅ Implemented |

---

## Typography Elements Requiring Analysis

### Section-by-Section Comparison

#### 1. WhoWeAre Section ([`WhoWeAre.tsx`](components/home/WhoWeAre.tsx))

| Element | English Class | Size Value | Greek Adjustment Needed |
|---------|--------------|------------|------------------------|
| H2 Title | `text-[2rem] md:text-[2.8rem] lg:text-[3.45rem]` | 2rem/2.8rem/3.45rem | ⚠️ Needs ~12% reduction |
| Main Paragraph | `text-2xl md:text-3xl lg:text-4xl` | 1.5rem/1.875rem/2.25rem | ⚠️ Needs ~12% reduction |
| Secondary Paragraph | `text-xl md:text-2xl lg:text-3xl` | 1.25rem/1.5rem/1.875rem | ⚠️ Needs ~12% reduction |

**English Reference** ([`Home.jsx:359-369`](Base44_sensear_files_EN_GR/English/src/pages/Home.jsx:359)):
```jsx
<h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
<p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
<p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
```

---

#### 2. Services Section ([`Services.tsx`](components/home/Services.tsx))

| Element | English Class | Size Value | Greek Adjustment Needed |
|---------|--------------|------------|------------------------|
| H2 Title | `text-[2.7rem] md:text-[3.45rem]` | 2.7rem/3.45rem | ⚠️ Needs ~12% reduction |
| Subtitle | `text-xl` | 1.25rem | ⚠️ Needs ~12% reduction |
| Service Titles | `text-2xl md:text-3xl` | 1.5rem/1.875rem | ⚠️ Needs ~12% reduction |
| Service Descriptions | `text-lg md:text-xl` | 1.125rem/1.25rem | ⚠️ Needs ~12% reduction |
| CTA Button | `text-lg` | 1.125rem | ⚠️ Needs ~12% reduction |

**English Reference** ([`Home.jsx:378-394`](Base44_sensear_files_EN_GR/English/src/pages/Home.jsx:378)):
```jsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
<p className="text-xl text-black/60 font-medium mb-12 text-center">
<Link className="text-[31.5px] font-bold">  <!-- Note: English uses fixed 31.5px! -->
<p className="text-lg md:text-xl text-black/60">
```

**Important Discovery**: English version uses `text-[31.5px]` for service titles, while Next.js uses `text-2xl md:text-3xl`. This is a discrepancy to address.

---

#### 3. Expertise Section ([`Expertise.tsx`](components/home/Expertise.tsx))

| Element | English Class | Size Value | Greek Adjustment Needed |
|---------|--------------|------------|------------------------|
| H2 Title | `text-[2.7rem] md:text-[3.45rem]` | 2.7rem/3.45rem | ⚠️ Needs ~12% reduction |
| Subtitle | `text-xl` | 1.25rem | ⚠️ Needs ~12% reduction |
| Industry Titles | `text-2xl md:text-3xl` | 1.5rem/1.875rem | ⚠️ Needs ~12% reduction |
| Industry Descriptions | `text-lg md:text-xl` | 1.125rem/1.25rem | ⚠️ Needs ~12% reduction |
| CTA Button | `text-lg` | 1.125rem | ⚠️ Needs ~12% reduction |

**English Reference** ([`Home.jsx:449-511`](Base44_sensear_files_EN_GR/English/src/pages/Home.jsx:449)):
```jsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
<p className="text-xl text-black/60 font-medium mb-12 text-center">
<Link className="text-[31.5px] font-bold">  <!-- Fixed 31.5px in English -->
```

---

#### 4. Enhance Section ([`Enhance.tsx`](components/home/Enhance.tsx))

| Element | English Class | Size Value | Greek Adjustment Needed |
|---------|--------------|------------|------------------------|
| H2 Title | `text-[2.7rem] md:text-[3.45rem]` | 2.7rem/3.45rem | ⚠️ Needs ~12% reduction |
| Subtitle | `text-xl` | 1.25rem | ⚠️ Needs ~12% reduction |
| Item Titles | `text-lg` | 1.125rem | ⚠️ Needs ~12% reduction |
| Item Descriptions | `text-base` | 1rem | ⚠️ Needs ~12% reduction |
| CTA Button | `text-lg` | 1.125rem | ⚠️ Needs ~12% reduction |

**English Reference** ([`Home.jsx:532-545`](Base44_sensear_files_EN_GR/English/src/pages/Home.jsx:532)):
```jsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 text-black">
<p className="text-xl text-black/60 font-medium mb-12 text-center">
<h3 className="text-[31.5px] font-bold">  <!-- Fixed 31.5px in English -->
```

---

#### 5. TrustedBy Section ([`TrustedBy.tsx`](components/home/TrustedBy.tsx))

| Element | English Class | Size Value | Greek Adjustment Needed |
|---------|--------------|------------|------------------------|
| H2 Title | `text-[2.7rem] md:text-[3.45rem]` | 2.7rem/3.45rem | ⚠️ Needs ~12% reduction |
| Client Names | `text-lg` | 1.125rem | ⚠️ Needs ~12% reduction |
| Client Locations | `text-sm` | 0.875rem | ⚠️ Needs ~12% reduction |

**English Reference** ([`Home.jsx:592`](Base44_sensear_files_EN_GR/English/src/pages/Home.jsx:592)):
```jsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-20 text-white">
<p className="text-lg font-semibold text-white/90">
<p className="text-sm text-white/60 mt-1">
```

---

#### 6. BlogSection ([`BlogSection.tsx`](components/home/BlogSection.tsx))

| Element | English Class | Size Value | Greek Adjustment Needed |
|---------|--------------|------------|------------------------|
| H2 Title | `text-[2.7rem] md:text-[3.45rem]` | 2.7rem/3.45rem | ⚠️ Needs ~12% reduction |
| Subtitle | `text-xl` | 1.25rem | ⚠️ Needs ~12% reduction |
| Article Titles | `text-xl` | 1.25rem | ⚠️ Needs ~12% reduction |
| Article Descriptions | inherited | ~1rem | ⚠️ Needs ~12% reduction |
| Tags | `text-xs` | 0.75rem | ⚠️ Needs ~12% reduction |
| Read More | `text-sm` | 0.875rem | ⚠️ Needs ~12% reduction |
| CTA Button | `text-lg` | 1.125rem | ⚠️ Needs ~12% reduction |

**English Reference** ([`Home.jsx:685-710`](Base44_sensear_files_EN_GR/English/src/pages/Home.jsx:685)):
```jsx
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">
<p className="text-xl text-black/60 font-medium max-w-5xl mx-auto">
<h3 className="text-xl font-bold text-black mb-3">
```

---

## Proposed CSS Additions for Greek Typography

### File: [`app/globals.css`](app/globals.css)

Add the following rules after the existing Greek typography overrides (after line 232):

```css
/* ============================================
   Greek Homepage Section Typography
   Inter font appears ~12% larger than Space Grotesk
   ============================================ */

/* Greek H2 headings in home sections */
html[lang="el"] section h2 {
  letter-spacing: 0;
}

/* WhoWeAre section - H2 and paragraphs */
html[lang="el"] .bg-black h2 {
  font-size: 1.76rem; /* 2rem * 0.88 */
}

@media (min-width: 768px) {
  html[lang="el"] .bg-black h2 {
    font-size: 2.46rem; /* 2.8rem * 0.88 */
  }
}

@media (min-width: 1024px) {
  html[lang="el"] .bg-black h2 {
    font-size: 3.04rem; /* 3.45rem * 0.88 */
  }
}

/* WhoWeAre main paragraph */
html[lang="el"] .bg-black .text-2xl {
  font-size: 1.32rem; /* 1.5rem * 0.88 */
}

@media (min-width: 768px) {
  html[lang="el"] .bg-black .text-2xl {
    font-size: 1.65rem; /* 1.875rem * 0.88 */
  }
}

@media (min-width: 1024px) {
  html[lang="el"] .bg-black .text-2xl {
    font-size: 1.98rem; /* 2.25rem * 0.88 */
  }
}

/* Section H2 titles (Services, Expertise, Enhance, TrustedBy, Blog) */
html[lang="el"] section:not(.bg-black) h2 {
  font-size: 2.38rem; /* 2.7rem * 0.88 */
}

@media (min-width: 768px) {
  html[lang="el"] section:not(.bg-black) h2 {
    font-size: 3.04rem; /* 3.45rem * 0.88 */
  }
}

/* Section subtitles */
html[lang="el"] section .text-xl {
  font-size: 1.1rem; /* 1.25rem * 0.88 */
}

/* Service/Industry item titles */
html[lang="el"] section .text-2xl {
  font-size: 1.32rem; /* 1.5rem * 0.88 */
}

@media (min-width: 768px) {
  html[lang="el"] section .text-2xl {
    font-size: 1.65rem; /* 1.875rem * 0.88 */
  }
}

/* Service/Industry item descriptions */
html[lang="el"] section .text-lg {
  font-size: 0.99rem; /* 1.125rem * 0.88 */
}

@media (min-width: 768px) {
  html[lang="el"] section .text-lg {
    font-size: 1.1rem; /* 1.25rem * 0.88 */
  }
}

/* CTA buttons in sections */
html[lang="el"] section button {
  font-size: 0.99rem; /* 1.125rem * 0.88 */
}

/* Blog article titles */
html[lang="el"] .bg-white h3 {
  font-size: 1.1rem; /* 1.25rem * 0.88 */
}

/* Client names in TrustedBy */
html[lang="el"] .text-lg.font-semibold {
  font-size: 0.99rem; /* 1.125rem * 0.88 */
}

/* Small text elements */
html[lang="el"] section .text-sm {
  font-size: 0.77rem; /* 0.875rem * 0.88 */
}

html[lang="el"] section .text-xs {
  font-size: 0.66rem; /* 0.75rem * 0.88 */
}
```

---

## Alternative Approach: CSS Custom Properties

For better maintainability, consider using CSS custom properties:

```css
/* Greek typography scale factors */
html[lang="el"] {
  --greek-scale: 0.88;
  --greek-letter-spacing: 0;
}

/* Apply scale factor to specific elements */
html[lang="el"] h1 { font-size: calc(4.8rem * var(--greek-scale)); }
html[lang="el"] h2 { font-size: calc(3.45rem * var(--greek-scale)); }
html[lang="el"] h3 { font-size: calc(1.875rem * var(--greek-scale)); }
```

---

## Implementation Checklist

### Phase 1: H2 Headings
- [ ] Add Greek H2 font-size overrides for all sections
- [ ] Test responsive breakpoints (mobile, tablet, desktop)
- [ ] Verify WhoWeAre section H2
- [ ] Verify Services section H2
- [ ] Verify Expertise section H2
- [ ] Verify Enhance section H2
- [ ] Verify TrustedBy section H2
- [ ] Verify Blog section H2

### Phase 2: Body Text
- [ ] Add Greek paragraph font-size overrides
- [ ] Test WhoWeAre main paragraph
- [ ] Test WhoWeAre secondary paragraph
- [ ] Test section subtitles

### Phase 3: Interactive Elements
- [ ] Add Greek service/industry title overrides
- [ ] Add Greek service/industry description overrides
- [ ] Add Greek CTA button overrides
- [ ] Test hover states and transitions

### Phase 4: Minor Elements
- [ ] Add Greek client name overrides
- [ ] Add Greek small text overrides
- [ ] Add Greek blog card text overrides
- [ ] Test all sections side-by-side with English

---

## Visual Comparison Checklist

When implementing, compare these specific elements side-by-side:

| Section | Element | English URL | Greek URL |
|---------|---------|-------------|-----------|
| Hero | H1 | /en | /el |
| Hero | Subtitle | /en | /el |
| WhoWeAre | H2 | /en | /el |
| WhoWeAre | Main text | /en | /el |
| Services | H2 | /en | /el |
| Services | Item titles | /en | /el |
| Expertise | H2 | /en | /el |
| Expertise | Item titles | /en | /el |
| Enhance | H2 | /en | /el |
| TrustedBy | H2 | /en | /el |
| Blog | H2 | /en | /el |
| Blog | Article titles | /en | /el |

---

## Notes

1. **Font Metrics**: Inter has a larger x-height (0.753) compared to Space Grotesk (0.689), making it appear ~12% larger at the same font-size.

2. **Greek Text Length**: Greek text is typically 30-50% longer than English, which may require additional layout considerations beyond font-size.

3. **Letter Spacing**: Greek typography typically benefits from slightly looser letter-spacing than English, but Inter already has good default spacing for Greek.

4. **Line Height**: May need adjustment for Greek due to longer words and different character shapes.

---

## Questions for User

1. Should we apply these adjustments globally (affecting all pages) or scope them to specific sections?

2. Do you want to use the direct CSS approach or the CSS custom properties approach for better maintainability?

3. Should we also adjust line-height values for Greek text to accommodate longer words?

4. The English version uses fixed `text-[31.5px]` for service/industry titles while the Next.js version uses responsive `text-2xl md:text-3xl`. Should we align with the English approach or keep the responsive pattern?
