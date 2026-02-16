import { Outfit, Space_Grotesk, Syne } from 'next/font/google';

// Outfit - Primary font for body text and UI
// Note: Weight 300 was causing 404 errors, removed from config
export const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-outfit',
    display: 'swap',
    preload: true,
});

// Space Grotesk - Secondary font for headings and accents
export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
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

// Combined font variables for easy application
export const fontVariables = `${outfit.variable} ${spaceGrotesk.variable} ${syne.variable}`;
