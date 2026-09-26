import React from 'react';
import { Users, Settings, Headset, Gem, Wrench, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
import aboutShowcaseImg from '../assets/about_showcase.webp';

function CountUpNumber({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-US')}{suffix}
    </span>
  );
}

export default function About() {
  // Data for 1024px Layout

  const whyChooseUsCards1024 = [
    {
      num: "01",
      title: "Genuine Products",
      desc: "Trusted brands for residential and commercial needs.",
      icon: Gem,
      badgeBg: "bg-red-100 text-red-600 border border-red-200",
      cardBg: "bg-[#FFF2F4] border border-[#FFDADA]",
      numColor: "text-red-600"
    },
    {
      num: "02",
      title: "Expert Installation",
      desc: "Professional doorstep installation and setup by experienced technicians.",
      icon: Wrench,
      badgeBg: "bg-blue-100 text-blue-600 border border-blue-200",
      cardBg: "bg-[#F0F6FF] border border-[#DCE8FF]",
      numColor: "text-blue-600"
    },
    {
      num: "03",
      title: "Complete Service",
      desc: "Installation, maintenance, repairs and after-sales support.",
      icon: ShieldCheck,
      badgeBg: "bg-emerald-100 text-emerald-600 border border-emerald-200",
      cardBg: "bg-[#F0FDF4] border border-[#DCFCE7]",
      numColor: "text-emerald-600"
    },
    {
      num: "04",
      title: "Local Support",
      desc: "Serving customers across Ramanathapuram district with dependable local assistance.",
      icon: MapPin,
      badgeBg: "bg-amber-100 text-amber-600 border border-amber-200",
      cardBg: "bg-[#FFFBEB] border border-[#FDE68A]",
      numColor: "text-amber-600"
    }
  ];

  // Data for Default Layout (< 1024px and >= 1280px)
  const whyChooseUsDataDefault = [
    {
      num: "01",
      title: "Genuine Products",
      desc: "Trusted brands for residential and commercial needs.",
      icon: Gem,
      borderColor: "border-red-200/90 text-red-600 bg-red-50/40"
    },
    {
      num: "02",
      title: "Expert Installation",
      desc: "Professional doorstep installation and setup by experienced technicians.",
      icon: Wrench,
      borderColor: "border-blue-200/90 text-blue-600 bg-blue-50/40"
    },
    {
      num: "03",
      title: "Complete Service",
      desc: "Installation, maintenance, repairs and after-sales support.",
      icon: ShieldCheck,
      borderColor: "border-emerald-200/90 text-emerald-600 bg-emerald-50/40"
    },
    {
      num: "04",
      title: "Local Support",
      desc: "Serving customers across Ramanathapuram district with dependable local assistance.",
      icon: MapPin,
      borderColor: "border-purple-200/90 text-purple-600 bg-purple-50/40"
    }
  ];

  return (
    <section id="about" className="pt-6 sm:pt-8 md:pt-4 lg:pt-5 xl:pt-10 pb-6 sm:pb-8 md:pb-10 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/50">
      
      {/* Background Ambient Glow Gradients & Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-dot-pattern opacity-60"></div>
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      {/* ========================================================================= */}
      {/* 1. SPECIFIC 768px & 1024px SCREEN SIZE LAYOUT (FOR 768px - 1279px SCREEN WIDTH) */}
      {/* ========================================================================= */}
      <div className="hidden md:block xl:hidden w-full max-w-[1380px] mx-auto px-4 sm:px-6 space-y-6 relative z-10">

        {/* MAIN ABOUT CARD (CARD 1) MATCHING 1024px/768px REFERENCE DESIGN */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 md:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* LEFT SIDE: TEXT CONTENT & STATS */}
            <div className="col-span-7 space-y-4 lg:space-y-5">
              
              {/* Category Header Label */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-[2px] bg-[#D9232D] rounded-full"></div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B1B3D]">
                  ABOUT MYK TRADERS
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-[#0B1B3D]">
                SMART SOLUTIONS.<br />
                <span className="text-[#D9232D]">TRUSTED LOCALLY.</span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  MYK Traders provides water, power, security and automation solutions across Ramanathapuram district. With 150+ water purifier models and a wide range of trusted products, we help homes and businesses find the right solution for their needs.
                </p>
                <p>
                  From installation to after-sales service, our experienced team delivers reliable products and dependable local support.
                </p>
              </div>

              {/* 3 STAT COUNTERS IN A ROW WITH CIRCULAR ICONS */}
              <div className="flex items-center justify-between pt-2 max-w-md border-t border-slate-100">
                
                {/* Stat 1 */}
                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-[#D9232D]">
                    <Users size={15} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B1B3D]">
                    <CountUpNumber end={7} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                    Years of<br />Experience
                  </div>
                </div>

                <div className="w-[1px] h-14 bg-slate-200"></div>

                {/* Stat 2 */}
                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-[#D9232D]">
                    <Settings size={15} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B1B3D]">
                    <CountUpNumber end={5000} suffix="+" duration={2200} />
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                    Projects<br />Served
                  </div>
                </div>

                <div className="w-[1px] h-14 bg-slate-200"></div>

                {/* Stat 3 */}
                <div className="flex flex-col items-start gap-1">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-[#D9232D]">
                    <Headset size={15} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0B1B3D]">24/7</div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                    Service<br />Support
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE: 3D PODIUM SHOWCASE STAGE */}
            <div className="col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-none group mx-auto">
                <img
                  src={aboutShowcaseImg}
                  alt="MYK Traders Smart Solutions Showcase"
                  className="w-full h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* WHY CHOOSE MYK? CARD (CARD 2 - 2x2 GRID OF FEATURE CARDS) MATCHING 1024px/768px REFERENCE DESIGN */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 lg:p-9 shadow-xs space-y-5 lg:space-y-6">
          
          {/* Section Header */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-[2px] bg-[#D9232D] rounded-full"></div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B1B3D]">
              WHY CHOOSE MYK?
            </span>
          </div>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-2 gap-3.5 lg:gap-4">
            {whyChooseUsCards1024.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.num}
                  className={`p-4 lg:p-5 rounded-2xl ${card.cardBg} flex items-start gap-3 lg:gap-4 transition-transform hover:-translate-y-0.5`}
                >
                  <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full ${card.badgeBg} flex items-center justify-center shrink-0 shadow-xs`}>
                    <IconComp size={18} className="lg:hidden" />
                    <IconComp size={20} className="hidden lg:block" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-extrabold font-mono ${card.numColor}`}>{card.num}</span>
                      <h3 className="text-sm lg:text-base font-black text-[#0B1B3D] tracking-tight">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE LAYOUT (< 768px ONLY) */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] relative z-10 space-y-3.5">
        
        {/* 1. Header + Paragraphs */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              ABOUT MYK TRADERS
            </span>
            <div className="w-10 h-[2px] bg-red-600 rounded-full"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
            SMART SOLUTIONS.<br />
            <span className="text-[#D9232D]">TRUSTED LOCALLY.</span>
          </h2>

          <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            <p>
              MYK Traders provides water, power, security and automation solutions across Ramanathapuram district. With 150+ water purifier models and a wide range of trusted products, we help homes and businesses find the right solution for their needs.
            </p>
            <p>
              From installation to after-sales service, our experienced team delivers reliable products and dependable local support.
            </p>
          </div>
        </div>

        {/* 2. 3D PODIUM SHOWCASE IMAGE (TIGHT SPACING ON MOBILE) */}
        <div className="flex items-center justify-center -my-1 py-0">
          <div className="relative w-full max-w-[310px] mx-auto">
            <img
              src={aboutShowcaseImg}
              alt="MYK Traders Smart Solutions Showcase"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* 3. TRUST BANNER STAT COUNTERS (PLACED DIRECTLY BELOW THE IMAGE ON MOBILE) */}
        <div className="flex items-center justify-between py-3 border-y border-slate-200/80 max-w-md mx-auto">
          <div className="flex flex-col items-center text-center gap-1">
            <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
              <Users size={16} />
            </div>
            <div className="text-2xl font-black text-slate-900">
              <CountUpNumber end={7} suffix="+" duration={1800} />
            </div>
            <div className="text-xs font-medium text-slate-500 leading-tight">
              Years of<br />Experience
            </div>
          </div>

          <div className="w-[1px] h-14 bg-slate-300/70"></div>

          <div className="flex flex-col items-center text-center gap-1">
            <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
              <Settings size={16} />
            </div>
            <div className="text-2xl font-black text-slate-900">
              <CountUpNumber end={5000} suffix="+" duration={2200} />
            </div>
            <div className="text-xs font-medium text-slate-500 leading-tight">
              Projects<br />Served
            </div>
          </div>

          <div className="w-[1px] h-14 bg-slate-300/70"></div>

          <div className="flex flex-col items-center text-center gap-1">
            <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
              <Headset size={16} />
            </div>
            <div className="text-2xl font-black text-slate-900">24/7</div>
            <div className="text-xs font-medium text-slate-500 leading-tight">
              Service<br />Support
            </div>
          </div>
        </div>

        {/* 4. WHY CHOOSE MYK? LIST */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-red-600 rounded-full"></div>
            <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">
              WHY CHOOSE MYK?
            </span>
          </div>

          <div className="space-y-3.5">
            {whyChooseUsDataDefault.map((item) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.num} 
                  className="flex items-start gap-3.5 pb-3.5 border-b border-slate-200/60 last:border-none last:pb-0"
                >
                  <div className={`w-7 h-7 rounded-full border ${item.borderColor} flex items-center justify-center shrink-0 mt-0.5`}>
                    <IconComponent size={14} />
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">{item.num} —</span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. LARGE DESKTOP LAYOUT (>= 1280px ONLY) */}
      {/* ========================================================================= */}
      <div className="hidden xl:block w-full max-w-[1380px] mx-auto px-[25px] relative z-10">
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* LEFT COLUMN: TITLE, BIO, STATS */}
          <div className="col-span-5 space-y-6">

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                ABOUT MYK TRADERS
              </span>
              <div className="w-10 h-[2px] bg-red-600 rounded-full"></div>
            </div>

            <h2 className="text-[2.75rem] font-extrabold tracking-tight leading-[1.15] text-slate-900">
              SMART SOLUTIONS.<br />
              <span className="text-[#D9232D]">TRUSTED LOCALLY.</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
              <p>
                MYK Traders provides water, power, security and automation solutions across Ramanathapuram district. With 150+ water purifier models and a wide range of trusted products, we help homes and businesses find the right solution for their needs.
              </p>
              <p>
                From installation to after-sales service, our experienced team delivers reliable products and dependable local support.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 max-w-md">
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
                  <Users size={16} />
                </div>
                <div className="text-3xl font-black text-slate-900">
                  <CountUpNumber end={7} suffix="+" duration={1800} />
                </div>
                <div className="text-xs font-medium text-slate-500 leading-tight">
                  Years of<br />Experience
                </div>
              </div>

              <div className="w-[1px] h-16 bg-slate-300/70"></div>

              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
                  <Settings size={16} />
                </div>
                <div className="text-3xl font-black text-slate-900">
                  <CountUpNumber end={5000} suffix="+" duration={2200} />
                </div>
                <div className="text-xs font-medium text-slate-500 leading-tight">
                  Projects<br />Served
                </div>
              </div>

              <div className="w-[1px] h-16 bg-slate-300/70"></div>

              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
                  <Headset size={16} />
                </div>
                <div className="text-3xl font-black text-slate-900">24/7</div>
                <div className="text-xs font-medium text-slate-500 leading-tight">
                  Service<br />Support
                </div>
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: 3D PODIUM SHOWCASE */}
          <div className="col-span-3 flex flex-col items-center justify-center relative py-4">
            <div className="relative w-full max-w-none group transform scale-[1.22] origin-center transition-transform mx-auto">
              <img
                src={aboutShowcaseImg}
                alt="MYK Traders Smart Solutions Showcase"
                className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: WHY CHOOSE MYK FEATURE LIST */}
          <div className="col-span-4 space-y-5 pl-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-red-600 rounded-full"></div>
              <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">
                WHY CHOOSE MYK?
              </span>
            </div>

            <div className="space-y-4">
              {whyChooseUsDataDefault.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.num} 
                    className="flex items-start gap-3.5 pb-4 border-b border-slate-200/60 last:border-none last:pb-0"
                  >
                    <div className={`w-7 h-7 rounded-full border ${item.borderColor} flex items-center justify-center shrink-0 mt-0.5`}>
                      <IconComponent size={14} />
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">{item.num} —</span>
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
