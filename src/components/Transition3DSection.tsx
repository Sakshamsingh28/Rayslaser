"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Transition3DSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale and rotate the container organically based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative w-full h-[80vh] bg-background flex items-center justify-center overflow-hidden py-12">
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        
        <motion.div 
          style={{ opacity }}
          className="md:w-1/2 flex flex-col justify-center max-w-lg z-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            The Intersection of <span className="text-primary italic">Geometry & Beauty</span>
          </h2>
          <p className="text-white/60 font-light text-lg">
            Our aesthetic logic is engineered like a perfect lattice. Advanced algorithms inside our laser diodes ensure that every treatment is tailored precisely to your unique biology.
          </p>
        </motion.div>

        {/* 3D Gold Geometry Image */}
        <motion.div 
          style={{ scale, opacity }}
          className="w-full md:w-1/2 h-[500px] flex items-center justify-center relative group z-10"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-primary/40" />
          
          <img
            src="/assets/Laser-Skin-Treatments.png"
            alt="Laser and Skin Treatments"
            className="w-full h-full object-cover rounded-3xl relative z-10 border border-white/10 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
