"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const reviews = [
  { name: "Ananya Sharma", text: "I had a very smooth experience at Rays Laser aesthetic Clinic and salon. The staff was polite, the place was clean, and the service felt professional from start to finish." },
  { name: "Priya Mehta", text: "The laser treatment gave me great results, and everything was explained clearly before starting. I felt comfortable and well taken care of." },
  { name: "Neha Khan", text: "Very friendly team and quick service. The clinic has a nice atmosphere, and the location in Mankhurd is convenient too." },
  { name: "Kavya Patel", text: "I really liked the attention to detail here. The treatment was handled with care, and the overall experience was excellent." },
  { name: "Ritika Singh", text: "One of the best local places for laser and aesthetic services. Good results, professional staff, and a comfortable setup." },
];

export default function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-[#111] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Client Validation.</h2>
          <p className="text-lg text-white/50 max-w-lg font-light">
            Don&apos;t just take our word for it. Explore stories from individuals who have transcended their aesthetic thresholds.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 backdrop-blur-md">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 text-[#FDE047]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div>
            <div className="text-xl font-bold text-white">5.0 / 5.0</div>
            <div className="text-xs text-white/50 tracking-wider">GOOGLE RATING</div>
          </div>
        </div>
      </div>

      <div ref={carouselRef} className="px-6 cursor-grab active:cursor-grabbing w-full">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width - 24 }}
          className="flex gap-6 w-max"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="card w-[320px] md:w-[450px] shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-4 h-4 text-[#FDE047]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 font-serif leading-relaxed text-lg mb-6 line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto">
                <div className="h-px bg-white/10 w-full mb-4" />
                <div className="font-medium text-white tracking-wide uppercase text-sm">
                  {review.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
