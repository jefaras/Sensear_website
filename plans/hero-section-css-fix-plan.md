# Hero Section CSS Discrepancy Analysis & Fix Plan

## Overview
This document outlines the CSS layout and spacing discrepancies between the live production home page's hero section and the local development home page's hero section, with a plan to achieve pixel-perfect alignment.

## Discrepancies Identified

### 1. Container Padding (Line 25 in page.tsx vs Line 305 in Home.jsx)

**Current Local:**
```tsx
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
```

**Production Reference:**
```jsx
<div className="w-full px-6 md:px-12 lg:px-16">
```

**Issue:** Local uses fixed `px-6` padding, while production uses responsive padding that increases on larger screens.

**Fix Required:** Change `px-6` to `px-6 md:px-12 lg:px-16`

---

### 2. Grid Layout Ratio (Line 26 in page.tsx vs Line 306 in Home.jsx)

**Current Local:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
```

**Production Reference:**
```jsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
```

**Issue:** Local uses an uneven 40%/60% split (`0.8fr_1.2fr`), while production uses an equal 50/50 split.

**Fix Required:** Change `lg:grid-cols-[0.8fr_1.2fr]` to `lg:grid-cols-2`

---

### 3. Hero Image Container Width (Line 69 in page.tsx vs Line 340 in Home.jsx)

**Current Local:**
```tsx
<div className="w-full relative slide-up-4">
    <HeroCarousel />
</div>
```

**Production Reference:**
```jsx
<div className="w-full slide-up-4 flex justify-center lg:justify-end">
   <div className="w-full lg:w-[93.5%]">
      <HeroCarousel />
   </div>
</div>
```

**Issue:** Local uses full width for the image container, while production uses 93.5% width on large screens with right alignment.

**Fix Required:** 
- Add wrapper div with `flex justify-center lg:justify-end`
- Add inner div with `w-full lg:w-[93.5%]`

---

### 4. Hero Image Alignment (Line 69 in page.tsx vs Line 339 in Home.jsx)

**Current Local:**
```tsx
<div className="w-full relative slide-up-4">
```

**Production Reference:**
```jsx
<div className="w-full slide-up-4 flex justify-center lg:justify-end">
```

**Issue:** Local has no explicit alignment, while production centers on mobile and right-aligns on large screens.

**Fix Required:** Add `flex justify-center lg:justify-end` to the wrapper div

---

### 5. H1 Line Height (Line 30 in page.tsx vs Line 309 in Home.jsx)

**Current Local:**
```tsx
className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-bold text-black mb-6 leading-tight slide-up-1"
```

**Production Reference:**
```jsx
className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1"
```

**Issue:** Local uses `leading-tight` (approx 1.25) and `font-bold`, while production uses `leading-[1.1]` (tighter) and `font-extrabold`.

**Fix Required:** Change `leading-tight` to `leading-[1.1]` and `font-bold` to `font-extrabold`

---

### 6. Text Content Container (Line 28 in page.tsx vs Line 308 in Home.jsx)

**Current Local:**
```tsx
<div className="space-y-6">
```

**Production Reference:**
```jsx
<div className="flex flex-col justify-center text-left">
```

**Issue:** Local uses `space-y-6` for vertical spacing, while production uses flexbox with explicit alignment.

**Fix Required:** Change `space-y-6` to `flex flex-col justify-center text-left`

---

### 7. Subtitle Container (Line 34 in page.tsx vs Line 313 in Home.jsx)

**Current Local:**
```tsx
<div className="mb-8 slide-up-2">
```

**Production Reference:**
```jsx
<div className="mb-8 max-w-xl slide-up-2">
```

**Issue:** Local has no max-width constraint, while production limits to `max-w-xl`.

**Fix Required:** Add `max-w-xl` to the subtitle container

---

## Implementation Plan

### Step 1: Update Container Padding
Change line 25 in `app/[lang]/page.tsx`:
```tsx
// FROM:
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

// TO:
<div className="w-full px-6 md:px-12 lg:px-16">
```

### Step 2: Update Grid Layout
Change line 26 in `app/[lang]/page.tsx`:
```tsx
// FROM:
<div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

// TO:
<div className="grid lg:grid-cols-2 gap-12 items-center">
```

### Step 3: Update Text Content Container
Change line 28 in `app/[lang]/page.tsx`:
```tsx
// FROM:
<div className="space-y-6">

// TO:
<div className="flex flex-col justify-center text-left">
```

### Step 4: Update H1 Styling
Change line 30 in `app/[lang]/page.tsx`:
```tsx
// FROM:
className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-bold text-black mb-6 leading-tight slide-up-1"

// TO:
className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1"
```

### Step 5: Update Subtitle Container
Change line 34 in `app/[lang]/page.tsx`:
```tsx
// FROM:
<div className="mb-8 slide-up-2">

// TO:
<div className="mb-8 max-w-xl slide-up-2">
```

### Step 6: Update Hero Image Container
Change lines 69-71 in `app/[lang]/page.tsx`:
```tsx
// FROM:
<div className="w-full relative slide-up-4">
    <HeroCarousel />
</div>

// TO:
<div className="w-full slide-up-4 flex justify-center lg:justify-end">
   <div className="w-full lg:w-[93.5%]">
      <HeroCarousel />
   </div>
</div>
```

---

## Summary of Changes

| Element | Current | Target | Impact |
|---------|---------|--------|--------|
| Container Padding | `px-6` | `px-6 md:px-12 lg:px-16` | More breathing room on larger screens |
| Grid Layout | `0.8fr_1.2fr` (40/60) | `2` (50/50) | Equal column distribution |
| Image Width | `100%` | `93.5%` on lg | Image doesn't touch edge |
| Image Alignment | Default | `justify-center lg:justify-end` | Centered mobile, right-aligned desktop |
| H1 Font Weight | `font-bold` | `font-extrabold` | Bolder heading |
| H1 Line Height | `leading-tight` | `leading-[1.1]` | Tighter line spacing |
| Text Container | `space-y-6` | `flex flex-col justify-center text-left` | Better vertical alignment |
| Subtitle Width | Unconstrained | `max-w-xl` | Prevents overly wide text |

---

## Visual Impact

These changes will result in:
1. **More balanced layout** - Equal 50/50 grid split instead of 40/60
2. **Better spacing** - Responsive padding increases on larger screens
3. **Proper image positioning** - Image is 93.5% width and right-aligned on desktop
4. **Tighter typography** - H1 has tighter line height and bolder weight
5. **Consistent alignment** - Text and image properly aligned across breakpoints

---

## Files to Modify

- `app/[lang]/page.tsx` - Lines 25, 26, 28, 30, 34, 69-71

---

## Verification Checklist

After implementing changes, verify:
- [ ] Container padding matches production on mobile (px-6)
- [ ] Container padding matches production on tablet (md:px-12)
- [ ] Container padding matches production on desktop (lg:px-16)
- [ ] Grid columns are equal 50/50 on large screens
- [ ] Hero image is 93.5% width on large screens
- [ ] Hero image is right-aligned on large screens
- [ ] H1 line height is 1.1
- [ ] H1 font weight is extrabold
- [ ] Subtext has max-w-xl constraint
- [ ] Overall visual alignment matches production
