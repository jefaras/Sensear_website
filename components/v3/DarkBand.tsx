import type { ReactNode } from 'react';

interface DarkBandProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    container?: boolean;
}

export function DarkBand({ children, className, containerClassName, container = true }: DarkBandProps) {
    return (
        <section className={className}>
            {container ? (
                <div className={`mx-auto max-w-[1380px] px-6 sm:px-8 ${containerClassName ?? ''}`}>
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
