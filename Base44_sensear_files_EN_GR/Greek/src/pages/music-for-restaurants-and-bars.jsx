import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

export default function RestaurantsBars() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Μουσική για Εστιατόρια & Bar | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Music for Restaurants and Bars that blends naturally with food and service, supporting dining flow, conversation and the overall setting.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/restaurants-bars');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/restaurants-bars';
      document.head.appendChild(canonicalLink);
    }

    const newImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg';

    const ogTags = [
    { property: 'og:title', content: 'Music for Restaurants & Bars | SensEar Curation' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: newImageUrl },
    { property: 'og:url', content: 'https://sensear.music/restaurants-bars' },
    { property: 'og:type', content: 'website' }];

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
    { name: 'twitter:title', content: 'Music for Restaurants & Bars | SensEar Curation' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: newImageUrl }];

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
      "https://www.instagram.com/sensear.music"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Restaurant & Bar Music Curation",
      "description": "Tailored sound for memorable dining & drinking experiences. Create the perfect atmosphere with expertly curated music.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Restaurant Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Restaurants and Bars"
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
        "name": "Industries",
        "item": "https://sensear.music/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Restaurants & Bars",
        "item": "https://sensear.music/restaurants-bars"
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

        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Restaurants & Bars section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Μουσική για Εστιατόρια & Bar:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Σχεδιασμένη να δένει με το φαγητό και το service</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Μουσικές επιλογές που συμπληρώνουν τη γεύση, τον χρονισμό και το περιβάλλον.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e18536343_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_1-1.jpg" 
                      alt="Elegant restaurant interior with curated music atmosphere" 
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Ατμόσφαιρα επιμελημένη<br />για κάθε στιγμή του service
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Η μουσική <strong><em>διαμορφώνει την εμπειρία του φαγητού</em></strong> όσο και η διακόσμηση ή ο φωτισμός.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Ο ήχος μας <strong><em>ακολουθεί το μενού και τον ρυθμό του service</em></strong> και γίνεται <strong><em>μέρος της απόλαυσης</em></strong>, χωρίς να αποσπά από το φαγητό ή τη συζήτηση.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Τι κάνουμε</h2>
            <p className="text-xl text-black/60 font-medium">Σχεδιασμό και υλοποίηση μουσικής για εστιατόρια & bar</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Was Key benefits) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/45c5bf8ee_0518d03f51766be5a36a8fa5df900697.jpg"
                alt="Cocktail glass with ice representing bar atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Playlists με βάση τη ροή του service</h3>
                <p className="text-lg text-black/70">Μουσική σχεδιασμένη από το άνοιγμα έως το κλείσιμο, με ενέργεια που ακολουθεί τον ρυθμό της κουζίνας και της σάλας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ρύθμιση tempo & έντασης</h3>
                <p className="text-lg text-black/70">Επίπεδα ήχου που επιτρέπουν άνετη συζήτηση, ομαλή κίνηση του προσωπικού και σταθερή, φιλόξενη ενέργεια.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Μουσικές επιλογές ευθυγραμμισμένες με το brand</h3>
                <p className="text-lg text-black/70">Playlists ειδικά για το concept σας, που υποστηρίζουν την εμπειρία για την οποία θέλετε να σας θυμούνται.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Συχνές ανανεώσεις</h3>
                <p className="text-lg text-black/70">Τακτικές αλλαγές που κρατούν τη μουσική φρέσκια για τους τακτικούς πελάτες και το προσωπικό, διατηρώντας τον χαρακτήρα σας.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant & bar music is ideal for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ιδανικό για μουσική εστιατορίων & bar</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Casual & fine dining εστιατόρια</span>
                  <span>Που βασίζονται στην ατμόσφαιρα και στους επαναλαμβανόμενους επισκέπτες.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Cocktail & wine bars</span>
                  <span>Που χρειάζονται τη σωστή διάθεση από το aperitivo έως την τελευταία παραγγελία.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Ξενοδοχειακά εστιατόρια</span>
                  <span>Που εξυπηρετούν τους επισκέπτες τους, locals και ιδιωτικές εκδηλώσεις.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Όμιλοι με πολλαπλούς χώρους</span>
                  <span>Που θέλουν συνεπή ηχητική ταυτότητα σε όλα τα σημεία.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image (Was Industry specific challenges) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/74f06e87c_dbf1c8542_c383f86fd572aa6ee623a8fd6ab443df.jpg"
                alt="Elegant dining scene with guests enjoying atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Πώς βοηθάμε</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Was How SensEar solves this) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bf81c0608_f73e72546f5644a803c4dd204f0d7de1.jpg"
                alt="Vibrant bar scene with guests dancing and enjoying music"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Χτίζουμε ενέργεια σε ήσυχες βραδιές</h3>
                <p className="text-lg text-black/70">Δημιουργούμε ατμόσφαιρα όπου η ενέργεια προκύπτει από τον ήχο, όχι μόνο από τον αριθμό των επισκεπτών.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Καθοδηγούμε φυσικά τον ρυθμό και τις παραγγελίες</h3>
                <p className="text-lg text-black/70">Ρυθμίζουμε τον ήχο ώστε το επόμενο ποτό ή επιδόρπιο να έρχεται τη σωστή στιγμή.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ταιριάζουμε απόλυτα στο concept σας</h3>
                <p className="text-lg text-black/70">Μουσική, χώρος και service αφηγούνται την ίδια ιστορία, ώστε το εστιατόριο να ακούγεται τόσο αυθεντικό όσο και η κουζίνα του.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Αφαιρούμε την τριβή των playlists</h3>
                <p className="text-lg text-black/70">Εμείς παρέχουμε τη μουσική, εσείς θέτετε τους κανόνες και το προσωπικό εστιάζει στους επισκέπτες, όχι στην αναζήτηση κομματιών.</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Ακούστε τον κλάδο στην πράξη</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Διαβάστε ιστορίες πελατών και ακούστε δείγματα από τις playlists τους.</p>
            <Link to={createPageUrl("case-studies")}>
              <AnimatedButton className="px-8">
                Δείτε τα Παραδείγματα
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Αναβαθμίστε την ατμόσφαιρα του εστιατορίου σας</h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Χρειάζεστε καλύτερο ήχο για πιο δυνατές βραδιές;
            Αξιολογούμε τον υπάρχοντα ήχο, τη ροή του service και το concept σας και προτείνουμε μια προσαρμοσμένη προσέγγιση.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Book a music consultation">
                Κλείστε μια μουσική συμβουλευτική
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Δείτε πώς οι <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Επιμελημένες playlists</Link> και η <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Ακουστική αναβάθμιση</Link> λειτουργούν για εστιατόρια & bar.
          </p>
        </div>
      </section>
    </div>
  );
}