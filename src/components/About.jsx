import React from 'react';
import { Users, Settings, Headset, Gem, Wrench, ShieldCheck, MapPin } from 'lucide-react';
import aboutShowcaseImg from '../assets/about_showcase.png';

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
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-US')}{suffix}
    </span>
  );
}

export default function About() {
  const whyChooseUsData = [
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
    <section id="about" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/50">
      
      {/* Background Ambient Glow Gradients & Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-dot-pattern opacity-60"></div>
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN: TITLE, BIO, STATS (Col Span 5: ~40% width) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Small Category Label */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                ABOUT MYK TRADERS
              </span>
              <div className="w-10 h-[2px] bg-red-600 rounded-full"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.15] text-slate-900">
              SMART SOLUTIONS.<br />
              <span className="text-[#D9232D]">TRUSTED LOCALLY.</span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                MYK Traders provides water, power, security and automation solutions across Ramanathapuram district. With 150+ water purifier models and a wide range of trusted products, we help homes and businesses find the right solution for their needs.
              </p>
              <p>
                From installation to after-sales service, our experienced team delivers reliable products and dependable local support.
              </p>
            </div>

            {/* 3 STAT COUNTERS WITH VERTICAL SEPARATORS & ANIMATED COUNT UP */}
            <div className="flex items-center justify-between pt-3 max-w-md">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
                  <Users size={16} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  <CountUpNumber end={7} suffix="+" duration={1800} />
                </div>
                <div className="text-xs font-medium text-slate-500 leading-tight">
                  Years of<br />Experience
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-16 bg-slate-300/70"></div>

              {/* Stat 2 */}
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
                  <Settings size={16} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  <CountUpNumber end={5000} suffix="+" duration={2200} />
                </div>
                <div className="text-xs font-medium text-slate-500 leading-tight">
                  Projects<br />Served
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-16 bg-slate-300/70"></div>

              {/* Stat 3 */}
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-1">
                  <Headset size={16} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">24/7</div>
                <div className="text-xs font-medium text-slate-500 leading-tight">
                  Service<br />Support
                </div>
              </div>

            </div>

          </div>

          {/* CENTER COLUMN: 3D PODIUM SHOWCASE & SCRIPT OVERLAY (Col Span 3: ~25% width, scaled ~10%) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center relative py-4 lg:py-0">
            

            {/* Product Podium Image (Scaled +10%) */}
            <div className="relative w-full max-w-sm lg:max-w-none group transform scale-110 lg:scale-110 origin-center transition-transform">
              <img
                src={aboutShowcaseImg}
                alt="MYK Traders Smart Solutions Showcase"
                className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: WHY CHOOSE MYK FEATURE LIST (Col Span 4: ~35% width) */}
          <div className="lg:col-span-4 space-y-5 lg:pl-2">
            
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-red-600 rounded-full"></div>
              <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">
                WHY CHOOSE MYK?
              </span>
            </div>

            {/* Stacked Benefits List - Clean Editorial Style */}
            <div className="space-y-4">
              {whyChooseUsData.map((item) => {
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
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
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

