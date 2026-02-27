import { getDictionary } from "@/lib/dictionary";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScrollMouseIcon } from "@/components/ScrollMouseIcon";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Locale } from "@/lib/i18n";

// Enable ISR (Incremental Static Regeneration) - regenerate page every hour
export const revalidate = 3600;

// Lazy load below-fold sections for better initial page load performance
const WhoWeAre = dynamic(
    () => import("@/components/home/WhoWeAre"),
    {
        loading: () => <SectionSkeleton className="bg-black" />,
        ssr: true,
    }
);

const Services = dynamic(
    () => import("@/components/home/Services"),
    {
        loading: () => <SectionSkeleton />,
        ssr: true,
    }
);

const Expertise = dynamic(
    () => import("@/components/home/Expertise"),
    {
        loading: () => <SectionSkeleton className="animated-gradient-bg" />,
        ssr: true,
    }
);

const Enhance = dynamic(
    () => import("@/components/home/Enhance"),
    {
        loading: () => <SectionSkeleton />,
        ssr: true,
    }
);

const TrustedBy = dynamic(
    () => import("@/components/home/TrustedBy"),
    {
        loading: () => <SectionSkeleton className="bg-black" />,
        ssr: true,
    }
);

const BlogSection = dynamic(
    () => import("@/components/home/BlogSection"),
    {
        loading: () => <SectionSkeleton className="bg-white" />,
        ssr: true,
    }
);

// Loading skeleton for lazy-loaded sections
function SectionSkeleton({ className = "" }: { className?: string }) {
    return (
        <section className={`py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="animate-pulse">
                    <div className="h-10 bg-gray-300/30 rounded-lg w-2/3 mx-auto mb-8"></div>
                    <div className="h-6 bg-gray-300/20 rounded-lg w-1/2 mx-auto mb-12"></div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="h-8 bg-gray-300/20 rounded-lg w-3/4"></div>
                            <div className="h-6 bg-gray-300/15 rounded-lg w-full"></div>
                            <div className="h-6 bg-gray-300/15 rounded-lg w-5/6"></div>
                        </div>
                        <div className="h-64 bg-gray-300/20 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="bg-[#faebe3]">
            {/* Hero Section - Critical, loads immediately */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col justify-center text-left">
                                <h1
                                    className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1"
                                    dangerouslySetInnerHTML={{ __html: dict.home.hero.title }}
                                />

                                <div className="mb-8 max-w-xl slide-up-2" style={{ maxWidth: '890px' }}>
                                    {dict.home.hero.subtitle.map((line: string, i: number) => (
                                        <p 
                                            key={i} 
                                            className={
                                                i === 0 
                                                    ? "text-xl md:text-2xl text-black font-bold mt-4"
                                                    : i === 1
                                                    ? "text-xl md:text-2xl text-black font-bold"
                                                    : "text-xl md:text-2xl text-black/65 leading-relaxed mt-4"
                                            }
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Link href={`/${lang}/services`}>
                                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden w-full sm:w-auto flex items-center">
                                            <span className="relative inline-flex items-center mr-2 align-middle">
                                                <Image src="/images/brand/sensear-logo-color.png" width={40} height={40} className="w-10 h-10 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" alt="" />
                                            </span>
                                            <span className="transition-transform duration-300 group-hover:-translate-x-12 inline-block">
                                                {dict.home.hero.cta}
                                            </span>
                                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image Carousel */}
                            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                                <div className="w-full lg:w-[70%]">
                                    <HeroCarousel />
                                </div>
                            </div>
                    </div>
                </div>
                <ScrollMouseIcon />
            </section>

            {/* Who we are Section - Lazy loaded */}
            <WhoWeAre lang={lang} title={dict.home.intro.title} />

            {/* Services Section - Lazy loaded */}
            <Services 
                lang={lang}
                title={dict.home.services.title}
                subtitle={dict.home.services.subtitle}
                items={dict.home.services.items}
                cta={dict.home.services.cta}
            />

            {/* Your World, Our Expertise Section - Lazy loaded */}
            <Expertise 
                lang={lang}
                title={dict.home.expertise.title}
                subtitle={dict.home.expertise.subtitle}
                items={dict.home.expertise.items}
                cta={dict.home.expertise.cta}
            />

            {/* Enhance Section - Lazy loaded */}
            <Enhance 
                lang={lang}
                title={dict.home.enhance.title}
                subtitle={dict.home.enhance.subtitle}
                items={dict.home.enhance.items}
                cta={dict.home.enhance.cta}
            />

            {/* Trusted By Section - Lazy loaded */}
            <TrustedBy lang={lang} title={dict.home.clients.title} />

            {/* Blog Section - Lazy loaded */}
            <BlogSection 
                lang={lang}
                title={dict.home.blog.title}
                subtitle={dict.home.blog.subtitle}
                articles={dict.home.blog.articles}
                read_more={dict.home.blog.read_more || "Read More"}
                cta={dict.home.blog.cta}
            />
        </div>
    );
}
