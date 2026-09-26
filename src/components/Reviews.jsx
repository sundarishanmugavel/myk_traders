import React, { useState, useEffect } from 'react';
import { Star, Quote, Award, ShieldCheck, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

const GoogleIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const REVIEWS = [
  {
    id: 1,
    name: 'Fathima',
    location: 'Ramanathapuram',
    initial: 'F',
    initialBg: 'bg-[#0066FF]',
    rating: 5,
    text: 'Excellent water purifier and outstanding service! The product quality is very good, and the team is professional, responsive, and provides quick service. Highly recommended!',
  },
  {
    id: 2,
    name: 'Mohamed Sahib',
    location: 'Ramanathapuram',
    initial: 'M',
    initialBg: 'bg-[#16A34A]',
    rating: 5,
    text: 'They reached my home at 2:30 PM and completed the work by 3:00 PM. Everything was installed neatly, and they clearly explained how to use it. One of the best shops in Ramanathapuram for inverters, Aqua water systems, CCTV, and more — MYK Traders.',
  },
  {
    id: 3,
    name: 'Sheik Ibrahim',
    location: 'Ramanathapuram',
    initial: 'S',
    initialBg: 'bg-[#7C3AED]',
    rating: 5,
    text: "Recently I contacted myk traders for a service ....one time I forgot about the service but his team called me on time and executed the service that is where I'm impressed by myk traders ...so again I called him and his team for the service ..a best place for ur house technical need.",
  },
  {
    id: 4,
    name: 'Naveen Kannan',
    location: 'Ramanathapuram',
    initial: 'N',
    initialBg: 'bg-[#0284C7]',
    rating: 5,
    text: 'I have travel with Myk Traders like past 2 years, Best Techncians, Best Service Like cctv camera, Inverter batteries, Water Purifier (RO) and construction electical and plumbing Work.',
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      return 2;
    }
    return 2;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerPage);

  // Automatic carousel interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-8 sm:py-10 lg:py-12 bg-gradient-to-r from-blue-50/40 via-sky-50/20 to-blue-50/50 text-slate-900 border-b border-slate-200/50 relative overflow-hidden">

      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* 1. TABLET LAYOUT FOR 768px & 1024px (FOR 768px - 1279px SCREEN WIDTH) */}
        {/* ========================================================================= */}
        <div className="hidden md:block xl:hidden space-y-6">

          {/* Top Header Row with Title on Left & Rating Card on Right */}
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Header */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1B3D]">
                  CUSTOMER REVIEWS
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.12] text-[#0B1B3D]">
                WHAT OUR <span className="text-[#EF4444]">CUSTOMERS SAY</span>
              </h2>

              <p className="text-slate-500 text-xs sm:text-sm font-medium pt-0.5">
                Real experiences. Real people. Real trust.
              </p>
            </div>

            {/* Right Rating Box */}
            <div className="bg-white rounded-2xl p-3.5 shadow-xs border border-slate-100 flex items-center gap-3.5 shrink-0">
              <div className="shrink-0 bg-slate-50 p-2 rounded-xl">
                <GoogleIcon size={34} />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-[#0B1B3D]">4.9 / 5</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium block">Based on Google Reviews</span>
              </div>
            </div>

          </div>

          {/* Carousel Track (2 Cards Side-by-Side) */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Overflow Track */}
            <div className="overflow-hidden p-1 -m-1">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="w-1/2 shrink-0 px-2.5"
                  >
                    <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100/90 flex flex-col justify-between h-full min-h-[220px] hover:shadow-md transition-all duration-300 relative group">
                      
                      {/* Top Row: Quote Icon + 5 Stars + Google Icon */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                            <Quote size={14} className="fill-[#0066FF]" />
                          </div>

                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>

                          <GoogleIcon size={18} />
                        </div>

                        {/* Review Quote Text */}
                        <p className="text-slate-600 text-xs font-normal leading-relaxed">
                          "{rev.text}"
                        </p>
                      </div>

                      {/* Bottom Reviewer Info */}
                      <div className="pt-3 border-t border-slate-100/80 mt-3 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${rev.initialBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                          {rev.initial}
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold text-[#0B1B3D] leading-tight">
                            {rev.name}
                          </h3>
                          <span className="text-[10px] text-slate-400 font-medium block pt-0.5">
                            {rev.location}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Controls & Dots */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-1.5">
                {[...Array(maxIndex + 1)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-6 bg-[#0066FF]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. DEFAULT LAYOUT FOR MOBILE (< 768px) AND LARGE DESKTOP (>= 1280px) */}
        {/* ========================================================================= */}
        <div className="block md:hidden xl:block">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

            {/* Left Column: Title, Rating Badge & 3 Feature Badges */}
            <div className="xl:col-span-4 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1B3D]">
                    CUSTOMER REVIEWS
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl xl:text-[2.25rem] font-black tracking-tight leading-[1.12] text-[#0B1B3D]">
                  WHAT OUR<br />
                  <span className="text-[#EF4444]">CUSTOMERS SAY</span>
                </h2>

                <p className="text-slate-500 text-sm sm:text-base font-medium pt-0.5">
                  Real experiences. Real people. Real trust.
                </p>
              </div>

              {/* Google Rating Card */}
              <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex items-center gap-3.5 max-w-[310px]">
                <div className="shrink-0 bg-slate-50 p-2 rounded-xl">
                  <GoogleIcon size={36} />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-[#0B1B3D]">4.9 / 5</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium block">Based on Google Reviews</span>
                </div>
              </div>

              {/* 3 Badges */}
              <div className="pt-2 grid grid-cols-3 gap-2.5 max-w-[340px]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-rose-100/80 text-[#EF4444] flex items-center justify-center mb-2 shadow-xs">
                    <Award size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1B3D] leading-tight">
                    Trusted<br />by Thousands
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-blue-100/80 text-[#0066FF] flex items-center justify-center mb-2 shadow-xs">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1B3D] leading-tight">
                    Genuine<br />Feedback
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-emerald-100/80 text-[#16A34A] flex items-center justify-center mb-2 shadow-xs">
                    <ThumbsUp size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1B3D] leading-tight">
                    Real<br />Customers
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Carousel */}
            <div 
              className="xl:col-span-8 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center justify-end gap-2 mb-3 pr-1">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="overflow-hidden p-1 -m-1">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                  }}
                >
                  {REVIEWS.map((rev) => (
                    <div
                      key={rev.id}
                      className="w-full sm:w-1/2 shrink-0 px-2 sm:px-2.5"
                    >
                      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100/90 flex flex-col justify-between h-full min-h-[250px] hover:shadow-md transition-all duration-300 relative group">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3.5">
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                              <Quote size={15} className="fill-[#0066FF]" />
                            </div>
                            <div className="flex items-center gap-0.5 text-amber-400">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <GoogleIcon size={20} />
                          </div>
                          <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed">
                            "{rev.text}"
                          </p>
                        </div>
                        <div className="pt-4 border-t border-slate-100/80 mt-4 flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full ${rev.initialBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                            {rev.initial}
                          </div>
                          <div>
                            <h3 className="text-xs sm:text-[13px] font-extrabold text-[#0B1B3D] leading-tight">
                              {rev.name}
                            </h3>
                            <span className="text-[11px] text-slate-400 font-medium block pt-0.5">
                              {rev.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 mt-4">
                {[...Array(maxIndex + 1)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-6 bg-[#0066FF]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
