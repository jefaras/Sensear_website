# Button Height and Width Adjustment Plan

## Summary

This plan addresses button height consistency and horizontal padding adjustments across multiple pages as requested.

## Current State Analysis

### Button Components Involved

1. **[`AnimatedButton`](components/AnimatedButton.tsx)** - Used by FinalCTA and directly in about page
   - Current padding: `px-10 py-7`
   - Used on: services, industries, case-studies, about pages (FinalCTA and team section)

2. **Custom button in [`contact/page.tsx`](app/[lang]/contact/page.tsx:157)** - "Read all FAQs"
   - Current padding: `px-8 py-4`
   - Needs to match AnimatedButton height

### Important Discovery: Industry Sub-pages

Industry sub-pages (hotels, restaurants, retail, wellness, events, art-museums) already use `className="px-14"` override on AnimatedButton. This means:
- Changing AnimatedButton's default padding will NOT affect these pages
- They have their own explicit padding override

### Pages and Buttons to Modify

| Page | Section | Buttons | Action |
|------|---------|---------|--------|
| `/services` | "Let's explore your possibilities" | Both buttons in FinalCTA | Increase width |
| `/industries` | "Discover your sound potential" | Both buttons in FinalCTA | Increase width |
| `/case-studies` | "Your venue's sound journey starts here" | Both buttons in FinalCTA | Increase width |
| `/about` | "Discover your sound path" | Both buttons in FinalCTA | Rename first button, increase width |
| `/about` | Team section | "Read case studies" + "Get in touch" | Increase width |
| `/contact` | FAQ section | "Read all FAQs" | Match height + increase width |

## Implementation Plan

### Step 1: Rename Button Text in Dictionaries

**File: [`dictionaries/en.json`](dictionaries/en.json:464)**
- Change `"text": "Curated playlists"` to `"text": "Discover Curated playlists"`

**File: [`dictionaries/el.json`](dictionaries/el.json)** (corresponding line)
- Apply equivalent Greek translation: "Επιμελημένες playlists" → "Ανακαλύψτε Επιμελημένες playlists"

### Step 2: Update AnimatedButton Default Padding

**File: [`components/AnimatedButton.tsx`](components/AnimatedButton.tsx:17)**
- Change `px-10` to `px-12` for slightly more horizontal breathing room
- This affects all pages using AnimatedButton without explicit className override
- Industry sub-pages are NOT affected (they use `className="px-14"`)

### Step 3: Update Contact Page Button

**File: [`app/[lang]/contact/page.tsx`](app/[lang]/contact/page.tsx:157)**
- Change button padding from `px-8 py-4` to `px-12 py-7`
- This matches the new AnimatedButton dimensions

## Files to Modify

| File | Change |
|------|--------|
| `dictionaries/en.json` | Rename "Curated playlists" → "Discover Curated playlists" |
| `dictionaries/el.json` | Rename Greek equivalent |
| `components/AnimatedButton.tsx` | Change `px-10` to `px-12` |
| `app/[lang]/contact/page.tsx` | Change `px-8 py-4` to `px-12 py-7` |

## Verification Checklist

- [ ] Services page: Both buttons have same height and increased width
- [ ] Industries page: Both buttons have same height and increased width
- [ ] Case-studies page: Both buttons have same height and increased width
- [ ] About page FinalCTA: Both buttons have same height, first button renamed
- [ ] About page team section: "Read case studies" and "Get in touch" have increased width
- [ ] Contact page: "Read all FAQs" matches other buttons' height and width
- [ ] Industry sub-pages: Buttons remain unchanged (still use `px-14` override)
