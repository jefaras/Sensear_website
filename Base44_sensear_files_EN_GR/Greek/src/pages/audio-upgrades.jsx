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

export default function AudioUpgrades() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Ακουστική αναβάθμιση | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Professional audio assessment, design and tuning for venues. We upgrade your sound system so it matches your design quality.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/audio-upgrades');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/audio-upgrades';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Audio Upgrades | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/71ebcd6fa_b6e0a3f63_tech_hifi_1979_07-Picsart-AiImageEnhancer.jpg' },
    { property: 'og:url', content: 'https://sensear.music/audio-upgrades' }];

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
    { name: 'twitter:title', content: 'Audio Upgrades | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/71ebcd6fa_b6e0a3f63_tech_hifi_1979_07-Picsart-AiImageEnhancer.jpg' }];

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
      "name": "Audio Upgrades",
      "description": "Professional audio assessment, redesign and tuning for venues.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Audio Optimization"
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Audio Upgrades",
        "item": "https://sensear.music/audio-upgrades"
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
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Audio Upgrades section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Ακουστική αναβάθμιση:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Καθαρός, ισορροπημένος ήχος για τον χώρο σας</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Βελτιστοποίηση του ήχου με στόχο τη διευκόλυνση της συνομιλίας και την αναβάθμιση της συνολικής εμπειρίας.
                </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/22a32a26f_seedream-40_professional_photo_of_a_sleek_speaker_in_a_modern_setting_with_a_collection_of_r-1crop1-1.jpg" 
                      alt="Professional audio equipment optimization" 
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
              Ακουστική βελτιστοποίηση<br />για φιλόξενη ατμόσφαιρα
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Αναβαθμίζουμε τον ηχητικό εξοπλισμό και την ακουστική του χώρου, ώστε ο ήχος να ακούγεται <strong><em>καθαρά</em></strong> και <strong><em>ισορροπημένα</em></strong> σε κάθε σημείο.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Η σωστή ακουστική <strong><em>αναδεικνύει τον σχεδιασμό</em></strong> του χώρου και επιτρέπει στους ανθρώπους να <strong><em>απολαμβάνουν</em></strong> τη <strong><em>μουσική</em></strong> και τη <strong><em>συζήτηση</em></strong> χωρίς ένταση.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Τι προσφέρουμε</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8aea621ce_e65177c598c0c9820abde209555dc0d0cropped2-pxbee-minitools-enhance-20251120175811.jpg"
                alt="Professional audio assessment"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Επιτόπια ακουστική αξιολόγηση</h3>
                <p className="text-lg text-black/70">Ακούμε τη μουσική στον χώρο από κάθε σημείο και εντοπίζουμε προβλήματα κάλυψης και καθαρότητας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Προτάσεις AV προσαρμοσμένες στον χώρο</h3>
                <p className="text-lg text-black/70">Σαφές πλάνο για ηχεία, ζώνες και έλεγχο, με βάση τη διάταξη, το budget και την αισθητική.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Συντονισμένη εγκατάσταση</h3>
                <p className="text-lg text-black/70">Διαχείριση εξοπλισμού και εγκατάστασης σε συνεργασία με AV partners.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ρύθμιση και εκπαίδευση</h3>
                <p className="text-lg text-black/70">Τελική ρύθμιση σε πραγματικές συνθήκες και καθοδήγηση της ομάδας για καθημερινή χρήση.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ιδανικό για</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <Link to={createPageUrl("music-for-restaurants-and-bars")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Restaurants & Bars">Εστιατόρια & Bar</Link>
                  <span>Όπου η συζήτηση δυσκολεύεται λόγω της έντασης.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-hotels-and-resorts")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Hotels & Resorts">Ξενοδοχεία & Θέρετρα</Link>
                  <span>Lobby, πισίνες και εστιατόρια με άνισο ήχο.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-retail-stores")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Retail Stores">Καταστήματα λιανικής</Link>
                  <span>Σημεία με «νεκρές» ζώνες ή υπερβολική ένταση.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-wellness-and-gyms")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Wellness & Gyms">Χώρους ευεξίας</Link>
                  <span>Καθαρός ήχος για μαθήματα χωρίς σκληρό ήχο.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Χώρους</span>
                  <span>Που έχουν επενδύσει στο design αλλά ο ήχος υποβαθμίζει την εμπειρία.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fb6a2cfcc_0acfe1722c9ef9946388029ddb720290CROPPED.jpg"
                alt="Audio optimization for venues"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Designed for clarity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ήχος σχεδιασμένος για καθαρότητα</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b00d7c94c_aiease_1763654314701.jpg"
                alt="Audio clarity and coverage"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ισορροπημένη κάλυψη, χωρίς επιπλέον ένταση</h3>
                <p className="text-lg text-black/70">Οι επισκέπτες κινούνται άνετα, συνομιλούν φυσικά και θυμούνται την ατμόσφαιρα, όχι τη δυνατή μουσική.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ας αναβαθμίσουμε τον ήχο του χώρου σας</h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Χρειάζεστε ήχο αντάξιο του σχεδιασμού σας;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Book your audio assessment">
                Κλείστε μια ακουστική αξιολόγηση
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Συνδυάστε την Ακουστική αναβάθμιση με τις <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Επιμελημένες playlists</Link> και τον <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Σχεδιασμό ηχητικής ταυτότητας</Link> για ολοκληρωμένο αποτέλεσμα.
          </p>
        </div>
      </section>
    </div>
  );
}