'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from "@/lib/i18n";

interface EnhanceProps {
    lang: Locale;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    cta: string;
}

export default function Enhance({ lang, title, subtitle, items, cta }: EnhanceProps) {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <div className="block">
                        <Image
                            src="/images/homepage/vinyl-records-music-curation-optimized.jpg"
                            alt="Enhance your brand with SensEar music curation"
                            width={800}
                            height={600}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q=="
                            className="w-full h-auto object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="md:pl-12">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white mb-6 leading-heading">
                            {title}
                        </h2>
                        <p className="text-xl text-white/60 font-medium mb-8 leading-relaxed">
                            {subtitle}
                        </p>

                        {/* Items list */}
                        {items && items.length > 0 && (
                            <ul className="space-y-4 mb-8">
                                {items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-white/80 mt-1">•</span>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                                            <p className="text-white/60 text-base">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Link href={`/${lang}/contact`}>
                            <button className="group relative bg-white text-black hover:bg-black hover:text-white hover:border-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center border-2 border-white">
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
