import { Outfit, Space_Grotesk, Syne, Manrope } from 'next/font/google';

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

// Manrope - Greek-supporting fallback font with similar geometric sans-serif aesthetic
// Used as fallback for Greek characters since Outfit/Space Grotesk/Syne don't support Greek
export const manrope = Manrope({
    subsets: ['latin', 'greek'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-manrope',
    display: 'swap',
    preload: true,
});

// Combined font variables for easy application
export const fontVariables = `${outfit.variable} ${spaceGrotesk.variable} ${syne.variable} ${manrope.variable}`;
