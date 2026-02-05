"use client";

import { useState } from "react";

interface TeamMemberImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackSrc?: string;
}

export function TeamMemberImage({
    src,
    alt,
    className,
    fallbackSrc = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
}: TeamMemberImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    return (
        <img
            src={hasError ? fallbackSrc : imgSrc}
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
        />
    );
}
