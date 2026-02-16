import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music } from "lucide-react";

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

export default function CaseStudies() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music curation Case Studies | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Selected case studies showing how curated sound supports atmosphere, flow & identity, across real spaces & events.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
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
                Πώς ο ήχος<br />διαμορφώνει πραγματικές εμπειρίες
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Παραδείγματα εφαρμογής του ήχου σε διαφορετικά περιβάλλοντα και ανάγκες.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d7a77faed_flux-pro-20_photography_of_Upscale_this_image_candid_photography_style-0.jpg" 
                      alt="SensEar Case Studies" 
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
                Από το όραμα<br />στον ήχο, και πέρα από αυτόν
              </h2>
            
              <div className="w-full text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  Κάθε χώρος ξεκινά από ένα όραμα: μια ατμόσφαιρα που θέλει να δημιουργήσει, ένα συναίσθημα που θέλει να αφήσει.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  Εμείς το μεταφράζουμε σε επιμελημένα ηχητικά τοπία που υποστηρίζουν την εμπειρία, σέβονται τον χώρο και λειτουργούν στην πράξη.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Τέσσερις χώροι, τέσσερις διαφορετικές διαδρομές</h2>
            <p className="text-xl text-black/60 font-medium mb-12">Κάθε ένας με τον δικό του χαρακτήρα, τις ανάγκες και τη μουσική του λύση.</p>
          </div>

          <div className="space-y-24">
            {/* Beach House Antiparos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4246ff146_upscalemedia-transformed.png"
                    alt="Beach House Antiparos"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Beach House, Αντίπαρος</h3>
                
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-6">
                    Το Beach House συνδυάζει την παραδοσιακή κυκλαδίτικη αισθητική με το υψηλής ποιότητας εστιατόριο CoocooVaya και ένα bar κυριολεκτικά πάνω στη θάλασσα.
                  </p>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                    Η μουσική έπρεπε να συμπληρώνει το τοπίο και να χαλαρώνει, διατηρώντας παράλληλα τη σωστή ενέργεια σε παραλία, εστιατόριο και bar.
                  </p>
                </div>

                <div className="space-y-6">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2232613925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
                    <a href="https://soundcloud.com/sensear_music" title="SensEar.Music" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>SensEar.Music</a> · <a href="https://soundcloud.com/sensear_music/beach-house-antiparos-morning-playlist-sample" title="Ακούστε την ατμόσφαιρα του Beach House" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Ακούστε την ατμόσφαιρα του Beach House</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pelicanos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Pelicanos, Σίφνος</h3>
                
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-6">
                    Σε ένα νησί με ισχυρή γαστρονομική ταυτότητα, το Pelicanos χρειαζόταν μουσική αντάξια της φιλοδοξίας του.
                  </p>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                    Εμπλουτίσαμε το soundtrack με σύγχρονες ανακαλύψεις και διαχρονικές επιλογές, δημιουργώντας μια ολοκληρωμένη εμπειρία fine dining δίπλα στη θάλασσα.
                  </p>
                </div>

                <div className="space-y-6">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292320%3Fsecret_token%3Ds-nZKQRmscC5Z&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
                    <a href="https://soundcloud.com/sensear_music" title="SensEar.Music" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>SensEar.Music</a> · <a href="https://soundcloud.com/sensear_music/pelicanos-sifnos-jazzy-playlist-1/s-nZKQRmscC5Z" title="Ακούστε την ατμόσφαιρα του Pelicanos" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Ακούστε την ατμόσφαιρα του Pelicanos</a>
                  </div>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5b48f2dce_pelicanos-2-5.png"
                    alt="Pelicanos Sifnos"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Yam Beach Club */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2886fc06f_hyggelig-aftenstemningcropped-pxbee-minitools-enhance-20251212181718.jpg"
                    alt="Yam Beach Club"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Yam, Αντίπαρος</h3>
                
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-6">
                    Ένα εμβληματικό σημείο της Αντιπάρου από τα τέλη των ’90s, με χαλαρή διάθεση και μοναδικό σκηνικό.
                  </p>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                    Σχεδιάσαμε μια μουσική εμπειρία που εξελίσσεται φυσικά από το μεσημεριανό χαλάρωμα έως τα βραδινά cocktails, αποτυπώνοντας τη μαγεία του νησιού.
                  </p>
                </div>

                <div className="space-y-6">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292317%3Fsecret_token%3Ds-un8Lzx2ibpI&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
                    <a href="https://soundcloud.com/sensear_music" title="SensEar.Music" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>SensEar.Music</a> · <a href="https://soundcloud.com/sensear_music/yam-antiparos-night-playlist-2/s-un8Lzx2ibpI" title="Ακούστε την ατμόσφαιρα του Yam" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Ακούστε την ατμόσφαιρα του Yam</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Levantis Gallery */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">Levantis, Πάρος</h3>
                
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-6">
                    Για τα εγκαίνια της έκθεσης Quiet Testimony της Neva Bergman, σχεδιάσαμε ένα διακριτικό ambient ηχητικό τοπίο για τον εκθεσιακό χώρο του Levantis.
                  </p>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                    Η μουσική ενίσχυσε τη συγκέντρωση και τη συζήτηση χωρίς να αποσπά, κρατώντας τους επισκέπτες περισσότερο μέσα στο έργο.
                  </p>
                </div>

                <div className="space-y-6">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2231959406&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
                    <a href="https://soundcloud.com/sensear_music" title="SensEar.Music" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>SensEar.Music</a> · <a href="https://soundcloud.com/sensear_music/levantis-sample" title="Ακούστε την ατμόσφαιρα του Levantis" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Ακούστε την ατμόσφαιρα του Levantis</a>
                  </div>
                </div>
              </div>
              <div className="order-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d36a8c70d_2e5887651_Levantis1.png"
                    alt="Levantis Gallery"
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA - Your Transformation Starts Here */}
      <section className="py-20 animated-gradient">
        <div className="w-full mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Το ηχητικό ταξίδι του χώρου σας ξεκινά εδώ</h2>
          <p className="text-xl text-black/60 mb-12 mx-auto">
            Ας δούμε πώς η μουσική μπορεί να λειτουργήσει ουσιαστικά για τον δικό σας χώρο και τους στόχους σας.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                Ανακαλύψτε τη στρατηγική ήχου σας
              </AnimatedButton>
            </Link>
            <span className="text-black/60 font-medium">ή</span>
            <Link to={createPageUrl("Services")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                Δείτε τις υπηρεσίες μας
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}