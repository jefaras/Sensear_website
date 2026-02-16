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

export default function ServiceEnvironmentShapesWaitTime() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const newTitle = "Πώς το περιβάλλον εξυπηρέτησης διαμορφώνει τον αντιλαμβανόμενο χρόνο αναμονής | SensEar blog";
    document.title = newTitle;
    
    const description = "Πώς η μουσική και ο περιβαλλοντικός σχεδιασμός μπορούν να μεταμορφώσουν την εμπειρία της αναμονής και να αυξήσουν την ικανοποίηση.";
    const ogImage = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1472df5cb_aiease_1760708154014.jpg';
    const pageUrl = 'https://sensear.music/service-environment-shapes-wait-time';
    const publishedDate = '2025-03-15T09:00:00Z';

    const updateOrCreateMeta = (name, content, isProperty = false) => {
      let meta;
      if (isProperty) {
        meta = document.querySelector(`meta[property="${name}"]`);
      } else {
        meta = document.querySelector(`meta[name="${name}"]`);
      }
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('description', description);
    updateOrCreateMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateOrCreateMeta('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

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
      { property: 'og:title', content: newTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:locale', content: 'el_GR' },
      { property: 'article:published_time', content: publishedDate },
      { property: 'article:modified_time', content: publishedDate },
      { property: 'article:author', content: 'SensEar' },
      { property: 'article:section', content: 'Research' }
    ];

    ogTags.forEach(tag => updateOrCreateMeta(tag.property, tag.content, true));

    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@sensearmusic' },
      { name: 'twitter:title', content: newTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(tag => updateOrCreateMeta(tag.name, tag.content));

    let languageMeta = document.querySelector('meta[http-equiv="content-language"]');
    if (languageMeta) {
      languageMeta.setAttribute('content', 'el');
    } else {
      languageMeta = document.createElement('meta');
      languageMeta.setAttribute('http-equiv', 'content-language');
      languageMeta.setAttribute('content', 'el');
      document.head.appendChild(languageMeta);
    }

    document.documentElement.lang = 'el';

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
        "headline": "Πώς το περιβάλλον εξυπηρέτησης διαμορφώνει τον αντιλαμβανόμενο χρόνο αναμονής",
        "description": description,
        "image": ogImage,
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
        "datePublished": "2025-03-15",
        "dateModified": "2025-03-15"
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
            "name": "Πώς το περιβάλλον εξυπηρέτησης διαμορφώνει τον αντιλαμβανόμενο χρόνο αναμονής",
            "item": "https://sensear.music/service-environment-shapes-wait-time"
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

    return () => {
      document.title = "SensEar Study";
      const tagsToRemove = [
        'meta[name="description"]',
        'meta[name="robots"]',
        'meta[name="googlebot"]',
        'link[rel="canonical"]',
        'meta[http-equiv="content-language"]',
        ...ogTags.map(tag => `meta[property="${tag.property}"]`),
        ...twitterTags.map(tag => `meta[name="${tag.name}"]`),
        'script[type="application/ld+json"]'
      ];

      tagsToRemove.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      document.documentElement.lang = '';
      window.removeEventListener("scroll", handleScroll);
    };
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Πώς το περιβάλλον εξυπηρέτησης διαμορφώνει τον αντιλαμβανόμενο χρόνο αναμονής">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Πώς το περιβάλλον εξυπηρέτησης</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">διαμορφώνει τον αντιλαμβανόμενο χρόνο αναμονής</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Πώς η μουσική και ο περιβαλλοντικός σχεδιασμός μπορούν να μεταμορφώσουν την εμπειρία της αναμονής και να αυξήσουν την ικανοποίηση.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-03-15">15 Μαρτίου 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Ομάδα Έρευνας</span>
                </div>
                <div className="text-black/50">
                  <span>7 λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ba5124b88_gemini-25-flash-image_professional_photo_of_1-1.jpg" 
                      alt="Service environment design using music to improve customer waiting experience" 
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
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Σχεδιασμός περιβάλλοντος εξυπηρέτησης με χρήση μουσικής για βελτίωση της εμπειρίας αναμονής</h2>
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              Η διαχείριση του πώς βιώνουν οι πελάτες την αναμονή μπορεί να είναι εξίσου σημαντική με τη μείωση του πραγματικού χρόνου. Μια σύντομη αναμονή για έναν υπεύθυνο μπορεί να μοιάζει μεγάλη για έναν επισκέπτη, αν το περιβάλλον λειτουργεί εις βάρος της εμπειρίας.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Γιατί η αναμονή μοιάζει μεγαλύτερη απ’ ό,τι είναι</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              <a href="https://www.researchgate.net/profile/Ale-Smidts/publication/247220346_Effects_of_waiting_on_the_satisfaction_with_the_service_Beyond_objective_time_measures/links/5cc83a9e4585156cd7bc091c/Effects-of-waiting-on-the-satisfaction-with-the-service-Beyond-objective-time-measures.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Οι πελάτες συχνά υπερεκτιμούν τον χρόνο που περίμεναν</a> και η ικανοποίηση μειώνεται όσο αυξάνεται ο αντιλαμβανόμενος χρόνος αναμονής. Οι παραδοσιακές λύσεις εστιάζουν στη λειτουργία και στη μείωση της ουράς, όμως <a href="https://www.researchgate.net/profile/Naveen-Donthu/publication/242337184_Closing_the_gap_between_perceived_and_actual_waiting_times_in_a_call_center_Results_from_a_field_study/links/64bff61a8de7ed28bac2b9e0/Closing-the-gap-between-perceived-and-actual-waiting-times-in-a-call_center-Results-from-a-field_study.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">έρευνες δείχνουν ότι το περιβάλλον και οι πληροφορίες κατά τη διάρκεια της αναμονής επηρεάζουν την ικανοποίηση</a>, πολλές φορές περισσότερο από μικρές διαφορές σε δευτερόλεπτα ή λεπτά.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Πώς το περιβάλλον διαμορφώνει την αντίληψη</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Το φυσικό και αισθητηριακό περιβάλλον επηρεάζει συναισθηματικές, γνωστικές και φυσιολογικές αντιδράσεις, οι οποίες καθορίζουν τις αξιολογήσεις και τη συμπεριφορά. <a href="https://eclass-demo.aueb.gr/modules/document/file.php/MISC418/Lecture5_Reading_Servicescapes.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Η έρευνα γύρω από το servicescape συνδέει αυτά τα αποτελέσματα με βασικές καταστάσεις ευχαρίστησης και διέγερσης</a>, που χρωματίζουν την αντίληψη του χρόνου και την ικανοποίηση.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl font-bold text-black mb-6">Οι περιβαλλοντικοί παράγοντες που κάνουν τη διαφορά</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-black mb-2">Ατμοσφαιρικά στοιχεία</h4>
                  <p className="text-black/70"><a href="https://journals.itb.ac.id/index.php/ajht/article/view/25753/7113" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Ο φωτισμός, η θερμοκρασία, η μουσική, οι οσμές και ο θόρυβος του περιβάλλοντος θέτουν τη βασική αισθητηριακή γραμμή</a> και μπορούν να μεταβάλουν τόσο την ικανοποίηση όσο και τον αντιλαμβανόμενο χρόνο αναμονής σε χώρους φιλοξενίας και λιανικής.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-2">Στοιχεία σχεδιασμού</h4>
                  <p className="text-black/70"><a href="https://www.sciencedirect.com/science/article/pii/S0278431918310430" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Τα χρώματα, η επίπλωση, η σήμανση και η χωρική διάταξη καθοδηγούν τη ροή και τις προσδοκίες</a>, επηρεάζοντας την προσοχή και το συναίσθημα κατά την αναμονή.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-2">Κοινωνικά στοιχεία</h4>
                  <p className="text-black/70">Η παρουσία άλλων έχει σημασία. <a href="https://philpapers.org/rec/PRUCRT" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Η παρουσία προσωπικού και άλλων επισκεπτών μπορεί να απαλύνει την εμπειρία</a>, ενώ η αναμονή μαζί με άλλους συχνά γίνεται πιο αποδεκτή όταν διαρκεί περισσότερο.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Πώς η μουσική αλλάζει τον αντιλαμβανόμενο χρόνο αναμονής</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              <a href="https://chaireomerdesserres.hec.ca/wp-content/uploads/2020/05/The-Impact-of-Music-on-Consumers-Reactions-to-Waiting-for-Services.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Η μουσική που δημιουργεί θετικό συναίσθημα τείνει να μειώνει τον αντιλαμβανόμενο χρόνο αναμονής</a>, ενώ η ακατάλληλη μουσική μπορεί να τον επιμηκύνει. Ο μηχανισμός συνδυάζει <a href="https://www.sciencedirect.com/science/article/pii/S1071581921001749" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">την απόσπαση της προσοχής, τη ρύθμιση της διάθεσης και τα αποτελέσματα του ρυθμού, που επηρεάζουν τον εσωτερικό μας «χρονόμετρο»</a>. Το τι λειτουργεί για κάθε κοινό και πλαίσιο απαιτεί δοκιμές και επαγγελματική επιμέλεια, καθώς <a href="https://www.sciencedirect.com/science/article/pii/S0022435997900166" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">οι αντιδράσεις διαφέρουν ανάλογα με το είδος, την ένταση και τον ρυθμό</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Πρακτικά βήματα για managers</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Θέστε τα ατμοσφαιρικά στοιχεία ως προτεραιότητα διαχείρισης. <a href="https://journals.itb.ac.id/index.php/ajht/article/view/25753/7113" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Ρυθμίστε φωτισμό, θερμοκρασία, ένταση και ρυθμό της μουσικής ανάλογα με τον χώρο και την ώρα της ημέρας</a> και επιβεβαιώστε τις επιλογές με feedback επισκεπτών και μετρήσεις. Κατανοήστε το συναισθηματικό προφίλ της μουσικής που επιλέγετε για το κοινό-στόχο σας και χρησιμοποιήστε <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70">playlists που ευθυγραμμίζονται με τη διάθεση και τον επιθυμητό ρυθμό</Link> για κάθε ζώνη και τύπο αναμονής.
            </p>

            <p className="text-black/80 leading-relaxed">
              Η σωστή μουσική δεν απλώς γεμίζει τη σιωπή. Βελτιώνει την εμπειρία αναμονής, μειώνει τον αντιλαμβανόμενο χρόνο και υποστηρίζει υψηλότερα επίπεδα ικανοποίησης. Εδώ ακριβώς η <Link to={createPageUrl("Services")} className="text-black underline hover:text-black/70">επαγγελματική μουσική επιμέλεια</Link> προσφέρει μετρήσιμη αξία σε <Link to={createPageUrl("Industries")} className="text-black underline hover:text-black/70">περιβάλλοντα εξυπηρέτησης</Link>.
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
              Μεταμορφώστε το περιβάλλον εξυπηρέτησής σας
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}