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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen(false);

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = href;
      }
    }, 10);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/50'
      }`}>
        <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px]">
          <div className="flex items-center justify-between gap-4">
            
            {/* BRAND LOGO */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center group shrink-0"
            >
              <img 
                src={logoImg} 
                alt="MYK Traders Logo" 
                className="h-8 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* MOBILE ONLY CENTER CTA BUTTON */}
            <div className="flex md:hidden items-center justify-center flex-1 mx-1">
              <a
                href="tel:06380073771"
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white text-xs font-black animate-red-halo hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-red-400/50 shadow-md"
              >
                {/* Continuous Shimmer Light Beam Pass */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-beam pointer-events-none" />

                <PhoneCall size={14} className="animate-phone-ring shrink-0 relative z-10" />
                <span className="text-xs sm:text-sm font-black whitespace-nowrap relative z-10">Talk to an Expert</span>
              </a>
            </div>

            {/* CENTER NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-xs lg:text-sm font-bold tracking-wide text-slate-700">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link-animated hover:text-cyan-600 transition-colors cursor-pointer py-1 text-xs lg:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE: TALK TO AN EXPERT BUTTON WITH ADVANCED ANIMATIONS */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href="tel:06380073771"
                className="group relative flex items-center gap-3 lg:gap-4 px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white animate-red-halo hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-red-400/50 shadow-md"
              >
                {/* Continuous Shimmer Light Beam Pass */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-beam pointer-events-none" />

                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white text-red-600 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <PhoneCall size={12} className="animate-phone-ring lg:hidden" />
                  <PhoneCall size={14} className="animate-phone-ring hidden lg:block" />
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[9px] lg:text-[10px] font-extrabold text-red-100 uppercase tracking-widest leading-none mb-0.5">
                    Talk to an Expert
                  </span>
                  <span className="text-xs lg:text-base font-black text-white tracking-tight leading-none">
                    063800 73771
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button (hidden on 768px / md and above) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer relative z-[60]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* Right Side Off-Canvas Navigation Drawer (Mobile / Tablet) */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/40 z-[90] transition-opacity duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(false);
            }}
          />

          {/* Right Side Drawer Panel */}
          <aside className="fixed top-0 right-0 bottom-0 z-[100] w-[270px] sm:w-[310px] h-screen max-h-screen bg-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200">
            <div>
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between p-3.5 border-b border-slate-100 bg-slate-50/50">
                <img src={logoImg} alt="MYK Traders" className="h-7 w-auto object-contain" />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 active:bg-slate-300 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="p-3.5 flex flex-col space-y-1 text-slate-800 font-bold">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:text-red-600 active:bg-slate-100 hover:bg-slate-50 transition-colors text-base font-bold text-slate-800 cursor-pointer"
                  >
                    <span>{link.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Info */}
            <div className="p-3.5 border-t border-slate-100 bg-slate-50/80">
              <p className="font-extrabold text-slate-800 text-xs">MYK Traders</p>
              <p className="text-[11px] text-slate-500 font-medium leading-tight">Water, Power & Security Solutions</p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
