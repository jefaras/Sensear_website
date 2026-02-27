import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
                {/* Background Image Overlay - using inline style for arbitrary external URL from original site */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
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
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed slide-up-2">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        {/* Right Column: Square Image */}
                        <div className="w-full flex justify-end slide-up-4">
                            <div className="w-full max-w-[740px]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <Image
                                        src="/images/industries/industries-hero.jpg"
                                        alt="Industries we serve with music curation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
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
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {content.intro.title.replace('<br />', ' ')}
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
                ), url('/images/backgrounds/background-texture-warm-silver.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-heading">{content.expertise.title}</h2>
                        <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">{content.expertise.subtitle}</p>
                    </div>

                    <div className="space-y-20">
                        {/* Iterate over expertise items */}
                        {content.expertise.items.map((item, index) => (
                            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Alternating layout */}
                                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                                    {/* Images with aspect-[3/4] like Event Soundtracks */}
                                    {index === 0 && <Image src="/images/industries/industry-restaurants-bars.jpg" alt={item.title} width={600} height={800} className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />}
                                    {index === 1 && <Image src="/images/industries/industry-hotels-resorts.jpg" alt={item.title} width={600} height={800} className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />}
                                    {index === 2 && <Image src="/images/industries/industry-retail-stores.jpg" alt={item.title} width={600} height={800} className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />}
                                    {index === 3 && <Image src="/images/industries/industry-wellness-gyms.jpg" alt={item.title} width={600} height={800} className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />}
                                    {index === 4 && <Image src="/images/industries/industry-events-experiences.jpg" alt={item.title} width={600} height={800} className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />}
                                    {index === 5 && <Image src="/images/industries/industry-art-museums-fashion.jpg" alt={item.title} width={600} height={800} className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />}
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
                                        <Link href={`/${lang}/${item.link}`} aria-label={item.title}>
                                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                                <span className="relative inline-flex items-center mr-2 align-middle">
                                                    <Image src="/images/brand/sensear-logo-color.png" width={32} height={32} className="w-8 h-8 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" alt="" />
                                                </span>
                                                <span className="transition-transform duration-300 group-hover:-translate-x-10 inline-block">
                                                    {item.cta}
                                                </span>
                                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                            </button>
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
                ), url('/images/backgrounds/background-texture-warm-silver.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="overflow-hidden rounded-xl shadow-lg bg-white relative">
                                <Image
                                    src="/images/industries/industries-connected-worlds.png"
                                    alt="Connected worlds across hospitality and retail industries"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 md:pl-12">
                            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6 leading-heading">{content.connect.title}</h2>
                            <p className="text-xl text-black/60 font-medium mb-12 leading-relaxed">{content.connect.subtitle}</p>
                            
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
            <FinalCTA
                heading={content.cta.title}
                text={content.cta.subtitle}
                buttons={[
                    { text: content.cta.contact, link: "contact" },
                    { text: content.cta.services, link: "services" }
                ]}
                lang={lang}
            />
        </div>
    );
}
