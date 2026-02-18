import { Outfit, Space_Grotesk, Syne, Manrope, Inter, Commissioner } from 'next/font/google';

// Outfit - Primary font for body text and UI
// Note: Weight 300 was causing 404 errors, removed from config
export const outfit = Outfit({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-outfit',
    display: 'swap',
    preload: true,
});

// Space Grotesk - Secondary font for headings and accents
export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-space-grotesk',
    display: 'swap',
    preload: true,
});

// Syne - Display font for special headings and branding
export const syne = Syne({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-syne',
    display: 'swap',
    preload: false, // Load on demand for special sections
});

// Manrope - Greek-supporting fallback font (kept as secondary fallback)
export const manrope = Manrope({
    subsets: ['latin', 'greek'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-manrope',
    display: 'swap',
    preload: false,
});

// Inter - Primary Greek font with geometric sans-serif aesthetic similar to Syne
// Supports both Latin and Greek with wide weight range, modern geometric letterforms
export const inter = Inter({
    subsets: ['latin', 'latin-ext', 'greek'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,
});

// Commissioner - Unified font for both Latin and Greek
// A versatile sans-serif with excellent Greek support and multiple optical sizes
// Weights: 100-900 (thin to black), includes variable font
export const commissioner = Commissioner({
    subsets: ['latin', 'latin-ext', 'greek', 'cyrillic', 'cyrillic-ext'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-commissioner',
    display: 'swap',
    preload: true,
});

// Combined font variables for easy application
export const fontVariables = `${outfit.variable} ${spaceGrotesk.variable} ${syne.variable} ${manrope.variable} ${inter.variable} ${commissioner.variable}`;
