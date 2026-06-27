"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

/** Array of premium services */
const services = [
  {
    category: "Laser",
    title: "Laser Hair Removal",
    price: "From ₹1999",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    href: "/services/laser-hair-removal"
  },
  {
    category: "Hair",
    title: "Precision Haircuts",
    price: "From ₹999",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    href: "/#contact"
  },
  {
    category: "Hair",
    title: "Custom Coloring",
    price: "From ₹2499",
    image: "https://images.unsplash.com/photo-1600948836101-f9ff15e34778?q=80&w=2070&auto=format&fit=crop",
    href: "/#contact"
  },
  {
    category: "Skin",
    title: "Advanced Facials",
    price: "From ₹2999",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    href: "/services/hydrafacial"
  },
  {
    category: "Make-up",
    title: "Bridal Artistry",
    price: "From ₹14999",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    href: "/services/bridal-makeup"
  }
];

export default function ServicesMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Custom cursor logic for tracking preview image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // center offset
      mouseX.set(e.clientX - 150); 
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Interactive Menu.</h2>
          <p className="text-xl text-white/50 font-light max-w-xl">
            Explore our curated selection of aesthetic enhancements. Hover to preview our craftsmanship.
          </p>
        </div>

        {/* The List Layout */}
        <div className="flex flex-col border-t border-white/10 group/list">
          {services.map((svc, i) => (
            <motion.a
              key={i}
              href={svc.href}
              className="relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial="rest"
              whileHover="hover"
            >
              {/* Left Info */}
              <div className="flex items-center gap-8 md:gap-16 relative z-10 mix-blend-difference pb-4 md:pb-0">
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
              <div className="flex items-center gap-8 relative z-10 mix-blend-difference pl-28 md:pl-0">
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
      </div>

      {/* Trailing Image Preview Modal */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[400px] rounded-2xl overflow-hidden pointer-events-none z-50 shadow-2xl"
        style={{
          x: springX,
          y: springY,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
      >
        {services.map((svc, i) => (
          <img
            key={i}
            src={svc.image}
            alt={svc.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              hoveredIndex === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </motion.div>
      
    </section>
  );
}
