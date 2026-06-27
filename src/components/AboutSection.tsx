"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // The image scales down slightly as you scroll down
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.1, 0.95]);
  // The text fades in and slides up
  const copyY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Editorial Image scaling down */}
          <div className="relative w-full lg:w-1/2 h-[600px] lg:h-[800px] overflow-hidden rounded-[2rem]">
            <motion.div 
              style={{ scale: imageScale }} 
              className="w-full h-full origin-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Rays Clinic Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Right: Elegant Typography fading in */}
          <motion.div 
            style={{ y: copyY, opacity: copyOpacity }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 mb-8 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-primary/80">
                Philosophy & Vision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] mb-8 text-foreground">
              Mastering the <br /> <span className="text-primary italic">Art of Aesthetics.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light mb-8 max-w-lg">
              At Rays, we believe your canvas deserves nothing but the pinnacle of tailored care. Situated in the heart of Anushakti Nagar, our sanctuary blends cutting-edge technology with timeless luxury.
            </p>
            
            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light mb-12 max-w-lg">
              From precision laser calibration to bespoke bridal artistry, every motion is dedicated to your ultimate transformation.
            </p>

            <a href="#services" className="btn-outline text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500">
              Discover Our Approach
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
