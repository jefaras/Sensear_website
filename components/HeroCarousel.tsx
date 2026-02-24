"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Blur placeholders for carousel images (base64 encoded tiny images)
const blurPlaceholders: Record<string, string> = {
    "carousel-event-venue.jpg": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q==",
    "case-study-beach-house.webp": "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoKAAoAAUAmJYgCdAEO9ACA/v9P9f96f1AAAA=",
    "case-study-pelicanos.webp": "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoKAAoAAUAmJYgCdAEO9ACA/v9P9f96f1AAAA=",
    "case-study-yam.jpg": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q==",
    "case-study-levantis.webp": "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoKAAoAAUAmJYgCdAEO9ACA/v9P9f96f1AAAA="
};

export function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        if (emblaApi) {
            const autoplay = setInterval(() => {
                emblaApi.scrollNext();
            }, 4000);
            return () => clearInterval(autoplay);
        }
    }, [emblaApi]);

    const images = [
        // Original carousel image (kept)
        { src: "/images/carousel/carousel-event-venue.jpg", alt: "Event venue professional audio solutions" },
        // Case study images from case-studies page
        { src: "/images/case-studies/case-study-beach-house.webp", alt: "Beach House Antiparos - curated music experience" },
        { src: "/images/case-studies/case-study-pelicanos.webp", alt: "Pelicanos Sifnos - jazzy playlist curation" },
        { src: "/images/case-studies/case-study-yam.jpg", alt: "Yam Antiparos - night playlist design" },
        { src: "/images/case-studies/case-study-levantis.webp", alt: "Levantis - signature sound identity" },
    ];

    // Get blur placeholder for an image
    const getBlurPlaceholder = (src: string): string => {
        const filename = src.split("/").pop() || "";
        return blurPlaceholders[filename] || blurPlaceholders["carousel-event-venue.jpg"];
    };

    return (
        <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
                {images.map((image, index) => (
                    <div className="flex-[0_0_100%] min-w-0 relative aspect-square" key={index}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL={getBlurPlaceholder(image.src)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
