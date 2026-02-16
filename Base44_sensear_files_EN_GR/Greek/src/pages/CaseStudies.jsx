import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music } from "lucide-react";

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 flex items-center">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function CaseStudies() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Case Studies | SensEar";

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3]">
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-up-1 {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .slide-up-2 {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

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

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Hear how sound<br />shapes real experiences
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Examples of how sound is applied across different environments.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d7a77faed_flux-pro-20_photography_of_Upscale_this_image_candid_photography_style-0.jpg" 
                      alt="SensEar Case Studies" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
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
                From vision to sound & beyond
              </h2>
            
              <div className="w-full text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  All venues start with a <strong><em>vision</em></strong>; an <strong><em>atmosphere</em></strong> they imagined, a <strong><em>feeling</em></strong> they wanted guests to have.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  We turn those visions into <strong>carefully crafted soundscapes</strong> that support your business and <strong>respect the space</strong>.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24" style={{
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
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Four venues, four journeys</h2>
            <p className="text-xl text-black/60 font-medium mb-12">Each with its own character, needs and musical solution.</p>
          </div>

          <div className="space-y-24">
            {/* Beach House Antiparos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4246ff146_upscalemedia-transformed.png"
                    alt="Beach House Antiparos"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Beach House, Antiparos</h3>
                
                <div className="mb-8">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-6">
                    Beach House features traditional island style, the high-end restaurant CoocooVaya and a bar hovering above the sea, all with endless Aegean views.
                  </p>
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
                    We were delighted when asked to design the music: the stunning setting needed <strong>sound that complements</strong> and relaxes. Our playlists respect the peaceful atmosphere while <strong>keeping perfect energy</strong> across beach, restaurant & bar.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="#beach-house-sample">
                    <AnimatedButton className="w-full sm:w-auto">
                      <span className="inline-flex items-center gap-2 font-bold">
                        <Music className="w-5 h-5" /> Listen to Beach House playlist
                      </span>
                    </AnimatedButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Pelicanos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Pelicanos, Sifnos</h3>
                
                <div className="mb-8">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-6">
                    Fine dining has taken off on Sifnos, an island known for its culinary tradition. Pelicanos is a sophisticated all-day restaurant in the fishing village of Faros, that needed music to match its ambition.
                  </p>
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
                    Yorgos, the owner, chef and part-time music head, trusted us to <strong>enrich the soundtrack</strong> with fresh discoveries & elegant classics that create a <strong>complete dining experience</strong> by the sea.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="#pelicanos-sample">
                    <AnimatedButton className="w-full sm:w-auto">
                      <span className="inline-flex items-center gap-2 font-bold">
                        <Music className="w-5 h-5" /> Listen to Pelicanos atmosphere
                      </span>
                    </AnimatedButton>
                  </a>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5b48f2dce_pelicanos-2-5.png"
                    alt="Pelicanos Sifnos"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Yam Beach Club */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2886fc06f_hyggelig-aftenstemningcropped-pxbee-minitools-enhance-20251212181718.jpg"
                    alt="Yam Beach Club"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Yam, Antiparos</h3>
                
                <div className="mb-8">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-6">
                    An iconic Antiparos venue since the late '90s, Yam sits on a beautiful scenery and an easy-going vibe.
                  </p>
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
                    The girls in charge asked us to complement this special setting with <strong>music that evolves</strong> from lazy lunch to late night hangouts. We created a <strong>fine music experience</strong> for their after-dinner drinks and cocktails that captures the island's magic.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="#yam-sample">
                    <AnimatedButton className="w-full sm:w-auto">
                      <span className="inline-flex items-center gap-2 font-bold">
                        <Music className="w-5 h-5" /> Listen to Yam's playlist
                      </span>
                    </AnimatedButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Levantis Gallery */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Levantis, Paros</h3>
                
                <div className="mb-8">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-6">
                    Neva Bergman assigned us to create atmospheric support for her "Quiet Testimony" exhibition opening at Levantis restaurant's gallery space in Paros.
                  </p>
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
                    The custom ambient soundscape we designed <strong>enriched viewing & discussions</strong> without distraction. The artist loved how the <strong>music matched her work's</strong> emotions and kept visitors engaged longer.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="#levantis-sample">
                    <AnimatedButton className="w-full sm:w-auto">
                      <span className="inline-flex items-center gap-2 font-bold">
                        <Music className="w-5 h-5" /> Listen to Levantis ambience
                      </span>
                    </AnimatedButton>
                  </a>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d36a8c70d_2e5887651_Levantis1.png"
                    alt="Levantis Gallery"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA - Your Transformation Starts Here */}
      <section className="py-20 animated-gradient">
        <div className="w-full mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Your venue's sound journey starts here</h2>
          <p className="text-xl text-black/60 mb-12 mx-auto">
            Let's explore how music can work specifically for your space and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                Discover Your Sound Strategy
              </AnimatedButton>
            </Link>
            
            <div className="flex items-center gap-6">
              <span className="text-black/60">or</span>
              <Link to={createPageUrl("Services")} className="inline-flex items-center text-black font-bold text-lg group">
                <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore our services</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}