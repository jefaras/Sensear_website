"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e517a47e3_universal_upscale_0_4f88a784-7ce2-4381-8059-39738ad141ea_0.jpg",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6fa9ec2a4_ace50e7b5_E_HryzeWYAUw8vR-2CROPPED1-1.jpg",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/52886774b_OneOnly_Aesthesis_P4_Neo_Boutique_Exterior_0033_MASTER_1-1.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6fcaa40a3_e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALEDcropped.jpg",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b042a0fd5_d879cafadbbf888b32b8923798fcbcf3-cropped.jpg",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fa74dc9ac_skycropped1-1.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65063f93c_home-1-scaled-1-1.jpg",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f18df65bd_GR2C1917-1-1455x970_1-1.jpg",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cd9cf79ec_The-Venice-Glass-Week-2023-01_1-1.jpg"
    ];

    return (
        <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
                {images.map((src, index) => (
                    <div className="flex-[0_0_100%] min-w-0 relative aspect-square" key={index}>
                        <img
                            src={src}
                            alt={`Hero slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
