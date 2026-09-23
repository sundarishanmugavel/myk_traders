import React from 'react';
import { Headset, ArrowRight, Droplets, Zap, ShieldCheck, Settings, Sun, Sliders } from 'lucide-react';
import product1Img from '../assets/ww-new.png';
import product2Img from '../assets/cctv.png';
import product3Img from '../assets/inverter.png';
import product4Img from '../assets/solar panel.png';
import product5Img from '../assets/water motor.png';
import product6Img from '../assets/tank.png';

// BRAND LOGO IMAGE ASSETS
import aquaguardLogo from '../assets/AQUAGUARD.png';
import luminousLogo from '../assets/LUMINOUS.png';
import hikvisionLogo from '../assets/Hikvision-Logo.png';
import tataLogo from '../assets/tata-power-solar-logo.jpg';
import cromptonLogo from '../assets/Crompton_vector_Logo_logoshape.com_.png';
import ashirvadLogo from '../assets/ashirvad.png';
import havellsLogo from '../assets/havells.png';

const PRODUCTS_GRID = [
  { id: 1, title: 'Water Purifiers', image: product1Img },
  { id: 2, title: 'CCTV & Surveillance', image: product2Img },
  { id: 3, title: 'Inverters & Batteries', image: product3Img },
  { id: 4, title: 'Solar Solutions', image: product4Img },
  { id: 5, title: 'Water Motors', image: product5Img },
  { id: 6, title: 'Tank Automation', image: product6Img },
];

const BRAND_LOGOS = [
  { name: 'Aquaguard', src: aquaguardLogo, height: 'h-12 sm:h-16 lg:h-20' },
  { name: 'Luminous', src: luminousLogo, height: 'h-11 sm:h-14 lg:h-18' },
  { name: 'Hikvision', src: hikvisionLogo, height: 'h-11 sm:h-14 lg:h-18' },
  { name: 'Tata Power Solar', src: tataLogo, height: 'h-14 sm:h-20 lg:h-24' },
  { name: 'Crompton', src: cromptonLogo, height: 'h-12 sm:h-16 lg:h-20' },
  { name: 'Ashirvad', src: ashirvadLogo, height: 'h-14 sm:h-20 lg:h-24' },
  { name: 'Havells', src: havellsLogo, height: 'h-11 sm:h-14 lg:h-18' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-10 md:py-14 bg-white text-slate-900 border-b border-slate-200/50 relative overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] space-y-8 relative z-10">

        {/* SECTION HEADER CENTERED MATCHING REFERENCE DESIGN */}
        <div className="relative text-center space-y-1.5 pb-1">
          <div className="flex items-center justify-center gap-2">
            <div className="w-7 h-[2px] bg-[#D9232D] rounded-full"></div>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0B1B3D]">
              OUR PRODUCTS
            </span>
            <div className="w-7 h-[2px] bg-[#D9232D] rounded-full"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight leading-tight text-[#0B1B3D]">
            QUALITY PRODUCTS. <span className="text-[#D9232D]">ONE TRUSTED SOURCE.</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed pt-0.5">
            Clean water, secure spaces, reliable power and smarter living – all under one roof.
          </p>
        </div>

        {/* SINGLE SCREEN BENTO BOX PRODUCT GRID (4 COLUMNS x 2 ROWS ON DESKTOP) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">

          {/* 1. Water Purifiers (Tall card spanning 2 rows on desktop) */}
          <a
            href="#products"
            className="lg:col-span-1 lg:row-span-2 group block relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-64 sm:h-72 md:h-80 lg:h-auto"
          >
            <img
              src={product1Img}
              alt="Water Purifiers"
              className="w-full h-full object-cover rounded-3xl mx-auto"
            />
          </a>

          {/* 2. CCTV & Surveillance */}
          <a
            href="#products"
            className="group block relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-44 sm:h-48 md:h-52 lg:h-52"
          >
            <img
              src={product2Img}
              alt="CCTV & Surveillance"
              className="w-full h-full object-cover rounded-3xl mx-auto"
            />
          </a>

          {/* 3. Inverters & Batteries */}
          <a
            href="#products"
            className="group block relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-44 sm:h-48 md:h-52 lg:h-52"
          >
            <img
              src={product3Img}
              alt="Inverters & Batteries"
              className="w-full h-full object-cover rounded-3xl mx-auto"
            />
          </a>

          {/* 4. Solar Solutions */}
          <a
            href="#products"
            className="group block relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-44 sm:h-48 md:h-52 lg:h-52"
          >
            <img
              src={product4Img}
              alt="Solar Solutions"
              className="w-full h-full object-cover rounded-3xl mx-auto"
            />
          </a>

          {/* 5. Water Motors */}
          <a
            href="#products"
            className="group block relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-44 sm:h-48 md:h-52 lg:h-52"
          >
            <img
              src={product5Img}
              alt="Water Motors"
              className="w-full h-full object-cover rounded-3xl mx-auto"
            />
          </a>

          {/* 6. Tank Automation (Wide banner spanning 2 columns in Row 2) */}
          <a
            href="#products"
            className="md:col-span-2 lg:col-span-2 group block relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-44 sm:h-48 md:h-52 lg:h-52"
          >
            <img
              src={product6Img}
              alt="Tank Automation"
              className="w-full h-full object-cover rounded-3xl mx-auto"
            />
          </a>

        </div>

        {/* BRANDS WE WORK WITH INFINITE MARQUEE SECTION */}
        <div className="pt-4 pb-6 space-y-5 text-center overflow-hidden">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3.5 sm:gap-5">
              <div className="w-12 sm:w-16 md:w-20 h-[3px] bg-[#D9232D] rounded-full"></div>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-widest text-[#0B1B3D]">
                BRANDS WE WORK WITH
              </span>
              <div className="w-12 sm:w-16 md:w-20 h-[3px] bg-[#D9232D] rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium">
              Trusted names. Genuine products.
            </p>
          </div>

          {/* INFINITE MARQUEE TICKER ROW */}
          <div className="relative w-full overflow-hidden select-none py-1">
            <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 whitespace-nowrap">
              {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer px-2"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className={`${brand.height} w-auto object-contain mix-blend-multiply drop-shadow-xs`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM NEED HELP CHOOSING / EXPERT ADVICE BANNER (CLEAN & CRISP DESIGN) */}
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:px-9 lg:py-6.5 bg-gradient-to-r from-[#FFF2F2] via-[#FFF6F6] to-[#FFEAEA] border border-[#FFDADA] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">

          {/* Left Block: Red Headset Circle + Title & Subtitle */}
          <div className="flex items-center gap-4 sm:gap-5 z-10 w-full lg:w-auto justify-center lg:justify-start">
            <div className="w-14 h-14 sm:w-[3.6rem] sm:h-[3.6rem] rounded-full bg-[#E31B23] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
              <Headset size={28} strokeWidth={2.2} />
            </div>

            <div className="space-y-0.5 text-left">
              <span className="text-[11px] font-bold text-[#64748B] tracking-widest uppercase block">
                NEED HELP CHOOSING?
              </span>
              <h3 className="text-2xl sm:text-[1.8rem] font-black text-[#0B1B3D] tracking-tight leading-tight">
                Talk to our <span className="text-[#E31B23]">experts.</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-[#64748B] font-medium pt-0.5">
                Get the right solution for your home or business.
              </p>
            </div>
          </div>

          {/* Center Block: 4 Distinct Color Icons with Vertical Divider Lines */}
          <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 flex-wrap lg:flex-nowrap">

            {/* 1. Water Solutions (Vibrant Blue Droplets) */}
            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <Droplets size={26} className="text-[#0084FF] fill-[#0084FF]/15" strokeWidth={2.2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Water<br />Solutions
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-red-200/70"></div>

            {/* 2. Power Backup (Vibrant Red Lightning) */}
            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <Zap size={26} className="text-[#E31B23] fill-[#E31B23]" strokeWidth={2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Power<br />Backup
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-red-200/70"></div>

            {/* 3. Security Systems (Vibrant Green Shield) */}
            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <ShieldCheck size={26} className="text-[#10B981] fill-[#10B981]/15" strokeWidth={2.2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Security<br />Systems
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-red-200/70"></div>

            {/* 4. Automation Solutions (Vibrant Orange Gear) */}
            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <Settings size={26} className="text-[#F97316] fill-[#F97316]/10" strokeWidth={2.2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Automation<br />Solutions
              </span>
            </div>

          </div>

          {/* Right Block: Red Capsule Pill Button (Prominent & Larger) */}
          <div className="flex items-center justify-center lg:justify-end z-10 w-full lg:w-auto shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#FF0A26] hover:bg-[#E31B23] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-8 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>TALK TO AN EXPERT</span>
              <ArrowRight size={20} strokeWidth={2.8} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
