import React from 'react';
import { Wrench, Settings, Headset, ArrowRight } from 'lucide-react';
import technicianImg from '../assets/image copy 6.webp';

const STEPS = [
  {
    num: '01',
    title: 'Installation',
    desc: 'Professional installation for a hassle-free start.',
    icon: Wrench,
    bgColor: 'bg-[#E8F2FF]',
    iconColor: 'text-[#0066FF]',
    arrowBg: 'bg-[#E8F2FF]',
    arrowColor: 'text-[#0066FF]',
  },
  {
    num: '02',
    title: 'Maintenance',
    desc: 'Regular maintenance to keep everything running smoothly.',
    icon: Settings,
    bgColor: 'bg-[#E6F8ED]',
    iconColor: 'text-[#10B981]',
    arrowBg: 'bg-[#E6F8ED]',
    arrowColor: 'text-[#10B981]',
  },
  {
    num: '03',
    title: 'Repair',
    desc: 'Quick and reliable repairs when you need them.',
    icon: Wrench,
    bgColor: 'bg-[#FFEBEB]',
    iconColor: 'text-[#EF4444]',
    arrowBg: 'bg-[#FFEBEB]',
    arrowColor: 'text-[#EF4444]',
  },
  {
    num: '04',
    title: 'Support',
    desc: 'Friendly expert support, always just a call away.',
    icon: Headset,
    bgColor: 'bg-[#FFF8E6]',
    iconColor: 'text-[#F59E0B]',
    arrowBg: 'bg-[#FFF8E6]',
    arrowColor: 'text-[#F59E0B]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-6 md:py-10 bg-gradient-to-r from-blue-50/60 via-white to-sky-50/60 text-slate-900 border-b border-slate-200/50 relative overflow-hidden">

      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2"></div>

      {/* ========================================================================= */}
      {/* 1. SPECIFIC 768px & 1024px SCREEN SIZE LAYOUT (FOR 768px - 1279px SCREEN WIDTH) */}
      {/* ========================================================================= */}
      <div className="hidden md:block xl:hidden w-full max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="space-y-1.5 mb-5 lg:mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0B1B3D]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.15] text-[#0B1B3D]">
            MORE THAN PRODUCTS.<br />
            <span className="text-[#EF4444]">WE SUPPORT YOU AFTER THE SALE.</span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-medium pt-0.5">
            From installation to ongoing care, we're with you at every step.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-5 items-center">

          {/* Left Column: 2x2 Service Cards Grid */}
          <div className="col-span-8 lg:col-span-9">
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 p-3.5 lg:p-5 shadow-xs flex items-center justify-between gap-2.5 lg:gap-3 hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-start gap-3 lg:gap-3.5">
                      {/* Circle Icon Badge */}
                      <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full ${step.bgColor} ${step.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                        <Icon size={18} strokeWidth={2.2} className="lg:hidden" />
                        <Icon size={20} strokeWidth={2.2} className="hidden lg:block" />
                      </div>

                      {/* Details */}
                      <div className="space-y-0.5">
                        <span className={`text-[11px] lg:text-xs font-black ${step.iconColor} block tracking-wider`}>
                          {step.num}
                        </span>
                        <h3 className="text-sm lg:text-base font-black text-[#0B1B3D] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[11px] lg:text-xs text-slate-500 font-medium leading-relaxed pt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Circular Arrow Badge */}
                    <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full ${step.arrowBg} ${step.arrowColor} flex items-center justify-center shrink-0`}>
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technician Image Showcase */}
          <div className="col-span-4 lg:col-span-3 relative flex justify-center items-center h-full min-h-[250px] lg:min-h-[280px]">
            {/* Ambient Blue Radial Aura Stage */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-full filter blur-xl pointer-events-none"></div>

            <img
              src={technicianImg}
              alt="MYK Traders Service Technician"
              className="relative z-10 w-full max-w-[210px] lg:max-w-[250px] max-h-[270px] lg:max-h-[310px] object-contain mx-auto drop-shadow-md"
            />
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. DEFAULT LAYOUT FOR MOBILE (< 768px) AND LARGE DESKTOP (>= 1280px) */}
      {/* ========================================================================= */}
      <div className="block md:hidden xl:block w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] xl:px-[25px] relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-6 items-center relative z-10">

          {/* Left Column: Header + 4 Process Steps */}
          <div className="xl:col-span-10 space-y-8 xl:py-2">

            {/* Header */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0B1B3D]">
                  OUR SERVICES
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl xl:text-[2.25rem] font-black tracking-tight leading-[1.15] text-[#0B1B3D]">
                MORE THAN PRODUCTS.<br />
                <span className="text-[#EF4444]">WE SUPPORT YOU AFTER THE SALE.</span>
              </h2>

              <p className="text-slate-500 text-sm sm:text-base font-medium pt-0.5">
                From installation to ongoing care, we're with you at every step.
              </p>
            </div>

            {/* 4 Steps Horizontal Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-7 pt-3 items-start">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-center justify-between relative">

                    <div className="flex items-start gap-3.5">
                      <div className={`w-14 h-14 sm:w-[3.75rem] sm:h-[3.75rem] rounded-full ${step.bgColor} ${step.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                        <Icon size={26} strokeWidth={2.3} />
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-xs sm:text-sm font-black text-slate-400 block tracking-wider">
                          {step.num}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#0B1B3D] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-0.5 max-w-none sm:max-w-[210px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {idx < STEPS.length - 1 && (
                      <div className="hidden xl:block text-slate-300 font-light text-xl pl-2 self-center">
                        <ArrowRight size={22} strokeWidth={1.8} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Technician Image Showcase */}
          <div className="xl:col-span-2 relative flex justify-center xl:justify-end items-center h-full min-h-[200px] xl:min-h-[250px] pt-4 xl:pt-0">
            <img
              src={technicianImg}
              alt="MYK Traders Service Technician"
              className="w-full max-w-[240px] xl:max-w-[220px] max-h-[260px] xl:max-h-[275px] object-contain object-center xl:object-right mx-auto xl:mr-0"
            />
          </div>

        </div>

      </div>

    </section>
  );
}
