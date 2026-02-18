# Clients Section White Background Styling Plan

## Overview
Change the "Now playing in venues across Greece" section from black background to white background with dark text, and add elegant black frames around client logos.

## Current State Analysis

**File:** [`components/home/TrustedBy.tsx`](components/home/TrustedBy.tsx)

### Current Styling:
| Element | Current Class | Visual Result |
|---------|---------------|---------------|
| Section | `bg-black` | Black background |
| Title | `text-white` | White text |
| Client names | `text-white/90` | White text at 90% opacity |
| Locations | `text-white/60` | White text at 60% opacity |
| Logo containers | `bg-white rounded-lg p-3 border-4 border-white shadow-md` | White box with white border |

## Required Changes

### 1. Section Background
- **Change:** `bg-black` → `bg-white`
- **Line 13**

### 2. Title Text
- **Change:** `text-white` → `text-black` or `text-gray-900`
- **Line 26**

### 3. Client Names
- **Change:** `text-white/90` → `text-black/90` or `text-gray-800`
- **Lines 37, 45, 53, 61, 69**

### 4. Location Text
- **Change:** `text-white/60` → `text-black/60` or `text-gray-500`
- **Lines 38, 46, 54, 62, 70**

### 5. Logo Container Frames
- **Current:** `border-4 border-white` (white border on white background - invisible)
- **New:** `border border-gray-200` or `border-2 border-black/10` (subtle black/gray frame)
- **Alternative:** `ring-1 ring-black/5` for an even more subtle effect
- **Lines 34, 42, 50, 58, 66**

## Recommended Tailwind Classes

```tsx
// Section
<section className="py-24 bg-white overflow-hidden">

// Title
<h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-20 text-gray-900 leading-heading">

// Logo container - elegant subtle black frame
<div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm">

// Client name
<p className="text-lg font-semibold text-gray-800 tracking-widest uppercase">

// Location
<p className="text-sm text-gray-500 mt-1">
```

## Visual Comparison

### Before:
```
┌─────────────────────────────────────────┐
│ ███████████ BLACK BACKGROUND ███████████│
│                                         │
│      Now playing in venues across...    │ ← White text
│                                         │
│   ┌─────┐  ┌─────┐  ┌─────┐            │
│   │Logo │  │Logo │  │Logo │            │ ← White boxes (invisible border)
│   └─────┘  └─────┘  └─────┘            │
│   KLouvi   Blue     Beach              │ ← White text
│   Athens   Athens   Antiparos          │ ← White text (faded)
└─────────────────────────────────────────┘
```

### After:
```
┌─────────────────────────────────────────┐
│ ▒▒▒▒▒▒▒▒▒▒ WHITE BACKGROUND ▒▒▒▒▒▒▒▒▒▒│
│                                         │
│      Now playing in venues across...    │ ← Dark text
│                                         │
│   ┌─────┐  ┌─────┐  ┌─────┐            │
│   │Logo │  │Logo │  │Logo │            │ ← White boxes with subtle black frame
│   └─────┘  └─────┘  └─────┘            │
│   KLouvi   Blue     Beach              │ ← Dark text
│   Athens   Athens   Antiparos          │ ← Gray text
└─────────────────────────────────────────┘
```

## Implementation Steps

1. Open [`components/home/TrustedBy.tsx`](components/home/TrustedBy.tsx)
2. Update section background class
3. Update title text color class
4. Update all client name text color classes (5 instances)
5. Update all location text color classes (5 instances)
6. Update all logo container border classes (5 instances)

## Files to Modify

- [`components/home/TrustedBy.tsx`](components/home/TrustedBy.tsx) - Main component file
