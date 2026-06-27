"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Laser Hair Removal",
    description: "Silky smooth skin with painless, advanced laser calibration.",
    price: "From ₹1999",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Precision Haircuts",
    description: "Bespoke styling by our master salon craftsmen.",
    price: "From ₹999",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Custom Hair Coloring",
    description: "Vibrant, damage-free coloring using premium global brands.",
    price: "From ₹2499",
    image: "https://images.unsplash.com/photo-1600948836101-f9ff15e34778?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Deep Conditioning",
    description: "Intensive restorative therapies for your tresses.",
    price: "From ₹1499",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Signature Services</h2>
          <p className="text-lg text-foreground/70 font-light max-w-2xl">
            Swipe or drag to explore curations tailored for ultimate rejuvenation.
          </p>
        </motion.div>
      </div>

      <div ref={carouselRef} className="px-6 cursor-grab active:cursor-grabbing w-full">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width - 24 }} // 24 for slight overscroll
          className="flex gap-6 w-max"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative w-[300px] md:w-[400px] h-[450px] rounded-3xl overflow-hidden shadow-md group shrink-0"
              whileHover="hover"
              initial="rest"
            >
              {/* Background Image */}
              <motion.img 
                src={service.image} 
                alt={service.title}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <motion.div 
                variants={{
                  rest: { backgroundColor: "rgba(0,0,0,0.3)" },
                  hover: { backgroundColor: "rgba(0,0,0,0.5)" }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6"
              >
                <div className="bg-primary/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-3 backdrop-blur-md">
                  {service.price}
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                <p className="text-white/80 font-light text-sm line-clamp-2 mb-4">
                  {service.description}
                </p>

                {/* Arrow animation */}
                <motion.div
                  variants={{
                    rest: { x: -20, opacity: 0 },
                    hover: { x: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-white font-medium text-sm mt-auto"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
