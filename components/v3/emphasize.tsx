import { Fragment, type ReactNode } from 'react';
import { Em } from './Em';

/**
 * Runtime-inject a Didot gold-italic `<Em>` around the first occurrence of
 * `word` inside `title`, WITHOUT mutating the shared dictionary value. This
 * keeps live routes (which render the same shared title keys as plain text or
 * via dangerouslySetInnerHTML) completely unaffected.
 *
 * Pass `splitOnBr` for titles that already contain a `<br />` tag (e.g. the
 * hero title): the string is split on `<br />` first and the word is only
 * emphasised within the segment that contains it.
 *
 * If `word` is not found, the title is returned unchanged (graceful fallback).
 */
export function emphasize(title: string, word: string, splitOnBr = false): ReactNode {
    if (!word) return title;

    if (splitOnBr && title.includes('<br />')) {
        const segments = title.split('<br />');
        return segments.map((segment, i) => (
            <Fragment key={i}>
                {i > 0 && <br />}
                {wrapWord(segment, word)}
            </Fragment>
        ));
    }

    return wrapWord(title, word);
}

/**
 * Hero-specific cadence: rebuilds the headline into up to three lines so the
 * emphasised word sits on the MIDDLE line together with the word that precedes
 * it — matching the reference's deliberate line breaks
 * (e.g. "Σχεδιάζουμε το" / "Soundtrack 𝘔𝘰𝘷𝘢𝘥𝘪𝘬𝘸𝘷" / "Εμπειριών").
 * Works off the shared dict title (any existing <br /> is ignored) so live
 * routes are untouched. Falls back to the in-line emphasis if the word is absent.
 */
export function emphasizeHeadline(title: string, word: string): ReactNode {
    const words = title
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ');
    const idx = words.indexOf(word);
    if (idx === -1) return emphasize(title, word, true);

    const lineStart = Math.max(0, idx - 1);
    const before = words.slice(0, lineStart).join(' ');
    const prefix = words.slice(lineStart, idx).join(' ');
    const after = words.slice(idx + 1).join(' ');

    return (
        <>
            {before && (
                <>
                    {before}
                    <br />
                </>
            )}
            {prefix && <>{prefix} </>}
            <Em>{word}</Em>
            {after && (
                <>
                    <br />
                    {after}
                </>
            )}
        </>
    );
}

function wrapWord(text: string, word: string): ReactNode {
    const idx = text.indexOf(word);
    if (idx === -1) return text;
    return (
        <>
            {text.slice(0, idx)}
            <Em>{word}</Em>
            {text.slice(idx + word.length)}
        </>
    );
}
