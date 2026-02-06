import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

// Simple markdown bold parser: converts **text** to <strong>text</strong>
function parseMarkdownBold(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

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
        <div className="bg-[#faebe3] min-h-screen relative overflow-x-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-up-1 { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .slide-up-2 { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .slide-up-4 { animation: slideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
            background-size: 400% 400%;
            animation: gradient-shift 10s ease infinite;
        }
      `}} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
                {/* Background - using inline style for arbitrary external URL */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: H1 */}
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] tracking-tight slide-up-1">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        {/* Right Column: Square Image */}
                        <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <img
                                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/738905847_gemini-image-2_Photography_of_a_candid_scene_with_a_blue_background_featuring_a_woman_s_figure_-0.jpg"
                                        alt={content.hero.image_alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Vision Section */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {content.vision.heading}
                        </h2>
                        
                        <div className="w-full text-center">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                {lang === 'el' ? (
                                    <>Να γίνουμε ο <strong>κορυφαίος συνεργάτης μουσικής</strong> για <strong>brands & εκδηλώσεις με χαρακτήρα</strong>, που θέλουν <strong>ταυτότητα, ατμόσφαιρα</strong> και <strong>ουσιαστική σύνδεση</strong> με τους επισκέπτες τους.</>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: parseMarkdownBold(content.vision.text) }} />
                                )}
                            </p>
                            
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Philosophy Section (Animated Gradient) */}
            <section className="animated-gradient py-32 px-6 relative z-10" style={{
                backgroundImage: 'linear-gradient(135deg, #f5d4c1, #e8c3b0, #d4c4b0, #c0c0c0, #d3d3d3, #f0d5d0, #e8c3b0, #f5d4c1)'
            }}>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-black leading-tight mb-12">
                        {content.philosophy.heading}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-black leading-relaxed max-w-4xl mx-auto">
                        <span dangerouslySetInnerHTML={{ __html: parseMarkdownBold(content.philosophy.text) }} />
                    </p>
                </div>
            </section>

            {/* 4. Journey Section (White) */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-[3.45rem] font-bold text-black mb-4">
                            {content.journey.heading}
                        </h2>
                        <p className="text-xl text-black/60 font-medium">
                            {content.journey.subtitle}
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        {/* Left Column: Timeline */}
                        <div className="relative">
                            {/* Vertical line behind markers */}
                            <div className="absolute left-[47px] top-0 bottom-0 w-[2px] bg-black/20" />

                            <div className="space-y-12">
                                {content.journey.timeline.map((item: any, idx: number) => (
                                    <div key={idx} className="relative flex items-start">
                                        {/* Year Circle */}
                                        <div className="w-24 h-24 rounded-full bg-black text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-lg z-10">
                                            {item.year}
                                        </div>

                                        {/* Text */}
                                        <div className="ml-6 pt-4">
                                            <p className="text-xl text-black/60 leading-relaxed">
                                                <span dangerouslySetInnerHTML={{ __html: parseMarkdownBold(item.text) }} />
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="hidden lg:block">
                            <img
                                src={content.journey.image}
                                alt="Journey"
                                className="w-full rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* 5. Team Section (Dark Background) */}
            <section className="bg-black py-32 px-6 relative z-10">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/40 mb-6">
                            {content.team.subtitle}
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                            {content.team.heading}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
                        {content.team.members.map((member: any, idx: number) => (
                            <div key={idx} className="space-y-6 group">
                                <div className="aspect-[4/5] rounded-none overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h4 className="text-xl md:text-2xl font-bold text-white">{member.name}</h4>
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                                            {member.title}
                                        </p>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        {member.bio.map((para: string, pIdx: number) => (
                                            <p key={pIdx} className="text-white/70 leading-relaxed font-medium text-sm">
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
