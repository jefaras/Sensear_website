import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles, BarChart, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

const AnimatedButtonSmall = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation Services | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Discover SensEar's music curation services: Sonic Strategy, Signature Playlists, Event Soundtracks and Audio Upgrades. Transform your venue's atmosphere.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    const languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'en';

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/services');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/services';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music Curation Services | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/services' }];

    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Music Curation Services | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' }];

    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensEar",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Music Curation and Sonic Branding",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Music Curation Services",
        "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sonic Strategy",
            "description": "Ultra-specialized music consultancy and audio branding guidelines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Signature Playlists",
            "description": "Bespoke, brand-exclusive playlists sourced from rare archives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Soundtracks",
            "description": "Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Upgrades",
            "description": "Professional on-site sound checks and audio calibration"
          }
        }]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sensear.music/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sensear.music/services"
      }]
    }];

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

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
        
        .slide-up-3 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Services section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Στρατηγικός σχεδιασμός ήχου,<br />
                με τέσσερις δοκιμασμένες προσεγγίσεις
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Μουσικές υπηρεσίες σχεδιασμένες να συμπληρώνουν τον τρόπο λειτουργίας και εμπειρίας κάθε χώρου.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/25d5bd632_gemini-25-flash-image_Upscale_this_image_carefully_adding_some_1980s_accessories_to_the_woman_s_hand_o-0.jpg" 
                      alt="Strategic music services with disco ball and wine glasses" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Black Background like Home */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                Η μουσική παίζει ήδη ρόλο <br />
                στην επιχείρησή σας
              </h2>
            
              <div className="w-full text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  Κάθε χώρος έχει τον ήχο του, ακόμα κι αν δεν έχει σχεδιαστεί συνειδητά. <strong><em>SensEar</em></strong> βοηθάει ώστε ο ήχος να εκφράζει την ταυτότητά σας.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  Σχεδιάζουμε ήχο για χώρους και εκδηλώσεις που δίνουν αξία στην εμπειρία, ενισχύοντας το πώς οι επισκέπτες σας βιώνουν και πως θυμούνται το χώρο σας.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Choose your starting point - With bg from Services-v2 */}
      <section className="pt-24 pb-12" aria-labelledby="services-heading" style={{
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
            <h2 id="services-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Επιλέξτε το σημείο εκκίνησης σας</h2>
            <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">Χρησιμοποιήστε τον παρακάτω οδηγό για να δείτε ποια μουσική υπηρεσία ταιριάζει καλύτερα στις ανάγκες σας.</p>
          </div>

          {/* Signature Playlists */}
          <div className="mb-24" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                            Επιμελημένες playlists
                                          </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Η καθημερινή μουσική σας βάση</p>

                  <div>
                    <div className="mb-6">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Playlists που εξελίσσονται μέσα στη μέρα, με τακτικές ενημερώσεις και απομακρυσμένη διαχείριση.</p>
                    </div>
                    <div className="mb-6">
                                                <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ιδανικό για: <br/>Χώρους που θέλουν να ξεφύγουν από τη γενική, απρόσωπη μουσική.</p>
                                              </div>



                    <Link to={createPageUrl("signature-playlists")}>
                      <AnimatedButton className="w-full sm:w-auto">
                        Ανακαλύψτε τις Επιμελημένες playlists
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>

                <div className="order-2 lg:order-2">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ad6308d11_402461766_1151218075859356_9152177816492568307_n.jpg"
                      alt="Bespoke music curation"
                      className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                </div>
              </div>
            </article>
          </div>

          {/* Event Soundtracks */}
          <div className="mb-24" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/587b0ab41_IMG_20250801_204842.jpg"
                      alt="Event soundtracks and production"
                      className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="order-1 lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                            Μουσική επιμέλεια εκδηλώσεων
                                          </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Μουσική για στιγμές που μετρούν</p>

                  <div>
                    <div className="mb-6">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Σχεδιασμένος ήχος για κάθε στάδιο της εκδήλωσης, με κατεύθυνση και υποστήριξη AV.</p>
                    </div>
                    <div className="mb-6">
                                                <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ιδανικό για: <br/>Συνέδρια, παρουσιάσεις, γάμους και ξεχωριστές διοργανώσεις.</p>
                                              </div>



                    <Link to={createPageUrl("event-soundtracks")}>
                      <AnimatedButton className="w-full sm:w-auto">
                        Ανακαλύψτε τη Μουσική επιμέλεια εκδηλώσεων
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Combined Section: Sonic Strategy & Audio Upgrades */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Sonic Strategy */}
            <div className="flex flex-col h-full">
              <div className="flex flex-col sm:flex-row gap-6 mb-6 sm:items-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                  alt="Strategic sonic branding consultation"
                  className="w-full sm:w-[301px] sm:h-[401px] object-cover rounded-2xl shadow-lg flex-shrink-0 order-2 xl:order-1"
                />
                <div className="flex-1 flex flex-col order-1 xl:order-2">
                  <h3 className="text-3xl font-bold text-black leading-tight mb-2">
                    Σχεδιασμός ηχητικής ταυτότητας
                  </h3>
                  <p className="text-lg font-medium text-black/60 mb-6">Ηχητικό DNA του brand σας</p>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-lg text-black/60 leading-relaxed">Κατευθυντήριες γραμμές και χάρτης εφαρμογής για συνεπή ήχο παντού.</p>
                    </div>
                    <div className="mb-4">
                                                <p className="text-base text-black/60 leading-relaxed">Ιδανικό για: <br/>Brands με πολλαπλούς χώρους ή κανάλια επικοινωνίας.</p>
                                              </div>

                    
                    <div className="mt-6">
                        <Link to={createPageUrl("sonic-strategy")}>
                            <AnimatedButtonSmall className="w-full sm:w-auto">
                            Ανακαλύψτε τον Σχεδιασμό ηχητικής ταυτότητας
                            </AnimatedButtonSmall>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Upgrades */}
            <div className="flex flex-col h-full">
              <div className="flex flex-col sm:flex-row gap-6 mb-6 sm:items-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                  alt="Professional audio equipment optimization"
                  className="w-full sm:w-[301px] sm:h-[401px] object-cover rounded-2xl shadow-lg flex-shrink-0 order-2 xl:order-1"
                />
                <div className="flex-1 flex flex-col order-1 xl:order-2">
                  <h3 className="text-3xl font-bold text-black leading-tight mb-2">
                    Ακουστική αναβάθμιση
                  </h3>
                  <p className="text-lg font-medium text-black/60 mb-6">Ακουστική αρτιότητα</p>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-lg text-black/60 leading-relaxed">Καθοδήγηση για ακουστική και εξοπλισμό, με υποστήριξη εγκατάστασης.</p>
                    </div>
                    <div className="mb-4">
                                                <p className="text-base text-black/60 leading-relaxed">Ιδανικό για: <br/>Χώρους όπου η ποιότητα του ήχου χρειάζεται βελτίωση.</p>
                                              </div>


                    <div className="mt-6">
                        <Link to={createPageUrl("audio-upgrades")}>
                            <AnimatedButtonSmall className="w-full sm:w-auto">
                            Ανακαλύψτε την Ακουστική αναβάθμιση
                            </AnimatedButtonSmall>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How our services deliver */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Πώς λειτουργούν οι υπηρεσίες μας</h2>
            <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">Οι υπηρεσίες μας μπορούν να λειτουργήσουν αυτόνομα ή συνδυαστικά, ανάλογα με τις ανάγκες του χώρου σας.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/706733b3c_f9c386a1d5dba0530f1176b031bff1a4-UPSC.jpg" 
                  alt="Services delivery" 
                  className="w-full h-auto rounded-2xl shadow-lg" 
                />
             </div>
             <div className="order-1 lg:order-2">
                <div className="space-y-8">
                    <div className="mb-6">
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("signature-playlists")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Επιμελημένες playlists</Link> <span >Διαμορφώνουν την καθημερινή ατμόσφαιρα του χώρου σας.</span>
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("sonic-strategy")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Σχεδιασμός ηχητικής ταυτότητας</Link> <span >Ενοποιεί τον ήχο του brand σας σε όλους τους χώρους και τα κανάλια.</span>
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("event-soundtracks")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Μουσική επιμέλεια εκδηλώσεων</Link> <span >Χορογραφεί τις ξεχωριστές στιγμές με ακρίβεια και ροή.</span>
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("audio-upgrades")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Ακουστική αναβάθμιση</Link> <span >Βελτιστοποιεί την ποιότητα και την καθαρότητα του ήχου.</span>
                        </p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Let's explore your possibilities */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ας εξερευνήσουμε τις δυνατότητές σας</h2>
          <p className="text-xl text-black/60 mb-12 max-w-3xl mx-auto">
            Ποια υπηρεσία ευθυγραμμίζεται με το όραμά σας; Αξιολογούμε την υπάρχουσα ατμόσφαιρα και προτείνουμε το ιδανικό σημείο εκκίνησης.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto h-14" aria-label="Ανακαλύψτε τη στρατηγική ήχου σας">
                Ανακαλύψτε τη στρατηγική ήχου σας
              </AnimatedButton>
            </Link>
            <span className="text-black/60 font-medium">ή</span>
            <Link to={createPageUrl("Industries")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                Δείτε τους κλάδους που εξυπηρετούμε
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}