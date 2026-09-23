import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import logoImg from '../assets/image.png';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md' 
        : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/50'
    }`}>
      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px]">
        <div className="flex items-center justify-between gap-4">
          
          {/* BRAND LOGO */}
          <a href="#hero" className="flex items-center group shrink-0">
            <img 
              src={logoImg} 
              alt="MYK Traders Logo" 
              className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* CENTER NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wide text-slate-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-animated hover:text-cyan-600 transition-colors cursor-pointer py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE: TALK TO AN EXPERT BUTTON WITH ADVANCED ANIMATIONS */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:06380073771"
              className="group relative flex items-center gap-3.5 px-5 py-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white animate-red-halo hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-red-400/50"
            >
              {/* Continuous Shimmer Light Beam Pass */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-beam pointer-events-none" />

              <div className="w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                <PhoneCall size={12} className="animate-phone-ring" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[9px] font-extrabold text-red-100 uppercase tracking-widest leading-none mb-0.5">
                  Talk to an Expert
                </span>
                <span className="text-xs sm:text-sm font-black text-white tracking-tight leading-none">
                  063800 73771
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/80 space-y-3 text-slate-800 font-bold">
            <nav className="flex flex-col space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-cyan-600 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-200">
              <a
                href="tel:06380073771"
                className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-red-600 text-white font-bold justify-center text-xs"
              >
                <PhoneCall size={14} />
                <span>Talk to an Expert: 063800 73771</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
