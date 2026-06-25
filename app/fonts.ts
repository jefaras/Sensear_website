import { Syne, Commissioner, GFS_Didot } from 'next/font/google';

// Syne - display brand typeface used for logo/emphasis, loaded non-critically
export const syne = Syne({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-syne',
    display: 'swap',
    preload: false,
});

// Commissioner - unified primary font for critical path (Latin + Greek)
export const commissioner = Commissioner({
    subsets: ['latin', 'greek'],
    weight: ['400', '700'],
    variable: '--font-commissioner',
    display: 'swap',
    preload: true,
});

// GFS Didot - display accent used by the v3 redesign (Latin + Greek).
// The font only ships an upright face; the italic slant is synthesised via
// `font-style: italic` in the `.font-didot` / `.se-em` utilities (matching the
// design reference), so we load the normal style only.
export const gfsDidot = GFS_Didot({
    subsets: ['greek', 'latin'],
    weight: ['400'],
    variable: '--font-didot',
    display: 'swap',
    preload: false,
});

// Combined font variables used globally
export const fontVariables = `${commissioner.variable} ${syne.variable} ${gfsDidot.variable}`;
