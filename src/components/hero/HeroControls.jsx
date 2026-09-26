import React from 'react';
import { ChevronLeft, ChevronRight, Wrench, MapPin, Gem, PhoneCall } from 'lucide-react';

const TICKER_ITEMS = [
  { text: 'Professional Installation & Support', icon: Wrench, color: 'text-blue-600' },
  { text: 'Serving Ramanathapuram District', icon: MapPin, color: 'text-red-600' },
  { text: 'Genuine Products', icon: Gem, color: 'text-emerald-600' },
  { text: 'Talk to an Expert: 063800 73771', icon: PhoneCall, color: 'text-purple-600' },
];

export default function HeroControls({ onPrev, onNext, currentIdx = 0, totalPages = 4, onSelectPage }) {
  return (
    <div className="w-full flex flex-col pointer-events-none pb-0 px-0">
      
      {/* NAVIGATION CONTROLS (RIGHT) */}
      <div className="pointer-events-auto w-full max-w-[1380px] mx-auto px-4 sm:px-8 flex items-end justify-end mb-4">

        {/* Floating Navigation Controls (Bottom Right) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 shadow-md transition-all active:scale-95 cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={onNext}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all active:scale-95 cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* MARQUEE TICKER BAR */}
      <div className="w-full pointer-events-auto relative bg-white/95 backdrop-blur-md border-y border-slate-200/90 rounded-none py-2 px-0 overflow-hidden select-none shadow-md flex items-center">
        <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px]">
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







