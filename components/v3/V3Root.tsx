import type { CSSProperties, ReactNode } from 'react';

const v3Vars = {
    '--ink': '#0b0a0a',
    '--ink-2': '#0e0d0c',
    '--paper': '#faf6f1',
    '--accent': '#f0bd95',
    '--peach': '#faebe3',
    '--gold': 'linear-gradient(100deg,#f0cdb8 0%,#f7ddd0 15%,#fcefe7 29%,#ffffff 44%,#efeeec 58%,#dad8d6 72%,#d2cec9 84%,#e4d9c4 100%)',
    '--gold-text': 'linear-gradient(100deg,#edc4ac 0%,#f6dccd 19%,#fffaf6 42%,#eae8e4 60%,#d3cfc9 77%,#e2d6bf 100%)',
} as CSSProperties;

interface V3RootProps {
    children: ReactNode;
    className?: string;
}

export function V3Root({ children, className }: V3RootProps) {
    return (
        <div
            style={v3Vars}
            className={`relative overflow-x-hidden bg-[#0b0a0a] text-[#faf6f1] ${className ?? ''}`}
        >
            {children}
        </div>
    );
}
