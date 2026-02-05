import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Placeholder images - replacing Supabase URLs with placeholders or local assets if available
// For now, using placeholders or the original URLs if they are public
// Since I can't check if external URLs are valid/persistent, I will use them but wrapped in a safe Image component or standard img tag for now to avoid domain config issues with Next.js Image
// Actually, using standard <img> is safer for unknown domains without config, but Next.js <Image> is better for optimization.
// Given constraints, I'll use standard <img> for external sources or configure domains.
// Let's use standard <img> for now to ensure it works immediately without config changes, but style it.

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.industries_page.meta.title,
        description: dict.industries_page.meta.description,
    };
}

export default async function Industries({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.industries_page;

    return (
        <div className="bg-[#faebe3]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
                {/* Background Image Overlay - using inline style for arbitrary external URL from original site */}
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
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1]">
                                {content.hero.title.split('<br />').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                )) || content.hero.title}
                            </h1>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        {/* Right Column: Square Image */}
                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <img
                                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/652c5c5b3_a10ba3fc4_-cropped.jpg"
                                        alt="Industries"
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
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                {content.intro.p1}
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                                {content.intro.p2}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Industry, Our Expertise Section */}
            <section className="py-24 relative">
                <div
                    className="absolute inset-0 z-0 opacity-20"
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
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.expertise.title}</h2>
                        <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">{content.expertise.subtitle}</p>
                    </div>

                    <div className="space-y-20">
                        {/* Iterate over expertise items */}
                        {content.expertise.items.map((item, index) => (
                            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Alternating layout */}
                                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                                    {/* Placeholder images - logically mapping index to original images loosely or using a generic one for now if distinct URLs aren't easily mapped without an array. 
                           However, I can map them manually based on the index since the JSON array order is fixed.
                       */}
                                    <div className="w-full h-auto rounded-xl shadow-lg overflow-hidden bg-gray-200 aspect-[4/3] relative">
                                        {/* Manual mapping based on index for now to match original visuals */}
                                        {index === 0 && <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8b8c94c7_e0dd5f695_13e97d3def8d47a1efe25c37e0f29eb211.jpg" alt={item.title} className="object-cover w-full h-full" />}
                                        {index === 1 && <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/361d4fa4c_Marmelo-by-Mitchell-Eades-Issue-18-Feature-The-Local-Project-Image-2-cropped-.jpg" alt={item.title} className="object-cover w-full h-full" />}
                                        {index === 2 && <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e61f3b993_efeae9e53_56bb71da7fa44cbf6f001204format-webpwidth-1440_wWzsf3qJ3dJMkxWN-11.jpg" alt={item.title} className="object-cover w-full h-full" />}
                                        {index === 3 && <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/edb073e85_upscalemedia-transformed.jpg" alt={item.title} className="object-cover w-full h-full" />}
                                        {index === 4 && <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ace50e7b5_E_HryzeWYAUw8vR-2CROPPED.jpg" alt={item.title} className="object-cover w-full h-full" />}
                                        {index === 5 && <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e8678d8d0_ec55631fd_204f0aeb3f27e1d66d7e764876f0fa4a11.jpg" alt={item.title} className="object-cover w-full h-full" />}
                                    </div>
                                </div>
                                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                                    <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">{item.title}</h3>
                                    <p className="text-xl font-medium text-black/60 mb-8">{item.subtitle}</p>

                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">{item.desc1}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed font-bold">{item.desc2}</p>
                                    </div>

                                    <div className="mt-8">
                                        {/* Assuming the link in JSON corresponds to a page we might likely build or just point to contact/services for now if that page doesn't exist yet? 
                            The JSON has specific links like 'music-for-hotels-and-resorts'. 
                            If those pages don't exist yet, we can link to contact with a query param or just # for now. 
                            But user objective mentioned migrating main pages. 
                            Let's assume we link to /[lang]/services or similar if specific pages aren't migrated yet, OR keep the link structure.
                            To be safe and avoid 404s if I haven't made those pages, I will link to this page or Services for now unless I make them.
                            Wait, the user wants me to migrate pages. I am currently on Industries. 
                            I'll leave the Link 'to' attribute pointing to the 'link' from JSON, but prepended with /{lang}/.
                            The user will need to create those pages later or I will if requested.
                        */}
                                        <Link href={`/${lang}/${item.link}`} aria-label={item.title}>
                                            <Button
                                                variant="outline"
                                                className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"
                                            >
                                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                                    {item.cta}
                                                </span>
                                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What connects these worlds */}
            <section className="py-24 relative">
                <div
                    className="absolute inset-0 z-0 opacity-20"
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
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{content.connect.title}</h2>
                        <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">{content.connect.subtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="overflow-hidden rounded-xl shadow-lg bg-white relative">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c66f2842d_a6bc0a060_car-21.png"
                                    alt="Connected worlds"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="space-y-4 mb-8">
                                {content.connect.points.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed hover:text-black transition-colors">{point}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xl font-medium text-black/80 italic">
                                {content.connect.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discover Your Sound Potential */}
            <section className="py-20 bg-gradient-to-r from-[#f5d4c1] via-[#e8c3b0] to-[#f5d4c1] bg-[length:400%_400%] animate-gradient-shift">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{content.cta.title}</h2>
                    <p className="text-xl text-black/60 mb-12 max-w-3xl mx-auto">
                        {content.cta.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href={`/${lang}/contact`}>
                            <Button
                                variant="outline"
                                className="group w-full sm:w-auto h-14 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                <span className="mr-2">{content.cta.contact}</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <Link href={`/${lang}/services`}>
                            <Button
                                variant="outline"
                                className="group w-full sm:w-auto h-14 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                <span className="mr-2">{content.cta.services}</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
