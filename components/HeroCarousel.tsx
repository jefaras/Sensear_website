"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Blur placeholders for carousel images (base64 encoded tiny images)
const blurPlaceholders: Record<string, string> = {
    "carousel-venue-atmosphere-1.jpg": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q==",
    "carousel-event-venue.jpg": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q==",
    "carousel-sky-venue.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
        // { src: "/images/carousel/carousel-home-interior.jpg", alt: "Elegant home interior with curated music atmosphere" },
        { src: "/images/carousel/carousel-venue-atmosphere-1.jpg", alt: "Venue atmosphere with professional sound design" },
        // { src: "/images/carousel/carousel-oneonly-aesthesis-hotel.png", alt: "OneOnly Aesthesis Hotel luxury hospitality music" },
        // { src: "/images/carousel/carousel-venue-atmosphere-2.jpg", alt: "Event venue with ambient music experience" },
        { src: "/images/carousel/carousel-event-venue.jpg", alt: "Event venue professional audio solutions" },
        { src: "/images/carousel/carousel-sky-venue.png", alt: "Sky venue with premium sound experience" },
        // { src: "/images/carousel/carousel-hospitality-space.jpg", alt: "Hospitality space with signature playlist" },
        // { src: "/images/carousel/carousel-lifestyle-event.jpg", alt: "Lifestyle event with custom soundtrack" },
        // { src: "/images/carousel/carousel-venice-glass-week.jpg", alt: "Venice Glass Week event music curation" }
    ];

    // Get blur placeholder for an image
    const getBlurPlaceholder = (src: string): string => {
        const filename = src.split("/").pop() || "";
        return blurPlaceholders[filename] || blurPlaceholders["carousel-venue-atmosphere-1.jpg"];
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
