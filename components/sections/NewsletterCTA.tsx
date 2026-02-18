"use client";

import { NewsletterForm } from "@/components/NewsletterForm";

interface NewsletterCTAProps {
    heading: string;
    text: string;
    placeholder: string;
    buttonText: string;
    lang: string;
}

export const NewsletterCTA = ({ heading, text, placeholder, buttonText, lang }: NewsletterCTAProps) => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem]">
                    {/* Animated Background - matching "Our philosophy" section */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #f5d4c1, #e8c3b0, #d4c4b0, #c0c0c0, #d3d3d3, #f0d5d0, #e8c3b0, #f5d4c1)',
                            backgroundSize: '400% 400%',
                            animation: 'gradient-shift 10s ease infinite'
                        }}
                    />

                    <div className="relative z-10 p-12 md:p-24 text-center space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1]">
                                {heading}
                            </h2>
                            <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed">
                                {text}
                            </p>
                        </div>
                        <div className="pt-8">
                            <NewsletterForm
                                placeholder={placeholder}
                                buttonText={buttonText}
                                source="Blog Page"
                                variant="cta"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
