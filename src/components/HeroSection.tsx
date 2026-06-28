"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background and text parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section ref={ref} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: bgY }} 
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-center"
      >
        {/* The massive background text layer replicating "Image 2" */}
        <motion.h1 
          style={{ y: textY, opacity: textOpacity }}
          className="text-[15vw] md:text-[18vw] font-serif text-primary/80 leading-none tracking-tighter uppercase whitespace-nowrap select-none mix-blend-screen"
        >
          AESTHETIC
        </motion.h1>
      </motion.div>

      {/* Model Cutout Layer (z-10) sitting precisely over the text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 w-full h-[85%] md:h-[90%] z-10 flex justify-center pointer-events-none"
      >
        {/* The user's requested Cutout Image */}
        <img 
          src="/hero-model.png" 
          alt="Premium Aesthetic Model" 
          className="object-cover md:object-contain object-bottom w-full h-full [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
        />
        {/* In reality, a transparent PNG cutout goes here */ }
      </motion.div>

      {/* Foreground Text & Action Layer (z-20) */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-end h-full pb-24 md:pb-32 text-center pointer-events-auto"
      >
        <motion.p 
          variants={itemVars}
          className="text-sm md:text-base uppercase tracking-[0.5em] text-white/50 mb-4"
        >
          Mumbai&apos;s Premier Destination
        </motion.p>
        
        <motion.h2 
          variants={itemVars}
          className="text-4xl md:text-6xl font-serif text-white mb-8 max-w-3xl drop-shadow-2xl"
        >
          Redefining Luxury Laser & Salon Services
        </motion.h2>

        <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mt-4 relative z-30">
          <a 
            href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20book%20a%20slot%20at%20Rays%20Laser%20Aesthetic%20Clinic%20and%20Salon." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase transition-all bg-[#25D366] text-white hover:bg-[#20ba5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95 duration-300 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book via WhatsApp</span>
          </a>
          
          <Link 
            href="/services" 
            className="w-full sm:w-auto btn-outline text-xs tracking-widest uppercase px-8 py-4 flex items-center justify-center hover:-translate-y-1 duration-300 border-white/20 text-white hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_20%,#0a0a0a_100%)] pointer-events-none opacity-80" />
    </section>
  );
}
