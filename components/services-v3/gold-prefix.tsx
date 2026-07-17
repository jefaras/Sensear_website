import type { ReactNode } from 'react';

/**
 * Gold-clip the "Ιδανικό για:"-style lead-in of an `ideal_for` line at runtime
 * (the dictionary value is plain text; live routes render it unchanged).
 * Lines without a colon in the first few words are returned as-is (EN copy).
 */
export function goldPrefix(text: string): ReactNode {
    const idx = text.indexOf(':');
    if (idx === -1 || idx > 24) return text;
    return (
        <>
            <span className="se-gold-text font-bold">{text.slice(0, idx + 1)}</span>
            {text.slice(idx + 1)}
        </>
    );
}
