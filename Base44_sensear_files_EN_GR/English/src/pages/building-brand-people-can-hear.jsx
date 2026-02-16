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

export default function BuildingBrandPeopleCanHear() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Building a brand people can hear | SensEar blog";

    const description = "A strategic guide to sonic branding and audio identity, showing how sound strengthens brand recognition and emotional connection.";
    const pageUrl = 'https://sensear.music/building-brand-people-can-hear';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1749ad78f_BuildingaBrandPeopleCanHear-TheSensEarGuidetoSonicBranding.png';

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
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Building a brand people can hear | SensEar blog' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: '2025-01-13T09:00:00Z' },
    { property: 'article:author', content: 'SensEar Team' },
    { property: 'article:section', content: 'Branding' }];


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
    { name: 'twitter:title', content: 'Building a brand people can hear | SensEar blog' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl }];


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
      "@type": "BlogPosting",
      "headline": "Building a Brand People Can Hear",
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
      "datePublished": "2025-01-13",
      "dateModified": "2025-01-13",
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
        "name": "Building a Brand People Can Hear",
        "item": pageUrl
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Building Brand People Can Hear section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Building a brand</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">people can hear</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Strategic guide to sonic branding and audio identity development through music and sound design.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-02-12">February 12, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>SensEar Team</span>
                </div>
                <div className="text-black/50">
                  <span>7 min read</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg" 
                      alt="Sonic branding strategy building brand identity through music" 
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
            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why sound is your most underrated brand asset</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Brand identity is more than visuals. It is the total set of signals that help people recognize you and trust what you deliver. That includes name, logo, typography, color, packaging, and physical spaces. But in a crowded market, consistent sound cues cut through faster, travel further, and stick longer in memory. <a href="https://www.sciencedirect.com/science/article/pii/S1057740811000830" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Sensory marketing research</a> shows that engaging multiple senses strengthens perception, judgment, and behavior, and sound is uniquely efficient at doing this at scale.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">What a brand really is</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              A brand is a promise people can identify instantly and rely on consistently. Customers use brand cues to infer benefits and quality before they buy. Visual consistency matters, and color is often cited as boosting recognition, though <a href="https://reviewinc.com/2024/08/14/color-increases-brand-recognition/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">that specific 80 percent statistic is frequently misquoted</a> and context dependent, originally tied to <a href="https://www.insights4print.ceo/2019/02/color-increases-brand-recognition-by-80-the-real-contents-of-the-loyola-study-revealed/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">document processing rather than logos alone</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">The power of sonic branding</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Music and sound are immediate, emotional, and memorable. Field experiments show that background music can shape traffic flow and lift sales, especially when tempo and musical mode are intentionally selected for context, not chosen at random. For example, <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">research in a supermarket</a> found that slow tempo music lengthened shopping time and increased sales volume compared to fast tempo tracks. <a href="https://www.researchgate.net/profile/Klemens-Knoeferle/publication/227451750_It_is_all_in_the_mix_The_interactive_effect_of_music_tempo_and_mode_on_in-store_sales/links/0a85e530360b6bd8a7000000/It-is-all-in-the-mix-The-interactive-effect-of-music-tempo-and-mode-on-in-store-sales.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Interaction effects of tempo and mode</a> can also influence in-store sales outcomes, suggesting playlists should be composed with both parameters in mind for the desired behavioral effect.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Congruence matters. When the music fits the offer, people choose in line with that cue. In a <a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">classic wine aisle study</a>, French music increased French wine sales while German music increased German wine sales, demonstrating that culturally congruent sound nudges product choice without a single spoken word.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Sonic logos amplify this effect by giving your brand a short, distinctive audio signature that boosts recall and recognition. <a href="https://www.sciencedirect.com/science/article/pii/S0148296323005283" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Recent research</a> links well designed sonic logos to stronger memory and brand personality fit, including attributes like sincerity or ruggedness when the <a href="https://idj.journals.ekb.eg/article_340785_a40c2229d0f8979f8c85180171b7e998.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">musical features align with brand strategy</a>, supported by additional <a href="https://journal.ipb.ac.id/index.php/jcs/article/view/57484" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">branding studies</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">A practical framework for sound-first brand strategy</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Use this six-step process to align sound with your brand promise and performance goals.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <ol className="space-y-6 text-black/80">
                <li>
                  <strong className="text-black text-lg">1. Identify your priority customers and motivational triggers</strong>
                  <p className="mt-2">Use qualitative interviews and journey mapping to uncover when and why sound will help reduce friction or heighten emotion. Anchor findings in <a href="https://www.sciencedirect.com/science/article/pii/S1057740811000830" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sensory marketing principles</a> so you are designing for perception and behavior, not just taste in music.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">2. Define a value proposition people can hear</strong>
                  <p className="mt-2">Translate your value proposition into sonic territories. If you stand for calm expertise, consider slower tempos and stable modes. If you stand for energetic discovery, explore higher tempos with bright timbres. <a href="https://www.researchgate.net/profile/Klemens-Knoeferle/publication/227451750_It_is_all_in_the_mix_The_interactive_effect_of_music_tempo_and_mode_on_in-store_sales/links/0a85e530360b6bd8a7000000/It-is-all-in-the-mix-The-interactive-effect-of-music-tempo-and-mode-on-in-store-sales.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Evidence shows</a> tempo and mode influence pace and purchase behavior, so plan accordingly.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">3. Assess competitor soundscapes</strong>
                  <p className="mt-2">Audit competitors' playlists, voice and tone, and any sound logos. <a href="https://www.tandfonline.com/doi/pdf/10.1080/02650487.2023.2273075" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Sonic branding is still under-researched</a> relative to impact, which means there is room to differentiate with evidence-led craft rather than copycat playlists.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">4. Design core sonic assets</strong>
                  <p className="mt-2">Create a modular system: a primary sonic logo, mnemonic stingers, UX sounds, and environment-specific playlists. Ensure <a href="https://www.sciencedirect.com/science/article/pii/S0148296323005283" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">musical features align with your brand personality</a> so the audio signature signals the same traits your visuals do.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">5. Craft a clear, testable brand promise</strong>
                  <p className="mt-2">Articulate how sound supports the promise. For instance, promise a calmer check-in experience in hospitality by using low-arousal tracks in lobbies and rooms. Test against behavioral KPIs like dwell time, service ratings, and repeat visit intent. <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Supermarket studies</a> demonstrate that music can measurably change pace and purchases, so treat playlists as performance media, not background filler.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">6. Activate the right brand touchpoints</strong>
                  <p className="mt-2">Prioritize high-impact touchpoints where customers can hear and feel your promise. In hospitality and retail, that includes entrances, lobbies, dining areas, fitting rooms, mobile apps, IVR systems, and short-form video. Make congruency your rule. The <a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">wine aisle study</a> shows how aligning music with context quietly tilts choice in your favor.</p>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Brand touchpoints to prioritize: the sonic experience</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Sound is one of the most powerful brand touchpoints because it works instantly, sets emotional temperature, and is easy to standardize across locations and channels. When thoughtfully integrated into your brand system, your music and sonic logo do more than decorate a space. They become the voice of your brand that customers recognize before they even look up. For hospitality brands, this translates into consistent quality cues that reduce uncertainty and increase loyalty over time, supported by a growing body of work in <a href="https://www.sciencedirect.com/science/article/pii/S1057740811000830" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sensory marketing</a> and <a href="https://www.tandfonline.com/doi/pdf/10.1080/02650487.2023.2273075" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sonic branding research</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ready to make your brand heard?</h2>

            <p className="text-black/80 leading-relaxed">
              If you want <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70">playlists that perform</Link>, a <Link to={createPageUrl("sonic-strategy")} className="text-black underline hover:text-black/70">sound logo people remember</Link>, and <Link to={createPageUrl("Services")} className="text-black underline hover:text-black/70">audio guidelines</Link> your teams can apply everywhere, SensEar can help. <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70">Book a discovery session</Link> and we will map your <Link to={createPageUrl("Industries")} className="text-black underline hover:text-black/70">customer journey</Link>, test what your audience responds to, and build a sonic branding system that lifts recognition, improves experience, and drives <Link to={createPageUrl("case-studies")} className="text-black underline hover:text-black/70">measurable results</Link>. Let's design the sound of your brand today.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Build Your Sonic Brand Identity
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>);

}