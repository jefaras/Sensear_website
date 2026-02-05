import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function RestaurantsBarsPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Music for Restaurants & Bars:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Designed to blend in with food & service.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">Selections that complement taste, timing and setting.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e18536343_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_1-1.jpg" alt="Elegant restaurant interior with curated music atmosphere" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Atmosphere curated<br />for every service moment</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">Music <strong><em>shapes the dining atmosphere</em></strong> as much as décor or lighting.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">Our music <strong><em>follows your menu & service rhythm</em></strong>, from first orders to last call, becoming <strong><em>part of the delight</em></strong> guests return for.</p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2><p className="text-xl text-black/60 font-medium">Restaurant & bar music strategy and implementation</p></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/45c5bf8ee_0518d03f51766be5a36a8fa5df900697.jpg" alt="Cocktail glass with ice representing bar atmosphere" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Service-flow playlists</h3><p className="text-lg text-black/70">Music designed for opening till close, with energy that follows your service's rhythm.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Tempo & volume adjustment</h3><p className="text-lg text-black/70">Sound levels that let guests talk easily, staff move efficiently & keep a steady, inviting energy.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Brand-aligned selections</h3><p className="text-lg text-black/70">Playlists specific to your concept, that support the experience you want to be known for.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Fresh rotations</h3><p className="text-lg text-black/70">Regular updates keep music engaging for regulars & staff and maintain your signature sound.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Restaurant & bar music is ideal for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Casual & Fine dining venues</span><span>that live on repeat guests and atmosphere.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Cocktail & Wine bars</span><span>needing the right vibe from aperitivo to last order.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Hotel Restaurants</span><span>balancing hotel guests, locals and private events.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Multi-venue groups</span><span>wanting consistent audio identity across locations.</span></li>
                    </ul></div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/74f06e87c_dbf1c8542_c383f86fd572aa6ee623a8fd6ab443df.jpg" alt="Elegant dining scene with guests enjoying atmosphere" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">How we help</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bf81c0608_f73e72546f5644a803c4dd204f0d7de1.jpg" alt="Vibrant bar scene with guests dancing and enjoying music" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Build energy on slower nights</h3><p className="text-lg text-black/70">We create atmospheres where energy comes from sound, not just from guest count.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Guide pace & orders naturally</h3><p className="text-lg text-black/70">We calibrate sound so tables may order another round or dessert when the moment feels right.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Match your concept exactly</h3><p className="text-lg text-black/70">Music, interiors & service finally tell the same story, so your bistro sounds as authentic as it tastes.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Remove playlist friction</h3><p className="text-lg text-black/70">We supply sound, you set rules, staff focuses on guests, not searching for tracks mid-service.</p></div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
                    <p className="text-lg md:text-xl text-black/70 mb-6">Read our client's stories and listen to their playlists samples.</p>
                    <Link href={`/${lang}/case-studies`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Explore our Case Studies</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your restaurant's atmosphere</h2>
                <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">Need to tune your sound for better nights? We can review your current setup, service patterns & concept and propose a tailored approach.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Book a music consultation</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Explore how our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link href={`/${lang}/services/audio-upgrades`} className="underline hover:text-black font-semibold">Audio Upgrades</Link> work for restaurants & bars.</p>
            </div></section>
        </div>
    );
}
