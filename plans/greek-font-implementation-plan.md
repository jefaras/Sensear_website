# Greek & English Font Implementation Plan

## Current Font Setup Analysis

The project currently uses the following fonts:

| Font | Source | Usage | Greek Support |
|------|--------|-------|---------------|
| **Satoshi** | Fontshare | Primary sans-serif body text | ❌ No |
| **Plus Jakarta Sans** | Google Fonts | Alternative body text | ❌ No |
| **Manrope** | Google Fonts | Fallback sans-serif | ✅ Yes |
| **Syne** | Google Fonts | Logo font | ✅ Yes |

### Current Tailwind Configuration
```typescript
fontFamily: {
  sans: ['Satoshi', 'Manrope', 'system-ui', 'sans-serif'],
  jakarta: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
  syne: ['Syne', 'system-ui', 'sans-serif'],
}
```

### Problem Identified
- **Satoshi** and **Plus Jakarta Sans** do NOT support Greek characters
- When Greek text is displayed, it falls back to **Manrope** (which does support Greek)
- This creates visual inconsistency between English and Greek content

---

## Recommended Font Solutions

### Option 1: Replace Primary Fonts with Greek-Compatible Alternatives (Recommended)

Replace Satoshi and Plus Jakarta Sans with fonts that natively support both Greek and English.

#### Recommended Google Fonts with Full Greek Support:

| Font | Style | Best For | Greek Support |
|------|-------|----------|---------------|
| **Inter** | Modern geometric | Body text, UI | ✅ Full |
| **DM Sans** | Geometric sans-serif | Body text, headings | ✅ Full |
| **Outfit** | Modern geometric | Body text, headings | ✅ Full |
| **Nunito** | Rounded sans-serif | Body text | ✅ Full |
| **Source Sans 3** | Humanist sans-serif | Body text, UI | ✅ Full |
| **Roboto** | Neo-grotesque | Body text, UI | ✅ Full |
| **Open Sans** | Humanist sans-serif | Body text | ✅ Full |

#### Top Recommendation: **Inter** + **DM Sans**

```
Primary Body: Inter (excellent readability, modern look)
Headings: DM Sans (slightly more character, pairs well)
Logo: Syne (already in use, supports Greek)
```

**Why Inter?**
- Excellent Greek character support
- Optimized for screen readability
- Popular in Greece for web design
- Clean, modern aesthetic matching current design
- Variable font support for performance

**Why DM Sans?**
- Full Greek support
- Slightly more distinctive for headings
- Pairs beautifully with Inter
- Modern geometric style

### Option 2: Keep Current Fonts with Language-Specific Fallbacks

Keep existing fonts for English and use Manrope as the primary for Greek content.

```typescript
// In tailwind.config.ts
fontFamily: {
  sans: ['Satoshi', 'Manrope', 'system-ui', 'sans-serif'],
  // Manrope already supports Greek, so it will display correctly
}
```

**Pros:** No design changes needed for English content
**Cons:** Visual inconsistency between languages, Manrope has different character width/spacing

### Option 3: Hybrid Approach with CSS

Use CSS to apply different fonts based on language:

```css
:lang(en) {
  --font-primary: 'Satoshi', sans-serif;
}

:lang(el) {
  --font-primary: 'Inter', sans-serif;
}
```

---

## Fonts Popular in Greece

Based on web design trends in Greece, these fonts are commonly used:

1. **Roboto** - Very popular, system font on Android
2. **Open Sans** - Widely used for body text
3. **Inter** - Growing popularity for modern websites
4. **Noto Sans** - Google's universal font with excellent Greek support
5. **Source Sans Pro/3** - Adobe's open source option

---

## Implementation Plan

### Step 1: Update Google Fonts Import

Replace current imports in [`app/globals.css`](app/globals.css:1):

```css
/* Remove or comment out */
/* @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'); */

/* Add new fonts with Greek support */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&subset=greek&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&subset=greek&display=swap');

/* Keep Syne for logo - it already supports Greek */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&subset=greek&display=swap');

/* Keep Manrope as fallback - it supports Greek */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&subset=greek&display=swap');
```

### Step 2: Update Tailwind Configuration

Update [`tailwind.config.ts`](tailwind.config.ts:53):

```typescript
fontFamily: {
  sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
  heading: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
  syne: ['Syne', 'system-ui', 'sans-serif'],
}
```

### Step 3: Update Components

Replace `font-jakarta` classes with `font-sans` or `font-heading` throughout components.

### Step 4: Remove Satoshi Font

Remove the Fontshare Satoshi import since it doesn't support Greek:

```css
/* Remove this line */
/* @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap'); */
```

---

## Font Comparison Visual

```
┌─────────────────────────────────────────────────────────────┐
│                    ENGLISH TEXT SAMPLES                     │
├─────────────────────────────────────────────────────────────┤
│ Inter:    The quick brown fox jumps over the lazy dog       │
│ DM Sans:  The quick brown fox jumps over the lazy dog       │
│ Manrope:  The quick brown fox jumps over the lazy dog       │
│ Syne:     The quick brown fox jumps over the lazy dog       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     GREEK TEXT SAMPLES                      │
├─────────────────────────────────────────────────────────────┤
│ Inter:    Η γρήγορη καφέ αλεπού πηδάει πάνω από το σκυλί    │
│ DM Sans:  Η γρήγορη καφέ αλεπού πηδάει πάνω από το σκυλί    │
│ Manrope:  Η γρήγορη καφέ αλεπού πηδάει πάνω από το σκυλί    │
│ Syne:     Η γρήγορη καφέ αλεπού πηδάει πάνω από το σκυλί    │
└─────────────────────────────────────────────────────────────┘
```

---

## Summary

| Aspect | Recommendation |
|--------|----------------|
| **Primary Body Font** | Inter (Google Fonts) |
| **Heading Font** | DM Sans (Google Fonts) |
| **Logo Font** | Syne (keep current) |
| **Fallback Font** | Manrope (keep current) |
| **Implementation** | Replace non-Greek fonts with Greek-compatible alternatives |

### Key Benefits
- ✅ Consistent typography across both languages
- ✅ Professional appearance for Greek content
- ✅ Modern, clean aesthetic maintained
- ✅ All fonts available on Google Fonts (free, reliable CDN)
- ✅ Variable font support for performance
- ✅ No licensing issues

---

## Next Steps

1. Confirm font selection with stakeholder
2. Switch to Code mode to implement changes
3. Update globals.css with new font imports
4. Update tailwind.config.ts with new font family definitions
5. Search and replace font classes in components
6. Test on both English and Greek pages
7. Verify font loading performance
