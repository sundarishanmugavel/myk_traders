import React from 'react';
import { TestTube, Wrench, RefreshCw, Truck } from 'lucide-react';

const SERVICES = [
  {
    icon: TestTube,
    title: 'Free On-Site Water Testing',
    desc: 'Our certified technicians measure TDS, pH, and hardness levels at your home before recommending the ideal purification system.',
  },
  {
    icon: Wrench,
    title: 'Expert Doorstep Setup',
    desc: 'Professional installation for water purifiers, tank sensors, inverters, and CCTV cameras at zero extra installation labor charge.',
  },
  {
    icon: RefreshCw,
    title: 'Annual Maintenance (AMC)',
    desc: 'Comprehensive annual maintenance contracts covering periodic filter replacements, membrane cleaning, and emergency repairs.',
  },
  {
    icon: Truck,
    title: 'Express Home Delivery',
    desc: 'Safe, shockproof delivery across Tamil Nadu with same-day or 24-hour technician dispatch.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-t border-slate-200/80 relative">
      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
            WHY MYK TRADERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Comprehensive Services. Zero Hassle.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We don't just sell equipment — we provide complete lifecycle service, water testing, and emergency technician support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 space-y-4 shadow-md hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
