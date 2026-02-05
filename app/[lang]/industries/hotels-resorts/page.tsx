import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function HotelsResortsPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;

    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Music for Hotels & Resorts:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Soundtracks for every hour & space.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">Thoughtful sound that complements service, design & mood.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7aec5d264_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_p-1.jpg" alt="Luxury hotel resort with curated music ambiance" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>

            {/* Intro Section */}
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Hotel music for the<br />entire guest journey</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">Guests <strong><em>feel your hotel's atmosphere</em></strong> before they notice the design.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">Our soundscapes <strong><em>enrich each moment</em></strong> of the day across your spaces & become part of the <Link href={`/${lang}/blog`} className="underline hover:text-white/80 transition-colors">guest experience</Link>.</p>
                </div>
            </div></div></section>

            {/* What we do */}
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2><p className="text-xl text-black/60 font-medium">Hotel music planning and implementation</p></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4bc198c23_BHA1.png" alt="Hotel music implementation" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">24-hour sound design</h3><p className="text-lg text-black/70">Music that shifts naturally during the day: welcoming mornings, focused afternoons, warm evenings.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Multi-zone consistency</h3><p className="text-lg text-black/70">Distinct themes for lobby, restaurant, bar, spa and pool; all connected by <Link href={`/${lang}/blog`} className="underline hover:text-black font-semibold">one sonic identity</Link>.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Brand-aligned playlists</h3><p className="text-lg text-black/70">Private hotel-only selections that sound as custom as your interiors, not generic streaming mixes.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Central management</h3><p className="text-lg text-black/70">Staff focus on service while we handle playlists, updates and commercial licensing compliance.</p></div>
                    </div>
                </div>
            </div></section>

            {/* Ideal For */}
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Hotel music is ideal for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Boutique Hotels</span><span>that live on word of mouth and atmosphere.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Luxury Resorts</span><span>needing coherent sound across multiple spaces.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Business Hotels</span><span>switching from focused daytime to social evenings.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Branded Groups</span><span>wanting consistent audio identity across locations.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Event Properties</span><span>hosting weddings, retreats or conferences.</span></li>
                    </ul></div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b32503d17_wi-cltcw-westin-charlotte-dogwood-13256_Classic-Hor1.jpg" alt="Luxury hotel terrace with elegant atmosphere" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>

            {/* How we help */}
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">How we help</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7ba13d3db_95c488ed9_silver-ear-ear-ring.jpg" alt="Silver ear sculpture representing listening and sonic branding" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Different energy for every hour & space</h3><p className="text-lg text-black/70">We design music that shifts naturally as your property's rhythm changes through the day.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Zone specific curation with one identity</h3><p className="text-lg text-black/70">We create distinct themes tied by one recognizable identity, instead of random playlists.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Signature themes that fit your brand</h3><p className="text-lg text-black/70">We bring your brand to life with melodies that match interiors & service and feel uniquely yours.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Central control instead of staff DJing</h3><p className="text-lg text-black/70">We handle music playback & commercial use licensing, so staff focus on guests, not volume & song selection.</p></div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
                    <p className="text-lg md:text-xl text-black/70 mb-6">Read our client's stories and listen to their playlists samples.</p>
                    <Link href={`/${lang}/case-studies`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Explore our Case Studies</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link>
                </div>
            </div></section>

            {/* Final CTA */}
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your hotel's atmosphere</h2>
                <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">Considering to transform your sound? We will review your current setup, understand your guest experience and propose a tailored approach.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Book a music consultation</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Also, explore how our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">Sonic Strategy</Link> work for hotels & resorts.</p>
            </div></section>
        </div>
    );
}
