import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const AnimatedButton = ({ children, className = "", ...props }) =>
<Button
  variant="outline"
  className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
  {...props}>

    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>;


export default function Industries() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Industries | SensEar";

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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Επιμελημένη μουσική<br />προσαρμοσμένη στον κλάδο σας
              </h1>
              <p className="text-lg md:text-xl text-black/60 leading-relaxed slide-up-2">
                Γιατί διαφορετικοί χώροι απαιτούν διαφορετικές ηχητικές εμπειρίες.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/652c5c5b3_a10ba3fc4_-cropped.jpg" 
                      alt="Industries" 
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
                Η κατάλληλη ατμόσφαιρα<br />για κάθε χώρο
              </h2>
            
              <div className="w-full text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  Ξενοδοχεία, εστιατόρια, καταστήματα, χώροι ευεξίας και πολιτισμού έχουν διαφορετικές ανάγκες, διαμορφωμένες από τον τρόπο που οι άνθρωποι κινούνται, νιώθουν και αλληλεπιδρούν.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  Η σωστή μουσική μετατρέπει τους χώρους σε εμπειρίες.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Your Industry, Our Expertise Section */}
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Ο κλάδος σας, η εξειδίκευσή μας</h2>
            <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">Προσεκτικές μουσικές επιλογές, προσαρμοσμένες στις ανάγκες του δικού σας κόσμου.</p>
          </div>

          <div className="space-y-20">
            {/* Hotels & Resorts */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8b8c94c7_e0dd5f695_13e97d3def8d47a1efe25c37e0f29eb211.jpg"
                    alt="Hotels & Resorts"
                    className="w-full h-auto object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">Ξενοδοχεία & Θέρετρα</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Soundtracks για κάθε ώρα και χώρο</p>
                
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Μουσική που συνοδεύει ολόκληρο το ταξίδι του επισκέπτη, από τον πρώτο καφέ έως το βραδινό ποτό, σε lobby, πισίνα, spa, εστιατόριο και bar.</p>
                </div>
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Αποτέλεσμα:<br/>Η ατμόσφαιρα ενισχύει όσα ήδη αγαπούν οι επισκέπτες στο κατάλυμά σας.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("music-for-hotels-and-resorts")} aria-label="Music for Hotels & Resorts">
                    <AnimatedButton className="w-full sm:w-auto">
                      Δημιουργήστε τη δική σας υπογραφή ήχου
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Restaurants & Bars */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">Εστιατόρια & Bar</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Ο αόρατος maître d’</p>
                
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ήχος που ακολουθεί τον ρυθμό του service, ενθαρρύνει τη συζήτηση και κρατά τους επισκέπτες περισσότερο.</p>
                </div>
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Αποτέλεσμα:<br/>Η ροή του service γίνεται πιο ομαλή και οι επισκέπτες ζουν την εμπειρία μέχρι τέλους.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("music-for-restaurants-and-bars")} aria-label="Music for Restaurants & Bars">
                    <AnimatedButton className="w-full sm:w-auto">
                      Αναβαθμίστε την ατμόσφαιρα του χώρου σας
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/361d4fa4c_Marmelo-by-Mitchell-Eades-Issue-18-Feature-The-Local-Project-Image-2-cropped-.jpg"
                    alt="Restaurants & Bars"
                    className="w-full h-auto object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Events & Experiences - Moved up */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e61f3b993_efeae9e53_56bb71da7fa44cbf6f001204format-webpwidth-1440_wWzsf3qJ3dJMkxWN-11.jpg"
                    alt="Events & Experiences"
                    className="w-full h-auto object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">Εκδηλώσεις & Εμπειρίες</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Χορογραφημένη ακρίβεια για αξέχαστες στιγμές</p>
                
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Μουσική με ακριβή χρονισμό που πλαισιώνει κάθε φάση της εκδήλωσης.</p>
                </div>
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Αποτέλεσμα:<br/>Ομαλές μεταβάσεις που οι επισκέπτες δεν προσέχουν, αλλά οι διοργανωτές εκτιμούν.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("music-for-events-and-experiences")} aria-label="Music for Events">
                    <AnimatedButton className="w-full sm:w-auto">
                      Τελειοποιήστε την επόμενη εκδήλωσή σας
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Retail Stores */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">Καταστήματα Λιανικής</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Ηχητικά τοπία που ενθαρρύνουν την ανακάλυψη</p>
                
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Μουσική που καθοδηγεί τη διαδρομή του πελάτη και βοηθά τον χώρο να αφηγηθεί την ιστορία του μέσα από τον ήχο.</p>
                </div>
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Αποτέλεσμα:<br/>Οι επισκέπτες κινούνται πιο αργά, εξερευνούν περισσότερο και νιώθουν καθοδήγηση, όχι πίεση.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("music-for-retail-stores")} aria-label="Music for Retail Stores">
                    <AnimatedButton className="w-full sm:w-auto">
                      Μεταμορφώστε την εμπειρία αγορών
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/edb073e85_upscalemedia-transformed.jpg"
                    alt="Retail Stores"
                    className="w-full h-auto object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Wellness Centers - previously Wellness & Gyms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ace50e7b5_E_HryzeWYAUw8vR-2CROPPED.jpg"
                    alt="Wellness Centers"
                    className="w-full h-auto object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">Wellness & Γυμναστήρια</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Το ιδανικό soundtrack για κάθε δραστηριότητα</p>
                
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ρυθμίζουμε τη μουσική ώστε να υποστηρίζει κάθε πρακτική και επίπεδο έντασης, δίνοντας σε κάθε χώρο τη σωστή αίσθηση.</p>
                </div>
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Αποτέλεσμα:<br/>Η ατμόσφαιρα γίνεται μέρος της συνολικής εμπειρίας άσκησης ή χαλάρωσης.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("music-for-wellness-and-gyms")} aria-label="Music for Wellness & Gyms">
                    <AnimatedButton className="w-full sm:w-auto">
                      Βελτιστοποιήστε τον χώρο ευεξίας σας
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Art, Museums & Fashion */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-4">Τέχνη, Μουσεία & Μόδα</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Διακριτικές ατμόσφαιρες που ενισχύουν την εμπειρία</p>
                
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Ηχητικά τοπία που υποστηρίζουν το έργο χωρίς να το επισκιάζουν και ενισχύουν τη συγκέντρωση και την αισθητική εμπειρία.</p>
                </div>
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Αποτέλεσμα:<br/>Οι επισκέπτες παραμένουν περισσότερο, απορροφούν βαθύτερα και μοιράζονται την εμπειρία τους.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("music-for-art-museums-and-fashion")} aria-label="Music for Art, Museums & Fashion">
                    <AnimatedButton className="w-full sm:w-auto">
                      Πλαισιώστε τις εκθέσεις σας
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e8678d8d0_ec55631fd_204f0aeb3f27e1d66d7e764876f0fa4a11.jpg"
                    alt="Art, Museums & Fashion"
                    className="w-full h-auto object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What connects these worlds */}
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Τι συνδέει όλους αυτούς τους κόσμους</h2>
            <p className="text-xl text-black/60 font-medium mb-12 max-w-3xl mx-auto">Έξι διαφορετικοί κλάδοι, με κοινές προκλήσεις που λύνονται μέσω της μουσικής:</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c66f2842d_a6bc0a060_car-21.png"
                  alt="Connected worlds"
                  className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-4 mb-8">
                {[
                  <span key="1">Η ενέργεια του χώρου αλλάζει μέσα στη μέρα</span>,
                  <span key="2">Πολλοί χώροι ή σημεία που πρέπει να “δένουν” μεταξύ τους</span>,
                  <span key="3">Οι ομάδες πρέπει να εστιάζουν στο service, όχι στις playlists</span>,
                  <span key="4">Η εμπειρία πρέπει να μένει στη μνήμη και να φέρνει επιστροφή</span>,
                  <span key="5">Χρειάζεται να γνωρίζετε αν η μουσική λειτουργεί πραγματικά για τον χώρο σας</span>
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-xl font-medium text-black/80 italic">
                Διαφορετικά περιβάλλοντα, ίδια αλήθεια:<br/>ο στρατηγικός ήχος τα ενώνει όλα.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Your Sound Potential */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ανακαλύψτε τις δυνατότητες του ήχου σας</h2>
          <p className="text-xl text-black/60 mb-12 max-w-3xl mx-auto">
            Κάθε χώρος έχει ανεκμετάλλευτο δυναμικό ατμόσφαιρας. Ας δούμε πώς ο στρατηγικός ήχος μπορεί να το αναδείξει, σύμφωνα με τους στόχους σας.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto h-14" aria-label="Ανακαλύψτε τη στρατηγική ήχου σας">
                Ανακαλύψτε τη στρατηγική ήχου σας
              </AnimatedButton>
            </Link>
            
            <Link to={createPageUrl("Services")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                Δείτε τις υπηρεσίες μας
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}