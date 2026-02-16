'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from "@/lib/i18n";

interface ExpertiseProps {
    lang: Locale;
    title: string;
    subtitle: string;
    items: Array<{
        title: string;
        desc: string;
        link: string;
    }>;
    cta: string;
}

export default function Expertise({ lang, title, subtitle, items, cta }: ExpertiseProps) {
    return (
        <section className="py-24 animated-gradient">
            <style>{`
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animated-gradient {
                    background: linear-gradient(
                        135deg,
                        #f5d4c1 0%,
                        #e8c3b0 15%,
                        #d4c4b0 30%,
                        #c0c0c0 45%,
                        #d3d3d3 60%,
                        #f0d5d0 75%,
                        #e8c3b0 90%,
                        #f5d4c1 100%
                    );
                    background-size: 400% 400%;
                    animation: gradient-shift 10s ease infinite;
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center leading-heading">
                    {title}
                </h2>
                <p className="text-xl text-black/60 font-medium mb-12 text-center mx-auto max-w-5xl">
                    {subtitle}
                </p>
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-center">
                    {/* Left: Image (Vinyls) */}
                    <div className="order-last md:order-1 block">
                        <Image
                            src="/images/homepage/vinyl-records-music-curation-optimized.jpg"
                            alt="Sonic expertise in hospitality and retail music curation"
                            width={800}
                            height={600}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q=="
                            className="w-full h-auto object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="md:order-2 md:pl-12">
                        <div className="flex flex-col mb-12">
                            {items.map((item, idx) => (
                                <div key={idx} className="mb-8">
                                    <Link href={`/${lang}/${item.link}`} className="text-2xl md:text-3xl font-bold text-black block mb-3 group w-fit">
                                        <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">{item.title}</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                    <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link href={`/${lang}/industries`}>
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                    {cta}
                                </span>
                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
