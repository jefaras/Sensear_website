"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Locale } from "@/lib/i18n";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScrollMouseIcon } from "@/components/ScrollMouseIcon";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { GradientOrb } from "@/components/motion/GradientOrb";
import { TextReveal } from "@/components/motion/TextReveal";

/* ─── Orb float keyframe (injected once) ─── */
const orbKeyframes = `
@keyframes orb-float {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(15px, -20px); }
    66% { transform: translate(-10px, 15px); }
}
`;

interface DemoHomeProps {
    lang: Locale;
    dict: any;
}

export function DemoHomeClient({ lang, dict }: DemoHomeProps) {
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: orbKeyframes }} />

            {/* ══════════════════════════════════════════════
                HERO SECTION
                ══════════════════════════════════════════════ */}
            <section className="relative pt-36 pb-32 min-h-[95vh] flex flex-col justify-center overflow-hidden">
                <Image
                    src="/images/backgrounds/background-texture-warm-silver.jpg"
                    alt=""
                    fill
                    aria-hidden="true"
                    role="presentation"
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                    fetchPriority="high"
                    quality={70}
                />
                <div className="absolute inset-0 bg-[#faebe3]/30" aria-hidden="true" />

                {/* Ambient gradient orbs */}
                <GradientOrb color="bronze" position="top-right" size={600} opacity={0.3} />
                <GradientOrb color="silver" position="bottom-left" size={500} opacity={0.25} />
                <GradientOrb color="warm" position="center" size={400} opacity={0.15} />

                <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col justify-center text-left">
                            <TextReveal delay={0.1} className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black leading-[1.1] mb-8">
                                {dict.home.hero.title.replace(/<br\s*\/?>/gi, " ")}
                            </TextReveal>

                            <FadeInView delay={0.4} className="mb-10 max-w-[890px]">
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
                            </FadeInView>

                            <FadeInView delay={0.6}>
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Link href={`/${lang}/services`}>
                                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden w-full sm:w-auto flex items-center">
                                            <span className="relative inline-flex items-center mr-2 align-middle">
                                                <Image
                                                    src="/images/brand/sensear-logo-color.png"
                                                    width={40}
                                                    height={40}
                                                    sizes="40px"
                                                    loading="eager"
                                                    className="w-10 h-10 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300"
                                                    alt="SensEar logo"
                                                />
                                            </span>
                                            <span className="transition-transform duration-300 group-hover:-translate-x-12 inline-block">
                                                {dict.home.hero.cta}
                                            </span>
                                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                        </button>
                                    </Link>
                                </div>
                            </FadeInView>
                        </div>

                        {/* Image Carousel */}
                        <FadeInView direction="right" delay={0.5} className="w-full flex justify-end">
                            <div className="w-full max-w-[740px]">
                                <HeroCarousel />
                            </div>
                        </FadeInView>
                    </div>
                </div>
                <ScrollMouseIcon />
            </section>

            {/* ══════════════════════════════════════════════
                WHO WE ARE SECTION
                ══════════════════════════════════════════════ */}
            <section className="bg-black py-32 sm:py-36">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col items-center text-center">
                        <FadeInView>
                            <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-16">
                                {dict.home.intro.title}
                            </h2>
                        </FadeInView>

                        <FadeInView delay={0.2}>
                            <div className="w-full text-center">
                                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
                                    {lang === "en" ? (
                                        <>
                                            We are a team of passionate{" "}
                                            <span className="font-bold italic">music experts</span> who create{" "}
                                            <span className="font-bold italic">soundtracks for venues</span> through{" "}
                                            <span className="font-bold italic">music</span> that is{" "}
                                            <span className="font-bold italic">intentional</span>,{" "}
                                            <span className="font-bold italic">immersive</span> &{" "}
                                            <span className="font-bold italic">memorable</span>.
                                        </>
                                    ) : (
                                        <>
                                            Είμαστε μια ομάδα{" "}
                                            <span className="font-bold italic">ειδικών στον ήχο</span> με{" "}
                                            <span className="font-bold italic">βαθιά μουσική κουλτούρα</span>, που επενδύει{" "}
                                            <span className="font-bold italic">χώρους και εκδηλώσεις</span> με στοχευμένη,
                                            βιωματική μουσική που{" "}
                                            <span className="font-bold italic">μένει στη μνήμη</span>.
                                        </>
                                    )}
                                </p>
                                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                                    {lang === "en" ? (
                                        <>
                                            Our core belief is that music shapes{" "}
                                            <span className="font-bold">atmosphere</span>, influences{" "}
                                            <span className="font-bold">behaviour</span> and builds lasting{" "}
                                            <span className="font-bold">connections</span> with guests.
                                        </>
                                    ) : (
                                        <>
                                            Η μουσική, για εμάς, διαμορφώνει την{" "}
                                            <span className="font-bold">ατμόσφαιρα</span>, επηρεάζει τη{" "}
                                            <span className="font-bold">συμπεριφορά</span> και ενισχύει τη{" "}
                                            <span className="font-bold">σύνδεση</span> με τους επισκέπτες.
                                        </>
                                    )}
                                </p>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                SERVICES SECTION — "Four ways we reimagine venues"
                Glass cards + stagger animation
                ══════════════════════════════════════════════ */}
            <section
                className="py-32 sm:py-36"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <FadeInView>
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6 text-center leading-[1.125]">
                            {dict.home.services.title}
                        </h2>
                    </FadeInView>
                    <FadeInView delay={0.15}>
                        <p className="text-xl text-black/60 font-medium mb-16 text-center max-w-5xl mx-auto">
                            {dict.home.services.subtitle}
                        </p>
                    </FadeInView>

                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
                        {/* Image */}
                        <FadeInView direction="left" className="md:order-1 block">
                            <Image
                                src="/images/homepage/sensear-signature-playlist-service.jpg"
                                alt="SensEar signature playlist service for hospitality venues"
                                width={800}
                                height={600}
                                sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 800px"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q=="
                                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                            />
                        </FadeInView>

                        {/* Service Items — glass cards */}
                        <StaggerGroup staggerDelay={0.12} initialDelay={0.2} className="md:order-2 flex flex-col gap-4 mb-12">
                            {dict.home.services.items.map(
                                (item: { title: string; desc: string; link: string }, idx: number) => (
                                    <StaggerItem key={idx}>
                                        <div className="rounded-2xl p-6 backdrop-blur-md bg-white/50 border border-black/[0.06] shadow-sm hover:shadow-lg hover:bg-white/70 hover:scale-[1.02] transition-all duration-300">
                                            <Link
                                                href={`/${lang}/${item.link}`}
                                                className="text-2xl md:text-3xl font-bold text-black block mb-1 group w-fit"
                                            >
                                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">
                                                    {item.title}
                                                </span>{" "}
                                                <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                )
                            )}

                            <StaggerItem>
                                <div className="mt-4">
                                    <Link href={`/${lang}/services`}>
                                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                            <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                                {dict.home.services.cta}
                                            </span>
                                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                        </button>
                                    </Link>
                                </div>
                            </StaggerItem>
                        </StaggerGroup>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                EXPERTISE SECTION — "Your world, our expertise"
                Glass cards + stagger
                ══════════════════════════════════════════════ */}
            <section className="py-32 sm:py-36 bg-[#faebe3]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <FadeInView>
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6 text-center leading-[1.125]">
                            {dict.home.expertise.title}
                        </h2>
                    </FadeInView>
                    <FadeInView delay={0.15}>
                        <p className="text-xl text-black/60 font-medium mb-16 text-center mx-auto max-w-5xl">
                            {dict.home.expertise.subtitle}
                        </p>
                    </FadeInView>

                    <div className="grid md:grid-cols-[1fr_1.2fr] gap-24 items-center">
                        {/* Left: Content — glass cards */}
                        <div className="md:order-1 md:pr-12">
                            <StaggerGroup staggerDelay={0.1} className="flex flex-col gap-4 mb-12">
                                {dict.home.expertise.items.map(
                                    (item: { title: string; desc: string; link: string }, idx: number) => (
                                        <StaggerItem key={idx}>
                                            <div className="rounded-2xl p-5 backdrop-blur-md bg-white/50 border border-black/[0.06] shadow-sm hover:shadow-lg hover:bg-white/70 hover:scale-[1.02] transition-all duration-300">
                                                <Link
                                                    href={`/${lang}/${item.link}`}
                                                    className="text-2xl md:text-3xl font-bold text-black block mb-1 group w-fit"
                                                >
                                                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">
                                                        {item.title}
                                                    </span>{" "}
                                                    <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                                <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </StaggerItem>
                                    )
                                )}
                            </StaggerGroup>

                            <FadeInView delay={0.5}>
                                <Link href={`/${lang}/industries`}>
                                    <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                        <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                            {dict.home.expertise.cta}
                                        </span>
                                        <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                    </button>
                                </Link>
                            </FadeInView>
                        </div>

                        {/* Right: Image (Vinyls) */}
                        <FadeInView direction="right" className="order-last md:order-2 block">
                            <Image
                                src="/images/homepage/vinyl-records-music-curation-optimized.jpg"
                                alt="Sonic expertise in hospitality and retail music curation"
                                width={800}
                                height={600}
                                sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 800px"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q=="
                                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                            />
                        </FadeInView>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                ENHANCE SECTION — "How we redefine your venue"
                Dark bg + glass overlay on content
                ══════════════════════════════════════════════ */}
            <section className="py-32 sm:py-36 bg-black">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Image */}
                        <FadeInView direction="left" className="block order-2 md:order-1">
                            <Image
                                src="/images/homepage/vinyl-records-music-curation-optimized.jpg"
                                alt="Enhance your brand with SensEar music curation"
                                width={800}
                                height={600}
                                sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 800px"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/ALUABo//2Q=="
                                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                            />
                        </FadeInView>

                        {/* Right: Content with glass overlay */}
                        <FadeInView direction="right" className="md:pl-8 order-1 md:order-2">
                            <div className="rounded-3xl p-8 sm:p-10 backdrop-blur-sm bg-white/[0.04] border border-white/[0.08]">
                                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white mb-8 leading-[1.125]">
                                    {dict.home.enhance.title}
                                </h2>
                                <p className="text-xl text-white/60 font-medium mb-12 leading-relaxed">
                                    {dict.home.enhance.subtitle}
                                </p>

                                {/* Items list */}
                                {dict.home.enhance.items && dict.home.enhance.items.length > 0 && (
                                    <StaggerGroup staggerDelay={0.12} className="space-y-8 mb-10">
                                        {dict.home.enhance.items.map(
                                            (item: { title: string; desc: string }, index: number) => (
                                                <StaggerItem key={index}>
                                                    <div className="rounded-xl p-4 backdrop-blur-sm bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-300">
                                                        <h3 className="text-2xl font-bold text-white mb-1">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-lg text-white/70">{item.desc}</p>
                                                    </div>
                                                </StaggerItem>
                                            )
                                        )}
                                    </StaggerGroup>
                                )}

                                <Link href={`/${lang}/contact`}>
                                    <button className="group relative bg-white text-black hover:bg-black hover:text-white hover:border-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center border-2 border-white">
                                        <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                            {dict.home.enhance.cta}
                                        </span>
                                        <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                    </button>
                                </Link>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                TRUSTED BY SECTION
                Animated gradient bg + glass overlay + ticker
                ══════════════════════════════════════════════ */}
            <TrustedBySection lang={lang} title={dict.home.clients.title} />

            {/* ══════════════════════════════════════════════
                BLOG SECTION — Glass cards + stagger
                ══════════════════════════════════════════════ */}
            <section
                className="py-32 sm:py-36"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <FadeInView>
                        <div className="text-center mb-16">
                            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6 leading-[1.125]">
                                {dict.home.blog.title}
                            </h2>
                            <p className="text-xl text-black/60 font-medium max-w-5xl mx-auto">
                                {dict.home.blog.subtitle}
                            </p>
                        </div>
                    </FadeInView>

                    <StaggerGroup staggerDelay={0.15} className="grid md:grid-cols-3 gap-10">
                        {dict.home.blog.articles.map(
                            (
                                article: { title: string; desc: string; tag: string; link: string },
                                idx: number
                            ) => (
                                <StaggerItem key={idx}>
                                    <Link href={`/${lang}/blog/${article.link}`} className="block h-full">
                                        <div className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/60 border border-black/[0.05] hover:shadow-xl hover:bg-white/80 hover:scale-[1.01] transition-all duration-300 group cursor-pointer h-full flex flex-col">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src={
                                                        idx === 0
                                                            ? "/images/homepage/blog-music-branding-tips.webp"
                                                            : idx === 1
                                                            ? "/images/homepage/blog-music-curation-venues.jpg"
                                                            : "/images/homepage/blog-music-hospitality-brand.jpg"
                                                    }
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            </div>
                                            <div className="p-8 flex flex-col flex-grow">
                                                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm bg-black/[0.04] text-black rounded-sm border border-black/[0.08] w-fit">
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
                                </StaggerItem>
                            )
                        )}
                    </StaggerGroup>

                    <FadeInView delay={0.4}>
                        <div className="mt-20 flex justify-center">
                            <Link href={`/${lang}/blog`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                        {dict.home.blog.cta}
                                    </span>
                                    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>
                    </FadeInView>
                </div>
            </section>
        </div>
    );
}

/* ─── TrustedBy sub-component (inlined to avoid editing existing component) ─── */
function TrustedBySection({ lang, title }: { lang: Locale; title: string }) {
    const clients = [
        {
            logo: "/images/homepage/clients/client-klouvi-bar-athens.jpg",
            alt: "Klouvi Bar logo",
            name: "Klouvi Bar",
            location: "Athens",
        },
        {
            logo: "/images/homepage/clients/client-blue-bamboo-athens-serifos.jpg",
            alt: "Blue Bamboo logo",
            name: "Blue Bamboo",
            location: "Athens-Serifos",
        },
        {
            logo: "/images/homepage/clients/client-beach-house-antiparos.jpg",
            alt: "Beach House logo",
            name: "Beach House",
            location: "Antiparos",
        },
        {
            logo: "/images/homepage/clients/client-pelicanos-sifnos.jpg",
            alt: "Pelicanos logo",
            name: "Pelicanos",
            location: "Sifnos",
        },
        {
            logo: "/images/homepage/clients/client-yam-antiparos.png",
            alt: "Yam logo",
            name: "Yam",
            location: "Antiparos",
        },
    ] as const;

    return (
        <section className="py-28 sm:py-32 px-6 sm:px-8 bg-[#d3d3d3]">
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .demo-animate-scroll {
                    animation: scroll-left 30s linear infinite;
                    white-space: nowrap;
                    width: fit-content;
                }
            `}</style>
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem]">
                    {/* Animated Background gradient */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(135deg, #f5d4c1, #e8c3b0, #d4c4b0, #c0c0c0, #d3d3d3, #f0d5d0, #e8c3b0, #f5d4c1)",
                            backgroundSize: "400% 400%",
                            animation: "gradient-shift 10s ease infinite",
                        }}
                    />

                    {/* Glass overlay on top of gradient */}
                    <div className="absolute inset-0 z-[1] backdrop-blur-[2px] bg-white/[0.12]" />

                    <div className="relative z-10 p-16 md:p-28">
                        <FadeInView>
                            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-20 text-black leading-[1.125]">
                                {title}
                            </h2>
                        </FadeInView>

                        <div className="relative">
                            <div className="flex gap-12 demo-animate-scroll">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-12">
                                        {clients.map((client) => (
                                            <div
                                                key={`${i}-${client.name}`}
                                                className="flex-shrink-0 text-center w-[180px]"
                                            >
                                                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-white/40 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                                                    <Image
                                                        src={client.logo}
                                                        alt={client.alt}
                                                        width={100}
                                                        height={100}
                                                        sizes="100px"
                                                        loading="lazy"
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                </div>
                                                <p className="text-lg font-semibold text-black tracking-widest uppercase">
                                                    {client.name}
                                                </p>
                                                <p className="text-sm text-black/60 mt-1">{client.location}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
