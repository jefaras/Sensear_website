import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Breadcrumbs from "../components/Breadcrumbs";

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


export default function ContactUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Contact SensEar | Let's talk about your Space";

    const description = "Get in touch to discuss your space and explore how sound can support atmosphere, flow and experience.";
    const pageUrl = 'https://sensear.music/contact';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg'; // Updated hero image

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
    let localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'en';

    // Add robots meta tag - CONTACT PAGE: index, follow
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
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Contact SensEar | Let\'s talk about your Space' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: 'website' }];


    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
      }
      document.head.appendChild(metaTag);
    });

    // Twitter Card tags
    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact SensEar | Let\'s talk about your Space' },
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
      }
      document.head.appendChild(metaTag);
    });

    // Add structured data
    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SensEar",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg", // Updated hero image URL
      "url": "https://www.sensear.music", // Assuming this is the main domain
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.9838,
        "longitude": 23.7275
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"],

      "priceRange": "$$$",
      "description": "Contact SensEar for bespoke music curation, sonic branding, and audio solutions for luxury hospitality venues."
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
        "name": "Contact",
        "item": "https://sensear.music/contact"
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

    // Add scroll event listener for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    venue_type: "",
    service_interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      await base44.entities.Inquiry.create(formData);
      
      // Send email notification
      const emailBody = `
New Contact Form Submission from SensEar Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Venue Type: ${formData.venue_type}
Service Interest: ${formData.service_interest}

Message:
${formData.message}

---
This inquiry has been saved to the database and can be viewed in the admin panel.
      `;

      await base44.integrations.Core.SendEmail({
        to: "sensearmusic@gmail.com, jefaraz@gmail.com",
        subject: `New Contact Form Submission from ${formData.name}`,
        body: emailBody,
        from_name: "SensEar Website"
      });

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        venue_type: "",
        service_interest: "",
        message: ""
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("There was an error submitting your inquiry. Please try again or contact us directly at hello@sensear.music");
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#faebe3]" role="alert" aria-live="polite">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-black/70 mb-8">
            We've received your inquiry and will get back to you within 24 hours. While you wait, explore our <Link to={createPageUrl("Blog")} className="underline hover:text-black font-semibold" aria-label="SensEar blog on sound and space">latest insights</Link> or learn about our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation services</Link>.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-black hover:bg-black/80 text-white">
            
            Ask Another Question
          </Button>
        </div>
      </div>);

  }

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
            #f5dcc4 0%,
            #fce8d8 12%,
            #fff5ee 20%,
            #ffe4d6 28%,
            #ffd7c4 36%,
            #e0e0e0 44%,
            #d3d3d3 52%,
            #ffffff 60%,
            #fff0e6 68%,
            #ffe8d9 76%,
            #c0c0c0 84%,
            #ffdcc8 92%,
            #f5dcc4 100%
          );
          background-size: 400% 400%;
          animation: gradient-shift 10s ease infinite;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Contact section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Let's talk about your space
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Tell us about your space and what you'd like people to feel.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f3cada14a_gemini-image-2_photography_of_a_scene_captured_in_a_candid_style_with_high-quality_details_show-0--.jpg" 
                      alt="Contact SensEar for music curation consultation" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
         <Breadcrumbs items={[
           { label: "Contact", path: createPageUrl("contact") }
         ]} />
        </div> */}
        

      <section className="py-20 bg-[#faebe3]" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto px-6">
          {/* New heading and text above the contact form */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6">
              Exploring how music could support your space or event?
            </h2>
            <p className="text-xl text-black/60 font-medium mb-12">
              We'll listen, ask the right questions and see whether sound has a role to play.
            </p>
          </div>

          <h2 id="contact-heading" className="sr-only">Contact Information and Inquiry Form</h2>
          
          <div className="space-y-20">
            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 shadow-lg bg-white">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Share a few details
                </h3>
                <p className="text-base text-black/60 mb-6">
                  This is an initial conversation. No commitments, no assumptions.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact inquiry form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="border-black/20 focus:bg-white"
                        style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                      
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="border-black/20 focus:bg-white"
                        style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                      
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+30..."
                      className="border-black/20 focus:bg-white"
                      style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                    
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Venue Type *
                      </label>
                      <Select
                        required
                        value={formData.venue_type}
                        onValueChange={(value) => setFormData({ ...formData, venue_type: value })}>
                        
                        <SelectTrigger className="border-black/20 focus:bg-white" style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }}>
                          <SelectValue placeholder="Select venue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="bar">Bar</SelectItem>
                          <SelectItem value="wellness">Wellness Center</SelectItem>
                          <SelectItem value="retail">Retail Space</SelectItem>
                          <SelectItem value="private_event">Private Event</SelectItem>
                          <SelectItem value="corporate_event">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Service Interest *
                      </label>
                      <Select
                        required
                        value={formData.service_interest}
                        onValueChange={(value) => setFormData({ ...formData, service_interest: value })}>
                        
                        <SelectTrigger className="border-black/20 focus:bg-white" style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }}>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="playlists_creation">Playlists creation</SelectItem>
                          <SelectItem value="music_event">Music for event</SelectItem>
                          <SelectItem value="sound_strategy">Sound strategy</SelectItem>
                          <SelectItem value="av_upgrade">AV upgrade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-black/20 focus:bg-white"
                      style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                    
                  </div>

                  <AnimatedButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    aria-label={isSubmitting ? "Sending your message" : "Send message"}>
                    
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </AnimatedButton>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-black mb-6">
                  Contact Information
                </h3>
              </div>

              <address className="grid md:grid-cols-3 gap-6 not-italic">
                <Card className="p-6 border-none animated-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone</h4>
                      <p className="text-black/80"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e3c81d312_picturetopeopleorg-355f6af418441f63cf63a77c1c7ea970e79fa84e662ff9f5aa.png" alt="+30 6976994212" className="h-5 w-auto" /></p>
                      <p className="text-sm text-black/60 mt-1">Available Monday–Saturday, 10:00–18:00 (EET)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none animated-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-black/80"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fd5f41fc6_picturetopeopleorg-25458b840e777c46f3ff5bf44acedb770a3037a5492b0d1343.png" alt="hello@sensear.music" className="h-5 w-auto" /></p>
                      <p className="text-sm text-black/60 mt-1">We usually reply within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none animated-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Location</h4>
                      <p className="text-black/80">Athens, Greece</p>
                      <p className="text-sm text-black/60 mt-1">Working with brands across Greece and its islands.</p>
                    </div>
                  </div>
                </Card>
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center text-black mb-12">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-black/60 font-medium text-center mb-12">
              <span>Find answers to common questions about our </span><Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation services</Link><span>.</span>
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-0" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What is the difference between background music and bespoke curation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Background Music offers pre-curated, automated playlists for a seamless ambiance, ideal for general business needs. Bespoke Curation is a fully customized music strategy, crafted to reflect a brand's identity and create a unique, immersive experience. It is ideal for luxury venues, boutique spaces, and businesses seeking a signature sound experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How long does it take to create a custom playlist?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                It varies. For a single venue with a clear music profile, it may take just a few days. For larger or multi-location clients, it can take a week or more to finalize the whole process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do I need special equipment for playing your music playlists?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Basic sound systems work just fine, but if you want specialized audio-visual solutions, we can provide design, purchase, and installation services. For more info see our AV Design & Integration section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do you offer support after setup?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. We are available for ongoing support, updates, and any adjustments you need along the way. Just send us a message and we will talk about it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-12">
            <Link to={createPageUrl("FAQ")}>
              <AnimatedButton>
                Read all FAQs
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}