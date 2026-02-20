# Section Layout Swap Plan

## Overview
This plan details the changes needed to swap image/text positions in specific sections on the Services and Home pages, and ensure consistent image dimensions.

## Current State Analysis

### Services Page (`app/[lang]/services/page.tsx`)

#### Signature Playlists Section (lines 139-179)
- **Current Layout:** Text/CTA on LEFT, Image on RIGHT
- **Grid:** `grid lg:grid-cols-2`
- **Text column:** `order-1 lg:order-1`
- **Image column:** `order-2 lg:order-2`
- **Image dimensions:** 800x600

#### Event Soundtracks Section (lines 182-222)
- **Current Layout:** Image on LEFT, Text/CTA on RIGHT
- **Grid:** `grid lg:grid-cols-2`
- **Image column:** `order-2 lg:order-1`
- **Text column:** `order-1 lg:order-2`
- **Image dimensions:** 800x1000 with `aspect-[3/4]`

### Home Page Components

#### Services Component (`components/home/Services.tsx`) - Four ways we reimagine venues
- **Current Layout:** Text/CTA on LEFT, Image on RIGHT
- **Grid:** `grid md:grid-cols-[1fr_1.2fr]`
- **Text column:** `md:order-1`
- **Image column:** `md:order-2`
- **Image dimensions:** 800x600

#### Expertise Component (`components/home/Expertise.tsx`) - Your world, our expertise
- **Current Layout:** Image on LEFT, Text/CTA on RIGHT
- **Grid:** `grid md:grid-cols-[1.2fr_1fr]`
- **Image column:** `order-last md:order-1`
- **Text column:** `md:order-2`
- **Image dimensions:** 800x600

#### Enhance Component (`components/home/Enhance.tsx`) - How we redefine your venue
- **Current Layout:** Image on LEFT, Text/CTA on RIGHT
- **Grid:** `grid md:grid-cols-2`
- **Image dimensions:** 800x600 (already matches target dimensions)

---

## Required Changes

### 1. Services Page - Signature Playlists
**Target:** Image on LEFT, Text/CTA on RIGHT

**Changes needed in `app/[lang]/services/page.tsx`:**
- Swap the order classes between text and image columns
- Text column: change from `order-1 lg:order-1` to `order-2 lg:order-2`
- Image column: change from `order-2 lg:order-2` to `order-1 lg:order-1`

### 2. Services Page - Event Soundtracks
**Target:** Text/CTA on LEFT, Image on RIGHT

**Changes needed in `app/[lang]/services/page.tsx`:**
- Swap the order classes between text and image columns
- Image column: change from `order-2 lg:order-1` to `order-1 lg:order-2`
- Text column: change from `order-1 lg:order-2` to `order-2 lg:order-1`

### 3. Home Page - Services Component
**Target:** Image on LEFT, Text/CTA on RIGHT

**Changes needed in `components/home/Services.tsx`:**
- Swap the order classes between text and image columns
- Text column: change from `md:order-1` to `md:order-2`
- Image column: change from `md:order-2` to `md:order-1`

### 4. Home Page - Expertise Component
**Target:** Text/CTA on LEFT, Image on RIGHT

**Changes needed in `components/home/Expertise.tsx`:**
- Swap the order classes between text and image columns
- Image column: change from `order-last md:order-1` to `order-last md:order-2`
- Text column: change from `md:order-2` to `md:order-1`

### 5. Home Page - Enhance Component
**Target:** Apply same image dimensions as Services/Expertise (800x600)

**Status:** Already has 800x600 dimensions - **NO CHANGE NEEDED**

---

## Visual Summary

```
BEFORE:
┌─────────────────────────────────────────────────────────────┐
│ SERVICES PAGE                                               │
│ Signature Playlists: [TEXT/CTA] [IMAGE]                    │
│ Event Soundtracks:   [IMAGE] [TEXT/CTA]                    │
├─────────────────────────────────────────────────────────────┤
│ HOME PAGE                                                   │
│ Services (Four ways): [TEXT/CTA] [IMAGE]                   │
│ Expertise (Your world): [IMAGE] [TEXT/CTA]                 │
│ Enhance (How we redefine): [IMAGE] [TEXT/CTA] - 800x600    │
└─────────────────────────────────────────────────────────────┘

AFTER:
┌─────────────────────────────────────────────────────────────┐
│ SERVICES PAGE                                               │
│ Signature Playlists: [IMAGE] [TEXT/CTA]  ← SWAPPED         │
│ Event Soundtracks:   [TEXT/CTA] [IMAGE]  ← SWAPPED         │
├─────────────────────────────────────────────────────────────┤
│ HOME PAGE                                                   │
│ Services (Four ways): [IMAGE] [TEXT/CTA]  ← SWAPPED        │
│ Expertise (Your world): [TEXT/CTA] [IMAGE]  ← SWAPPED      │
│ Enhance (How we redefine): [IMAGE] [TEXT/CTA] - 800x600    │
└─────────────────────────────────────────────────────────────┘
```

---

## Files to Modify

1. `app/[lang]/services/page.tsx` - Lines 139-222 (Signature Playlists and Event Soundtracks sections)
2. `components/home/Services.tsx` - Lines 30-64 (grid layout)
3. `components/home/Expertise.tsx` - Lines 30-68 (grid layout)

---

## Testing Strategy

Create Playwright tests to verify:
1. Services page - Signature Playlists section has image on left, text on right
2. Services page - Event Soundtracks section has text on left, image on right
3. Home page - Services section has image on left, text on right
4. Home page - Expertise section has text on left, image on right
5. All sections display correctly on desktop viewport

---

## Implementation Notes

- Only modify the order classes in the grid layouts
- Do not change any other styling, content, or functionality
- Maintain responsive behavior (mobile stacking should remain unchanged)
- Image dimensions are already consistent at 800x600 for all relevant sections
