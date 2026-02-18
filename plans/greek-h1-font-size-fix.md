# Plan: Reduce Greek H1 Font Size to Match English

## Problem Statement
The Greek version's H1 heading appears larger than the English version due to font metric differences between Inter (Greek) and Space Grotesk (English).

## Root Cause Analysis

### Font Configuration
- **English**: Uses Space Grotesk via `--font-space-grotesk` 
- **Greek**: Uses Inter via `--font-inter` (defined in `app/globals.css:18-24`)

### Why Inter Appears Larger
Inter has a larger x-height and different character widths compared to Space Grotesk, making it appear approximately 10-15% larger at the same font-size value.

### Current H1 Font Sizes (from `app/[lang]/page.tsx:102`)
| Breakpoint | Current Size | Reduced Size (12% reduction) |
|------------|-------------|------------------------------|
| Mobile     | 2.2rem      | 1.94rem                      |
| sm (640px) | 3.2rem      | 2.82rem                      |
| md (768px) | 4rem        | 3.52rem                      |
| lg (1024px)| 4.8rem      | 4.22rem                      |

## Solution

### File to Modify
`app/globals.css` - lines 26-29

### Current Code
```css
/* Greek H1 styling - tighter letter-spacing to match English Space Grotesk appearance */
html[lang="el"] h1 {
  letter-spacing: -0.02em;
}
```

### New Code
```css
/* Greek H1 styling - reduced font-size and tighter letter-spacing to match English appearance */
/* Inter font appears ~12% larger than Space Grotesk at same font-size */
html[lang="el"] h1 {
  letter-spacing: -0.02em;
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

## Safety Measures to Prevent Breaking Other Elements

### Why This Won't Break Images
1. **Specific selector**: `html[lang="el"] h1` only targets H1 elements on Greek pages
2. **Single property change**: Only modifying `font-size`, no layout properties
3. **No overflow changes**: The font-size reduction won't affect container dimensions
4. **No display/visibility changes**: Nothing is being hidden or repositioned

### CSS Specificity Analysis
- The selector `html[lang="el"] h1` has specificity (0,1,1,1)
- Tailwind utility classes like `text-[4.8rem]` have specificity (0,0,1,0)
- Our CSS will override Tailwind due to higher specificity
- This is intentional and necessary for the fix to work

### What Was Wrong Last Time (Hypothetical)
Based on the user's mention of images disappearing, the previous attempt likely:
- Used a broader selector that affected parent containers
- Modified `overflow`, `display`, or `visibility` properties
- Changed layout properties that caused images to be hidden

## Implementation Steps

1. **Open** `app/globals.css`
2. **Locate** lines 26-29 (the existing Greek H1 rule)
3. **Replace** the existing rule with the new code above
4. **Save** the file
5. **Test** by viewing the Greek homepage at `http://localhost:3000/el`
6. **Verify** that:
   - H1 text is smaller and matches English visual size
   - Images still display correctly
   - No layout shifts or broken elements

## Testing Checklist

- [ ] Greek homepage H1 appears same size as English H1
- [ ] Hero carousel images still display
- [ ] All other images on page still display
- [ ] No layout shifts or overlaps
- [ ] Responsive breakpoints work correctly
- [ ] Other pages with H1 (services, about, etc.) also look correct

## Affected Pages
This change will affect all H1 elements on Greek pages across the site:
- Homepage (`/el`)
- Services pages
- Industries pages
- About page
- Contact page
- Blog pages
- Case Studies page
- FAQ page
- Privacy/Terms pages