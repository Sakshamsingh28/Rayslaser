import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "PRP & GFC Hair Loss Treatment in Mankhurd Mumbai | Rays Laser Clinic",
  description: "Advanced PRP and GFC Hair Loss treatments in Mankhurd East, Mumbai. Restore hair volume naturally with growth factor therapies near Chembur and Govandi.",
  alternates: {
    canonical: "/services/prp-hair-treatment",
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PRP Hair Treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Platelet-Rich Plasma (PRP) is a medical treatment where a client's own blood is drawn, processed to isolate active platelets, and injected into the scalp to stimulate hair growth factors and follicle repair."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between PRP and GFC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PRP uses platelets that release growth factors in the scalp, while GFC (Growth Factor Concentrate) extracts and pre-activates these growth factors in a tube beforehand, providing highly concentrated, consistent results with less discomfort."
      }
    },
    {
      "@type": "Question",
      "name": "How many sessions are needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, 4 to 6 sessions spaced one month apart are recommended to observe a significant reduction in hair loss and improvement in density."
      }
    }
  ]
};

export default function PRPHairPage() {
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
            <span className="text-sm font-medium tracking-widest text-primary uppercase">Hair Restoration</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-2 mb-6">PRP & GFC Hair Treatment</h1>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Revitalize your hair follicles and combat thinning naturally. Our state-of-the-art Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) therapies extract growth-promoting elements from your own blood, encouraging healthy scalp rejuvenation and active hair regeneration.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl">
              <h2 className="text-2xl font-serif text-white mb-6">Key Highlights</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Natural therapy using autologous growth factors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Combats male & female pattern hair loss</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Sterile, medical-grade double-spin centrifuges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Zero downtime with minimal, tolerable pinch sensation</span>
                </li>
              </ul>
            </div>

            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-white mb-4">Packages & Cost</h2>
                <p className="text-white/80 text-sm mb-4">
                  Investing in your confidence has never been simpler. Special multi-session package discounts are available.
                </p>
                <div className="text-3xl font-serif text-primary mb-2">From ₹3,499 <span className="text-xs text-white/50">/ session</span></div>
              </div>
              <a 
                href="https://wa.me/919920681317?text=Hi!%20I%20want%20to%20book%20a%20PRP/GFC%20Hair%20Treatment%20session." 
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
            <h2 className="text-3xl font-serif text-white mb-6">Scientific Methodology</h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed">
              <p>
                The process begins by drawing a small sample of your blood, which is placed inside a highly specialized, sterile centrifuge machine. The centrifuge spins the blood to isolate platelets and plasma (or pre-activate growth factors in GFC tubes).
              </p>
              <p>
                Using micro-needles, the concentrated growth serum is gently administered into the areas of the scalp showing hair thinning. The growth factors feed dormant follicles, prompting them to transition back into the active hair-growth phase (Anagen).
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
