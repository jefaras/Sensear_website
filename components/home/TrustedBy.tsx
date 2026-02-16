'use client';

import Image from 'next/image';
import { Locale } from "@/lib/i18n";

interface TrustedByProps {
    lang: Locale;
    title: string;
}

export default function TrustedBy({ lang, title }: TrustedByProps) {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll-left 30s linear infinite;
                    white-space: nowrap;
                    width: fit-content;
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-20 text-white leading-heading">{title}</h2>

                <div className="relative">
                    <div className="flex gap-12 animate-scroll">
                        {/* Duplicate the items to ensure seamless scrolling */}
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-12">
                                <div className="flex-shrink-0 text-center w-[180px]">
                                    <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                        <Image src="/images/homepage/clients/client-klouvi-bar-athens.jpg" alt="Klouvi Bar logo" width={100} height={100} loading="lazy" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                                    <p className="text-sm text-white/60 mt-1">Athens</p>
                                </div>

                                <div className="flex-shrink-0 text-center w-[180px]">
                                    <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                        <Image src="/images/homepage/clients/client-blue-bamboo-athens-serifos.jpg" alt="Blue Bamboo logo" width={100} height={100} loading="lazy" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                                    <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
                                </div>

                                <div className="flex-shrink-0 text-center w-[180px]">
                                    <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                        <Image src="/images/homepage/clients/client-beach-house-antiparos.jpg" alt="Beach House logo" width={100} height={100} loading="lazy" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                                    <p className="text-sm text-white/60 mt-1">Antiparos</p>
                                </div>

                                <div className="flex-shrink-0 text-center w-[180px]">
                                    <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                        <Image src="/images/homepage/clients/client-pelicanos-sifnos.jpg" alt="Pelicanos logo" width={100} height={100} loading="lazy" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                                    <p className="text-sm text-white/60 mt-1">Sifnos</p>
                                </div>

                                <div className="flex-shrink-0 text-center w-[180px]">
                                    <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                        <Image src="/images/homepage/clients/client-yam-antiparos.png" alt="Yam logo" width={100} height={100} loading="lazy" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                                    <p className="text-sm text-white/60 mt-1">Antiparos</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
