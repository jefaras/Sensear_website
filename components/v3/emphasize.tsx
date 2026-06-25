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
