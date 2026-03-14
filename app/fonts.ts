import { Syne, Commissioner } from 'next/font/google';

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

// Combined font variables used globally
export const fontVariables = `${commissioner.variable} ${syne.variable}`;
