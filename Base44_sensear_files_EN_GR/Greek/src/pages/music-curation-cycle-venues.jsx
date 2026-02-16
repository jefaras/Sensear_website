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

export default function MusicCurationCycleVenues() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "Ο κύκλος της μουσικής επιμέλειας: ανάλυση, βελτιστοποίηση και εξέλιξη | SensEar blog";
    
    const description = "Πώς η συνεχής βελτιστοποίηση της μουσικής επιμέλειας αναβαθμίζει την ατμόσφαιρα ενός χώρου, μέσα από στρατηγικές βασισμένες σε δεδομένα.";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
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

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'el');
    } else {
      languageTag = document.createElement('meta');
      languageTag.setAttribute('http-equiv', 'content-language');
      languageTag.content = 'el';
      document.head.appendChild(languageTag);
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

    // Add googlebot specific tag
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
      canonicalLink.setAttribute('href', 'https://sensear.music/music-curation-cycle-venues');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/music-curation-cycle-venues';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png' },
      { property: 'og:url', content: 'https://sensear.music/music-curation-cycle-venues' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: '2025-01-15T09:00:00Z' },
      { property: 'article:modified_time', content: '2025-01-15T09:00:00Z' },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Strategy' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png' },
      { name: 'twitter:url', content: 'https://sensear.music/music-curation-cycle-venues' },
      { name: 'twitter:creator', content: '@SensEarMusic' },
      { name: 'twitter:site', content: '@SensEarMusic' }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        document.head.appendChild(meta);
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
        "headline": "Ο κύκλος της μουσικής επιμέλειας: ανάλυση, βελτιστοποίηση και εξέλιξη",
        "description": description,
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png",
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
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sensear.music/music-curation-cycle-venues"
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
            "name": "Blog",
            "item": "https://sensear.music/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ο κύκλος της μουσικής επιμέλειας: ανάλυση, βελτιστοποίηση και εξέλιξη",
            "item": "https://sensear.music/music-curation-cycle-venues"
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Ο κύκλος της μουσικής επιμέλειας">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Ο κύκλος της μουσικής επιμέλειας:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">ανάλυση, βελτιστοποίηση και εξέλιξη</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Πώς η συνεχής βελτιστοποίηση της μουσικής επιμέλειας αναβαθμίζει την ατμόσφαιρα ενός χώρου, μέσα από στρατηγικές βασισμένες σε δεδομένα.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-01-15">15 Ιανουαρίου 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Ομάδα SensEar</span>
                </div>
                <div className="text-black/50">
                  <span>5 λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a730d7c9f_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-02.jpg" 
                      alt="Data analytics for music curation optimization and performance tracking" 
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
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Αναλυτικά δεδομένα για τη βελτιστοποίηση και την απόδοση της μουσικής</h2>
            <p className="text-black/80 leading-relaxed mb-6">
              Η μουσική είναι κάτι περισσότερο από ατμόσφαιρα. Το σωστό κομμάτι, τη σωστή στιγμή, μπορεί να αλλάξει ριζικά το πώς βιώνεται ένας χώρος. Στο lobby, ήρεμες επιλογές με μεσαίο tempo διευκολύνουν τις αφίξεις και μειώνουν την ακουστική κόπωση (<a href="https://www.sciencedirect.com/science/article/pii/S0969698923002345" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>). Στον χώρο εστίασης, σταθερός ρυθμός υποστηρίζει την άνετη συζήτηση και τη ροή του service (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>). Σε πιο βραδινές ώρες, αυξημένη ενέργεια και tempo κρατούν τους επισκέπτες ενεργούς περισσότερο και ενθαρρύνουν την παραμονή (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Στη SensEar, αυτές οι μεταβάσεις σχεδιάζονται συνειδητά. Για χώρους που δίνουν σημασία στην εμπειρία επισκέπτη και στη φωνή του brand, η επιμελημένη μουσική ενισχύει την ηχητική ταυτότητα, αυξάνει τον χρόνο παραμονής και υποστηρίζει τις επαναλαμβανόμενες επισκέψεις.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Η επιμέλεια είναι κύκλος, όχι checkbox</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Η ποιοτική μουσική επιμέλεια δεν είναι ποτέ «βάζω και ξεχνάω». Ξεκινά με το λανσάρισμα και συνεχίζεται με μέτρηση και βελτίωση. Αναλύουμε την απόδοση τακτικά, αφαιρούμε κομμάτια που κουράζουν ή παραλείπονται και προσθέτουμε νέο υλικό που ταιριάζει στο κοινό σας. Σε συγκεκριμένα περιβάλλοντα, πιο αργοί ρυθμοί αυξάνουν τον χρόνο παραμονής και τη δαπάνη (<a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>). Στα εστιατόρια, η πιο αργή μουσική έχει συσχετιστεί με μεγαλύτερη παραμονή και περισσότερες παραγγελίες, ενώ οι γρηγορότεροι ρυθμοί μπορούν να επιταχύνουν την εναλλαγή τραπεζιών όταν χρειάζεται (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>).
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Οι άνθρωποι μέσα στο σύστημα</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Οι επιμελητές μας είναι μουσικοί, DJs και εθνομουσικολόγοι με εμπειρία σε δισκογραφικές, ραδιόφωνο, κλασικές σκηνές και τεχνολογία. Περνούν χρόνο στον χώρο σας για να κατανοήσουν τη ροή του service και τους καθημερινούς ρυθμούς. Δοκιμάζουμε πάντα στο πραγματικό περιβάλλον:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black/80 leading-relaxed mb-8">
              <li>ρυθμίζουμε tempo σε fitness studios για να επιβεβαιώσουμε τις καμπύλες έντασης των μαθημάτων (<a href="https://www.sciencedirect.com/science/article/pii/S1469029224000554" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>)</li>
              <li>παρακολουθούμε πλήρες dinner service για να ελέγξουμε τα ενεργειακά arcs των ωρών αιχμής (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>)</li>
              <li>αξιολογούμε ήσυχες λίστες σε spa ώστε να αποφεύγεται η ακουστική κόπωση (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>)</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Επίκαιρη μουσική. Σχετική εμπειρία.</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Ό,τι λειτουργεί σήμερα μπορεί να ακούγεται ξεπερασμένο σε λίγους μήνες. Η κουλτούρα κινείται, τα γούστα αλλάζουν. Όταν η μουσική ευθυγραμμίζεται με πολιτισμικά συμφραζόμενα, μπορεί να επηρεάζει και τις επιλογές. Για παράδειγμα, δοκιμές στο retail έδειξαν ότι η γαλλική μουσική αύξησε την επιλογή γαλλικών κρασιών (<a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>). Η σωστή επιμέλεια βασίζεται στην παρακολούθηση τάσεων και αντιδράσεων σε πραγματικό χρόνο, όχι μόνο σε στατικούς αλγορίθμους.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Η τέχνη και η επιστήμη</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Κάθε set διαμορφώνεται με αίσθηση αλλά και με δεδομένα. Αναλύουμε tempo, ένταση, cadence και BPM ώστε να ταιριάζουν στη δυναμική του χώρου. Η μουσική επηρεάζει και την αντίληψη του χρόνου. Έρευνες στο retail δείχνουν ότι μπορεί να αλλάξει τόσο τον αντιλαμβανόμενο όσο και τον πραγματικό χρόνο παραμονής, επηρεάζοντας την εμπειρία και τη δαπάνη (<a href="https://rybn.org/ANTI/ADMXI/documentation/ALGORITHM_DOCUMENTATION/HARMONY_OF_THE_SPEARS/BACKGROUND_MUSIC_STUDIES/EFFECT_ON_CONSUMPTION/2000_The_Effects_of_Music_in_a_Retail_Setting_on_Real_and_Perceived_Shopping_Times.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Fitness studios:</strong> Σχεδιάζουμε build-ups, κορυφώσεις και αποκατάσταση. Ταχύτεροι ρυθμοί συνδέονται με υψηλότερη ένταση και καλύτερη αντίληψη προσπάθειας (<a href="https://www.sciencedirect.com/science/article/pii/S1469029224000554" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>) (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Εστιατόρια & bar:</strong> Χρησιμοποιούμε πιο αργά tempo για μεγαλύτερη παραμονή όταν το επιθυμούμε και αυξάνουμε τον ρυθμό σε ώρες αιχμής (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Spa & lounge χώροι:</strong> Ήπιες εισαγωγές, σταθερή μέση και ήρεμα κλεισίματα για διατήρηση της χαλάρωσης χωρίς να «νεκρώνει» ο χώρος (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              <strong>Retail & χώροι τέχνης:</strong> Ευθυγραμμίζουμε όλα τα ερεθίσματα. Όταν άρωμα και μουσική έχουν παρόμοιο επίπεδο διέγερσης, η αξιολόγηση του χώρου βελτιώνεται αισθητά (<a href="https://www.sciencedirect.com/science/article/pii/S0022435901000422" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πηγή</a>). Δείτε μια δημοσιευμένη προδημοσίευση <a href="https://www.researchgate.net/profile/Jochen-Wirtz/publication/222542870_Congruency_of_Scent_and_Music_as_a_Driver_of_In-Store_Evaluations_and_Behavior/links/59f47c0a458515547c21c2be/Congruency-of-Scent-and-Music-as-a-Driver-of-In-Store-Evaluations-and-Behavior.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">εδώ για εύκολη πρόσβαση</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Τι προσφέρει η SensEar</h2>

            <ul className="list-disc list-inside space-y-2 text-black/80 leading-relaxed mb-8">
              <li>Μουσική που εξελίσσεται μαζί με το κοινό και τις ώρες της ημέρας</li>
              <li>Ειδικούς που δοκιμάζουν τον ήχο μέσα στη πραγματική ροή του service</li>
              <li>Συχνές ενημερώσεις που κρατούν τη μουσική φρέσκια και πολιτισμικά επίκαιρη</li>
              <li>Ισορροπία δεδομένων και έμπειρου γούστου που ξεπερνά τις λύσεις «μία για όλους»</li>
            </ul>

            <p className="text-black/80 leading-relaxed">
              Η μουσική αλλάζει το πώς οι άνθρωποι κινούνται, συνδέονται και θυμούνται. Εμείς κάνουμε αυτή τη δύναμη μέρος της ταυτότητας του χώρου σας — και τη βελτιώνουμε, κύκλο με τον κύκλο. Θέλετε να αναβαθμίσετε τη στρατηγική ήχου του χώρου σας; <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">Επικοινωνήστε μαζί μας</Link>.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Επιστροφή στο blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Ξεκινήστε το ταξίδι στην μουσική επιμέλεια
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}