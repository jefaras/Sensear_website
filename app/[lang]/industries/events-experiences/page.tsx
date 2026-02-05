import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function EventsExperiencesPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animated-gradient {
                    background: linear-gradient(135deg, #f5d4c1 0%, #e8c3b0 15%, #d4c4b0 30%, #c0c0c0 45%, #d3d3d3 60%, #f0d5d0 75%, #e8c3b0 90%, #f5d4c1 100%);
                    background-size: 400% 400%;
                    animation: gradient-shift 10s ease infinite;
                }
            `}} />

            {/* Hero Section */}
            <section
                className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="font-extrabold text-black mb-6 leading-[1.1]">
                                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Music for Events:</span>
                                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Sound that fits the moment.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                Carefully curated music aligned with timing & flow.
                            </p>
                        </div>

                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <img
                                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/aa36ad57a_gemini-25-flash-image_fix_the_woman_s_uppoer_lip_s_right_side_as_it_appears_like_she_was_stung_by_a_be-0.jpg"
                                            alt="Event music curation and entertainment production"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            Music timed<br />for every event moment
                        </h2>
                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                At events, <strong><em>music connects each moment</em></strong> from arrival to finale.
                            </p>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                                Our soundscapes <strong><em>build atmosphere</em></strong> & follow your event's timeline, creating moments guests <strong><em>feel & recall</em></strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 animated-gradient">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2>
                        <p className="text-xl text-black/60 font-medium">Event music strategy and execution</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Run-of-show sound design</h3>
                                <p className="text-lg text-black/70">Multi-phase soundtracks that match each phase's energy & purpose from doors open to last track.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Story-driven curation</h3>
                                <p className="text-lg text-black/70">Build anticipation, focus & emotional peaks with music that evolves with your event's narrative.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Technical coordination</h3>
                                <p className="text-lg text-black/70">We manage direction, sound checks & playback, to maintain levels and smooth transitions.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Single point of contact</h3>
                                <p className="text-lg text-black/70">We work with your venue on music curation & technicalities to reduce coordination stress.</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9c0a5ab31_f202eaf0e_410494315_375848528274698_8398961206007741661_ncropped.jpg"
                                alt="Event experience with guests dancing"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideal For */}
            <section
                className="py-20"
                style={{
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Event music is ideal for</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Hotels, Resorts & Restaurants</h3>
                                <p className="text-lg text-black/70">hosting launches, weddings or signature experiences.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Event Organizers & Agencies</h3>
                                <p className="text-lg text-black/70">designing immersive branded activations.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Private Chefs & Experience Creators</h3>
                                <p className="text-lg text-black/70">offering ceremonial or intimate gatherings.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Cultural Venues & Fashion Shows</h3>
                                <p className="text-lg text-black/70">staging talks, previews or runway presentations.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Brands & Individuals</h3>
                                <p className="text-lg text-black/70">who understand sound defines the experience.</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/857dd2f02_604e3a452_2eb02f6aa00cbdc92f835b115166f9fb.jpg"
                                alt="Event sound technical challenge"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-center">How we help</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b7d509322_princepartyup4-5.jpg"
                                alt="Event atmosphere with guests enjoying"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Guide guests through the journey</h3>
                                <p className="text-lg text-white/80">Music carefully frames each moment, making events feel like experiences not schedules.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Maintain energy between segments</h3>
                                <p className="text-lg text-white/80">Transitions between talks, courses & performances keep guests engaged, not on their phones.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Reduce stress levels</h3>
                                <p className="text-lg text-white/80">Our team handles music & technical execution with pre-made decisions, so you can focus on hosting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section
                className="py-20"
                style={{
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your event atmosphere</h2>
                    <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
                        Ready to design sound for your next experience? We review your concept, venue and timeline, then propose a tailored soundtrack and technical approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={`/${lang}/contact`}>
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                    Book a music consultation
                                </span>
                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </div>
                    <p className="text-black/70 mt-8">
                        Explore how our <Link href={`/${lang}/services/event-soundtracks`} className="underline hover:text-black font-semibold">Event Soundtracks</Link> and <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> support events and experiences.
                    </p>
                </div>
            </section>
        </div>
    );
}
