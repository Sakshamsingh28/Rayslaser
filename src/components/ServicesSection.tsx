"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "FDA Approved Tech",
    description: "Using the most advanced and safest laser technology available globally."
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
    title: "Painless Experience",
    description: "Specifically calibrated to ensure a comfortable, relaxing session."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    title: "Expert Aesthetic Consultants",
    description: "Trained professionals guiding you towards your personal aesthetic goals."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 bg-white/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Signature Treatments</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
            Specializing in transformative laser hair removal and aesthetic procedures, tailored entirely to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-r from-secondary/30 to-primary/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm border border-white/50"
        >
          <div className="mb-6 md:mb-0 md:pr-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">Laser Hair Removal Expertise</h3>
            <p className="text-foreground/80 max-w-lg">
              Say goodbye to temporary solutions. Embrace silky smooth skin with our customized laser packages designed for maximum efficacy.
            </p>
          </div>
          <button className="clickable bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-all shadow-md shrink-0">
            View Packages
          </button>
        </motion.div>
      </div>
    </section>
  );
}
