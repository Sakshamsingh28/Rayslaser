"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/** Array of premium services */
const services = [
  {
    category: "Laser",
    title: "Laser Hair Removal",
    price: "From ₹1999",
    href: "/services/laser-hair-removal"
  },
  {
    category: "Hair",
    title: "Precision Haircuts",
    price: "From ₹999",
    href: "/#contact"
  },
  {
    category: "Hair",
    title: "Custom Coloring",
    price: "From ₹2499",
    href: "/#contact"
  },
  {
    category: "Skin",
    title: "Advanced Facials",
    price: "From ₹2999",
    href: "/services/hydrafacial"
  },
  {
    category: "Make-up",
    title: "Bridal Artistry",
    price: "From ₹14999",
    href: "/services/bridal-makeup"
  }
];

export default function ServicesMenu() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Interactive Menu.</h2>
          <p className="text-xl text-white/50 font-light max-w-xl">
            Explore our curated selection of aesthetic enhancements designed to elevate your personal style.
          </p>
        </div>

        {/* The List Layout */}
        <div className="flex flex-col border-t border-white/10 group/list">
          {services.map((svc, i) => (
            <motion.a
              key={i}
              href={svc.href}
              className="relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 group cursor-pointer"
              initial="rest"
              whileHover="hover"
            >
              {/* Left Info */}
              <div className="flex items-center gap-8 md:gap-16 relative z-10 pb-4 md:pb-0">
                <span className="text-sm font-medium tracking-widest text-primary/80 uppercase w-20">
                  {svc.category}
                </span>
                <motion.h3 
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-3xl md:text-5xl font-serif text-white transition-colors group-hover:text-primary"
                >
                  {svc.title}
                </motion.h3>
              </div>

              {/* Right Info */}
              <div className="flex items-center gap-8 relative z-10 pl-28 md:pl-0">
                <span className="text-lg text-white/70 font-light">{svc.price}</span>
                <motion.div 
                  variants={{
                    rest: { opacity: 0, x: -10 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Explore All CTA Button */}
        <div className="mt-16 flex justify-center relative z-20">
          <Link
            href="/services"
            className="btn-primary flex items-center gap-2 group text-sm uppercase tracking-widest px-8 py-4 pointer-events-auto hover:scale-105 transition-transform"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
    </section>
  );
}
