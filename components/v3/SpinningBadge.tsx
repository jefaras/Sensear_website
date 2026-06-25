interface SpinningBadgeProps {
    lines: string[];
    className?: string;
}

export function SpinningBadge({ lines, className }: SpinningBadgeProps) {
    return (
        <div
            className={`flex items-center justify-center rounded-full border border-[#faf6f1]/25 bg-[#0b0a0a]/55 backdrop-blur-[4px] ${className ?? ''}`}
            style={{ animation: 'se-spin 24s linear infinite' }}
        >
            <span className="text-center text-[9px] font-bold leading-[1.5] tracking-[0.18em] text-[#faf6f1]/60">
                {lines.map((line, i) => (
                    <span key={i}>
                        {i > 0 && <br />}
                        {line}
                    </span>
                ))}
            </span>
        </div>
    );
}
