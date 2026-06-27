import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 lg:mb-32">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-4xl text-white tracking-widest">RAY&apos;S</h3>
            <p className="text-white/50 font-light max-w-sm leading-relaxed">
              Mumbai&apos;s elite destination for aesthetic perfection. Where cutting-edge scientific approaches meet timeless luxury.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://www.instagram.com/rays_beauty_aesthetics/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors"><FaFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors"><FaYoutube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/50 hover:text-white transition-colors text-sm">Philosophy</a></li>
              <li><a href="#services" className="text-white/50 hover:text-white transition-colors text-sm">Aesthetic Menu</a></li>
              <li><a href="#gallery" className="text-white/50 hover:text-white transition-colors text-sm">Clinical Proof</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm">Appointments</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-white mb-6">Visit & Connect</h4>
            <ul className="space-y-4 mb-8">
              <li className="text-white/50 text-sm leading-relaxed">
                Vijay Hotel, Old Mandala North Building, Gate, VN Purav Rd, Nausena Baug, Anushakti Nagar,<br />
                Mumbai, Maharashtra 400094
              </li>
              <li className="text-white/50 text-sm">
                +91 98765 43210 <br />
                inquiries@rayslaser.in
              </li>
            </ul>

            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-white mb-4">Newsletter</h4>
            <div className="flex border-b border-white/20 pb-2 focus-within:border-primary transition-colors">
              <input type="email" placeholder="Enter your email" className="bg-transparent w-full text-sm outline-none text-white placeholder-white/30 focus:ring-0" />
              <button className="text-primary text-sm font-medium uppercase tracking-wider ml-4 hover:opacity-80 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/30 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Rays Clinic. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
