import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "HydraFacial in Mankhurd Mumbai | Best Medi-facial | Rays Laser Clinic",
  description: "Experience premium HydraFacial and customized medi-facials in Mankhurd, Mumbai. Refresh your skin with deep cleaning, exfoliation, and active serum infusion.",
  alternates: {
    canonical: "/services/hydrafacial",
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a HydraFacial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A HydraFacial is a non-invasive skincare procedure that cleanses, exfoliates, extracts impurities, and hydrates the skin using advanced vortex technology and customized serums."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any downtime after HydraFacial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, there is absolutely zero downtime. You can return to your normal routine immediately with an instant, glowing complexion."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get a HydraFacial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend a monthly session to maintain skin glow, manage skin barrier health, and reduce fine lines or congestion."
      }
    }
  ]
};

export default function HydraFacialPage() {
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
            <span className="text-sm font-medium tracking-widest text-primary uppercase">Skin & Anti-Aging Care</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-2 mb-6">HydraFacial & Medi-facials</h1>
            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
              Give your skin the ultimate nourishment it deserves. Our advanced HydraFacial and medical-grade facials deep clean, exfoliate, extract debris, and infuse skin with hydrating serums, providing an instant glow and long-term rejuvenation.
            </p>
            {/* AI Search Optimization & Quick Definition Block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-white/80 leading-relaxed max-w-3xl mb-8">
              <strong>What is a HydraFacial?</strong> A HydraFacial is a non-invasive medical-grade skin treatment that cleanses, exfoliates, painlessly extracts blackheads/whiteheads, and infuses custom hydrating serums. At Rays Laser Aesthetic Clinic in Mankhurd East, Mumbai, HydraFacial sessions start from ₹2,999.
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl">
              <h2 className="text-2xl font-serif text-white mb-6">Treatment Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Deep pore cleansing & blackhead extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Active hydration with hyaluronic acid and peptides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Improves skin texture, tone, and hyperpigmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Ideal for all skin types with instant glow results</span>
                </li>
              </ul>
            </div>

            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-white mb-4">Pricing & Packages</h2>
                <p className="text-white/80 text-sm mb-4">
                  Restore your radiant skin today. Monthly subscription pricing and bridal skin glow packages are available.
                </p>
                <div className="text-3xl font-serif text-primary mb-2">From ₹2,999 <span className="text-xs text-white/50">/ session</span></div>
              </div>
              <a 
                href="https://wa.me/919920681317?text=Hi!%20I%20want%20to%20book%20a%20HydraFacial%20session." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center mt-6 uppercase tracking-wider text-xs py-4"
              >
                Book Your slot
              </a>
            </div>
          </div>

          {/* Procedure details */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-white mb-6">Our 4-Step Vortex-Fusion Process</h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed">
              <p>
                <strong>1. Cleansing & Exfoliation:</strong> We begin with gentle resurfacing to uncover a new layer of skin and remove dead cells.
              </p>
              <p>
                <strong>2. Acid Peel:</strong> A mild salicylic and glycolic acid peel is applied to loosen debris from pores without irritation.
              </p>
              <p>
                <strong>3. Automated Extraction:</strong> Utilizing a patented vortex-suction nozzle, we painlessly extract blackheads and impurities.
              </p>
              <p>
                <strong>4. Hydration & Infusion:</strong> The skin is saturated with antioxidants, peptides, and hyaluronic acid to maximize glow.
              </p>
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
