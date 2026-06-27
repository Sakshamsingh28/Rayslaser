"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappUrl = "https://wa.me/910000000000"; // Placeholder URL for WhatsApp

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 1 // Appear after main UI loads
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle fill="white" className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-primary/10">
          Book Appointment
        </span>
      </a>
      
      {/* Pulse Effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-[#25D366] rounded-full opacity-30 animate-ping -z-10" style={{ animationDuration: '3s' }}></span>
    </motion.div>
  );
}
