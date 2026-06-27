"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["About", "Services", "Gallery", "Contact"];

  // Shrink the navigation pill on scroll
  const navWidth = useTransform(scrollY, [0, 100], ["90%", "70%"]);
  const navPadding = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="fixed top-6 inset-x-0 z-[100] flex justify-center w-full pointer-events-none"
    >
      <motion.div
        style={{ width: navWidth, padding: navPadding }}
        className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between shadow-2xl transition-all duration-500 ease-out"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group px-4">
          <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-primary transition-colors">
            RAYS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link} 
              href={`/#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-primary transition-all uppercase tracking-widest relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex px-2">
          <Link 
            href="/#contact" 
            className="px-6 py-2 rounded-full font-semibold text-xs tracking-wider uppercase transition-all bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 w-[90%] bg-black/90 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl py-6 px-6 flex flex-col gap-6 pointer-events-auto"
        >
          {links.map((link) => (
            <Link 
              key={link} 
              href={`/#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-white font-serif text-xl tracking-widest uppercase border-b border-white/5 pb-2 border-dashed"
            >
              {link}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            onClick={() => setMobileOpen(false)}
            className="w-full text-center mt-2 bg-primary text-black px-6 py-4 rounded-full font-bold uppercase tracking-wider"
          >
            Book Appointment
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
