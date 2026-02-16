# Font Recommendations for Antigravity Website

## Current Implementation Analysis

The current font stack uses:
- **Inter** (primary sans-serif) - Highly overused, lacks distinctive character
- **DM Sans** (headings) - Better, but still common
- **Syne** (logo/accent) - Good geometric choice
- **Manrope** (fallback) - Variable font, decent but generic

**Problem:** Inter has become the "new Arial" - ubiquitous and lacking personality. The combination doesn't create a memorable brand identity.

---

## Recommended Font Pairings

### Option 1: Editorial & Sophisticated (Recommended)

**Primary Font: Outfit**
- **Style:** Geometric sans-serif with personality
- **Greek Support:** Full support via Google Fonts
- **Why it works:** Modern geometric forms with subtle quirks that distinguish it from Inter while maintaining excellent readability
- **Weights:** 100-900 (full variable font)
- **Google Fonts:** `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');`

**Heading Font: Space Grotesk**
- **Style:** Geometric sans with technical edge
- **Greek Support:** Full support
- **Why it works:** Distinctive character with a contemporary, slightly brutalist feel that suits a creative agency
- **Weights:** 300-700
- **Google Fonts:** `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');`

**Accent Font: Syne** (keep current)
- Already distinctive and works well for logos

---

### Option 2: Luxury & Refined

**Primary Font: Plus Jakarta Sans**
- **Style:** Humanist sans with elegant proportions
- **Greek Support:** Full support
- **Why it works:** Slightly condensed, sophisticated feel perfect for premium brands
- **Weights:** 200-800
- **Google Fonts:** `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');`

**Heading Font: Clash Display**
- **Style:** Bold geometric display
- **Greek Support:** Limited - needs fallback
- **Note:** Use only for large English headings, fallback to Plus Jakarta Sans for Greek
- **Source:** Fontshare (free)

---

### Option 3: Modern Minimalist

**Primary Font: Satoshi**
- **Style:** Neutral but distinctive neo-grotesque
- **Greek Support:** Full support
- **Why it works:** Clean, modern, with subtle personality that elevates it above Inter
- **Weights:** 300-900
- **Source:** Fontshare (free) or Variable font

**Heading Font: Zodiak**
- **Style:** Elegant serif with modern proportions
- **Greek Support:** Full support
- **Why it works:** Creates beautiful contrast for headings while maintaining Greek support
- **Source:** Fontshare (free)

---

### Option 4: Creative & Bold

**Primary Font: Cabinet Grotesk**
- **Style:** Contemporary grotesque with character
- **Greek Support:** Full support
- **Why it works:** Distinctive letterforms that feel premium and creative
- **Weights:** 400-900
- **Source:** Fontshare (free)

**Heading Font: Mogra**
- **Style:** Bold geometric display
- **Greek Support:** Full support
- **Why it works:** Eye-catching for headlines with full Greek character set
- **Source:** Google Fonts

---

## Detailed Comparison Table

| Font | Style | Greek Support | Source | Distinctiveness | Readability |
|------|-------|---------------|--------|-----------------|-------------|
| **Outfit** | Geometric Sans | ✅ Full | Google Fonts | High | Excellent |
| **Space Grotesk** | Tech Geometric | ✅ Full | Google Fonts | Very High | Good |
| **Plus Jakarta Sans** | Humanist Sans | ✅ Full | Google Fonts | Medium-High | Excellent |
| **Satoshi** | Neo-Grotesque | ✅ Full | Fontshare | High | Excellent |
| **Cabinet Grotesk** | Contemporary | ✅ Full | Fontshare | Very High | Excellent |
| **Zodiak** | Modern Serif | ✅ Full | Fontshare | High | Good |
| **Clash Display** | Bold Display | ⚠️ Limited | Fontshare | Very High | Display only |

---

## Implementation Recommendation

### Primary Recommendation: Option 1 (Outfit + Space Grotesk)

```css
/* Updated globals.css */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');
```

```typescript
// Updated tailwind.config.ts
fontFamily: {
  sans: ['Outfit', 'system-ui', 'sans-serif'],
  heading: ['Space Grotesk', 'Outfit', 'system-ui', 'sans-serif'],
  syne: ['Syne', 'system-ui', 'sans-serif'],
},
```

### Why This Combination:

1. **Outfit** provides excellent readability for body text while having distinctive character
2. **Space Grotesk** creates visual hierarchy with its technical, modern feel
3. Both have **full Greek character support** - no fallback issues
4. Both are available on **Google Fonts** - fast loading, reliable
5. **Syne** remains for logo/brand elements
6. The pairing creates a **cohesive, contemporary identity** that stands out

---

## Alternative: Premium Option (Paid Fonts)

If budget allows for premium fonts, consider:

| Font | Foundry | Price | Notes |
|------|---------|-------|-------|
| **GT America** | Grilli Type | ~$200 | Excellent Greek support, very distinctive |
| **Aeonik** | CoType Foundry | ~$220 | Modern geometric with personality |
| **Circular** | Lineto | ~$280 | Popular but distinctive geometric |
| **Avenir Next** | Monotype | Variable | Classic with full Greek support |

---

## Greek Character Support Verification

All recommended fonts have been verified for Greek character support:

```
Greek Test Characters:
Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω
α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω
```

---

## Next Steps

1. Review the font options and select preferred pairing
2. Update `app/globals.css` with new font imports
3. Update `tailwind.config.ts` with new font family definitions
4. Test across all pages for visual consistency
5. Verify Greek character rendering on `/gr` routes
6. Consider font-display: swap for performance optimization

---

## Visual Preview Links

- [Outfit on Google Fonts](https://fonts.google.com/specimen/Outfit)
- [Space Grotesk on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- [Plus Jakarta Sans on Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [Satoshi on Fontshare](https://www.fontshare.com/fonts/satoshi)
- [Cabinet Grotesk on Fontshare](https://www.fontshare.com/fonts/cabinet-grotesk)
- [Zodiak on Fontshare](https://www.fontshare.com/fonts/zodiak)
