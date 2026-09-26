import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Maximize2, Plus, Minus } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-10 lg:py-14 bg-gradient-to-r from-slate-50/70 via-blue-50/30 to-sky-50/60 text-slate-900 border-b border-slate-200/50 relative overflow-hidden">
      
      {/* Background Ambient Glows & Dot Pattern */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* LEFT COLUMN: Header & 3 Contact Cards */}
          <div className="md:col-span-6 space-y-4 lg:space-y-6">
            
            {/* Header */}
            <div className="space-y-1.5 lg:space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-[3px] bg-[#EF4444] rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B1B3D]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-black tracking-tight leading-[1.12] text-[#0B1B3D]">
                Let's Talk.<br />
                <span className="text-[#EF4444]">We're Here to Help.</span>
              </h2>

              <p className="text-slate-500 text-xs sm:text-sm lg:text-base font-normal pt-0.5 leading-relaxed">
                Have questions about our products or services?<br className="hidden sm:inline" />
                Our team is always ready to assist you.
              </p>
            </div>

            {/* 3 Contact Cards */}
            <div className="space-y-3 pt-0.5">

              {/* 1. Visit Us */}
              <a
                href="https://www.google.com/maps/place/Myk+Traders/@9.3705874,78.8537747,17z"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-2xl p-3.5 sm:p-4 lg:p-4.5 border border-slate-100 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#EAF2FF] text-[#0066FF] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin size={18} strokeWidth={2.2} className="lg:hidden" />
                    <MapPin size={20} strokeWidth={2.2} className="hidden lg:block" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0B1B3D] leading-tight">
                      Visit Us
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-500 font-medium pt-0.5 lg:pt-1 leading-normal">
                      Thangappa Road, near Setu Complex, Pattinamkathan,<br />
                      Ramanathapuram, Tamil Nadu – 623501
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} strokeWidth={2} className="text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all shrink-0 ml-2 lg:ml-3" />
              </a>

              {/* 2. Call Us */}
              <a
                href="tel:06380073771"
                className="bg-white rounded-2xl p-3.5 sm:p-4 lg:p-4.5 border border-slate-100 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#E8F8EE] text-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone size={18} strokeWidth={2.2} className="lg:hidden" />
                    <Phone size={20} strokeWidth={2.2} className="hidden lg:block" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0B1B3D] leading-tight">
                      Call Us
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-800 pt-0.5 leading-tight">
                      +91 63800 73771
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight pt-0.5">
                      Mon – Sat, 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} strokeWidth={2} className="text-slate-400 group-hover:text-[#10B981] group-hover:translate-x-1 transition-all shrink-0 ml-2 lg:ml-3" />
              </a>

              {/* 3. Email Us */}
              <a
                href="mailto:myktraders.business@gmail.com"
                className="bg-white rounded-2xl p-3.5 sm:p-4 lg:p-4.5 border border-slate-100 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#FFEAEA] text-[#EF4444] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail size={18} strokeWidth={2.2} className="lg:hidden" />
                    <Mail size={20} strokeWidth={2.2} className="hidden lg:block" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-black text-[#0B1B3D] leading-tight">
                      Email Us
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-slate-800 pt-0.5 leading-tight">
                      myktraders.business@gmail.com
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight pt-0.5">
                      We usually respond within 24 hours.
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} strokeWidth={2} className="text-slate-400 group-hover:text-[#EF4444] group-hover:translate-x-1 transition-all shrink-0 ml-2 lg:ml-3" />
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN: Map Showcase Container with Overlapping Tag */}
          <div className="md:col-span-6 relative pt-4 lg:pt-4">
            
            {/* Top Right Decorative Dot Grid */}
            <div className="absolute -top-2 right-2 z-0 grid grid-cols-5 gap-2 opacity-50 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              ))}
            </div>

            {/* Floating "Find Us Here" Tag Card */}
            <div className="absolute top-0 left-4 lg:left-6 z-20 bg-[#FFEBEB]/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-md border border-red-100/80 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#EF4444] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MapPin size={18} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#0B1B3D] leading-tight">Find Us Here</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight pt-0.5">Ramanathapuram, Tamil Nadu</p>
              </div>
            </div>

            {/* Main Map Box */}
            <div className="w-full h-[360px] sm:h-[390px] lg:h-[410px] rounded-[28px] overflow-hidden border border-slate-200/90 bg-white shadow-lg relative group z-10 mt-3">
              
              {/* Google Map Embed */}
              <iframe
                title="MYK Traders Store Location Map"
                src="https://maps.google.com/maps?q=9.3705874,78.8537747&hl=en&z=17&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Center Popup Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-auto">
                {/* White Popup Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 text-center min-w-[200px] mb-1">
                  <h4 className="text-xs font-black text-[#0B1B3D]">MYK Traders</h4>
                  <p className="text-[11px] text-slate-500 font-medium pt-0.5 pb-2">Ramanathapuram, Tamil Nadu</p>
                  <a
                    href="https://www.google.com/maps/place/Myk+Traders/@9.3705874,78.8537747,17z"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0066FF] hover:underline"
                  >
                    <span>Get Directions</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </a>
                </div>

                {/* Red Pin below card */}
                <div className="w-7 h-7 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <MapPin size={15} strokeWidth={2.5} />
                </div>
              </div>

              {/* Top Right Fullscreen Icon Control */}
              <a
                href="https://www.google.com/maps/place/Myk+Traders/@9.3705874,78.8537747,17z"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-xl shadow-md border border-slate-100 transition-all z-10"
                aria-label="Expand Map"
              >
                <Maximize2 size={16} strokeWidth={2} />
              </a>

              {/* Bottom Right Zoom Control Buttons */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-slate-100 flex flex-col divide-y divide-slate-100 overflow-hidden z-10">
                <button
                  className="p-2 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Zoom in"
                >
                  <Plus size={16} strokeWidth={2} />
                </button>
                <button
                  className="p-2 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Zoom out"
                >
                  <Minus size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Bottom Left Google Logo Branding */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-xs text-xs font-bold text-slate-600 z-10">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
