import React from 'react';
import { ChevronLeft, ChevronRight, Award, Droplets, ShieldCheck, Zap, PhoneCall } from 'lucide-react';

const TICKER_ITEMS = [
  { text: '15,000+ Happy Customers across Tamil Nadu', icon: Award, color: 'text-amber-500' },
  { text: 'Ramesh from Chennai ordered Hydro-Pure RO Purifier • 2 min ago', icon: Droplets, color: 'text-cyan-600' },
  { text: 'Free Doorstep Installation & 1-Year Warranty', icon: ShieldCheck, color: 'text-emerald-600' },
  { text: 'Priya from Coimbatore installed 4K AI CCTV Security • 5 min ago', icon: ShieldCheck, color: 'text-indigo-600' },
  { text: '0% Interest EMI Available on all Solar Inverters', icon: Zap, color: 'text-amber-500' },
  { text: 'Suresh from Madurai purchased Pure Sine Wave Inverter • 12 min ago', icon: Zap, color: 'text-orange-500' },
  { text: '24/7 Doorstep Service Support • Call 063800 73771', icon: PhoneCall, color: 'text-blue-600' },
];

export default function HeroControls({ onPrev, onNext }) {
  return (
    <div className="w-full flex flex-col items-end pointer-events-none pb-0 px-0">
      
      {/* FLOATING NAVIGATION ARROWS (COMPACT SIZE) */}
      <div className="pointer-events-auto w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] flex items-center justify-end mb-3">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            className="group relative w-9 h-9 rounded-full bg-white hover:bg-slate-900 hover:text-white backdrop-blur-md border border-slate-200 text-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
            aria-label="Previous Page"
          >
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={onNext}
            className="group relative w-9 h-9 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-cyan-600/30"
            aria-label="Next Page"
          >
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* MARQUEE TICKER BAR (ZERO BORDER-RADIUS + STYLISH DESIGN ACCENTS) */}
      <div className="w-full pointer-events-auto relative bg-white/95 backdrop-blur-md border-y border-slate-200/90 rounded-none py-2.5 px-0 overflow-hidden select-none shadow-md flex items-center">
        <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px]">
          {/* Marquee Track */}
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-800">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 shrink-0">
                    <Icon size={14} className={`${item.color} shrink-0`} />
                    <span>{item.text}</span>
                    <span className="text-slate-300 font-normal select-none mx-3">|</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}






