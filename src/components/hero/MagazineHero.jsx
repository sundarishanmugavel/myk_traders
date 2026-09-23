import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { HERO_PAGES } from '../../data/heroPages';
import { createPageCanvasTexture } from '../../utils/createPageTexture';
import FlipPageCanvas from './FlipPageCanvas';
import HeroControls from './HeroControls';

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

  // Direct Jump To Page
  const selectPage = useCallback((targetIdx) => {
    if (isFlipping || targetIdx === currentIdx) return;
    setIsFlipping(true);

    gsap.to(flipProgress, {
      current: 1,
      duration: 0.75,
      ease: 'power3.inOut',
      onComplete: () => {
        setCurrentIdx(targetIdx);
        requestAnimationFrame(() => {
          flipProgress.current = 0;
          setIsFlipping(false);
        });
      },
    });
  }, [currentIdx, isFlipping]);

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
      // Progress > 0.45 -> Complete physical page turn with GSAP power3.inOut
      flipToNext();
    } else {
      // Progress <= 0.45 -> Smoothly spring back to original position
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

  return (
    <section 
      id="hero"
      className="relative w-full h-[90vh] min-h-[580px] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/80 text-slate-900 select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
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
    </section>
  );
}

