import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 h-16 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden flex items-center justify-center ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function WhatExactlyDoesMusicCuratorDo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "Τι ακριβώς κάνει ένας music curator; | SensEar Blog";
    
    const description = "Οι music curators σχεδιάζουν το soundtrack ενός brand. Μάθετε πώς η SensEar μετατρέπει τη στρατηγική σε ήχο για λιανική, φιλοξενία και εμπειρίες.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
    const localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'el_GR');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'el_GR';
      document.head.appendChild(meta);
    }

    const languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'el');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'el';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'el';

    // Add robots meta tag - BLOG ARTICLE: index, follow
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

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/what-exactly-does-music-curator-do');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/what-exactly-does-music-curator-do';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png' },
      { property: 'og:url', content: 'https://sensear.music/what-exactly-does-music-curator-do' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: '2025-01-10T09:00:00Z' },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Education' }
    ];

    ogTags.forEach(tag => {
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

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png' }
    ];

    twitterTags.forEach(tag => {
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

    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music",
        "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
        "sameAs": [
          "https://www.facebook.com/61575909304249/",
          "https://www.instagram.com/sensear.music"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Τι ακριβώς κάνει ένας music curator;",
        "description": description,
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
        "author": {
          "@type": "Organization",
          "name": "SensEar"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SensEar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
          }
        },
        "datePublished": "2025-01-10",
        "dateModified": "2025-01-10"
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
            "name": "Blog",
            "item": "https://sensear.music/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Τι ακριβώς κάνει ένας music curator;",
            "item": "https://sensear.music/what-exactly-does-music-curator-do"
          }
        ]
      }
    ];

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Add scroll event listener for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3] min-h-screen">
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Τι ακριβώς κάνει ένας music curator;">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Τι ακριβώς κάνει</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">ένας music curator;</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Η προσέγγιση της SensEar στη μετατροπή της φωνής ενός brand σε ζωντανό ήχο
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-01-10">10 Ιανουαρίου 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Ομάδα SensEar</span>
                </div>
                <div className="text-black/50">
                  <span>6 λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c4ed33ff8_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-01.jpg" 
                      alt="Επαγγελματίας music curator σε διαδικασία σχεδιασμού ηχητικής ταυτότητας και στρατηγικών playlists" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <Card className="bg-white p-8 md:p-12 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Οι music curators σχεδιάζουν το soundtrack ενός brand</h2>
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              Δημιουργούν playlists και ηχητικά τοπία με σκοπό, που διαμορφώνουν το συναίσθημα, καθοδηγούν τη συμπεριφορά και κάνουν τους χώρους αξέχαστους. Σε αντίθεση με τους DJs, που παίζουν ζωντανά και «διαβάζουν» το κοινό τη στιγμή εκείνη, οι curators δουλεύουν πιο πριν: μεταφράζουν τη στρατηγική, το πλαίσιο και τα δεδομένα σε ηχητικά συστήματα ευθυγραμμισμένα με το brand, για λιανική, φιλοξενία, γραφεία, εκδηλώσεις και εγκαταστάσεις.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Πώς επιμελείται η SensEar: Τέσσερις πυλώνες σχεδιασμένου ήχου</h2>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">1. Συνεχής ακρόαση με πρόθεση</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              Οι curators βρίσκονται διαρκώς κοντά στην κουλτούρα, παρακολουθώντας νέες κυκλοφορίες και «κρυμμένα διαμάντια» από διαφορετικά είδη, περιοχές και διαθέσεις. Ο στόχος δεν είναι απλώς «καλή μουσική», αλλά μουσική που ταιριάζει. Κομμάτια των οποίων ο ρυθμός, η υφή, η ενέργεια και ο βαθμός οικειότητας ευθυγραμμίζονται με την εμπειρία που θέλετε να δημιουργήσετε.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Πίσω από την τέχνη υπάρχει και η επιστήμη: οι έντονες συναισθηματικές αντιδράσεις στη μουσική ενεργοποιούν το σύστημα ανταμοιβής του εγκεφάλου. Γι’ αυτό το σωστό κομμάτι, στη σωστή στιγμή, μπορεί να είναι μεταμορφωτικό.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">2. Διάγνωση brand & χώρου</h3>

            <p className="text-black/80 leading-relaxed mb-8">
              Πριν τοποθετηθεί έστω και ένα κομμάτι, αναλύουμε το πλαίσιο: όραμα, κοινό, ώρες λειτουργίας, ακουστικούς περιορισμούς και τις συμπεριφορές που θέλετε να ενισχύσετε (παραμονή, εξερεύνηση, αγορές, χαλάρωση, κοινωνικότητα). Σε ορισμένες περιπτώσεις, η επιμέλεια συνδυάζεται με ακουστικό σχεδιασμό και sound masking, ώστε οι συζητήσεις να παραμένουν ιδιωτικές χωρίς να χάνεται η άνεση του χώρου.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">3. Προσωποποιημένα συστήματα playlists, όχι έτοιμα templates</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              Ξεκινώντας από λευκό καμβά, σχεδιάζουμε προσαρμοστικές playlists που εκφράζουν την ηχητική σας ταυτότητα σε κάθε στιγμή της ημέρας: πρωινή ηρεμία, μεσημεριανή ενέργεια, ζεστασιά στο ηλιοβασίλεμα, μινιμαλισμό το βράδυ. Η μίξη ρυθμίζεται με βάση:
            </p>

            <ul className="space-y-3 text-black/80 mb-8 list-disc pl-6">
              <li>Οικειότητα vs. ανακάλυψη, για ισορροπία άνεσης και φρεσκάδας</li>
              <li>Ρυθμό, που επηρεάζει τον ρυθμό κίνησης και τη διάρκεια παραμονής</li>
              <li>Φωνητικά vs. οργανικά, για έλεγχο της συζήτησης και της συγκέντρωσης</li>
              <li>Αντιπροσώπευση και δικαιοσύνη στην επιλογή καλλιτεχνών</li>
            </ul>

            <p className="text-black/80 leading-relaxed mb-8">
              Λαμβάνουμε επίσης υπόψη την προσωπικότητα του brand. Σύντομα ηχητικά signatures ή sonic logos μπορούν να ενισχύσουν την αντίληψη αυθεντικότητας και χαρακτήρα, όταν «κουμπώνουν» με τα χαρακτηριστικά του brand.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">4. Διακυβέρνηση: φρέσκος, μετρήσιμος και συνεπής ήχος</h3>

            <p className="text-black/80 leading-relaxed mb-8">
              Η επιμέλεια δεν είναι «βάζω και ξεχνάω». Η SensEar εφαρμόζει data-driven επιμέλεια με εναλλαγές, εποχικότητα, ενίσχυση εκδηλώσεων και δοκιμές. Καταγράφουμε χαρακτηριστικά (ρυθμό, ενέργεια, διάθεση), παρακολουθούμε skips και feedback προσωπικού και ευθυγραμμίζουμε τον ήχο με KPIs του brand, όπως χρόνος παραμονής, NPS και μετατροπές. Τα σύγχρονα προγράμματα ηχητικής ταυτότητας μετρούν μνήμη, αναγνωρισιμότητα και συναισθηματική επίδραση και εξελίσσονται συνεχώς.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Γιατί λειτουργεί: τα δεδομένα πίσω από τον στρατηγικό ήχο</h2>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>• Ο ρυθμός επηρεάζει τον χρόνο και την κατανάλωση.</strong> Πιο αργή μουσική αυξάνει τον χρόνο παραμονής και τις πωλήσεις.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>• Το συναίσθημα είναι ο κινητήρας.</strong> Η μουσική επηρεάζει αξιόπιστα διάθεση και μνήμη.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>• Από τα jingles στα συστήματα.</strong> Ο ήχος πλέον μετριέται και εξελίσσεται όπως η οπτική ταυτότητα.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              <strong>• Η ιδιωτικότητα μετράει.</strong> Το sound masking βελτιώνει την άνεση χωρίς να «σκοτώνει» την ατμόσφαιρα.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Music curators vs. DJs</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Οι DJs παίζουν. Οι curators σχεδιάζουν. Οι curators δημιουργούν κλιμακούμενα, προσαρμοσμένα ηχητικά συστήματα που λειτουργούν καθημερινά, βασισμένα σε στρατηγική brand, ψυχοακουστική και μέτρηση.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Έτοιμοι να ακούσετε το brand σας;</h2>

            <p className="text-black/80 leading-relaxed">
              Είτε σχεδιάζετε έναν νέο χώρο, είτε ανανεώνετε την ηχητική σας ταυτότητα, είτε θέλετε μετρήσιμη απόδοση από τη μουσική στον χώρο, η SensEar μπορεί να σας βοηθήσει. Στρατηγική, επιμέλεια και διακυβέρνηση, όλα μαζί. Κάντε το δωρεάν <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">sonic audit</Link> σας σήμερα.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Επιστροφή στο Blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Αποκτήστε το δωρεάν Sonic Audit σας
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}