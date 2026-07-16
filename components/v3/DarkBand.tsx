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
                <div className={`mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] ${containerClassName ?? ''}`}>
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
