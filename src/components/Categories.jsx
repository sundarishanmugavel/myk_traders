import React from 'react';
import { Headset, ArrowRight, Droplets, Zap, ShieldCheck, Settings, Sun, Sliders, PhoneCall } from 'lucide-react';
import product1Img from '../assets/ww-new.webp';
import product2Img from '../assets/cctv.webp';
import product3Img from '../assets/inverter.webp';
import product4Img from '../assets/solar panel.webp';
import product5Img from '../assets/water motor.webp';
import product6Img from '../assets/tank.webp';

// MOBILE ONLY PRODUCT IMAGES (Screen size <= 640px / 425x645)
import mobCctvImg from '../assets/MOB_CCTV.webp';
import mobInverterImg from '../assets/MOB_INVERTER.webp';
import mobSolarImg from '../assets/MOB_SOLAR.webp';
import mobMotorImg from '../assets/MOB_MOTOR.webp';
import mobTankImg from '../assets/MOB_TANK.webp';

// 768PX TABLET PRODUCT IMAGES
import rectPurifierImg from '../assets/RECT_PURIFIER.webp';
import rectTankSensorImg from '../assets/RECT_TANK_SENSOR.webp';

// BRAND LOGO IMAGE ASSETS
import aquaguardLogo from '../assets/AQUAGUARD.png';
import luminousLogo from '../assets/LUMINOUS.png';
import hikvisionLogo from '../assets/Hikvision-Logo.png';
import tataLogo from '../assets/tata-power-solar-logo.jpg';
import cromptonLogo from '../assets/Crompton_vector_Logo_logoshape.com_.png';
import ashirvadLogo from '../assets/ashirvad.png';
import havellsLogo from '../assets/havells.png';

const PRODUCTS_GRID = [
  { id: 1, title: 'Water Purifiers', image: product1Img, mobImage: rectPurifierImg },
  { id: 2, title: 'CCTV & Surveillance', image: product2Img, mobImage: mobCctvImg },
  { id: 3, title: 'Inverters & Batteries', image: product3Img, mobImage: mobInverterImg },
  { id: 4, title: 'Solar Solutions', image: product4Img, mobImage: mobSolarImg },
  { id: 5, title: 'Water Motors', image: product5Img, mobImage: mobMotorImg },
  { id: 6, title: 'Tank Automation', image: product6Img, mobImage: mobTankImg },
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
    <section id="categories" className="py-6 md:py-10 bg-white text-slate-900 border-b border-slate-200/50 relative overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-4 xl:px-[25px] space-y-8 relative z-10">

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

        {/* SINGLE SCREEN BENTO BOX PRODUCT GRID (2 COLUMNS ON TABLET 768-1024px, 4 COLUMNS ON DESKTOP 1280px+) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-4.5 md:gap-5 xl:gap-4.5 tablet-2col-grid">

          {/* 1. Water Purifiers */}
          <a
            href="#products"
            className="col-span-1 row-span-1 xl:col-span-1 xl:row-span-2 group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-auto"
          >
            <img
              src={rectPurifierImg}
              alt="Water Purifiers"
              className="block xl:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={product1Img}
              alt="Water Purifiers"
              className="hidden xl:block w-full h-full object-cover rounded-xl mx-auto"
            />
          </a>

          {/* 2. CCTV & Surveillance */}
          <a
            href="#products"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <img
              src={mobCctvImg}
              alt="CCTV & Surveillance"
              className="block xl:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={product2Img}
              alt="CCTV & Surveillance"
              className="hidden xl:block w-full h-full object-cover rounded-xl mx-auto"
            />
          </a>

          {/* 3. Inverters & Batteries */}
          <a
            href="#products"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <img
              src={mobInverterImg}
              alt="Inverters & Batteries"
              className="block xl:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={product3Img}
              alt="Inverters & Batteries"
              className="hidden xl:block w-full h-full object-cover rounded-xl mx-auto"
            />
          </a>

          {/* 4. Solar Solutions */}
          <a
            href="#products"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <img
              src={mobSolarImg}
              alt="Solar Solutions"
              className="block xl:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={product4Img}
              alt="Solar Solutions"
              className="hidden xl:block w-full h-full object-cover rounded-xl mx-auto"
            />
          </a>

          {/* 5. Water Motors */}
          <a
            href="#products"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <img
              src={mobMotorImg}
              alt="Water Motors"
              className="block xl:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={product5Img}
              alt="Water Motors"
              className="hidden xl:block w-full h-full object-cover rounded-xl mx-auto"
            />
          </a>

          {/* 6. Tank Automation */}
          <a
            href="#products"
            className="col-span-1 row-span-1 md:col-span-1 xl:col-span-2 group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <img
              src={rectTankSensorImg}
              alt="Tank Automation"
              className="hidden md:block xl:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={mobTankImg}
              alt="Tank Automation"
              className="block md:hidden w-full h-full object-cover rounded-xl mx-auto"
            />
            <img
              src={product6Img}
              alt="Tank Automation"
              className="hidden xl:block w-full h-full object-cover rounded-xl mx-auto"
            />
          </a>

        </div>

        {/* BRANDS WE WORK WITH INFINITE MARQUEE SECTION */}
        <div className="pt-6 pb-6 space-y-4 text-center overflow-hidden">
          <div className="space-y-2 max-w-3xl mx-auto px-4">
            
            {/* Top Badge with Red Flanking Lines */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-10 sm:w-14 md:w-16 h-[2px] bg-[#D9232D]"></div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#0B1B3D]">
                BRANDS WE WORK WITH
              </span>
              <div className="w-10 sm:w-14 md:w-16 h-[2px] bg-[#D9232D]"></div>
            </div>

            {/* Main Bold Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B1B3D]">
              TRUSTED BRANDS. <span className="text-[#D9232D]">GENUINE PRODUCTS.</span>
            </h2>

            {/* Sub-categories with Red Bullets */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base font-medium pt-1">
              <span>Water</span>
              <span className="text-[#D9232D] font-bold text-xs sm:text-sm">•</span>
              <span>Power</span>
              <span className="text-[#D9232D] font-bold text-xs sm:text-sm">•</span>
              <span>Security</span>
              <span className="text-[#D9232D] font-bold text-xs sm:text-sm">•</span>
              <span>Solar</span>
            </div>

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

        {/* ========================================================================= */}
        {/* 1. SPECIFIC 768px & 1024px SCREEN SIZE BANNER (FOR 768px - 1279px SCREEN WIDTH) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex xl:hidden rounded-3xl p-3.5 md:px-4 md:py-3.5 lg:px-6 lg:py-5 bg-gradient-to-r from-[#FFF0F2] via-[#FFF5F6] to-[#FFEBEF] border border-[#FFD8E0] shadow-xs items-center justify-between gap-2 md:gap-2.5 lg:gap-4 relative overflow-hidden">
          
          {/* Left Block: Red Headset Circle + Title & Subtitle (Two-line subtitle) */}
          <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3 z-10 shrink-0">
            <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/25">
              <Headset size={20} strokeWidth={2.2} className="md:hidden" />
              <Headset size={22} strokeWidth={2.2} className="hidden md:block lg:hidden" />
              <Headset size={24} strokeWidth={2.2} className="hidden lg:block" />
            </div>

            <div className="space-y-0.5 text-left">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-[2px] bg-[#E50914] rounded-full"></div>
                <span className="text-[9px] md:text-[9.5px] lg:text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                  NEED HELP CHOOSING?
                </span>
              </div>
              <h3 className="text-sm md:text-base lg:text-xl font-black text-[#0B1B3D] tracking-tight leading-tight">
                Talk to our <span className="text-[#E50914]">experts.</span>
              </h3>
              <p className="text-[9.5px] md:text-[10px] lg:text-[11px] text-slate-500 font-medium leading-snug">
                Get the right solution<br />for your home or business.
              </p>
            </div>
          </div>

          <div className="w-[1px] h-10 md:h-12 lg:h-14 bg-red-200/60 shrink-0"></div>

          {/* Center Block: 4 Feature Circles with Vertical Dividers */}
          <div className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 lg:gap-3 shrink-0">

            {/* 1. Water Solutions */}
            <div className="flex flex-col items-center gap-1 text-center px-0.5">
              <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-blue-100/70 text-[#0084FF] flex items-center justify-center shadow-xs">
                <Droplets size={15} strokeWidth={2.2} className="md:hidden" />
                <Droplets size={16} strokeWidth={2.2} className="hidden md:block lg:hidden" />
                <Droplets size={18} strokeWidth={2.2} className="hidden lg:block" />
              </div>
              <span className="text-[9.5px] md:text-[10px] lg:text-[11px] font-bold text-[#0B1B3D] leading-tight">
                Water<br />Solutions
              </span>
            </div>

            <div className="w-[1px] h-7 md:h-8 lg:h-9 bg-red-200/60"></div>

            {/* 2. Power Backup */}
            <div className="flex flex-col items-center gap-1 text-center px-0.5">
              <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-red-100/70 text-[#E31B23] flex items-center justify-center shadow-xs">
                <Zap size={15} strokeWidth={2.2} className="md:hidden" />
                <Zap size={16} strokeWidth={2.2} className="hidden md:block lg:hidden" />
                <Zap size={18} strokeWidth={2.2} className="hidden lg:block" />
              </div>
              <span className="text-[9.5px] md:text-[10px] lg:text-[11px] font-bold text-[#0B1B3D] leading-tight">
                Power<br />Backup
              </span>
            </div>

            <div className="w-[1px] h-7 md:h-8 lg:h-9 bg-red-200/60"></div>

            {/* 3. Security Systems */}
            <div className="flex flex-col items-center gap-1 text-center px-0.5">
              <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-emerald-100/70 text-[#10B981] flex items-center justify-center shadow-xs">
                <ShieldCheck size={15} strokeWidth={2.2} className="md:hidden" />
                <ShieldCheck size={16} strokeWidth={2.2} className="hidden md:block lg:hidden" />
                <ShieldCheck size={18} strokeWidth={2.2} className="hidden lg:block" />
              </div>
              <span className="text-[9.5px] md:text-[10px] lg:text-[11px] font-bold text-[#0B1B3D] leading-tight">
                Security<br />Systems
              </span>
            </div>

            <div className="w-[1px] h-7 md:h-8 lg:h-9 bg-red-200/60"></div>

            {/* 4. Automation Solutions */}
            <div className="flex flex-col items-center gap-1 text-center px-0.5">
              <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-orange-100/70 text-[#F97316] flex items-center justify-center shadow-xs">
                <Settings size={15} strokeWidth={2.2} className="md:hidden" />
                <Settings size={16} strokeWidth={2.2} className="hidden md:block lg:hidden" />
                <Settings size={18} strokeWidth={2.2} className="hidden lg:block" />
              </div>
              <span className="text-[9.5px] md:text-[10px] lg:text-[11px] font-bold text-[#0B1B3D] leading-tight">
                Automation<br />Solutions
              </span>
            </div>

          </div>

          <div className="w-[1px] h-10 md:h-12 lg:h-14 bg-red-200/60 shrink-0"></div>

          {/* Right Block: Red Capsule Button with Phone Icon inside White Circle */}
          <div className="flex items-center justify-end z-10 shrink-0">
            <a
              href="tel:06380073771"
              className="inline-flex items-center gap-1.5 md:gap-2 lg:gap-2.5 bg-gradient-to-r from-[#FF0A26] to-[#DC2626] hover:from-[#E31B23] hover:to-[#B91C1C] text-white text-[9.5px] md:text-[10.5px] lg:text-xs font-black uppercase tracking-wider pl-1.5 pr-3 md:pl-2 md:pr-4 lg:pr-5 py-1.5 md:py-2 rounded-full shadow-md shadow-red-500/30 hover:shadow-lg hover:shadow-red-500/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer shrink-0"
            >
              <div className="w-5.5 h-5.5 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 rounded-full bg-white text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                <PhoneCall size={11} strokeWidth={2.5} className="md:hidden" />
                <PhoneCall size={12} strokeWidth={2.5} className="hidden md:block lg:hidden" />
                <PhoneCall size={14} strokeWidth={2.5} className="hidden lg:block" />
              </div>
              <span>TALK TO AN EXPERT</span>
              <ArrowRight size={13} strokeWidth={2.8} className="lg:hidden" />
              <ArrowRight size={14} strokeWidth={2.8} className="hidden lg:block" />
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. DEFAULT BANNER FOR MOBILE (< 768px) AND LARGE DESKTOP (>= 1280px) */}
        {/* ========================================================================= */}
        <div className="flex md:hidden xl:flex rounded-2xl sm:rounded-3xl p-6 sm:p-7 xl:px-9 xl:py-6.5 bg-gradient-to-r from-[#FFF2F2] via-[#FFF6F6] to-[#FFEAEA] border border-[#FFDADA] shadow-xs flex-col xl:flex-row items-center justify-between gap-6 relative overflow-hidden">

          {/* Left Block */}
          <div className="flex items-center gap-4 sm:gap-5 z-10 w-full xl:w-auto justify-center xl:justify-start">
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

          {/* Center Block */}
          <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 flex-wrap xl:flex-nowrap">
            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <Droplets size={26} className="text-[#0084FF] fill-[#0084FF]/15" strokeWidth={2.2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Water<br />Solutions
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-red-200/70"></div>

            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <Zap size={26} className="text-[#E31B23] fill-[#E31B23]" strokeWidth={2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Power<br />Backup
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-red-200/70"></div>

            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <ShieldCheck size={26} className="text-[#10B981] fill-[#10B981]/15" strokeWidth={2.2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Security<br />Systems
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-red-200/70"></div>

            <div className="flex flex-col items-center gap-1.5 text-center px-1">
              <Settings size={26} className="text-[#F97316] fill-[#F97316]/10" strokeWidth={2.2} />
              <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                Automation<br />Solutions
              </span>
            </div>
          </div>

          {/* Right Block */}
          <div className="flex items-center justify-center xl:justify-end z-10 w-full xl:w-auto shrink-0">
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
