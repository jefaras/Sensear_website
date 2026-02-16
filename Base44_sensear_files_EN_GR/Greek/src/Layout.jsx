import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown, Facebook, Instagram, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollToTop from "./components/ScrollToTop";

const FooterButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-2 text-xs font-semibold rounded-full transition-all duration-300 overflow-hidden h-9 ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-2 w-3 h-3 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  // Track scroll position for navigation height
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Αρχική", path: createPageUrl("Home") },
    { name: "Υπηρεσίες", path: createPageUrl("Services") },
    { name: "Κλάδοι", path: createPageUrl("Industries") },
    { name: "Case Studies", path: createPageUrl("case-studies") },
    { name: "Blog", path: createPageUrl("Blog"), ariaLabel: "Το blog της SensEar για τον ήχο και τον χώρο" },
    { name: "Σχετικά", path: createPageUrl("about") }
  ];

  const footerNavItems = {
    services: [
      { name: "Επιμελημένες playlists", path: createPageUrl("signature-playlists") },
      { name: "Ηχητική επιμέλεια εκδηλώσεων", path: createPageUrl("event-soundtracks") },
      { name: "Σχεδιασμός ηχητικής ταυτότητας", path: createPageUrl("sonic-strategy") },
      { name: "Ακουστική αναβάθμιση", path: createPageUrl("audio-upgrades") }
    ],
    industries: [
      { name: "Ξενοδοχεία & Θέρετρα", path: createPageUrl("music-for-hotels-and-resorts"), ariaLabel: "Μουσική για Ξενοδοχεία & Θέρετρα" },
      { name: "Εστιατόρια & Bar", path: createPageUrl("music-for-restaurants-and-bars"), ariaLabel: "Μουσική για Εστιατόρια & Bar" },
      { name: "Καταστήματα λιανικής", path: createPageUrl("music-for-retail-stores") },
      { name: "Wellness & Γυμναστήρια", path: createPageUrl("music-for-wellness-and-gyms"), ariaLabel: "Μουσική για Wellness & Γυμναστήρια" },
      { name: "Εκδηλώσεις & Εμπειρίες", path: createPageUrl("music-for-events-and-experiences"), ariaLabel: "Μουσική για Εκδηλώσεις" },
      { name: "Τέχνη, Μουσεία & Μόδα", path: createPageUrl("music-for-art-museums-and-fashion"), ariaLabel: "Μουσική για Τέχνη, Μουσεία & Μόδα" }
    ],
    company: [
      { name: "Case Studies", path: createPageUrl("case-studies"), ariaLabel: "Μελέτες περίπτωσης μουσικής επιμέλειας" },
      { name: "Σχετικά", path: createPageUrl("about"), ariaLabel: "Σχετικά με τη SensEar" },
      { name: "Επικοινωνία", path: createPageUrl("contact"), ariaLabel: "Επικοινωνήστε με τη SensEar" },
      { name: "Blog", path: createPageUrl("Blog"), ariaLabel: "Το blog της SensEar για τον ήχο και τον χώρο" },
      { name: "Συχνές ερωτήσεις", path: createPageUrl("FAQ"), ariaLabel: "Συχνές ερωτήσεις για τη μουσική επιμέλεια" },
      { name: "Χάρτης ιστοτόπου", path: createPageUrl("Sitemap"), ariaLabel: "Χάρτης ιστοτόπου της SensEar" }
    ]
  };

  // Function to generate social markup and JSON-LD schema
  const generateSocialMarkup = () => {
    const currentPageUrl = window.location.href;
    const description = "Enhance experiences through curated music and sonic branding. Discover how SensEar elevates brands."; // Default description
    const imageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"; // Default image

    // Update title based on route
    if (location.pathname === createPageUrl("sonic-strategy")) {
      document.title = "Sonic Strategy | SensEar";
    } else if (location.pathname === createPageUrl("signature-playlists")) {
      document.title = "Signature Playlists | SensEar";
    } else if (location.pathname === createPageUrl("event-soundtracks")) {
      document.title = "Event Soundtracks | SensEar";
    } else if (location.pathname === createPageUrl("audio-upgrades")) {
      document.title = "Audio Upgrades | SensEar";
    } else if (location.pathname === createPageUrl("hotels-resorts")) {
      document.title = "Hotels & Resorts | SensEar";
    } else if (location.pathname === createPageUrl("restaurants-bars")) {
      document.title = "Restaurants & Bars | SensEar";
    } else if (location.pathname === createPageUrl("music-for-retail-stores")) {
      document.title = "Music for Retail Stores | SensEar";
    } else if (location.pathname === createPageUrl("wellness-gyms")) { // Changed from wellness-centers
      document.title = "Wellness & Gyms | SensEar"; // Changed from Wellness Centers
    } else if (location.pathname === createPageUrl("events-experiences")) {
      document.title = "Events & Experiences | SensEar";
    } else if (location.pathname === createPageUrl("art-museums-fashion")) {
      document.title = "Art, Museums & Fashion | SensEar";
    } else if (location.pathname === createPageUrl("about")) {
      document.title = "About SensEar | Music curation Team & Approach";
    } else if (location.pathname === createPageUrl("contact")) {
      document.title = "Contact SensEar | Let's talk about your Space";
    } else if (location.pathname === createPageUrl("Blog")) {
      document.title = "Blog on Music, Space & Experience | SensEar";
    } else {
      document.title = "SensEar - Soundtracking Unique Experiences"; // Default
    }

    const localBusinessSchema = {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "SensEar",
      "image": imageUrl,
      "url": "https://www.sensear.music",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "sameAs": [
        "https://www.facebook.com/61575909304249/",
        "https://www.instagram.com/sensear.music"
      ],
      "description": "SensEar specializes in sonic branding and curated music experiences for businesses in hospitality, retail, and wellness.",
      "openingHours": "Mo-Fr 09:00-17:00",
      "priceRange": "$$$"
    };

    return (
      <>
        <meta property="og:url" content={currentPageUrl} />
        <meta property="og:title" content={document.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={document.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#faebe3]">
      {/* ScrollToTop component - automatically scrolls to top on route change */}
      <ScrollToTop />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap');
        
        :root {
          --peach: #faebe3;
          --peach-layer: #f0dfd5;
          --black: #000000;
          --text-main: #000000;
          --text-subtle: #575757;
          --white: #ffffff;
        }

        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        body {
          font-family: 'Satoshi', sans-serif;
          background-color: var(--peach);
          color: var(--text-main);
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
        }

        .font-jakarta {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Enforce consistent line-height for H1 and H2 */
        h1 {
          line-height: 1.25 !important;
        }
        
        h2 {
          line-height: 1.25 !important;
        }
        
        /* Universal rounded button styling */
        button, .button, [role="button"] {
          border-radius: 9999px !important;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease-out;
        }
      `}</style>
      {generateSocialMarkup()}

      {/* Navigation - Transparent initially, dark on scroll, always slim (py-2) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
            <img 
              src={isScrolled 
                ? "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdbf0fb5d_sensear-logo-avatar-white-transparent1.png" 
                : "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a42606150_sensear-logo-avatar-color1.png"
              } 
              alt="SensEar Logo" 
              className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" 
            />
            <h1 className={`text-3xl font-bold tracking-wide font-syne transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}>SENSEAR</h1>
          </Link>

          {/* Desktop Navigation - moved significantly more to the left with larger negative margin */}
          <div className="hidden lg:flex items-center gap-6" style={{ marginLeft: '-200px' }}>
            {navItems.map((item) =>
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}>

                <Link
                  to={item.path} 
                  className={`py-2 text-base font-bold tracking-wide transition-colors relative flex items-center gap-2 hover:underline decoration-1 underline-offset-4 font-jakarta ${
                    isScrolled ? 'text-slate-50' : 'text-black'
                  }`}
                  aria-label={item.ariaLabel || item.name}>

                  {item.name}
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && openDropdown === item.name &&
                  <div className="absolute top-full left-0 pt-2 w-64 z-10">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      {item.subItems.map((subItem) =>
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-6 py-3 text-base transition-colors hover:underline decoration-1 underline-offset-4 font-jakarta ${
                            location.pathname === subItem.path ?
                              "bg-peach-layer text-black font-medium" :
                              "text-black hover:bg-peach-layer"}`
                          }>

                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  </div>
                }
              </div>
            )}
            
            {/* Contact Button - Outline style with underline on hover, color inverts when scrolled */}
            <Link to={createPageUrl("contact")}>
              <Button 
                variant="outline" 
                className={`text-base font-bold bg-transparent hover:bg-transparent transition-colors hover:underline decoration-1 underline-offset-4 font-jakarta ${
                  isScrolled 
                    ? 'border-white text-white hover:border-white hover:text-white' 
                    : 'border-black text-black hover:border-black hover:text-black'
                }`}>
                Επικοινωνία
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}>

            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
          <div className="lg:hidden bg-black border-t border-peach/20 mt-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) =>
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => !item.subItems && setIsMenuOpen(false)}
                    className={`block text-base font-bold py-2 hover:underline decoration-1 underline-offset-4 font-jakarta ${
                      location.pathname === item.path ? "text-white underline" : "text-white/90"}`
                    }
                    aria-label={item.ariaLabel || item.name}>

                    {item.name}
                  </Link>
                  {item.subItems &&
                    <div className="pl-4 space-y-1 mt-1">
                      {item.subItems.map((subItem) =>
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-sm py-2 hover:underline decoration-1 underline-offset-4 font-jakarta ${
                            location.pathname === subItem.path ?
                              "text-white underline" :
                              "text-white/70 hover:text-peach"}`
                          }>

                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  }
                </div>
              )}
              
              {/* Contact in Mobile Menu */}
              <Link
                to={createPageUrl("contact")}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-bold py-2 hover:underline decoration-1 underline-offset-4 font-jakarta ${
                  location.pathname === createPageUrl("contact") ? "text-white underline" : "text-white/90"}`
                }>
                Επικοινωνία
              </Link>
            </div>
          </div>
        }
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white relative overflow-hidden">
        <div 
          className={`absolute top-4 left-0 right-0 z-0 opacity-[0.1] pointer-events-none ${
            (location.pathname === createPageUrl("Home") || location.pathname === "/") 
              ? 'bottom-[13vw]' 
              : 'bottom-4'
          }`}
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ae546991c_Untitleddesign.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-wrap gap-12 lg:gap-24">
            {/* Logo, Socials & Contact */}
            <div className="min-w-[300px] lg:w-1/3">
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 group mb-6 w-fit">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdbf0fb5d_sensear-logo-avatar-white-transparent1.png" alt="SensEar Logo" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" />
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-wide font-syne">SENSEAR</h1>
                  <p className="text-xs text-white -mt-1 font-syne">Μουσική επιμέλεια για ξεχωριστές εμπειρίες</p>
                </div>
              </Link>
              <div className="flex gap-6 mb-6">
                <a href="https://www.facebook.com/61575909304249/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-peach transition-colors" aria-label="Visit SensEar on Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/sensear.music" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-peach transition-colors" aria-label="Visit SensEar on Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="space-y-3 mb-6">
                <div>
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/21a008aa5_picturetopeopleorg-3dd2d76b45071cf3a83492fa044da51b0fe8ba66777df92c31.png" alt="hello@sensear.music" className="h-5 w-auto" />
                </div>
                <div>
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6cd5af555_picturetopeopleorg-af1f54707bfc9381612737a8cbdc641c34f5f390c625633f3b.png" alt="+30 6976994212" className="h-5 w-auto" />
                </div>
              </div>

              {/* Sonic Insights */}
              <div>
                <h3 className="text-sm font-semibold text-peach mb-3 font-jakarta">Μουσική ενημέρωση, κάθε μήνα</h3>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Το email σας" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1 text-sm h-9 max-w-[180px]" />
                  <FooterButton>Εγγραφή</FooterButton>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <Link to={createPageUrl("Services")} className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block font-jakarta">
                Υπηρεσίες
              </Link>
              <div className="space-y-2">
                {footerNavItems.services.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-base hover:underline decoration-1 underline-offset-4 font-jakarta">{item.name}</Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <Link to={createPageUrl("Industries")} className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block font-jakarta">
                Κλάδοι
              </Link>
              <div className="space-y-2">
                {footerNavItems.industries.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-base hover:underline decoration-1 underline-offset-4 font-jakarta" aria-label={item.ariaLabel || item.name}>{item.name}</Link>
                ))}
              </div>
            </div>



            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider font-jakarta">Εταιρεία</h3>
              <div className="space-y-2">
                {footerNavItems.company.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-base hover:underline decoration-1 underline-offset-4 font-jakarta" aria-label={item.ariaLabel || item.name}>{item.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <p className="text-xs text-white/50 text-center leading-relaxed">Η SensEar Music Curation Ε.Ε. είναι εγγεγραμμένη εταιρεία στην Ε.Ε. με έδρα την Αθήνα, Ελλάδα (Αρ. ΓΕΜΗ 183951803000). Η εταιρεία ελέγχεται από το Γενικό Εμπορικό Μητρώο (ΓΕΜΗ) και διέπεται από το ελληνικό εμπορικό και εταιρικό δίκαιο, όπως διαχειρίζεται από το Επαγγελματικό Επιμελητήριο Αθηνών. Όλες οι συμβουλευτικές υπηρεσίες που παρέχονται από τη SensEar τηρούν τους ελληνικούς και ευρωπαϊκούς κανονισμούς, διασφαλίζοντας τη συμμόρφωση και τις ηθικές επιχειρηματικές πρακτικές.
            </p>
          </div>
        </div>
        
        {/* Large Brand Name at the bottom - Only on Home Page */}
        {(location.pathname === createPageUrl("Home") || location.pathname === "/") && (
          <div className="w-full overflow-hidden leading-none pb-2 select-none">
             <div className="text-[15vw] font-bold text-white text-center font-syne tracking-tight leading-[0.85]">
              SENSEAR
            </div>
          </div>
        )}
      </footer>

      {/* Back to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black/80 hover:bg-black text-white z-50 transition-all duration-300 border-2 border-white/30 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </div>
  );
}