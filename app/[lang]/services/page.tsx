import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.services_page.meta.title,
        description: dict.services_page.meta.description,
    };
}

export default async function Services({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.services_page;

    return (
        <div className="bg-[#faebe3]">
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
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                                {content.hero.title.split('<br />').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                )) || content.hero.title}
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
                                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/25d5bd632_gemini-25-flash-image_Upscale_this_image_carefully_adding_some_1980s_accessories_to_the_woman_s_hand_o-0.jpg"
                                        alt="Strategic music services"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section - Black Background */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {content.intro.title.split('<br />').map((line, i) => <span key={i} className="block">{line}</span>) || content.intro.title}
                        </h2>

                        <div className="w-full text-center">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.intro.p1 }} />
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro.p2 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Starting Point Section */}
            <section className="pt-24 pb-12 relative">
                <div
                    className="absolute inset-0 z-0 opacity-100" // Not fading out here as per design used in other pages or kept vivid
                    style={{
                        backgroundImage: `linear-gradient(to bottom, 
                  #ffffff 0%, 
                  #ffffff 25%, 
                  rgba(255,255,255,0) 45%, 
                  rgba(255,255,255,0) 55%,
                  #FFF7F2 75%, 
                  #ffffff 100%
                ), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.starting_point.title}</h2>
                        <p className="text-xl text-black/60 font-medium max-w-3xl mx-auto">{content.starting_point.subtitle}</p>
                    </div>

                    {/* Signature Playlists */}
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-1 lg:order-1">
                                <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                    {content.services.playlists.title}
                                </h3>
                                <p className="text-xl font-medium text-black/60 mb-8">{content.services.playlists.subtitle}</p>

                                <div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">{content.services.playlists.desc}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.services.playlists.ideal_for }} />
                                    </div>

                                    <Link href={`/${lang}/contact?interest=signature-playlists`}>
                                        <Button
                                            variant="outline"
                                            className="group w-full sm:w-auto bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                                        >
                                            <span className="mr-2">{content.services.playlists.cta}</span>
                                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="order-2 lg:order-2">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ad6308d11_402461766_1151218075859356_9152177816492568307_n.jpg"
                                    alt="Signature Playlists"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Event Soundtracks */}
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/587b0ab41_IMG_20250801_204842.jpg"
                                    alt="Event Soundtracks"
                                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                                />
                            </div>

                            <div className="order-1 lg:order-2">
                                <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                    {content.services.events.title}
                                </h3>
                                <p className="text-xl font-medium text-black/60 mb-8">{content.services.events.subtitle}</p>

                                <div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">{content.services.events.desc}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.services.events.ideal_for }} />
                                    </div>

                                    <Link href={`/${lang}/contact?interest=event-soundtracks`}>
                                        <Button
                                            variant="outline"
                                            className="group w-full sm:w-auto bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                                        >
                                            <span className="mr-2">{content.services.events.cta}</span>
                                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Combined Section: Sonic Strategy & Audio Upgrades */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Sonic Strategy */}
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col sm:flex-row gap-6 mb-6 sm:items-center">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                                    alt="Sonic Strategy"
                                    className="w-full sm:w-[301px] sm:h-[401px] object-cover rounded-2xl shadow-lg flex-shrink-0 order-2 xl:order-1"
                                />
                                <div className="flex-1 flex flex-col order-1 xl:order-2">
                                    <h3 className="text-3xl font-bold text-black leading-tight mb-2">
                                        {content.services.strategy.title}
                                    </h3>
                                    <p className="text-lg font-medium text-black/60 mb-6">{content.services.strategy.subtitle}</p>

                                    <div className="flex-1 flex flex-col">
                                        <div className="mb-4">
                                            <p className="text-lg text-black/60 leading-relaxed">{content.services.strategy.desc}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-base text-black/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
                                        </div>

                                        <div className="mt-6">
                                            <Link href={`/${lang}/contact?interest=sonic-strategy`}>
                                                <Button
                                                    variant="outline"
                                                    className="group w-full sm:w-auto bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-6 py-4 text-sm font-semibold rounded-full transition-all duration-300"
                                                >
                                                    <span className="mr-2">{content.services.strategy.cta}</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Audio Upgrades */}
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col sm:flex-row gap-6 mb-6 sm:items-center">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                                    alt="Audio Upgrades"
                                    className="w-full sm:w-[301px] sm:h-[401px] object-cover rounded-2xl shadow-lg flex-shrink-0 order-2 xl:order-1"
                                />
                                <div className="flex-1 flex flex-col order-1 xl:order-2">
                                    <h3 className="text-3xl font-bold text-black leading-tight mb-2">
                                        {content.services.upgrades.title}
                                    </h3>
                                    <p className="text-lg font-medium text-black/60 mb-6">{content.services.upgrades.subtitle}</p>

                                    <div className="flex-1 flex flex-col">
                                        <div className="mb-4">
                                            <p className="text-lg text-black/60 leading-relaxed">{content.services.upgrades.desc}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-base text-black/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
                                        </div>

                                        <div className="mt-6">
                                            <Link href={`/${lang}/contact?interest=audio-upgrades`}>
                                                <Button
                                                    variant="outline"
                                                    className="group w-full sm:w-auto bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-6 py-4 text-sm font-semibold rounded-full transition-all duration-300"
                                                >
                                                    <span className="mr-2">{content.services.upgrades.cta}</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 bg-[#faebe3]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.delivery.title}</h2>
                        <p className="text-xl text-black/60 font-medium max-w-3xl mx-auto">{content.delivery.subtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/706733b3c_f9c386a1d5dba0530f1176b031bff1a4-UPSC.jpg"
                                alt="Services delivery"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="space-y-8">
                                {content.delivery.points.map((point, index) => (
                                    <div key={index} className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                            <Link href={`/${lang}/contact?interest=${point.link}`} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">
                                                {point.link_text}
                                            </Link> <span>{point.text}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-[#f5d4c1] via-[#e8c3b0] to-[#f5d4c1] animated-gradient">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{content.cta.title}</h2>
                    <p className="text-xl text-black/60 mb-12 max-w-3xl mx-auto">
                        {content.cta.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href={`/${lang}/contact`}>
                            <Button className="w-full sm:w-auto h-14 rounded-full px-8 text-lg font-semibold bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                                {content.cta.contact_btn}
                            </Button>
                        </Link>
                        <span className="text-black/60 font-medium">{lang === 'el' ? 'ή' : 'or'}</span>
                        <Link href={`/${lang}/industries`}>
                            <Button className="w-full sm:w-auto h-14 rounded-full px-8 text-lg font-semibold bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                                {content.cta.industries_btn}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
