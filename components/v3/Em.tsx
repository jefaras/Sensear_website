import type { ReactNode } from 'react';

interface EmProps {
    children: ReactNode;
    className?: string;
}

export function Em({ children, className }: EmProps) {
    return (
        <span className={`se-em ${className ?? ''}`}>
            {children}
        </span>
    );
}
