import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.about_page.meta.title,
        description: dict.about_page.meta.description,
    };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.about_page;

    return (
        <div className="bg-white min-h-screen relative overflow-x-hidden">
            {/* Blue Glow Vignette - applied globally or as a fixed overlay */}
            <div className="fixed inset-0 pointer-events-none z-50">
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(37,99,235,0.15)] md:shadow-[inset_0_0_200px_rgba(37,99,235,0.2)]" />
            </div>

            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/10 blur-[120px] rounded-full" />
            </div>

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className={`flex flex-col ${lang === 'el' ? 'lg:flex-row' : ''} gap-12 lg:gap-20 items-start`}>
                        <div className={`${lang === 'el' ? 'lg:w-1/2' : 'w-full'} space-y-8`}>
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black leading-[1.1] tracking-tight">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/60 leading-relaxed max-w-2xl">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        <div className={`w-full ${lang === 'el' ? 'lg:w-1/2' : 'mt-12 group'}`}>
                            <div className="relative aspect-[16/10] lg:aspect-auto">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg"
                                    alt={content.hero.image_alt}
                                    className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10"
                                />
                                {/* Blue tint overlay for hero image if needed, live has a very blue team photo */}
                                <div className="absolute inset-0 bg-blue-600/20 rounded-[2rem] z-20 mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Mouse Icon */}
                <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
                    <div className="w-5 h-8 border-2 border-black rounded-full flex justify-center p-1.5 pt-1">
                        <div className="w-0.5 h-1.5 bg-black rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* 2. Philosophy Section (Dark) */}
            <section className="bg-[#000000] text-white py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/40">
                        {content.philosophy.heading}
                    </h2>
                    <div className="space-y-10">
                        <p
                            className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-white/90"
                            dangerouslySetInnerHTML={{ __html: content.philosophy.text }}
                        />
                        <div className="pt-8 flex justify-center">
                            <Link href={`/${lang}/${content.philosophy.link}`} className="inline-flex items-center text-white text-lg font-medium border-b border-white pb-1.5 hover:gap-4 transition-all group tracking-wide">
                                {content.philosophy.link_text}
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Timeline Section (White) */}
            <section className="bg-white py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl mb-24">
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-black/40 mb-6">
                            {content.journey.heading}
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
                            {content.journey.subtitle}
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Vertical line always on the left */}
                        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-black/10" />

                        <div className="space-y-24">
                            {content.journey.timeline.map((item: any, idx: number) => (
                                <div key={idx} className="relative pl-16 md:pl-24 group">
                                    {/* Year Circle */}
                                    <div className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm md:text-base border-4 border-white shadow-lg z-10 transition-transform group-hover:scale-110">
                                        {item.year}
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <p className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed max-w-4xl">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Vision Section (Dark) */}
            <section className="bg-[#000000] text-white py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/40">
                        {content.vision.heading}
                    </h2>
                    <div className="space-y-10">
                        <p
                            className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-white/90"
                            dangerouslySetInnerHTML={{ __html: content.vision.text }}
                        />
                        <div className="pt-8 flex justify-center">
                            <Link href={`/${lang}/${content.vision.link}`} className="inline-flex items-center text-white text-lg font-medium border-b border-white pb-1.5 hover:gap-4 transition-all group tracking-wide">
                                {content.vision.link_text}
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Team Section (Atmospheric) */}
            <section className="relative py-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-32 space-y-6">
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-black/40">
                            {content.team.subtitle}
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight">
                            {content.team.heading}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
                        {content.team.members.map((member: any, idx: number) => (
                            <div key={idx} className="space-y-8 group">
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-700 pointer-events-none" />
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-black">{member.name}</h4>
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/50">
                                            {member.title}
                                        </p>
                                    </div>
                                    <div className="space-y-4 pt-4 border-t border-black/10">
                                        {member.bio.map((para: string, pIdx: number) => (
                                            <p key={pIdx} className="text-black/70 leading-relaxed font-medium text-base">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Differentiators Section (Warm Beige) */}
            <section className="bg-[#faebe3] py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl mb-24">
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-black/40 mb-12">
                            {content.differentiators.heading}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {content.differentiators.items.map((item: any, idx: number) => (
                            <div key={idx} className="space-y-8 group border-t border-black/5 pt-8 hover:border-black/20 transition-colors duration-500">
                                <div className="w-12 h-12 rounded-xl border-2 border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-black leading-tight">{item.title}</h4>
                                    <p className="text-black/60 font-medium leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Final CTA Section (Animated Gradient Background Card) */}
            <FinalCTA
                heading={content.final_cta.heading}
                text={content.final_cta.text}
                buttons={content.final_cta.buttons}
                lang={lang}
            />
        </div>
    );
}
