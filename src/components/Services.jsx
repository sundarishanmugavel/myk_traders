import React from 'react';
import { Wrench, Settings, Headset, ArrowRight, Droplets, Zap, ShieldCheck } from 'lucide-react';
import technicianImg from '../assets/image copy 6.png';

const STEPS = [
  {
    num: '01',
    title: 'Installation',
    desc: 'Professional installation for a hassle-free start.',
    icon: Wrench,
    bgColor: 'bg-[#E8F2FF]',
    iconColor: 'text-[#0066FF]',
  },
  {
    num: '02',
    title: 'Maintenance',
    desc: 'Regular maintenance to keep everything running smoothly.',
    icon: Settings,
    bgColor: 'bg-[#E6F8ED]',
    iconColor: 'text-[#10B981]',
  },
  {
    num: '03',
    title: 'Repair',
    desc: 'Quick and reliable repairs when you need them.',
    icon: Wrench,
    bgColor: 'bg-[#FFEBEB]',
    iconColor: 'text-[#EF4444]',
  },
  {
    num: '04',
    title: 'Support',
    desc: 'Friendly expert support, always just a call away.',
    icon: Headset,
    bgColor: 'bg-[#FFF8E6]',
    iconColor: 'text-[#F59E0B]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-gradient-to-r from-blue-50/60 via-white to-sky-50/60 text-slate-900 border-b border-slate-200/50 relative overflow-hidden">
      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative z-10">
          
          {/* Left Column: Header + 4 Process Steps (9 Columns) */}
          <div className="lg:col-span-9 space-y-8 lg:py-2">
            
            {/* Header */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0B1B3D]">
                  OUR SERVICES
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.15] text-[#0B1B3D]">
                MORE THAN PRODUCTS.<br />
                <span className="text-[#0066FF]">WE SUPPORT YOU AFTER THE SALE.</span>
              </h2>

              <p className="text-slate-500 text-sm sm:text-base font-medium pt-0.5">
                From installation to ongoing care, we're with you at every step.
              </p>
            </div>

            {/* 4 Steps Horizontal Flow (Enlarged Step Content) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 pt-3 items-start">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-center justify-between relative">
                    
                    <div className="flex items-start gap-3.5">
                      {/* Circle Icon Badge */}
                      <div className={`w-14 h-14 sm:w-[3.75rem] sm:h-[3.75rem] rounded-full ${step.bgColor} ${step.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                        <Icon size={26} strokeWidth={2.3} />
                      </div>

                      {/* Step Details */}
                      <div className="space-y-0.5">
                        <span className="text-xs sm:text-sm font-black text-slate-400 block tracking-wider">
                          {step.num}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#0B1B3D] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-0.5 max-w-[195px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow (Except last item on desktop) */}
                    {idx < STEPS.length - 1 && (
                      <div className="hidden lg:block text-slate-300 font-light text-xl pl-2 self-center">
                        <ArrowRight size={22} strokeWidth={1.8} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Technician Image Showcase (Slightly Increased: 3 Columns) */}
          <div className="lg:col-span-3 relative flex justify-end items-center h-full min-h-[240px] lg:min-h-[290px]">
            <img
              src={technicianImg}
              alt="MYK Traders Service Technician"
              className="w-full max-w-[260px] lg:max-w-[285px] max-h-[290px] lg:max-h-[320px] object-contain object-right"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
