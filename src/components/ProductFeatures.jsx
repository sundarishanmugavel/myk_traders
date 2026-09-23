import React from 'react';
import { Truck, ShieldCheck, Headphones, RefreshCw, Star, CheckCircle } from 'lucide-react';

const FEATURES = [
  {
    icon: Truck,
    title: 'Free Express Shipping',
    desc: 'Doorstep delivery with safe shockproof packaging',
  },
  {
    icon: ShieldCheck,
    title: 'Official Warranty',
    desc: 'Up to 3-year comprehensive brand warranty included',
  },
  {
    icon: RefreshCw,
    title: 'Free Installation',
    desc: 'Expert technician setup at zero additional cost',
  },
  {
    icon: Headphones,
    title: '24/7 Priority Support',
    desc: 'Dedicated hotline and whatsapp assistant',
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 bg-white border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-all hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-slate-900 text-white shrink-0 shadow-sm">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
