import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export default function ProductCatalogue() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-100/80 text-slate-900 border-t border-slate-200/80 relative">
      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
            OFFICIAL PRODUCT CATALOGUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineered for Performance & Longevity.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Browse our authorized lineup. Contact our technical team for custom capacity sizing, site inspection, and doorstep quote.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'bg-white hover:bg-slate-200/70 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative w-full h-56 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center overflow-hidden mb-5">
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-cyan-700 border border-cyan-200 shadow-xs">
                    {product.badge}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Brand & Name */}
                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {product.brand}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {product.description}
                  </p>
                </div>

                {/* Specifications List */}
                <div className="space-y-2 py-3 border-t border-b border-slate-200/80 my-4">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Advanced Animations */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:06380073771"
                  className="group relative flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-black tracking-wider uppercase text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-blue-halo hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-cyan-400/40 shadow-lg"
                >
                  {/* Continuous Shimmer Light Beam Pass */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-beam pointer-events-none" />
                  <PhoneCall size={14} className="animate-phone-ring shrink-0 text-cyan-200" />
                  <span>Enquire Now</span>
                </a>
                <a
                  href="https://wa.me/916380073771"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white border border-slate-200 text-slate-700 transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm hover:shadow-md cursor-pointer group"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare size={16} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
