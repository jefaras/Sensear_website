import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function RetailStoresPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Music for Retail Stores:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Intended to welcome & inspire discovery.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">Rhythm curated to support exploration & brand image.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/aa39fb29d_ignan-travel-thesquare-5-2048x1328-1-1.jpg" alt="Modern retail store interior with curated music atmosphere" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Music that inspires<br />the shopping journey</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">Music in your store <strong><em>influences how long people browse</em></strong>, what they notice & whether they buy.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">Our tunes <strong><em>elegantly moves</em></strong> with your store's rhythm, forming how clients <strong><em>perceive your brand</em></strong>.</p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2><p className="text-xl text-black/60 font-medium">Retail music strategy and implementation</p></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/989688cc0_fea79f153_e416ab4395ea12d490e85d406ce8fcc3.jpg" alt="Stylish man in retail fashion setting" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Journey-based playlists</h3><p className="text-lg text-black/70">Music designed to fit all your shop's areas, supporting natural discovery & decision-making.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Tempo & energy calibration</h3><p className="text-lg text-black/70">Shopping music that relaxes & energizes clients to browse sections without rushing.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Brand-aligned selections</h3><p className="text-lg text-black/70">Audio that complements your positioning, visuals, and customer profile.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Seasonal rotations</h3><p className="text-lg text-black/70">Playlists that evolve with seasons, collections & sales while keeping your signature sound.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Retail music is ideal for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Fashion & Lifestyle Boutiques</span><span>that live on discovery and curation.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Flagship Stores</span><span>needing signature atmosphere across multiple floors.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Multi-Store Brands</span><span>wanting consistent sound with local character.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Concept & Editorial Spaces</span><span>that change themes, art and installations regularly.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Pop-Up stores</span><span>that must make an impression from day one.</span></li>
                    </ul></div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1eae8a545_9ce5db84dcf12ffe5ccf1513e7eabca6.jpg" alt="Fashion model in stylish retail setting" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">How we help</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fb3de1cb6_bacc2ba6c_photo-1529480993802-d8e747bb1ecb.jpg" alt="Modern retail interior with neon lighting" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Encourage deeper browsing</h3><p className="text-lg text-black/70">Our relaxed, well-paced atmosphere inspires longer stays & more exploration.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Strengthen brand recognition</h3><p className="text-lg text-black/70">Sound, visuals & service tell the same, recognizable story across locations.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Guide natural flow</h3><p className="text-lg text-black/70">Music adjusts to day parts & helps move through sections without rushing.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Remove playlist management</h3><p className="text-lg text-black/70">Commercially licensed & centrally managed playlists let your team focus on clients, not songs.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your retail atmosphere</h2>
                <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">Ready to make music work for your store? We evaluate your sound, map your customer journey, and provide a brand-specific approach.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Book a music consultation</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Explore how our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">Sonic Strategy</Link> work for retail stores.</p>
            </div></section>
        </div>
    );
}
