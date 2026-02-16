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
    const newTitle = "How music shapes perceived wait time | SensEar blog";
    document.title = newTitle;
    
    const description = "Discover how music and environmental design reduce perceived waiting time and improve customer satisfaction in service spaces.";
    const ogImage = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1472df5cb_aiease_1760708154014.jpg';
    const pageUrl = 'https://sensear.music/service-environment-shapes-wait-time';
    const publishedDate = '2025-01-15T09:00:00Z';

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
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'en_GB' },
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
      languageMeta.setAttribute('content', 'en');
    } else {
      languageMeta = document.createElement('meta');
      languageMeta.setAttribute('http-equiv', 'content-language');
      languageMeta.setAttribute('content', 'en');
      document.head.appendChild(languageMeta);
    }

    document.documentElement.lang = 'en';

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
        "headline": newTitle,
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
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15"
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
            "name": "How Service Environments Shape Perceived Waiting Time",
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Service Environment Shapes Wait Time section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">How your service environment</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">shapes perceived wait time</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                How music and environmental design can transform the waiting experience and improve satisfaction.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-03-15">March 15, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Research Team</span>
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
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Managing how customers feel about waiting can be as important as reducing the clock time itself</h2>
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              A short wait to a manager can feel long to a guest if the environment works against them.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why waiting feels longer than it is</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              <a href="https://www.researchgate.net/profile/Ale-Smidts/publication/247220346_Effects_of_waiting_on_the_satisfaction_with_the_service_Beyond_objective_time_measures/links/5cc83a9e4585156cd7bc091c/Effects-of-waiting-on-the-satisfaction-with-the-service-Beyond-objective-time-measures.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Customers often overestimate how long they have waited</a>, and satisfaction drops as perceived wait length grows. Traditional fixes focus on operations that cut actual queue time, but <a href="https://www.researchgate.net/profile/Naveen-Donthu/publication/242337184_Closing_the_gap_between_perceived_and_actual_waiting_times_in_a_call_center_Results_from_a_field_study/links/64bff61a8de7ed28bac2b9e0/Closing-the-gap-between-perceived-and-actual-waiting-times-in-a-call-center-Results-from-a-field-study.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">research shows the setting and information during the wait also shape satisfaction</a>, sometimes more than small shifts in seconds or minutes.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">How the environment shapes perception</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              The physical and sensory setting affects emotional, cognitive, and physiological responses that drive evaluations and behaviors. <a href="https://eclass-demo.aueb.gr/modules/document/file.php/MISC418/Lecture5_Reading_Servicescapes.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Servicescape research ties these effects to core pleasure and arousal states</a> that color time perception and satisfaction.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl font-bold text-black mb-6">The environmental factors that matter</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-black mb-2">Ambient Elements</h4>
                  <p className="text-black/70"><a href="https://journals.itb.ac.id/index.php/ajht/article/view/25753/7113" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Lighting, temperature, music, scent, and background noise set the sensory baseline</a> and can shift satisfaction and perceived time in hospitality and retail settings.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-2">Design Elements</h4>
                  <p className="text-black/70"><a href="https://www.sciencedirect.com/science/article/pii/S0278431918310430" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Color, furnishings, signage, and spatial layout guide flow and expectations</a>, influencing attention and affect during waits.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-2">Social Elements</h4>
                  <p className="text-black/70">Who is present matters. <a href="https://philpapers.org/rec/PRUCRT" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">The presence of staff and other guests can soften the experience</a>, and waiting with others can improve acceptability during longer waits.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">How music changes perceived wait time</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              <a href="https://chaireomerdesserres.hec.ca/wp-content/uploads/2020/05/The-Impact-of-Music-on-Consumers-Reactions-to-Waiting-for-Services.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Music that creates positive affect tends to shorten perceived wait</a>, while poorly matched music can lengthen it. The mechanism combines <a href="https://www.sciencedirect.com/science/article/pii/S1071581921001749" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">attention capture, mood regulation, and tempo effects that influence internal timekeeping</a>. Identifying what works for a specific segment and context requires testing and professional curation, since <a href="https://www.sciencedirect.com/science/article/pii/S0022435997900166" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">responses vary by genre, volume, and tempo</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Practical steps for managers</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Make ambient baselines a management priority. <a href="https://journals.itb.ac.id/index.php/ajht/article/view/25753/7113" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Calibrate lighting, temperature, music volume, and tempo to the setting and daypart</a>, then validate with guest feedback and metrics. Understand the affective profile of the music you select for your target market, and use <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70">playlists that align with desired mood and pace</Link> for each zone and queue type.
            </p>

            <p className="text-black/80 leading-relaxed">
              The right music does more than fill silence. It improves the waiting experience, reduces perceived wait time, and supports higher satisfaction. This is where <Link to={createPageUrl("Services")} className="text-black underline hover:text-black/70">professional music curation</Link> delivers measurable value in <Link to={createPageUrl("Industries")} className="text-black underline hover:text-black/70">service environments</Link>.
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
              Transform Your Service Environment
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}