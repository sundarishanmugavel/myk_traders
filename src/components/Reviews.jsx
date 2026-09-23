import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    name: 'Sheik Ibrahim',
    location: 'Ramanathapuram',
    initial: 'S',
    initialBg: 'bg-[#0066FF]',
    rating: 5,
    text: "Recently I contacted MYK Traders for a service. One time I forgot about the service, but his team called me on time and executed the service — that is where I'm impressed by MYK Traders. A best place for your house technical needs!",
  },
  {
    id: 2,
    name: 'Fathima',
    location: 'Ramanathapuram',
    initial: 'F',
    initialBg: 'bg-[#7C3AED]',
    rating: 5,
    text: 'Excellent water purifier and outstanding service! The product quality is very good, and the water purification performance is excellent. The team is professional, responsive, and provides quick service. Highly recommended!',
  },
  {
    id: 3,
    name: 'Mohamed Sahib',
    location: 'Ramanathapuram',
    initial: 'M',
    initialBg: 'bg-[#16A34A]',
    rating: 5,
    text: 'They reached my home at 2:30 PM and completed the work by 3:00 PM. Everything was installed neatly, and they clearly explained how to use it. One of the best shops in Ramanathapuram for inverters, Aqua water systems, CCTV, and more!',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-16 bg-gradient-to-r from-blue-50/50 via-sky-50/20 to-blue-50/60 text-slate-900 border-b border-slate-200/50 relative overflow-hidden">
      
      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Title & Google Rating Badge */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Header */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B1B3D]">
                  CUSTOMER REVIEWS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight leading-[1.12] text-[#0B1B3D]">
                WHAT OUR<br />
                <span className="text-[#0066FF]">CUSTOMERS SAY</span>
              </h2>

              <p className="text-slate-500 text-sm sm:text-base font-normal pt-0.5">
                Real experiences. Real people. Real trust.
              </p>
            </div>

            {/* Google Rating Badge Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 shadow-xs border border-slate-100/90 flex items-center gap-3.5 max-w-[280px]">
              <GoogleIcon size={38} />
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

          </div>

          {/* Right Column: 3 Real Customer Review Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100/90 flex flex-col justify-between h-full min-h-[230px] hover:shadow-md transition-all duration-300 relative group"
                >
                  {/* Top Row: Quote Icon + 5 Stars + Google Icon */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                        <Quote size={14} className="fill-[#0066FF]" />
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <GoogleIcon size={18} />
                    </div>

                    {/* Review Quote Text */}
                    <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Bottom Reviewer Info */}
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
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
