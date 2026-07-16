'use client';

import { useState } from 'react';

const BARS = [
    { duration: '1.1s', delay: '0s' },
    { duration: '0.85s', delay: '0.15s' },
    { duration: '1.3s', delay: '0.05s' },
    { duration: '0.95s', delay: '0.28s' },
    { duration: '1.15s', delay: '0.12s' },
    { duration: '0.8s', delay: '0.22s' },
    { duration: '1.25s', delay: '0.34s' },
] as const;

interface EQWidgetProps {
    label: string;
    track: string;
}

export function EQWidget({ label, track }: EQWidgetProps) {
    const [playing, setPlaying] = useState(true);

    return (
        <div className="mt-[clamp(45px,3.52vw,62px)] flex items-center gap-[clamp(17px,1.31vw,23px)]">
            <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label="Toggle equalizer"
                className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border border-[#faf6f1]/28 bg-[#faf6f1]/5 text-[#faf6f1] transition-[border-color,background-color] hover:border-[var(--accent)] hover:bg-[rgba(240,189,149,0.1)]"
            >
                <span className="text-[clamp(12px,0.85vw,15px)] tracking-[1px]">{playing ? '\u275A\u275A' : '\u25B6'}</span>
            </button>
            <div className="flex h-[48px] items-end gap-1">
                {BARS.map((bar, i) => (
                    <div
                        key={i}
                        className="h-[48px] w-1 origin-bottom rounded-[2px]"
                        style={{
                            background: 'var(--gold)',
                            transform: 'scaleY(.5)',
                            animation: `se-eq ${bar.duration} ease-in-out infinite`,
                            animationDelay: bar.delay,
                            animationPlayState: playing ? 'running' : 'paused',
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.3em] text-[#faf6f1]/40">{label}</span>
                <span className="text-[clamp(12px,0.85vw,15px)] font-semibold text-[#faf6f1]/85">{track}</span>
            </div>
        </div>
    );
}
