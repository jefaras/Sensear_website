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

export default function BackgroundMusicShapesCustomerBehavior() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const blogTitle = "Στρατηγική ήχου που πουλά: πώς η μουσική υπόκρουση διαμορφώνει τη συμπεριφορά | SensEar Blog";
    document.title = blogTitle;

    const description = "Η επιτόπια έρευνα δείχνει πώς η στρατηγικά επιλεγμένη μουσική επηρεάζει τον χρόνο παραμονής, τον ρυθμό κίνησης και τις δαπάνες σε περιβάλλοντα λιανικής και φιλοξενίας.";
    const pageUrl = 'https://sensear.music/background-music-shapes-customer-behavior';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e9f53224a_ladies.png';
    const blogPostingHeadline = "Στρατηγική ήχου που πουλά: πώς η μουσική υπόκρουση διαμορφώνει τη συμπεριφορά";
    const publishedDate = "2025-03-08";

    const metaDescription = document.querySelector('meta[name="description"]');
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
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
      { property: 'og:title', content: blogTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishedDate}T09:00:00Z` },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Research' },
      { property: 'og:locale', content: 'el_GR' }
    ];

    ogTags.forEach(tagData => {
      let metaTag = document.querySelector(`meta[property="${tagData.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tagData.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tagData.property);
        metaTag.setAttribute('content', tagData.content);
        document.head.appendChild(metaTag);
      }
    });

    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@SensEarResearch' },
      { name: 'twitter:creator', content: '@SensEarResearch' },
      { name: 'twitter:title', content: blogTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:url', content: pageUrl }
    ];

    twitterTags.forEach(tagData => {
      let metaTag = document.querySelector(`meta[name="${tagData.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tagData.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tagData.name);
        metaTag.setAttribute('content', tagData.content);
        document.head.appendChild(metaTag);
      }
    });

    let langMeta = document.querySelector('meta[name="language"]');
    if (langMeta) {
      langMeta.setAttribute('content', 'el');
    } else {
      langMeta = document.createElement('meta');
      langMeta.name = 'language';
      langMeta.content = 'el';
      document.head.appendChild(langMeta);
    }

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
        "headline": blogPostingHeadline,
        "description": description,
        "image": imageUrl,
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
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl
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
            "name": blogPostingHeadline,
            "item": pageUrl
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Section: Sound strategy that sells">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Στρατηγική ήχου που πουλά:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">πώς η μουσική υπόκρουση διαμορφώνει τη συμπεριφορά</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Η επιτόπια έρευνα δείχνει πώς η στρατηγικά επιλεγμένη μουσική επηρεάζει τον χρόνο παραμονής, τον ρυθμό κίνησης και τις δαπάνες σε περιβάλλοντα λιανικής και φιλοξενίας.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-03-08">8 Μαρτίου 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Ομάδα Έρευνας</span>
                </div>
                <div className="text-black/50">
                  <span>8 λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6d2ec8236_g-cb-1-1.jpg" 
                      alt="Retail environment showing background music influence on shopping behavior" 
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
            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Γρήγορη σύνοψη</h2>

            <p className="text-xl text-black/80 leading-relaxed mb-8">
              Το σωστό soundtrack μπορεί να κρατήσει τους ανθρώπους περισσότερο και να αυξήσει τη δαπάνη τους. Τα αποτελέσματα, όμως, εξαρτώνται από το ποιοι βρίσκονται στον χώρο και από το είδος της επιχείρησης. Τα δεδομένα πεδίου με πραγματικούς καταναλωτές δείχνουν σαφείς αυξήσεις σε χρόνο παραμονής και αγορές τις ημέρες με μουσική, με διαφορετικά μοτίβα ανά φύλο και τύπο καταστήματος.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Αντίστοιχες έρευνες σε εστιατόρια και σούπερ μάρκετ καταγράφουν παρόμοιες επιδράσεις, που συνδέονται με το τέμπο και την επιλογή τραγουδιών.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Γιατί ο ήχος αλλάζει τη συμπεριφορά</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Τα ερεθίσματα ενός χώρου επηρεάζουν συναισθήματα όπως η ευχαρίστηση και η εγρήγορση. Αυτά, με τη σειρά τους, οδηγούν σε συμπεριφορές προσέγγισης ή αποφυγής, όπως η εξερεύνηση, η επικοινωνία με το προσωπικό ή η αγορά. Αυτή η διαδρομή περιγράφεται στο γνωστό μοντέλο PAD της περιβαλλοντικής ψυχολογίας.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <h2 className="text-3xl font-bold text-black mb-6">Τι έδειξαν πραγματικά τα δεδομένα πεδίου</h2>

              <ul className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Περισσότερος χρόνος και μεγαλύτερη δαπάνη με μουσική.</strong> Σε πραγματικά καταστήματα, οι πελάτες παρέμεναν περισσότερο και αγόραζαν περισσότερα όταν υπήρχε μουσική, σε σύγκριση με περιόδους σιωπής.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Το τέμπο καθοδηγεί τον ρυθμό.</strong> Πιο αργά κομμάτια επιβραδύνουν την κίνηση και μπορούν να αυξήσουν το καλάθι αγορών ή τις παραγγελίες ποτών, ενώ πιο γρήγορα κομμάτια επιταχύνουν τον ρυθμό όταν απαιτούνται γρήγορες εναλλαγές.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Η καταλληλότητα υπερισχύει της γενικής λύσης.</strong> Τα αποτελέσματα διαφέρουν ανά κοινό και περιβάλλον. Μελέτες δείχνουν ότι η επιτυχία εξαρτάται από την ποιότητα της εφαρμογής και το πλαίσιο, όχι απλώς από το αν «παίζει μουσική ή όχι».</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Η αναμονή μοιάζει μικρότερη με τη σωστή μουσική.</strong> Όταν ο ήχος ταιριάζει στον χώρο, μειώνεται η αίσθηση αναμονής και ενισχύεται η πιο φιλική συμπεριφορά σε ουρές και lobby.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Διαφορετικοί άνθρωποι, διαφορετικές αντιδράσεις.</strong> Σε δοκιμές λιανικής, οι γυναίκες συχνά προτιμούσαν καθόλου μουσική ή πιο αργό τέμπο, ενώ οι άνδρες συχνότερα ευνοούσαν τη μουσική και ταχύτερους ρυθμούς. Οι βραχυπρόθεσμες πωλήσεις μπορεί να αυξηθούν ακόμη κι αν κάποιοι επισκέπτες απολαμβάνουν λιγότερο την εμπειρία, κάτι που μπορεί να επηρεάσει τις επαναλαμβανόμενες επισκέψεις αν το μείγμα δεν προσαρμοστεί στο κοινό.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ισχύει αυτό και εκτός λιανικής;</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Ναι. Παρότι τα πειράματα έγιναν σε κατάστημα ηλεκτρονικών και σούπερ μάρκετ, η ίδια συναισθηματική διαδρομή ισχύει σε πολλούς χώρους. Προηγούμενες έρευνες δείχνουν παρόμοιες επιδράσεις σε εστιατόρια και άλλους χώρους υπηρεσιών, όταν η μουσική ταιριάζει στη στιγμή και στο κοινό.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Το checklist της SensEar</h2>
            <h3 className="text-xl font-bold text-black mb-4">Γρήγορη εφαρμογή για λιανική, bar και εστιατόρια</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              Χρησιμοποιήστε το για ασφαλείς δοκιμές χωρίς να θυσιάσετε την εμπειρία επισκεπτών.
            </p>

            <ol className="space-y-6 text-black/80 list-decimal list-inside">
              <li>
                <strong className="text-black">Θέστε ξεκάθαρους στόχους</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Λιανική: αύξηση χρόνου παραμονής και καλαθιού ή επιτάχυνση σύντομων επισκέψεων</li>
                  <li>Bar: περισσότερες παραγγελίες ανά επισκέπτη ή ταχύτερη εναλλαγή τραπεζιών</li>
                  <li>Εστιατόρια: έλεγχος ρυθμού καθισμάτων και upsells χωρίς αύξηση έντασης</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Επιλέξτε τέμπο ανά στόχο</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Για εξερεύνηση και περιήγηση: πιο αργό</li>
                  <li>Για γρήγορη κίνηση: πιο γρήγορο</li>
                  <li>Πάντα δοκιμάστε ένα μεσαίο σετ ως σημείο αναφοράς</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Ταιριάξτε κοινό και ώρα</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Πρωινές ώρες, μεγαλύτερες ηλικίες ή οικογένειες: πιο ήπια, πιο αργά</li>
                  <li>Βραδινές ώρες και νεότερο κοινό: λίγο πιο γρήγορα</li>
                  <li>Αν το κοινό είναι κυρίως γυναικείο, δοκιμάστε πιο ήσυχα ή αργά σετ. Αν είναι κυρίως ανδρικό, πιο ενεργητικά. Επαληθεύστε με δεδομένα κίνησης.</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Κρατήστε άνετη ένταση</strong>
                <p className="ml-6 mt-2">Οι άνθρωποι πρέπει να μιλούν χωρίς να υψώνουν τη φωνή. Αν το προσωπικό κουράζεται μέχρι το μεσημέρι, η ένταση είναι υψηλή.</p>
              </li>
              <li>
                <strong className="text-black">Κρατήστε το ύφος στο brand</strong>
                <p className="ml-6 mt-2">Η καλή εφαρμογή στο brand υπερισχύει των απλών ρυθμίσεων BPM.</p>
              </li>
              <li>
                <strong className="text-black">Μετρήστε βραχυπρόθεσμα και μακροπρόθεσμα</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Βραχυπρόθεσμα: πωλήσεις ανά επισκέπτη, χρόνος παραμονής, παραγγελίες ανά τραπέζι</li>
                  <li>Μακροπρόθεσμα: ικανοποίηση, κριτικές, επαναληψιμότητα, feedback προσωπικού</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Δοκιμάστε και ρυθμίστε</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>A/B δοκιμές ανά ζώνη ώρας για δύο εβδομάδες</li>
                  <li>Αλλάζετε μία μεταβλητή κάθε φορά: τέμπο, ένταση ή playlist</li>
                  <li>Κρατήστε το καλύτερο και επαναξιολογήστε μηνιαία</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Έτοιμοι να δουλέψει κάθε κομμάτι πιο έξυπνα;</h2>

            <p className="text-black/80 leading-relaxed">
              Κλείστε ένα Sound Audit της SensEar για να αξιολογήσουμε τον χώρο σας, να χαρτογραφήσουμε το κοινό ανά ώρα και να σχεδιάσουμε playlists που αυξάνουν τις πωλήσεις, διατηρώντας άνετη την εμπειρία.
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
              Κλείστε ένα Sound Audit
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}