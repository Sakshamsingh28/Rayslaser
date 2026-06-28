"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PictureCatalogue() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax constraints: Left column moves up slightly faster, right column moves down slightly.
  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = [
    "/assets/Image1.png",
    "/assets/image 2.png",
    "/assets/image 3.png",
    "/assets/image 4.png",
    "/assets/image 5.png",
    "/assets/image 6.png"
  ];

  return (
    <section id="gallery" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">The Proof.</h2>
        <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
          Unfiltered transformations engineered inside the sanctuary of Rays Clinic.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* Column 1 */}
        <motion.div style={{ y: isMobile ? 0 : col1Y }} className="flex flex-col gap-6">
          <img src={images[0]} onClick={() => setLightboxImg(images[0])} className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl cursor-zoom-in hover:opacity-80 transition" alt="Gallery 1" />
          <img src={images[1]} onClick={() => setLightboxImg(images[1])} className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl cursor-zoom-in hover:opacity-80 transition" alt="Gallery 2" />
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: isMobile ? 0 : col2Y }} className="flex flex-col gap-6 md:-mt-20">
          <img src={images[2]} onClick={() => setLightboxImg(images[2])} className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl cursor-zoom-in hover:opacity-80 transition" alt="Gallery 3" />
          <img src={images[3]} onClick={() => setLightboxImg(images[3])} className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl cursor-zoom-in hover:opacity-80 transition" alt="Gallery 4" />
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: isMobile ? 0 : col3Y }} className="flex flex-col gap-6">
          <img src={images[4]} onClick={() => setLightboxImg(images[4])} className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl cursor-zoom-in hover:opacity-80 transition" alt="Gallery 5" />
          <img src={images[5]} onClick={() => setLightboxImg(images[5])} className="w-full h-[300px] md:h-[650px] object-cover rounded-3xl cursor-zoom-in hover:opacity-80 transition" alt="Gallery 6" />
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-8 right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              src={lightboxImg} className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
