import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Droplets, Radio } from 'lucide-react';
import purifierImg from '../assets/image copy 2.webp';
import cctvImg from '../assets/image copy 3.webp';
import inverterImg from '../assets/image copy 4.webp';
import sensorImg from '../assets/image copy 5.webp';

const HERO_SLIDES = [
  {
    id: 'purifier',
    category: 'WATER PURIFIERS',
    titleMain: 'MYK Special',
    titleHighlight: 'Hydro-Pure',
    subtitle: 'Invoke purity and health for your family with multi-stage RO + UV + UF filtration — engineered for 99.9% clean drinking water.',
    buttonText: 'Explore Purifiers',
    image: purifierImg,
    badgeBorder: 'border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-cyan-950/50',
    titleHighlightGradient: 'from-cyan-300 via-sky-300 to-blue-400',
    glowColor: 'bg-cyan-500/20',
    buttonGradient: 'from-sky-500 via-cyan-500 to-blue-600 shadow-cyan-500/30',
    icon: Droplets,
  },
  {
    id: 'cctv',
    category: 'SMART SECURITY',
    titleMain: '24/7 AI Vision',
    titleHighlight: '4K Protection',
    subtitle: 'Safeguard your family and property with 4K Ultra HD night-vision security cameras and 360° automated motion alerts.',
    buttonText: 'Explore Cameras',
    image: cctvImg,
    badgeBorder: 'border-indigo-400/40 bg-indigo-950/60 text-indigo-300 shadow-indigo-950/50',
    titleHighlightGradient: 'from-indigo-300 via-purple-300 to-cyan-300',
    glowColor: 'bg-indigo-500/20',
    buttonGradient: 'from-indigo-600 via-purple-600 to-blue-600 shadow-indigo-500/30',
    icon: ShieldCheck,
  },
  {
    id: 'inverter',
    category: 'POWER SOLUTIONS',
    titleMain: 'Uninterrupted',
    titleHighlight: 'Smart Power',
    subtitle: 'Pure sine wave power inverters and long-life energy backup storage ensuring zero downtime during power cuts.',
    buttonText: 'Explore Inverters',
    image: inverterImg,
    badgeBorder: 'border-amber-400/40 bg-amber-950/60 text-amber-300 shadow-amber-950/50',
    titleHighlightGradient: 'from-amber-300 via-yellow-200 to-orange-400',
    glowColor: 'bg-amber-500/20',
    buttonGradient: 'from-amber-500 via-orange-500 to-amber-600 shadow-amber-500/30',
    icon: Zap,
  },
  {
    id: 'sensor',
    category: 'TANK AUTOMATION',
    titleMain: 'Automated Tank',
    titleHighlight: 'Level Control',
    subtitle: 'Smart wireless tank sensors preventing water overflow and dry running, saving water and electricity effortlessly.',
    buttonText: 'Explore Sensors',
    image: sensorImg,
    badgeBorder: 'border-emerald-400/40 bg-emerald-950/60 text-emerald-300 shadow-emerald-950/50',
    titleHighlightGradient: 'from-emerald-300 via-teal-300 to-cyan-300',
    glowColor: 'bg-emerald-500/20',
    buttonGradient: 'from-emerald-500 via-teal-500 to-emerald-600 shadow-emerald-500/30',
    icon: Radio,
  },
];

export default function HeroBanner() {
  const [slideIdx, setSlideIdx] = useState(0);

  const nextSlide = () => {
    setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setSlideIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // 5-Second Auto Play Loop
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slideIdx]);

  const currentSlide = HERO_SLIDES[slideIdx];
  const IconComponent = currentSlide.icon;

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] bg-[#071324] overflow-hidden flex items-center select-none pt-16 sm:pt-20">
      
      {/* Dynamic Left Background Ambient Glow */}
      <div 
        className={`absolute top-1/4 -left-16 w-[450px] h-[450px] rounded-full ${currentSlide.glowColor} filter blur-[120px] pointer-events-none transition-all duration-700`} 
      />

      {/* RIGHT SIDE ONLY IMAGE SHOWCASE (Sri Mandir Style) */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] h-full overflow-hidden pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 50%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 50%)',
        }}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full flex items-center justify-end transition-opacity duration-700 ease-in-out ${
              idx === slideIdx ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.titleMain}
              className="w-full h-full object-cover object-right-top p-0 transition-transform duration-700"
            />
          </div>
        ))}

        {/* GRADIENT MASK BLEND OVERLAY */}
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#071324] via-[#071324]/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* LEFT SIDE EDITORIAL TYPOGRAPHY CONTENT */}
      <div className="relative z-20 w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] py-16 flex flex-col justify-center">
        <div className="max-w-xl space-y-4 sm:space-y-6">
          
          {/* Glowing Glass Badge Tag */}
          <div>
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-xl text-xs font-black tracking-widest uppercase shadow-xl transition-all duration-500 ${currentSlide.badgeBorder}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
              </span>
              <IconComponent size={14} />
              <span>MYK TRADERS SPECIAL <span className="font-extrabold brightness-125">{currentSlide.category}</span></span>
            </div>
          </div>

          {/* Large Bold Headline with Gradient & Drop Shadows */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg">
            {currentSlide.titleMain}{' '}
            <span className={`bg-gradient-to-r ${currentSlide.titleHighlightGradient} bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]`}>
              {currentSlide.titleHighlight}
            </span>
          </h1>

          {/* Subtitle Description - High Contrast & Crisp */}
          <p className="text-slate-100 text-sm sm:text-base lg:text-lg leading-relaxed font-medium pt-1 drop-shadow max-w-lg">
            {currentSlide.subtitle}
          </p>

          {/* Action CTA Button */}
          <div className="pt-2">
            <a
              href="#products"
              className={`group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-white font-extrabold text-sm sm:text-base bg-gradient-to-r ${currentSlide.buttonGradient} hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl border border-white/20`}
            >
              <span>{currentSlide.buttonText}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>

      {/* LEFT & RIGHT NAVIGATION ARROWS (COMPACT SIZE) */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>

      {/* BOTTOM SLIDER INDICATOR DOTS & BAR (Sri Mandir Style) */}
      <div className="absolute bottom-6 inset-x-0 z-30 flex items-center justify-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setSlideIdx(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === slideIdx
                ? 'w-10 h-2 bg-white shadow-md'
                : 'w-2.5 h-2.5 bg-slate-500/60 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
