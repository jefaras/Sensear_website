import { getDictionary } from "@/lib/dictionary";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScrollMouseIcon } from "@/components/ScrollMouseIcon";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="w-full">
                    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
                            {/* Text Content */}
                            <div className="space-y-6">
                                <h1
                                    className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-bold text-black mb-6 leading-tight slide-up-1"
                                    dangerouslySetInnerHTML={{ __html: dict.home.hero.title }}
                                />

                                <div className="mb-8 slide-up-2">
                                    {dict.home.hero.subtitle.map((line: string, i: number) => (
                                        <p key={i} className="text-lg sm:text-xl md:text-2xl text-black/65 leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Link href={`/${lang}/services`}>
                                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden w-full sm:w-auto flex items-center gap-3">
                                            <div className="relative w-8 h-8 flex-shrink-0">
                                                <Image
                                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e5fb8532d_sensear-logo-avatar-color1.png"
                                                    alt="SensEar"
                                                    fill
                                                    className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                                                />
                                                <Image
                                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a2f42e1a_sensear-logo-avatar-white-transparent1.png"
                                                    alt="SensEar"
                                                    fill
                                                    className="object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                />
                                            </div>
                                            <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
                                                {dict.home.hero.cta}
                                            </span>
                                            <ArrowRight className="w-5 h-5 ml-auto opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image Carousel */}
                            <div className="w-full relative slide-up-4">
                                <HeroCarousel />
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollMouseIcon />
            </section>

            {/* Who we are Section */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {dict.home.intro.title}
                        </h2>

                        <div className="w-full text-center">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                {lang === 'en' ? (
                                    <>
                                        We are a team of passionate <span className="font-bold italic">music experts</span> who create{' '}
                                        <span className="font-bold italic">soundtracks for venues</span> through <span className="font-bold italic">music</span> that is{' '}
                                        <span className="font-bold italic">intentional</span>, <span className="font-bold italic">immersive</span> &{' '}
                                        <span className="font-bold italic">memorable</span>.
                                    </>
                                ) : (
                                    <>
                                        Είμαστε μια ομάδα <span className="font-bold italic">ειδικών στον ήχο</span> με{' '}
                                        <span className="font-bold italic">βαθιά μουσική κουλτούρα</span>, που επενδύει{' '}
                                        <span className="font-bold italic">χώρους και εκδηλώσεις</span> με στοχευμένη, βιωματική μουσική που{' '}
                                        <span className="font-bold italic">μένει στη μνήμη</span>.
                                    </>
                                )}
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                                {lang === 'en' ? (
                                    <>
                                        Our core belief is that music shapes <span className="font-bold">atmosphere</span>, influences{' '}
                                        <span className="font-bold">behaviour</span> and builds lasting <span className="font-bold">connections</span> with guests.
                                    </>
                                ) : (
                                    <>
                                        Η μουσική, για εμάς, διαμορφώνει την <span className="font-bold">ατμόσφαιρα</span>, επηρεάζει τη{' '}
                                        <span className="font-bold">συμπεριφορά</span> και ενισχύει τη <span className="font-bold">σύνδεση</span> με τους επισκέπτες.
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
                        {dict.home.services.title}
                    </h2>
                    <p className="text-xl text-black/60 font-medium mb-12 text-center max-w-5xl mx-auto">
                        {dict.home.services.subtitle}
                    </p>
                    <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
                        <div className="md:order-1 flex flex-col mb-12">
                            {dict.home.services.items.map((item, idx) => (
                                <div key={idx} className="mb-8">
                                    <Link href={`/${lang}/${item.link}`} className="text-[31.5px] font-bold text-black block mb-2 group w-fit">
                                        <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">{item.title}</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                    <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                            <Link href={`/${lang}/services`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                        {dict.home.services.cta}
                                    </span>
                                    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>

                        <div className="md:order-2 block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ee4f6e2db_SIGNATUREcropped.jpg"
                                alt="SensEar Services"
                                className="w-full h-auto object-cover rounded-xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Your World, Our Expertise Section */}
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
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
                        {dict.home.expertise.title}
                    </h2>
                    <p className="text-xl text-black/60 font-medium mb-12 text-center mx-auto max-w-5xl">
                        {dict.home.expertise.subtitle}
                    </p>
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-center">
                        {/* Left: Image (Vinyls) */}
                        <div className="order-last md:order-1 block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5a170449c_lwnxeqhxcfez5hw0yraf-OK.jpg"
                                alt="Sonic expertise in hospitality and retail"
                                className="w-full h-auto object-cover rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="md:order-2 md:pl-12">
                            <div className="flex flex-col mb-12">
                                {dict.home.expertise.items.map((item, idx) => (
                                    <div key={idx} className="mb-8">
                                        <Link href={`/${lang}/${item.link}`} className="text-[31.5px] font-bold text-black block mb-2 group w-fit">
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
                                        {dict.home.expertise.cta}
                                    </span>
                                    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhance Section (How we redefine your venue) */}
            <section className="py-24" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 text-black">
                        {dict.home.enhance.title}
                    </h2>
                    <p className="text-xl text-black/60 font-medium mb-12 text-center max-w-5xl mx-auto">
                        {dict.home.enhance.subtitle}
                    </p>

                    <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
                        {/* Left: Benefits List */}
                        <div className="md:order-1">
                            <div className="space-y-10 mb-12">
                                {dict.home.enhance.items.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div>
                                            <h3 className="text-[31.5px] font-bold text-black mb-2">{item.title}</h3>
                                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href={`/${lang}/case-studies`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                        {dict.home.enhance.cta}
                                    </span>
                                    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>

                        {/* Right: Car Image */}
                        <div className="md:order-2 block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6e62c430c_03aebeb4e_car-1OK.png"
                                alt="SensEar branded car"
                                className="w-full h-auto object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section (Clients) */}
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
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-20 text-white">{dict.home.clients.title}</h2>

                    <div className="relative">
                        <div className="flex gap-12 animate-scroll">
                            {/* Duplicate the items to ensure seamless scrolling */}
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-12">
                                    <div className="flex-shrink-0 text-center w-[180px]">
                                        <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                                        <p className="text-sm text-white/60 mt-1">Athens</p>
                                    </div>

                                    <div className="flex-shrink-0 text-center w-[180px]">
                                        <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                                        <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
                                    </div>

                                    <div className="flex-shrink-0 text-center w-[180px]">
                                        <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                                        <p className="text-sm text-white/60 mt-1">Antiparos</p>
                                    </div>

                                    <div className="flex-shrink-0 text-center w-[180px]">
                                        <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                                        <p className="text-sm text-white/60 mt-1">Sifnos</p>
                                    </div>

                                    <div className="flex-shrink-0 text-center w-[180px]">
                                        <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
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

            {/* Blog Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">{dict.home.blog.title}</h2>
                        <p className="text-xl text-black/60 font-medium max-w-5xl mx-auto">{dict.home.blog.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {dict.home.blog.articles.map((article, idx) => (
                            <Link key={idx} href={`/${lang}/blog/${article.link}`} className="block">
                                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-black/5 h-full flex flex-col">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={
                                                idx === 0 ? "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg" :
                                                    idx === 1 ? "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg" :
                                                        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
                                            }
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-sm border border-black/10 w-fit">
                                            {article.tag}
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors leading-tight">
                                            {article.title}
                                        </h3>
                                        <p className="text-black/70 mb-6 leading-relaxed flex-grow">
                                            {article.desc}
                                        </p>
                                        <div className="flex items-center text-sm font-bold text-black mt-auto group-hover:translate-x-2 transition-transform">
                                            <span>{dict.home.blog.read_more || "Read More"}</span>
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href={`/${lang}/blog`}>
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                    {dict.home.blog.cta}
                                </span>
                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
