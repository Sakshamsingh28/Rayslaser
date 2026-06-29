import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bridal Makeup Artist in Mankhurd Mumbai | Rays Salon",
  description: "Exquisite bridal makeup and party makeover services in Mankhurd, Govandi, and Chembur. Premium cosmetics and expert stylists for your special day.",
  alternates: {
    canonical: "/services/bridal-makeup",
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer makeup trials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer professional consultation and trial makeup sessions to align on look specifics before your wedding day."
      }
    },
    {
      "@type": "Question",
      "name": "What brands of cosmetics do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use premium, high-definition, and airbrush-safe cosmetic brands such as MAC, Huda Beauty, Kryolan, and Estee Lauder."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle group party bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our team is equipped to handle bridal parties, bridesmaids, and family makeovers concurrently at the salon."
      }
    }
  ]
};

export default function BridalMakeupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24 text-text">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">Salon & Bridal Services</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-2 mb-6">Bridal & Party Makeup</h1>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Look breathtaking on your most memorable milestones. Our elite bridal makeup artists and hair stylists combine high-definition techniques with premium, skin-safe products, creating tailored makeovers that capture your unique radiance.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl">
              <h2 className="text-2xl font-serif text-white mb-6">Service Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Custom high-definition (HD) & Airbrush makeup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Long-lasting, camera-ready finish</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Includes luxury hairstyling, draping, and lashes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Dedicated premium bridal suite for comfort</span>
                </li>
              </ul>
            </div>

            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-white mb-4">Bridal Packages</h2>
                <p className="text-white/80 text-sm mb-4">
                  Schedule your private consultation and trial. Custom packages for bridesmaids and wedding guests are available.
                </p>
                <div className="text-3xl font-serif text-primary mb-2">From ₹14,999 <span className="text-xs text-white/50">/ package</span></div>
              </div>
              <a 
                href="https://wa.me/919920681317?text=Hi!%20I%20want%20to%20book%20a%20Bridal/Party%20Makeup%20session." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center mt-6 uppercase tracking-wider text-xs py-4"
              >
                Book Your slot
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 pb-6">
                  <h4 className="text-lg font-serif text-white mb-2">{faq.name}</h4>
                  <p className="text-white/70 text-sm font-light leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
