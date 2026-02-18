# Greek H1 Font Size Fix - Implementation Plan

## Problem Statement
The Greek version's H1 font size appears larger than the English version's H1, despite existing CSS overrides in `globals.css`. The user wants the Greek H1 to visually match the English H1 size.

## Root Cause Analysis

### 1. Font Metrics Difference
- **English**: Uses Space Grotesk font (configured as `font-heading`)
- **Greek**: Uses Inter font (has full Greek script support)
- Inter font appears approximately **12% larger** than Space Grotesk at the same font-size value due to different font metrics (x-height, cap-height)

### 2. CSS Specificity Issue
The current CSS rules in `globals.css` are being **overridden by Tailwind utility classes**:

**Current CSS** (low specificity):
```css
html[lang="el"] h1 {
  font-size: 1.94rem;
}
```

**Tailwind classes on H1 elements** (higher specificity in cascade):
```tsx
<h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] ...">
```

The Tailwind utility classes generate CSS with higher specificity in the cascade order, overriding the custom CSS rules.

## Solution

### Add `!important` to Greek H1 Font-Size Rules

The fix requires adding `!important` to the font-size declarations in `globals.css` to ensure they override Tailwind's utility classes.

### File to Modify
- `app/globals.css` (lines 26-49)

### Current Code
```css
/* Greek H1 styling - reduced font-size to match English appearance */
/* Inter font appears ~12% larger than Space Grotesk at same font-size */
html[lang="el"] h1 {
  letter-spacing: 0;
  font-size: 1.94rem;
}

@media (min-width: 640px) {
  html[lang="el"] h1 {
    font-size: 2.82rem;
  }
}

@media (min-width: 768px) {
  html[lang="el"] h1 {
    font-size: 3.52rem;
  }
}

@media (min-width: 1024px) {
  html[lang="el"] h1 {
    font-size: 4.22rem;
  }
}
```

### Updated Code
```css
/* Greek H1 styling - reduced font-size to match English appearance */
/* Inter font appears ~12% larger than Space Grotesk at same font-size */
/* Using !important to override Tailwind utility classes */
html[lang="el"] h1 {
  letter-spacing: 0;
  font-size: 1.94rem !important;
}

@media (min-width: 640px) {
  html[lang="el"] h1 {
    font-size: 2.82rem !important;
  }
}

@media (min-width: 768px) {
  html[lang="el"] h1 {
    font-size: 3.52rem !important;
  }
}

@media (min-width: 1024px) {
  html[lang="el"] h1 {
    font-size: 4.22rem !important;
  }
}
```

## Safety Considerations

### Why This Won't Break Other Elements

1. **Targeted Selector**: `html[lang="el"] h1` only targets H1 elements on Greek pages
2. **Property-Specific**: Only modifies `font-size` property, not layout or display properties
3. **No Image Impact**: Images are not affected by font-size changes
4. **Scoped to Language**: The `html[lang="el"]` selector ensures English pages are unaffected

### What Went Wrong Previously
The user mentioned images disappeared during a previous attempt. This likely happened because:
- A broad selector was used that affected parent containers
- Layout properties like `display`, `visibility`, or `overflow` were inadvertently modified
- The fix targeted the wrong elements

### Prevention Measures
- Only modify the `font-size` property
- Use the existing selector pattern `html[lang="el"] h1`
- Add `!important` only to font-size declarations
- Do not modify any other CSS rules

## Verification Steps

1. Open the Greek version of the site (http://localhost:3000/el)
2. Compare H1 size with English version (http://localhost:3000/en)
3. Verify images and other elements are still visible
4. Test at different viewport sizes (mobile, tablet, desktop)
5. Check multiple pages with H1 elements

## Pages Affected

The following pages have H1 elements that will be affected:
- Home page: `app/[lang]/page.tsx`
- About page: `app/[lang]/about/page.tsx`
- Services page: `app/[lang]/services/page.tsx`
- Industries pages: `app/[lang]/industries/*/page.tsx`
- Contact page: `app/[lang]/contact/page.tsx`
- Blog pages: `app/[lang]/blog/page.tsx`, `app/[lang]/blog/[slug]/page.tsx`
- Case studies: `app/[lang]/case-studies/page.tsx`
- FAQ: `app/[lang]/faq/page.tsx`
- Privacy/Terms: `app/[lang]/privacy/page.tsx`, `app/[lang]/terms/page.tsx`
- Sitemap: `app/[lang]/sitemap-page/page.tsx`

## Implementation Checklist

- [ ] Add `!important` to all four Greek H1 font-size declarations in `globals.css`
- [ ] Test Greek H1 appears same size as English H1
- [ ] Verify no images or other elements are affected
- [ ] Test responsive breakpoints (sm, md, lg)
