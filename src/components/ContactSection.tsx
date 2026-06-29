"use client";
import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service) return;

    const phoneNumber = "919920681317"; 
    const text = `Hi! My name is ${encodeURIComponent(name)}.%0AI am reaching out regarding the ${encodeURIComponent(service)} service.%0AMy contact is ${encodeURIComponent(phone)}.%0A%0ACould we schedule a consultation?`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow for premium aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center">
        
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white text-center leading-[0.9] tracking-tighter mb-16 mix-blend-screen">
          Ready for your <br /> <span className="text-primary italic">transformation?</span>
        </h2>

        <div className="w-full max-w-xl card bg-[#111] backdrop-blur-xl border-white/10 p-8 md:p-12">
          <h3 className="text-2xl font-serif text-white mb-8 text-center">Secure Your Appointment</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors text-lg"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input 
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors text-lg"
                placeholder="Phone Number (+91)"
              />
            </div>

            <div>
              <select 
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white/80 focus:outline-none focus:border-primary transition-colors text-lg appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#111] text-white/50">Select Service Area</option>
                <option value="Laser Hair Removal" className="bg-[#111]">Laser Hair Removal</option>
                <option value="Bridal Makeup" className="bg-[#111]">Bridal Makeup</option>
                <option value="Advanced Facial" className="bg-[#111]">Advanced Facial</option>
                <option value="Precision Haircut" className="bg-[#111]">Precision Haircut</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full mt-8 btn-primary flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle className="w-5 h-5" fill="currentColor" />
              Book via WhatsApp
            </button>
          </form>
          <p className="text-center text-white/30 text-xs mt-6 tracking-widest uppercase">
            Fast response guaranteed. No obligations.
          </p>
        </div>

      </div>
    </section>
  );
}
