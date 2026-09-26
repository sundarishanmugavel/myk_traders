import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { HERO_PAGES } from '../../data/heroPages';
import { createPageCanvasTexture } from '../../utils/createPageTexture';
import FlipPageCanvas from './FlipPageCanvas';
import HeroControls from './HeroControls';
import { Check, ArrowRight, Users, Headset, ShieldCheck, Star } from 'lucide-react';

export default function MagazineHero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [, setTextureVersion] = useState(0);

  const flipProgress = useRef(0);
  const startX = useRef(0);
  const isPointerDown = useRef(false);

  const totalPages = HERO_PAGES.length;
  const nextIdx = (currentIdx + 1) % totalPages;

  // Pre-render and cache composite page canvas textures
  const pageTextures = useMemo(() => {
    return HERO_PAGES.map((page) =>
      createPageCanvasTexture(page, () => {
        // Trigger React re-render when texture canvas finishes drawing image
        setTextureVersion((v) => v + 1);
      })
    );
  }, []);

  const currentTexture = pageTextures[currentIdx];
  const nextTexture = pageTextures[nextIdx];

  // Perform full GSAP physical page turn to next page seamlessly
  const flipToNext = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);

    gsap.to(flipProgress, {
      current: 1,
      duration: 0.78,
      ease: 'power3.inOut',
      onComplete: () => {
        // Advance currentIdx first
        setCurrentIdx((prev) => (prev + 1) % totalPages);

        // Reset progress on next frame after React state update commits to prevent flicker
        requestAnimationFrame(() => {
          flipProgress.current = 0;
          setIsFlipping(false);
        });
      },
    });
  }, [isFlipping, totalPages]);

  // Perform full GSAP physical page turn to previous page seamlessly
  const flipToPrev = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);

    const prevIndex = (currentIdx - 1 + totalPages) % totalPages;
    flipProgress.current = 1;
    setCurrentIdx(prevIndex);

    requestAnimationFrame(() => {
      gsap.to(flipProgress, {
        current: 0,
        duration: 0.78,
        ease: 'power3.inOut',
        onComplete: () => {
          setIsFlipping(false);
        },
      });
    });
  }, [currentIdx, isFlipping, totalPages]);

  // 6-Second Automated Page Flip Timer
  useEffect(() => {
    const autoFlipTimer = setInterval(() => {
      if (!isFlipping && !isPointerDown.current) {
        flipToNext();
      }
    }, 6000);

    return () => clearInterval(autoFlipTimer);
  }, [flipToNext, isFlipping]);

  // Drag Gesture Event Handlers
  const handlePointerDown = (e) => {
    if (isFlipping) return;
    isPointerDown.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerMove = (e) => {
    if (!isPointerDown.current || isFlipping) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = startX.current - currentX;

    // Map drag displacement directly to 0..1 page turn progress
    const progress = Math.min(1, Math.max(0, deltaX / 380));
    flipProgress.current = progress;
  };

  const handlePointerUp = () => {
    if (!isPointerDown.current || isFlipping) return;
    isPointerDown.current = false;

    if (flipProgress.current > 0.45) {
      flipToNext();
    } else {
      gsap.to(flipProgress, {
        current: 0,
        duration: 0.45,
        ease: 'power3.out',
      });
    }
  };

  // Keyboard Left / Right Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') flipToNext();
      if (e.key === 'ArrowLeft') flipToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flipToNext, flipToPrev]);

  const currentPage = HERO_PAGES[currentIdx];
  const titleLines = currentPage.title.split('\n');

  return (
    <section id="hero" className="relative w-full bg-slate-50 text-slate-900 select-none">
      
      {/* ========================================================================= */}
      {/* 1. MOBILE HERO LAYOUT (< 768px SCREEN SIZE) MATCHING REFERENCE SCREENSHOT */}
      {/* ========================================================================= */}
      <div 
        className="block md:hidden w-full pt-24 pb-8 px-5 sm:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 relative overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div className="max-w-md mx-auto space-y-4">

          {/* Category Label Badge with Red Dash Line */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2.5px] bg-[#FF3B30] rounded-full shrink-0"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-800">
              {currentPage.category}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.12] text-[#0B1B3D]">
            {titleLines[0]}<br />
            <span className="text-[#FF3B30]">{titleLines[1]}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-0.5">
            {currentPage.subtitle}
          </p>

          {/* Specs Checklist with Red Bullet Checkmarks */}
          <div className="space-y-2 pt-1 pb-1">
            {currentPage.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-4.5 h-4.5 rounded-full bg-[#FF3B30] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={11} strokeWidth={3.5} />
                </div>
                <span className="text-xs font-black text-slate-800">{spec}</span>
              </div>
            ))}
          </div>

          {/* Red Pill CTA Button */}
          <div className="pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#E02D24] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <span>{currentPage.buttonText || 'EXPLORE PRODUCTS'}</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Product Showcase Image */}
          <div className="py-4 flex items-center justify-center">
            <div className="relative w-full max-w-[270px] sm:max-w-[310px] mx-auto">
              <img
                key={currentPage.id}
                src={currentPage.image}
                alt={currentPage.category}
                className="w-full h-auto object-contain drop-shadow-xl animate-in fade-in zoom-in-95 duration-500"
              />
            </div>
          </div>

          {/* 2x2 Grid of 4 Stat Counters */}
          <div className="grid grid-cols-2 gap-3.5 pt-2 max-w-sm mx-auto">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center space-y-0.5">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-[#FF3B30] mb-0.5">
                <Users size={15} />
              </div>
              <span className="text-xl font-black text-[#0B1B3D]">15,000+</span>
              <span className="text-[10px] font-semibold text-slate-500 leading-tight">Customers Served</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center space-y-0.5">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-[#FF3B30] mb-0.5">
                <Headset size={15} />
              </div>
              <span className="text-xl font-black text-[#0B1B3D]">24/7</span>
              <span className="text-[10px] font-semibold text-slate-500 leading-tight">Service Support</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center space-y-0.5">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-[#FF3B30] mb-0.5">
                <ShieldCheck size={15} />
              </div>
              <span className="text-xl font-black text-[#0B1B3D]">100%</span>
              <span className="text-[10px] font-semibold text-slate-500 leading-tight">Genuine Products</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center space-y-0.5">
              <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 mb-0.5">
                <Star size={15} className="fill-amber-500 text-amber-500" />
              </div>
              <span className="text-xl font-black text-[#0B1B3D]">4.9★</span>
              <span className="text-[10px] font-semibold text-slate-500 leading-tight">Customer Rating</span>
            </div>

          </div>

          {/* Pagination Dot Indicators */}
          <div className="flex items-center justify-center gap-2 pt-5">
            {HERO_PAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIdx
                    ? 'w-6 h-2 bg-[#FF3B30]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP MAGAZINE 3D CANVAS HERO (>= 768px SCREEN SIZE) */}
      {/* ========================================================================= */}
      <div 
        className="hidden md:block relative w-full h-[80vh] sm:h-[85vh] min-h-[480px] sm:min-h-[540px] max-h-[700px] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/80"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Background Soft Glow Accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full filter blur-[90px]" />
        </div>
        {/* Full Viewport 3D Canvas Sheet (100vw x 100vh) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <FlipPageCanvas
            currentTexture={currentTexture}
            nextTexture={nextTexture}
            flipProgress={flipProgress}
          />
        </div>

        {/* Floating Ultra-Premium Overlay Controls */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <HeroControls
            onPrev={flipToPrev}
            onNext={flipToNext}
          />
        </div>
      </div>

    </section>
  );
}

