import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

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

export default function MusicForHotelsAndResorts() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Μουσική για ξενοδοχεία & θέρετρα | Sensear";
    
    // SEO Meta Tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Music for Hotels & Resorts designed to build atmosphere across spaces and time of day, with soundscapes guests feel & remember.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Scroll handler
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hotels & Resorts section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Μουσική για ξενοδοχεία & θέρετρα:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Ηχοτοπία για κάθε ώρα και χώρο</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Στοχευμένος ήχος που συμπληρώνει το service, τον σχεδιασμό και τη διάθεση του χώρου.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7aec5d264_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_p-1.jpg" 
                      alt="Luxury hotel resort with curated music ambiance" 
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
              Μουσική για<br />ολόκληρο το ταξίδι του επισκέπτη
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Η ατμόσφαιρα του ξενοδοχείου σας γίνεται <strong><em>αισθητή</em></strong> πριν από το interior design του.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Τα ηχητικά μας τοπία <strong><em>εμπλουτίζουν κάθε στιγμή</em></strong> της ημέρας σε όλους τους χώρους και γίνονται αναπόσπαστο μέρος της <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="underline hover:text-white/80 transition-colors">εμπειρίας φιλοξενίας</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Τι προσφέρουμε</h2>
            <p className="text-xl text-black/60 font-medium">Σχεδιασμός και υλοποίηση μουσικής για ξενοδοχεία</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4bc198c23_BHA1.png"
                alt="Hotel music implementation"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">24ωρος ηχητικός σχεδιασμός</h3>
                <p className="text-lg text-black/70">Μουσική που αλλάζει ρυθμό και ενέργεια κατά τη διάρκεια της ημέρας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Πολυζωνική συνοχή</h3>
                <p className="text-lg text-black/70">Διακριτά μουσικά θέματα για lobby, εστιατόρια, bar, spa και πισίνα, δεμένα με <Link to={createPageUrl("how-top-hospitality-brands-design-sound")} className="underline hover:text-black font-semibold">μία ενιαία ηχητική ταυτότητα</Link>.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ήχος ευθυγραμμισμένος με το brand</h3>
                <p className="text-lg text-black/70">Μουσικές επιλογές αποκλειστικά για το ξενοδοχείο σας, με χαρακτήρα και συνέπεια.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Κεντρική διαχείριση</h3>
                <p className="text-lg text-black/70">Η ομάδα σας εστιάζει στη φιλοξενία, ενώ εμείς φροντίζουμε για τη μουσική, τις ενημερώσεις και τη σωστή αδειοδότηση.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel music is ideal for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ιδανικό για</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Boutique ξενοδοχεία</span>
                  <span>Όπου η ατμόσφαιρα οδηγεί τη φήμη και τις συστάσεις.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Πολυτελή θέρετρα</span>
                  <span>Με πολλαπλούς χώρους που χρειάζονται ενιαία εμπειρία.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Business ξενοδοχεία</span>
                  <span>Με μετάβαση από συγκέντρωση σε κοινωνικότητα.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Ξενοδοχειακούς ομίλους</span>
                  <span>Με ανάγκη συνεπούς ήχου σε όλα τα σημεία.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Χώρους εκδηλώσεων</span>
                  <span>Για γάμους, retreats και συνέδρια.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image (Kept Terrace image) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b32503d17_wi-cltcw-westin-charlotte-dogwood-13256_Classic-Hor1.jpg"
                alt="Luxury hotel terrace with elegant atmosphere"
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
            {/* Left: Image (Kept Silver Ear image) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7ba13d3db_95c488ed9_silver-ear-ear-ring.jpg"
                alt="Silver ear sculpture representing listening and sonic branding"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Διαφορετική ενέργεια για κάθε ώρα & χώρο</h3>
                <p className="text-lg text-black/70">Σχεδιάζουμε μουσική που ακολουθεί τον ρυθμό του ξενοδοχείου κατά τη διάρκεια της ημέρας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ζώνες με χαρακτήρα, μία ενιαία ταυτότητα</h3>
                <p className="text-lg text-black/70">Δημιουργούμε διακριτά μουσικά θέματα που συνδέονται από μία αναγνωρίσιμη ηχητική ταυτότητα, αντί για τυχαίες playlists.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Μουσική που ταιριάζει στο brand</h3>
                <p className="text-lg text-black/70">Ζωντανεύουμε το brand σας με μουσικές επιλογές που «δένουν» με τον χώρο και το service και ακούγονται μοναδικά δικές σας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Κεντρικός έλεγχος αντί για αυτοσχέδιο DJing</h3>
                <p className="text-lg text-black/70">Αναλαμβάνουμε την αναπαραγωγή της μουσικής και την αδειοδότηση επαγγελματικής χρήσης, ώστε η ομάδα σας να εστιάζει στους επισκέπτες και όχι στην ένταση ή τα κομμάτια.</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Ακούστε τον ήχο του κλάδου στην πράξη</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Διαβάστε παραδείγματα και ακούστε δείγματα από χώρους φιλοξενίας.</p>
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
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Αναβαθμίστε την ατμόσφαιρα του ξενοδοχείου σας</h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Ας δούμε πώς η μουσική μπορεί να υποστηρίξει την εμπειρία των επισκεπτών σας και τη συνολική εικόνα του ξενοδοχείου.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Book a music consultation">
                Κλείστε μια μουσική αξιολόγηση
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Δείτε επίσης πώς οι <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Επιμελημένες playlists</Link> και ο <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Σχεδιασμός ηχητικής ταυτότητας</Link> λειτουργούν για ξενοδοχεία & θέρετρα.
          </p>
        </div>
      </section>
    </div>
  );
}