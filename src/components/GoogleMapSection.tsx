"use client";

import { MapPin, Navigation } from "lucide-react";

export default function GoogleMapSection() {
  const mapQuery = "Rays Laser Aesthetic Clinic, Anushakti Nagar, Mumbai";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Find Your Sanctuary.</h2>
            <p className="text-xl text-white/50 font-light max-w-lg">
              Located in the heart of Anushakti Nagar. Visit us to begin your aesthetic transformation.
            </p>
          </div>
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-primary text-white hover:text-primary transition-all group"
          >
            <Navigation className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span className="text-sm tracking-widest uppercase font-medium">Get Directions</span>
          </a>
        </div>

        {/* Map Container */}
        <div className="w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 relative group">
          
          {/* Elegant overlay gradient to blend map edges into the dark theme */}
          <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2rem] z-10 shadow-[inset_0_0_100px_rgba(10,10,10,0.8)]" />
          
          <iframe 
            src={embedUrl}
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%) hue-rotate(180deg)" }} 
            allowFullScreen 
            aria-hidden="false" 
            tabIndex={0}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:filter-none"
            title="Interactive Location Map"
          />

          {/* Location Card Info (Floating) */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 bg-background/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl max-w-sm shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-serif text-white mb-2">Rays Laser Clinic & Salon</h4>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Vijay Hotel, Old Mandala North Building, Gate, VN Purav Rd, Nausena Baug, Mumbai 400094
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
