"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What services does Rays Laser Aesthetic Clinic & Salon specialize in?",
    a: "We are a premium hybrid clinic specializing in Laser Hair Removal (LHR), advanced Medi-facials (like HydraFacials), GFC/PRP hair restoration, and luxury bridal/party makeup services."
  },
  {
    q: "Is Laser Hair Removal safe and permanent?",
    a: "Yes, it is FDA-approved and highly effective for permanent hair reduction. We utilize advanced cooling diode lasers that make the treatment virtually painless and safe for all Indian skin types."
  },
  {
    q: "What is the benefit of a HydraFacial over a regular salon facial?",
    a: "Unlike standard facials, a HydraFacial uses a patented vortex-suction technology to deeply cleanse pores and extract blackheads while infusing the skin with clinical-grade nourishing serums."
  },
  {
    q: "How many sessions are required for Hair PRP / GFC treatments?",
    a: "Most patients see substantial hair fall control and density improvement within 4 to 6 sessions, spaced 4 weeks apart."
  },
  {
    q: "How early should I book for bridal makeup services?",
    a: "We recommend booking 3 to 6 months in advance, especially during the peak wedding season, to secure your date and schedule a makeup trial session."
  },
  {
    q: "Where is the clinic located, and do I need an appointment?",
    a: "We are located at Nausena Baug, Mankhurd East, Mumbai (near BARC Gate 6). While we accept walk-ins for select grooming services, we recommend booking a slot in advance for laser and clinic procedures via our WhatsApp button."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">Clarity & Expectations.</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-primary ml-4 shrink-0"
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="pb-8 text-white/50 font-light leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
