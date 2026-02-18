# Greek Typography Review & Rollback Plan

## Executive Summary

This document provides a comprehensive analysis of the manual typography adjustments made for Greek language pages and presents a structured rollback plan to revert typography-specific changes while preserving content and layout modifications.

---

## Current Typography Architecture

### Font Configuration

| Font | Purpose | Greek Support | Usage |
|------|---------|---------------|-------|
| **Outfit** | Primary body/UI font | Latin only | English body text |
| **Space Grotesk** | Headings font | Latin only | English headings |
| **Syne** | Display/brand font | Latin only | SENSEAR brand text |
| **Inter** | Primary Greek font | Greek + Latin | Greek body & headings |
| **Manrope** | Fallback font | Greek + Latin | Secondary fallback |

### Font Application Logic

```
English (lang="en"):
- Body: Outfit
- Headings: Space Grotesk
- Brand: Syne

Greek (lang="el"):
- Body: Inter (via CSS override)
- Headings: Inter (via CSS override)
- Brand: Syne (NOT overridden - Latin-only)
```

---

## Typography Changes Inventory

### Location: `app/globals.css`

All Greek typography overrides are contained in `app/globals.css` under `html[lang="el"]` selectors. This is the **only file** containing typography-specific adjustments.

#### Section 1: Font Family Overrides (Lines 18-24)
```css
html[lang="el"] {
  font-family: var(--font-inter), var(--font-manrope), system-ui, sans-serif !important;
}
html[lang="el"] .font-heading,
html[lang="el"] .font-sans {
  font-family: var(--font-inter), var(--font-manrope), system-ui, sans-serif !important;
}
```
**Purpose**: Switches Greek pages to Inter font family.

#### Section 2: H1 Sizing (Lines 28-49)
```css
html[lang="el"] h1 {
  letter-spacing: 0;
  font-size: 1.94rem;  /* Responsive breakpoints: 2.82rem, 3.52rem, 4.22rem */
}
```
**Purpose**: Reduces H1 size to match English appearance (Inter appears ~12% larger than Space Grotesk).

#### Section 3: Hero Subtitle (Lines 53-68)
```css
html[lang="el"] .slide-up-2 p {
  font-size: 0.99rem;  /* Responsive breakpoints: 1.1rem, 1.32rem */
  font-weight: 500;
}
```
**Purpose**: Adjusts hero subtitle paragraph sizing.

#### Section 4: Hero CTA Button (Lines 73-81)
```css
html[lang="el"] .slide-up-2 + div button {
  font-size: 0.95rem;  /* Responsive breakpoint: 1rem */
}
```
**Purpose**: Reduces CTA button text size (Greek text is ~48% longer than English).

#### Section 5: Navigation (Lines 220-232)
```css
html[lang="el"] nav .font-jakarta {
  font-size: 0.9125rem !important;
  letter-spacing: 0.02em !important;
}
```
**Purpose**: Adjusts nav menu item sizing for Greek.

#### Section 6: Greek Scale Factor (Lines 241-243)
```css
html[lang="el"] {
  --greek-scale: 0.88;
}
```
**Purpose**: CSS custom property for consistent scaling (88% of original size).

#### Section 7: WhoWeAre Section (Lines 249-299)
- H2 sizing: `calc(2rem * var(--greek-scale))` etc.
- Main paragraph: `calc(1.5rem * var(--greek-scale))` etc.
- Secondary paragraph: `calc(1.25rem * var(--greek-scale))` etc.

#### Section 8: Homepage Sections (Lines 306-398)
- Section H2 titles
- Subtitles (`.text-xl`)
- Item titles (`.text-2xl`)
- Descriptions (`.text-lg`)
- CTA buttons
- Enhance section (h4, `.text-base`)
- TrustedBy section (`.text-lg.font-semibold`, `.text-sm`)
- Blog section (h3, `.text-xs`)

---

## Identified Inconsistencies & Issues

### 1. Scoped to Homepage Only
**Issue**: Most CSS overrides are scoped to `.bg-[#faebe3]` which is the homepage wrapper class.

**Affected Areas**:
- Secondary pages (services, industries, about, contact, etc.) use the same wrapper but may have different internal structures
- Some typography elements on secondary pages may not be covered by current overrides

**Evidence**: The selectors like `.bg-\[\#faebe3\] section:not(.bg-black) h2` only apply to sections within the homepage wrapper.

### 2. Footer Typography Not Fully Addressed
**Issue**: Footer uses `font-jakarta` class for navigation items, but the override targets `nav .font-jakarta` which applies to the main navigation, not footer.

**Location**: [`components/Footer.tsx`](components/Footer.tsx:79) uses `font-jakarta` for:
- Newsletter title (line 79)
- Services/Industries/Company section headers (lines 104, 122, 140)
- Navigation links (lines 112, 130, 146)

### 3. Mixed Approach: Fixed Values vs Scale Factor
**Issue**: Some overrides use fixed rem values (H1, hero elements) while others use `calc()` with `--greek-scale`.

**Impact**: Inconsistent maintenance - changing the scale factor won't affect all elements uniformly.

### 4. Secondary Pages Hero Sections
**Issue**: Secondary pages (services, industries, about) have similar hero structures but may not receive consistent typography treatment.

**Files to verify**:
- [`app/[lang]/services/page.tsx`](app/[lang]/services/page.tsx:67) - H1 uses same classes as homepage
- [`app/[lang]/industries/page.tsx`](app/[lang]/industries/page.tsx:52) - H1 uses same classes
- [`app/[lang]/about/page.tsx`](app/[lang]/about/page.tsx:68) - H1 uses same classes

### 5. WhoWeAre Hardcoded Greek Text
**Note**: [`components/home/WhoWeAre.tsx`](components/home/WhoWeAre.tsx:21-35) contains hardcoded Greek text with inline styling (bold/italic spans). This is a **content change**, not typography.

---

## Content & Layout Changes to Preserve

The following are **NOT typography changes** and should be preserved during rollback:

### 1. WhoWeAre Component - Hardcoded Text
**File**: [`components/home/WhoWeAre.tsx`](components/home/WhoWeAre.tsx:21-48)
- Greek text content with `<span className="font-bold italic">` styling
- This is content adaptation, not font sizing

### 2. Dictionary/Translation Files
- All Greek translations in `lib/dictionaries/` are content changes

### 3. Layout Structures
- Grid layouts, spacing, padding, margins
- Image placements and sizes
- Component structure and organization

### 4. Responsive Breakpoints
- The breakpoint logic (sm:, md:, lg:) is layout-related

---

## Rollback Plan

### Option A: Complete Typography Rollback (Recommended)

This approach removes all Greek typography overrides, allowing both languages to use the same font family.

#### Step 1: Remove Greek Font Family Override
**File**: `app/globals.css`

Remove or comment out lines 16-24:
```css
/* REMOVED: Greek font family override
html[lang="el"] {
  font-family: var(--font-inter), var(--font-manrope), system-ui, sans-serif !important;
}
html[lang="el"] .font-heading,
html[lang="el"] .font-sans {
  font-family: var(--font-inter), var(--font-manrope), system-ui, sans-serif !important;
}
*/
```

#### Step 2: Remove H1 Sizing Overrides
**File**: `app/globals.css`

Remove or comment out lines 26-49:
```css
/* REMOVED: Greek H1 sizing
html[lang="el"] h1 { ... }
@media (min-width: 640px) { html[lang="el"] h1 { ... } }
@media (min-width: 768px) { html[lang="el"] h1 { ... } }
@media (min-width: 1024px) { html[lang="el"] h1 { ... } }
*/
```

#### Step 3: Remove Hero Subtitle Overrides
**File**: `app/globals.css`

Remove or comment out lines 51-68:
```css
/* REMOVED: Greek hero subtitle
html[lang="el"] .slide-up-2 p { ... }
@media ... { ... }
*/
```

#### Step 4: Remove Hero CTA Button Overrides
**File**: `app/globals.css`

Remove or comment out lines 70-81:
```css
/* REMOVED: Greek hero CTA button
html[lang="el"] .slide-up-2 + div button { ... }
@media ... { ... }
*/
```

#### Step 5: Remove Navigation Overrides
**File**: `app/globals.css`

Remove or comment out lines 218-232:
```css
/* REMOVED: Greek nav typography
@layer utilities {
  html[lang="el"] nav .font-jakarta { ... }
}
@media (max-width: 1023px) { ... }
*/
```

#### Step 6: Remove Greek Scale Factor
**File**: `app/globals.css`

Remove or comment out lines 239-243:
```css
/* REMOVED: Greek scale factor
html[lang="el"] {
  --greek-scale: 0.88;
}
*/
```

#### Step 7: Remove Homepage Section Overrides
**File**: `app/globals.css`

Remove or comment out lines 245-399 (all remaining `html[lang="el"]` selectors).

#### Step 8: Update Font Configuration (Optional)
**File**: `tailwind.config.ts`

If switching to a unified font, update the fontFamily configuration:
```typescript
fontFamily: {
  sans: ['var(--font-inter)', 'var(--font-outfit)', 'system-ui', 'sans-serif'],
  heading: ['var(--font-inter)', 'var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
  syne: ['var(--font-syne)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
},
```

#### Step 9: Update Font Preloading (Optional)
**File**: `app/fonts.ts`

If Inter becomes the primary font for both languages:
```typescript
export const inter = Inter({
    subsets: ['latin', 'latin-ext', 'greek'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,  // Change to true if primary
});
```

---

### Option B: Partial Rollback (Keep Font Family, Remove Sizing)

If you want to keep Inter for Greek but remove the manual sizing adjustments:

1. Keep Step 1 (font family override)
2. Remove Steps 2-7 (all sizing overrides)
3. Greek text will use Inter at standard sizes

---

### Option C: Unified Font Approach

Switch both languages to use Inter as the primary font:

1. Update `tailwind.config.ts` to use Inter as primary
2. Remove all Greek-specific overrides from `globals.css`
3. Optionally remove unused fonts (Outfit, Space Grotesk) from `fonts.ts`

---

## Rollback Verification Checklist

After rollback, verify the following:

### Homepage
- [ ] Hero H1 renders correctly in both languages
- [ ] Hero subtitle text is readable
- [ ] CTA button text fits within button
- [ ] WhoWeAre section text is legible
- [ ] Services section titles and descriptions
- [ ] Expertise section titles and descriptions
- [ ] Enhance section text on dark background
- [ ] TrustedBy client names and locations
- [ ] Blog section article titles and tags

### Navigation
- [ ] Desktop nav items fit without overflow
- [ ] Mobile nav menu items are readable
- [ ] Language switcher works correctly

### Footer
- [ ] SENSEAR brand text displays correctly (should use Syne)
- [ ] Newsletter section is readable
- [ ] Navigation links are legible
- [ ] Legal text is readable

### Secondary Pages
- [ ] Services page hero and content
- [ ] Industries page hero and content
- [ ] About page hero and content
- [ ] Contact page form and text
- [ ] Blog page articles
- [ ] Case studies page
- [ ] FAQ page
- [ ] Privacy/Terms pages

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Text overflow in buttons | Medium | Medium | Test all CTAs, adjust padding if needed |
| H1 too large on mobile | Low | Low | Verify responsive breakpoints |
| Footer layout breaks | Low | Medium | Test footer on all pages |
| Greek text longer than English | High | Low | Accept wider text blocks |
| Font loading performance | Low | Low | Inter already preloaded |

---

## Implementation Recommendation

1. **Create a backup branch** before making changes
2. **Implement Option A** (complete rollback) in a single commit
3. **Test thoroughly** using the verification checklist
4. **Monitor** for any layout issues post-deployment
5. **Keep the commented CSS** initially for easy restoration if needed

---

## Files Affected by Rollback

| File | Change Type | Risk |
|------|-------------|------|
| `app/globals.css` | Remove CSS rules | Low |
| `tailwind.config.ts` | Optional update | Low |
| `app/fonts.ts` | Optional update | Low |

## Files NOT Affected (Preserved)

| File | Content Type |
|------|--------------|
| `components/home/WhoWeAre.tsx` | Hardcoded Greek text |
| `lib/dictionaries/el.json` | Greek translations |
| All component files | Layout structures |
| All page files | Content and structure |

---

## Next Steps

1. Confirm which rollback option to proceed with
2. Create backup branch
3. Implement CSS changes
4. Test across all pages
5. Deploy and monitor
