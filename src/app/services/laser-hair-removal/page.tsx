import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Laser Hair Removal in Mankhurd Mumbai | Rays Laser Clinic",
  description: "Get painless, safe, and effective Laser Hair Removal in Mankhurd East, Mumbai. Standard pricing packages for permanent hair reduction near Chembur/Govandi.",
  alternates: {
    canonical: "/services/laser-hair-removal",
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Laser Hair Removal permanent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Laser hair removal offers permanent hair reduction. It targets active hair follicles to prevent regrowth, though select maintenance touch-ups may be required annually."
      }
    },
    {
      "@type": "Question",
      "name": "Is the LHR treatment painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Rays Clinic, we use advanced cooling technologies that make the procedure virtually painless and comfortable for all skin types."
      }
    },
    {
      "@type": "Question",
      "name": "How many sessions are needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients require between 6 to 8 sessions spaced 4 to 6 weeks apart to achieve optimal results."
      }
    }
  ]
};

export default function LaserHairRemovalPage() {
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
            <span className="text-sm font-medium tracking-widest text-primary uppercase">Clinical Services</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-2 mb-6">Laser Hair Removal</h1>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Experience the liberation of smooth, hair-free skin. Our clinical-grade permanent laser hair reduction treatments are tailored for all skin types, ensuring precision, safety, and comfort.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl">
              <h2 className="text-2xl font-serif text-white mb-6">Why Choose LHR at Rays?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Advanced triple-wavelength diode cooling lasers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Safe for all Indian skin types and tones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Performed under strict medical hygiene standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/80 text-sm">Painless procedure with active contact cooling</span>
                </li>
              </ul>
            </div>

            <div className="card bg-[#111] p-8 border border-white/5 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-white mb-4">Pricing & Sessions</h2>
                <p className="text-white/80 text-sm mb-4">
                  We offer transparent pricing with zero hidden costs. Custom packages are available based on target areas.
                </p>
                <div className="text-3xl font-serif text-primary mb-2">From ₹1,999 <span className="text-xs text-white/50">/ session</span></div>
              </div>
              <a 
                href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20Laser%20Hair%20Removal%20session." 
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
            <h2 className="text-3xl font-serif text-white mb-6">What to Expect During the Procedure</h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed">
              <p>
                Before starting your LHR session, our experts conduct a thorough patch test and skin analysis. The treatment area is mapped and trimmed. Gel is applied to facilitate smooth movement of the laser applicator.
              </p>
              <p>
                During the laser application, you will feel a mild warm sensation accompanied by a cooling breeze, ensuring comfort. The target area is treated systematically, leaving surrounding skin completely unaffected. Post-treatment cooling gel and sunscreen are applied to soothe the skin.
              </p>
            </div>
          </div>

          {/* Pre & Post Care */}
          <div className="card bg-red-950/20 border border-red-500/20 p-8 rounded-2xl mb-16 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Pre & Post Care Recommendations</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                Avoid direct sun exposure, waxing, or plucking for 2 weeks prior to treatment. Shaving is allowed. Post-session, apply sunscreen regularly, avoid hot baths, and avoid makeup on treated areas for 24 hours.
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
