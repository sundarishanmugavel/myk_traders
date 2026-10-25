import { Headset, ArrowRight, Droplets, Zap, ShieldCheck, Settings, PhoneCall } from 'lucide-react';
import product1Img from '../assets/ww-new.webp';
import product2Img from '../assets/cctv.webp';
import product3Img from '../assets/lap_inverter.webp';
import product4Img from '../assets/solar panel.webp';
import product5Img from '../assets/spare_lap.webp';
import product6Img from '../assets/tank.webp';

// MOBILE ONLY PRODUCT IMAGES (Screen size <= 640px / 425x645)
import mobCctvImg from '../assets/MOB_CCTV.webp';
import mobInverterImg from '../assets/mob_Inverter_2.webp';
import mobSolarImg from '../assets/MOB_SOLAR.webp';
import mobMotorImg from '../assets/spares_mob.webp';
import mobTankImg from '../assets/MOB_TANK.webp';

// 768PX TABLET PRODUCT IMAGES
import rectPurifierImg from '../assets/RECT_PURIFIER.webp';
import rectTankSensorImg from '../assets/RECT_TANK_SENSOR.webp';

// BRAND LOGO IMAGE ASSETS
import hiFocusLogo from '../assets/hi_focus.webp';
import eChenLogo from '../assets/e-chen.webp';
import dahuaLogo from '../assets/Dahua_Technology_logo.svg';
import cwLogo from '../assets/cw.webp';
import cpLogo from '../assets/cp logo.webp';
import hikvisionLogo from '../assets/Hikvision-Logo.webp';
import luminousLogo from '../assets/LUMINOUS.webp';
import microtekLogo from '../assets/Microtek-logo.webp';
import nileLogo from '../assets/nile.webp';
import exideLogo from '../assets/Exide-Batteries-Logo-.webp';
import automLogo from '../assets/autom.webp';

const BRAND_LOGOS = [
  { name: 'Hikvision', src: hikvisionLogo, height: 'h-12 sm:h-16 lg:h-18' },
  { name: 'Luminous', src: luminousLogo, height: 'h-8 sm:h-10 lg:h-12' },
  { name: 'Dahua Technology', src: dahuaLogo, height: 'h-8 sm:h-10 lg:h-12' },
  { name: 'Clean Water', src: cwLogo, height: 'h-11 sm:h-13 lg:h-15' },
  { name: 'Microtek', src: microtekLogo, height: 'h-11 sm:h-13 lg:h-15' },
  { name: 'CP PLUS', src: cpLogo, height: 'h-6 sm:h-8 lg:h-9' },
  { name: 'E-CHEN', src: eChenLogo, height: 'h-8 sm:h-10 lg:h-12' },
  { name: 'Exide Batteries', src: exideLogo, height: 'h-8 sm:h-10 lg:h-12' },
  { name: 'Hi-Focus', src: hiFocusLogo, height: 'h-8 sm:h-10 lg:h-12' },
  { name: 'Nile RO Cabinets', src: nileLogo, height: 'h-10 sm:h-12 lg:h-14' },
  { name: 'Autom Tank Automation', src: automLogo, height: 'h-8 sm:h-10 lg:h-12' },
];

export default function Categories() {
  return (
    <section id="products" className="py-6 md:py-10 bg-white text-slate-900 border-b border-slate-200/50 relative overflow-hidden scroll-mt-16 md:scroll-mt-20">
      {/* Anchor alias to support legacy #categories links */}
      <div id="categories" className="absolute -top-24 pointer-events-none opacity-0" aria-hidden="true" />
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

        {/* Complete Semantic Real HTML DOM Layer for Googlebot & SEO Crawlers (Zero visual impact) */}
        <div className="sr-only">
          <h2>Authorised Sales &amp; Service Categories in Ramanathapuram</h2>
          
          <article>
            <h3>CCTV Camera Installation &amp; Service in Ramanathapuram</h3>
            <p>
              Authorised dealer and repair service center for Hikvision, CP PLUS, Dahua, and Hi-Focus CCTV cameras in Ramanathapuram.
              HD dome cameras, IP surveillance, wireless Wi-Fi bullet cameras, 360-degree PTZ night vision, mobile phone remote monitoring,
              concealed wiring, and annual maintenance contracts (AMC) across Ramanathapuram, Pattinamkathan, Rameswaram, Kilakarai, and Paramakudi.
            </p>
          </article>

          <article>
            <h3>Luminous Inverter &amp; Tubular Battery Dealer in Ramanathapuram</h3>
            <p>
              Authorised dealer for Luminous pure sinewave home inverters, Microtek UPS, and Exide heavy-duty tall tubular batteries (150Ah, 200Ah, 220Ah)
              in Ramanathapuram. Coastal heat-resistant batteries, fast charging, old battery exchange with best buyback value, and free doorstep fitting.
            </p>
          </article>

          <article>
            <h3>Rooftop Solar Solutions &amp; Solar Panels in Ramanathapuram</h3>
            <p>
              Tier-1 Mono PERC on-grid and off-grid rooftop solar power plants in Ramanathapuram with PM Surya Ghar Muft Bijli Yojana government subsidy assistance
              up to ₹78,000. Complete TNEB net metering approvals, bi-facial solar panels, and solar water heaters.
            </p>
          </article>

          <article>
            <h3>RO Water Purifier Sales &amp; Service in Ramanathapuram</h3>
            <p>
              Customized multi-stage RO+UV+UF+Copper water purifiers and commercial RO plants for Ramanathapuram high TDS groundwater.
              Authorised sales and doorstep service for Clean Water, Nile designer cabinets, E-Chen booster pumps, and Filmtec membranes.
            </p>
          </article>

          <article>
            <h3>Water Motors, Submersible Pumps &amp; Spares in Ramanathapuram</h3>
            <p>
              Crompton, Havells domestic monobloc pumps, open-well and deep borewell submersible water motors with 100% copper winding,
              voltage fluctuation protection, genuine impellers, and spare parts in Ramanathapuram.
            </p>
          </article>

          <article>
            <h3>Automatic Water Level Controllers &amp; Tank Automation in Ramanathapuram</h3>
            <p>
              Autom stainless steel magnetic sensor automatic water level controllers in Ramanathapuram. Automatic motor ON/OFF,
              dry-run protection, overhead tank overflow prevention, and zero-shock magnetic sensors.
            </p>
          </article>
        </div>

        {/* SINGLE SCREEN BENTO BOX PRODUCT GRID (2 COLUMNS ON TABLET 768-1024px, 4 COLUMNS ON DESKTOP 1280px+) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-4.5 md:gap-5 xl:gap-4.5 tablet-2col-grid">

          {/* 1. Water Purifiers */}
          <a
            href="#products"
            aria-label="Water Purifiers sales and service in Ramanathapuram"
            className="col-span-1 row-span-1 xl:col-span-1 xl:row-span-2 group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-auto"
          >
            <picture className="w-full h-full block">
              <source media="(min-width: 1280px)" srcSet={product1Img} />
              <img
                src={rectPurifierImg}
                alt="Water Purifiers"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl mx-auto"
              />
            </picture>
          </a>

          {/* 2. CCTV & Surveillance */}
          <a
            href="#products"
            aria-label="CCTV camera installation and service in Ramanathapuram"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <picture className="w-full h-full block">
              <source media="(min-width: 1280px)" srcSet={product2Img} />
              <img
                src={mobCctvImg}
                alt="CCTV & Surveillance"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl mx-auto"
              />
            </picture>
          </a>

          {/* 3. Inverters & Batteries */}
          <a
            href="#products"
            aria-label="Luminous inverters and tubular batteries in Ramanathapuram"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <picture className="w-full h-full block">
              <source media="(min-width: 1280px)" srcSet={product3Img} />
              <img
                src={mobInverterImg}
                alt="Inverters & Batteries"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl mx-auto"
              />
            </picture>
          </a>

          {/* 4. Solar Solutions */}
          <a
            href="#products"
            aria-label="Rooftop solar panels and subsidy support in Ramanathapuram"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <picture className="w-full h-full block">
              <source media="(min-width: 1280px)" srcSet={product4Img} />
              <img
                src={mobSolarImg}
                alt="Solar Solutions"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl mx-auto"
              />
            </picture>
          </a>

          {/* 5. Water Motors */}
          <a
            href="#products"
            aria-label="Water motors and submersible pumps in Ramanathapuram"
            className="group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <picture className="w-full h-full block">
              <source media="(min-width: 1280px)" srcSet={product5Img} />
              <img
                src={mobMotorImg}
                alt="Water Motors"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl mx-auto"
              />
            </picture>
          </a>

          {/* 6. Tank Automation */}
          <a
            href="#products"
            aria-label="Automatic water level controllers and sensor motors in Ramanathapuram"
            className="col-span-1 row-span-1 md:col-span-1 xl:col-span-2 group block relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white border border-slate-100/80 h-[220px] xs:h-[240px] sm:h-52 md:h-[240px] lg:h-[305px] xl:h-52"
          >
            <picture className="w-full h-full block">
              <source media="(min-width: 1280px)" srcSet={product6Img} />
              <source media="(min-width: 768px)" srcSet={rectTankSensorImg} />
              <img
                src={mobTankImg}
                alt="Tank Automation"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl mx-auto"
              />
            </picture>
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
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
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
              href="tel:+916380073771"
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
