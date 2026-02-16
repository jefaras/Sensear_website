import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

export default function FAQ() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { // Corrected syntax from useEffect() => { to useEffect(() => {
    document.title = "Συχνές ερωτήσεις | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Απαντήσεις σε συχνές ερωτήσεις σχετικά με τον ήχο, την αδειοδότηση και τις υπηρεσίες μας.";
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
        
        .slide-up-3 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Frequently Asked Questions">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Κατανοώντας πως λειτουργεί στην πράξη
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Απαντήσεις σε συχνές ερωτήσεις σχετικά με τον ήχο, την αδειοδότηση και τις υπηρεσίες μας.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17b4a5b7d_seedream-40_high-resolution_professional_photography_image_with_precise_details_and_refined_-01-.jpg" 
                      alt="Understanding music curation services and licensing" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="faq-section-heading" className="text-4xl font-bold text-center text-black mb-12">
            Οι ερωτήσεις σας, απαντημένες
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-0" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Είναι νόμιμο να παίζω μουσική από Spotify, YouTube ή Apple Music στο εστιατόριο / bar / ξενοδοχείο μου;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Συνήθως όχι. Οι καταναλωτικές πλατφόρμες streaming (όπως Spotify Free/Premium, YouTube, Apple Music κ.λπ.) έχουν άδεια μόνο για προσωπική χρήση και δεν καλύπτουν τη δημόσια εκτέλεση μουσικής σε επαγγελματικούς χώρους. Για να παίζετε μουσική νόμιμα στους πελάτες σας, απαιτείται επαγγελματική άδεια ή κατάλληλα αδειοδοτημένη υπηρεσία.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Γιατί δεν μπορώ να χρησιμοποιήσω τον προσωπικό μου λογαριασμό Spotify ή Apple Music;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Οι προσωπικές συνδρομές δεν περιλαμβάνουν δικαιώματα δημόσιας εκτέλεσης ή εμπορικής χρήσης. Η χρήση τους σε επαγγελματικό χώρο μπορεί να παραβιάζει τη νομοθεσία περί πνευματικών δικαιωμάτων και να οδηγήσει σε πρόστιμα ή νομικά ζητήματα. Οι επαγγελματικές μουσικές υπηρεσίες περιλαμβάνουν τις απαραίτητες άδειες για δημόσια αναπαραγωγή.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Τι είναι η άδεια δημόσιας εκτέλεσης και γιατί τη χρειάζομαι;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Η άδεια δημόσιας εκτέλεσης αποζημιώνει καλλιτέχνες, δημιουργούς και εκδότες όταν το έργο τους παίζεται σε δημόσιο χώρο. Είναι απαραίτητη για τη νόμιμη αναπαραγωγή μουσικής σε εστιατόρια, bar, ξενοδοχεία, καταστήματα λιανικής κ.ά. Η SensEar μπορεί να σας καθοδηγήσει ή να σας βοηθήσει να εξασφαλίσετε τις σωστές άδειες.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Πόσος χρόνος χρειάζεται για τη δημιουργία μιας μουσικής playlist στα μέτρα μου;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Εξαρτάται. Για έναν μεμονωμένο χώρο με ξεκάθαρο μουσικό προφίλ, μπορεί να χρειαστούν λίγες ημέρες. Για μεγαλύτερους οργανισμούς ή πολλαπλές τοποθεσίες, η διαδικασία μπορεί να διαρκέσει μία εβδομάδα ή και περισσότερο.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Η μουσική που παρέχετε είναι πλήρως αδειοδοτημένη;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Ναι. Όλα τα κομμάτια είναι σωστά αδειοδοτημένα, ώστε να λειτουργείτε χωρίς νομικές ανησυχίες και να εστιάζετε στην επιχείρησή σας.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Μπορώ να ενημερώνω μόνος μου τις μουσικές playlists;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Φυσικά. Η εύχρηστη πλατφόρμα μας σάς επιτρέπει να κάνετε γρήγορες αλλαγές, να ρυθμίζετε παραμέτρους ή να προγραμματίζετε διαφορετικές playlists για συγκεκριμένες ώρες.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Χρειάζομαι ειδικό εξοπλισμό για να παίζω τις μουσικές playlists;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Ένα βασικό ηχητικό σύστημα είναι συνήθως αρκετό. Αν όμως χρειάζεστε εξειδικευμένες λύσεις ήχου και εικόνας, μπορούμε να αναλάβουμε τον σχεδιασμό, την προμήθεια και την εγκατάσταση. Για περισσότερες πληροφορίες δείτε την ενότητα Σχεδιασμός & Ενσωμάτωση AV.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Παρέχετε υποστήριξη μετά την αρχική εγκατάσταση;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Ναι. Προσφέρουμε συνεχή υποστήριξη, ενημερώσεις και προσαρμογές όποτε τις χρειαστείτε. Απλώς επικοινωνήστε μαζί μας.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Ποια είναι η διαφορά ανάμεσα στη γενική background μουσική και την εξατομικευμένη επιμέλεια;
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Η background μουσική βασίζεται σε έτοιμες, αυτοματοποιημένες playlists για μια ευχάριστη και ουδέτερη ατμόσφαιρα. Η εξατομικευμένη μουσική επιμέλεια είναι μια πλήρως προσαρμοσμένη στρατηγική ήχου, σχεδιασμένη να εκφράζει την ταυτότητα του brand και να δημιουργεί μια μοναδική, βιωματική εμπειρία. Είναι ιδανική για luxury χώρους, boutique concepts και επιχειρήσεις που θέλουν ξεχωριστό ηχητικό αποτύπωμα.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12 bg-white/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Έχετε κι άλλες ερωτήσεις; Ας μιλήσουμε</h3>
            <p className="text-black/80 mb-6">Ας συζητήσουμε πώς μπορούμε να αναβαθμίσουμε τον ήχο του brand σας.</p>
            <Link to={createPageUrl("contact")}>
              <AnimatedButton>
                Επικοινωνήστε μαζί μας
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}