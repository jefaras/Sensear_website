import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Breadcrumbs from "../components/Breadcrumbs";
import { createPageUrl } from "@/utils";
import { Lightbulb, Building2, SlidersHorizontal, Heart, ArrowRight } from 'lucide-react';

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

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Σχετικά με τη SensEar | Η ομάδα μουσικής επιμέλειας & η προσέγγισή μας";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Μάθετε πώς η SensEar προσεγγίζει τη μουσική επιμέλεια με σαφήνεια και πρόθεση, διαμορφώνοντας την αίσθηση των χώρων μέσω του ήχου.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/about');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/about';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'About SensEar | Music curation Team & Approach' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/about' }];

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
    { name: 'twitter:title', content: 'About SensEar | Music curation Team & Approach' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80' }];

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
      "alternateName": "SensEar Music Curation",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "foundingDate": "2025",
      "founders": [
      {
        "@type": "Person",
        "name": "John E. Farazoumis"
      },
      {
        "@type": "Person",
        "name": "George Fameliaris"
      }],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "description": "Music curators, DJs, and sonic branding experts crafting unforgettable soundscapes for hospitality.",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]
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
        "name": "About",
        "item": "https://sensear.music/about"
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="About section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Οι άνθρωποι πίσω από το soundtrack σας
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Βοηθάμε τους χώρους να διαμορφώσουν το πώς ακούγονται και πώς βιώνονται.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/738905847_gemini-image-2_Photography_of_a_candid_scene_with_a_blue_background_featuring_a_woman_s_figure_-0.jpg" 
                      alt="Η ομάδα μουσικής επιμέλειας της SensEar" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Το όραμά μας
            </h2>
            
            <div className="w-full text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-10">
                Να γίνουμε ο κορυφαίος συνεργάτης μουσικής για brands & εκδηλώσεις με χαρακτήρα, που θέλουν ταυτότητα, ατμόσφαιρα και ουσιαστική σύνδεση με τους επισκέπτες τους.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
                <span>Μάθετε περισσότερα για την </span><Link to={createPageUrl("sonic-strategy")} className="underline hover:text-peach font-semibold">Ηχητική ταυτότητα</Link><span>.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Philosophy */}
      <section className="animated-gradient py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-black leading-tight mb-12">
              Η φιλοσοφία μας
            </h2>
          
            <div className="w-full text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
                Στη <strong>SensEar</strong> αντιμετωπίζουμε τη μουσική ως <strong><em>βασικό στοιχείο</em></strong> της <strong><em>εμπειρίας</em></strong>.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed">
                Η μουσική <em>δεν είναι απλό υπόβαθρο</em>, αλλά <strong>ατμόσφαιρα</strong>, <strong>μνήμη</strong> και <strong>συναίσθημα</strong>, που επηρεάζει το πώς <strong><em>νιώθουν</em></strong> και <strong><em>συμπεριφέρονται</em></strong> οι επισκέπτες.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="timeline-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center text-black mb-4">Η διαδρομή μας</h2>
          <p className="text-xl text-black/60 font-medium text-center mb-12">Από DJ collective και digital υπηρεσίες, στον στρατηγικό σχεδιασμό ήχου</p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Timeline content */}
            <div>
          {/* Timeline container with flex centering - using inline style to ensure it applies */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="w-full max-w-4xl relative" role="list">
              {/* Vertical connecting line - left side */}
              <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-0.5 bg-black/20" aria-hidden="true" />
              
              <div className="space-y-12" style={{ width: '100%' }}>
                {/* 2010 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2010
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ο <strong>Γιώργος και η Κατερίνα</strong> γνωρίζονται επιμελούμενοι μουσική για έναν upscale γάμο. Η κοινή τους αγάπη για <strong>κρυμμένα grooves</strong> γίνεται η αρχή μιας δημιουργικής συνεργασίας.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8 items-start">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2010
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow pt-2">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ο <strong>Γιώργος και η Κατερίνα</strong> γνωρίζονται επιμελούμενοι μουσική για έναν upscale γάμο. Η κοινή τους αγάπη για <strong>κρυμμένα grooves</strong> γίνεται η αρχή μιας δημιουργικής συνεργασίας.</p>
                    </div>
                  </div>
                </article>

                {/* 2011 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2011
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ως <strong>Midnight City</strong>, διοργανώνουν και παίζουν μουσική σε <strong>επιλεγμένα parties</strong>, εστιάζοντας σε cross-genre ανακαλύψεις από τα ’70s μέχρι σήμερα, δημιουργώντας ένα αφοσιωμένο κοινό.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8 items-start">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2011
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow pt-2">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ως <strong>Midnight City</strong>, διοργανώνουν και παίζουν μουσική σε <strong>επιλεγμένα parties</strong>, εστιάζοντας σε cross-genre ανακαλύψεις από τα ’70s μέχρι σήμερα, δημιουργώντας ένα αφοσιωμένο κοινό.</p>
                    </div>
                  </div>
                </article>

                {/* 2018 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2018
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ο JEF ανακαλύπτει τους M.C. σε ένα από τα χαρακτηριστικά τους events. Το vibe και οι deep επιλογές τον κερδίζουν αμέσως.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8 items-start">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2018
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow pt-2">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ο JEF ανακαλύπτει τους M.C. σε ένα από τα χαρακτηριστικά τους events. Το vibe και οι deep επιλογές τον κερδίζουν αμέσως.</p>
                    </div>
                  </div>
                </article>

                {/* 2023 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2023
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ο JEF και ο Γιώργος ευθυγραμμίζονται σε ένα κοινό όραμα: <strong>μεταμορφωτική μουσική επιμέλεια</strong> και DJ sets για χώρους που δίνουν σημασία στην ατμόσφαιρα.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8 items-start">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2023
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow pt-2">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ο JEF και ο Γιώργος ευθυγραμμίζονται σε ένα κοινό όραμα: <strong>μεταμορφωτική μουσική επιμέλεια</strong> και DJ sets για χώρους που δίνουν σημασία στην ατμόσφαιρα.</p>
                    </div>
                  </div>
                </article>

                {/* 2025 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2025
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Η <strong>SensEar ξεκινά</strong>. Οι πρώτοι πελάτες επιβεβαιώνουν αυτό που πιστεύαμε εξαρχής: οι χώροι αξίζουν soundtracks σχεδιασμένα με πρόθεση και εξειδίκευση.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8 items-start">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2025
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow pt-2">
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Η <strong>SensEar ξεκινά</strong>. Οι πρώτοι πελάτες επιβεβαιώνουν αυτό που πιστεύαμε εξαρχής: οι χώροι αξίζουν soundtracks σχεδιασμένα με πρόθεση και εξειδίκευση.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/92f0d2705_16685b806_pexels-monstera-1408089.jpg"
                alt="Το ταξίδι μουσικής επιμέλειας της SensEar"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="team-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 animate-fade-in-up">Γνωρίστε την ομάδα</h2>
          <p className="text-xl text-black/60 font-medium text-center mb-12 animate-fade-in-up">Παθιασμένοι με τη μουσική, προσανατολισμένοι στη φιλοξενία</p>

          {/* George Fameliaris - FIRST */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                {/* Left: Text Content */}
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                    George Fameliaris
                  </h3>
                  <p className="text-xl font-semibold text-black/70 mb-10">Συνιδρυτής, Επικεφαλής μουσικής επιμέλειας & AV expert</p>
                  
                  <div>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                      Η δια βίου σχέση του με τη μουσική ενισχύθηκε μέσα από σπουδές Media & Communications και μεταπτυχιακό στην Popular Music στον κινηματογράφο.
                    </p>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                      Έχει εδραιωθεί στην Αθήνα ως DJ και music curator σε ραδιόφωνο, events και μόνιμες συνεργασίες με χώρους.
                    </p>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                      Στη SensEar, διαμορφώνει τη μουσική ταυτότητα κάθε χώρου με ακρίβεια, ρυθμό και ατμόσφαιρα που ορίζουν το signature sound του brand.
                    </p>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="lg:order-2 hidden lg:block">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9e1d5056f_398e0cca3_84887785_172252324195148_2160204890159185920_n1.jpg"
                    alt="Γιώργος Φαμελιάρης - Συνιδρυτής και Επικεφαλής Μουσικής Επιμέλειας SensEar"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          {/* John E. Farazoumis - SECOND */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
                {/* Left: Image */}
                <div className="lg:order-1 hidden lg:block">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/98a0a7252_b24ebd26f_JEF_square_bw.png"
                    alt="John E. Farazoumis - Συνιδρυτής και Διευθυντής Brand Strategy SensEar"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>

                {/* Right: Text Content */}
                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                    John E. Farazoumis
                  </h3>
                  <p className="text-xl font-semibold text-black/70 mb-10">Συνιδρυτής, Στρατηγική & Επικοινωνία</p>
                  
                  <div>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                      Από τα πρώτα DJ sets μέχρι τις σπουδές του στη Διοίκηση Φιλοξενίας, η μουσική υπήρξε πάντα καθοριστική.
                    </p>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                      Συνιδρυτής επιτυχημένου digital agency, με 25 χρόνια εμπειρίας σε web services και κατανόηση αναγκών πελατών.
                    </p>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                      Στη SensEar, χαράσσει τη στρατηγική κατεύθυνση του brand και γεφυρώνει το δημιουργικό όραμα με την εμπειρία πελάτη.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Katerina Karali - THIRD */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                {/* Left: Text Content */}
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                    Katerina Karali
                  </h3>
                  <p className="text-xl font-semibold text-black/70 mb-10">Συνεργάτιδα, DJ & Μουσική Επιμελήτρια</p>
                  
                  <div>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                      Συνδυάζει τον οπτικό σχεδιασμό με την ηχητική αφήγηση, με εκλεπτυσμένη καλλιτεχνική ματιά.
                    </p>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                      Έμπειρη multimedia art director, επιμελείται ηχητικά τοπία για ταινίες, εκθέσεις και ιδιωτικές εκδηλώσεις.
                    </p>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                      Γνωστή για το ένστικτο και την αγάπη της για σπάνια grooves, προσθέτει βάθος, υφή και απρόσμενο χαρακτήρα στη SensEar.
                    </p>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="lg:order-2 hidden lg:block">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a4ebc438b_73ba1e2e2_86455570_172252364195144_3083930653335486464_n1.jpg"
                    alt="Κατερίνα Καραλή - Art Director και Music Curator SensEar"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          <p className="text-center mt-32 text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto text-black leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Μαζί, αποτελούμε τη <strong>SensEar</strong>.
            Μια ομάδα αφοσιωμένη στο να αναβαθμίζει χώρους μέσα από ουσιαστική, αξέχαστη μουσική.
          </p>
          
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-lg max-w-3xl mx-auto text-black/80 mb-8">
              Δείτε πώς συνεργαζόμαστε με πελάτες ή επικοινωνήστε μαζί μας για το project σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to={createPageUrl("case-studies")} aria-label="Music curation case studies">
                <AnimatedButton className="w-full sm:w-auto">
                  Διαβάστε Παραδείγματα
                </AnimatedButton>
              </Link>
              <Link to={createPageUrl("contact")}>
                <AnimatedButton className="w-full sm:w-auto">
                  Επικοινωνήστε μαζί μας
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faebe3] text-black py-24" aria-labelledby="differentiators-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="differentiators-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 animate-fade-in-up">Τι μας ξεχωρίζει</h2>
          <p className="text-xl text-black/60 font-medium text-center mb-12 animate-fade-in-up">Τέσσερις αρχές που καθοδηγούν ό,τι κάνουμε</p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/df442a3bc_f12d13b47_IMG_20250722_165530.jpg"
                alt="Η μοναδική προσέγγιση της SensEar"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div>
          <div className="grid md:grid-cols-1 gap-10" role="list">
            {/* From Brand Vision to Sonic Expression */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <Lightbulb className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Μουσική ως branding</h3>
                  <p className="text-black/70">Μεταφράζουμε το όραμά σας σε μουσική που ακούγεται φυσική και απόλυτα ταιριαστή στο brand.</p>
                </div>
              </div>
            </article>

            {/* Built for Hospitality */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Κάλυψη όλων των κλάδων</h3>
                  <p className="text-black/70">Μουσική σχεδιασμένη για να ολοκληρώνει το ταξίδι του επισκέπτη σε κάθε χώρο που δίνει αξία στην ατμόσφαιρα.</p>
                </div>
              </div>
            </article>

            {/* Modular, Scalable, Personalized */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <SlidersHorizontal className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Προσαρμοσμένες υπηρεσίες</h3>
                  <p className="text-black/70">Η προσέγγισή μας προσαρμόζεται στο στυλ, την ομάδα και τις ανάγκες σας, ακόμη και σε πολλαπλές τοποθεσίες.</p>
                </div>
              </div>
            </article>

            {/* We deeply Love Music */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Η δύναμη της μουσικής</h3>
                  <p className="text-black/70">Κατανοούμε πώς η μουσική αλλάζει τη διάθεση, διαμορφώνει χώρους και συνδέει ανθρώπους.</p>
                </div>
              </div>
            </article>
          </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 animated-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ανακαλύψτε τη διαδρομή του ήχου σας</h2>
          <p className="text-xl text-black/60 mb-12 max-w-3xl mx-auto">
            Εξερευνήστε τη μοναδική μας προσέγγιση μέσα από τις Επιμελημένες playlists
            ή δείτε τι κάνουμε για τον κλάδο σας.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to={createPageUrl("signature-playlists")}>
              <AnimatedButton className="w-full sm:w-auto">
                Επιμελημένες playlists
              </AnimatedButton>
            </Link>
            <Link to={createPageUrl("Industries")}>
              <AnimatedButton className="w-full sm:w-auto">
                Κλάδοι που εξυπηρετούμε
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}