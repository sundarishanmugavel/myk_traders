import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Maximize2, Plus, Minus } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-10 bg-gradient-to-r from-blue-50/50 via-sky-50/20 to-blue-50/60 text-slate-900 border-b border-slate-200/50 relative overflow-hidden">
      
      <div className="w-full max-w-[1380px] mx-auto px-[10px] sm:px-[17px] lg:px-[25px] relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">

          {/* LEFT COLUMN: Header & 3 Stacked Interactive Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Header & Subtitle */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-[2.5px] bg-[#EF4444] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0B1B3D]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-[1.95rem] font-black tracking-tight leading-[1.15] text-[#0B1B3D]">
                Let's Talk.<br />
                <span className="text-[#0066FF]">We're Here to Help.</span>
              </h2>

              <p className="text-slate-500 text-xs sm:text-[13px] font-normal pt-0.5">
                Have questions about our products or services?<br className="hidden sm:inline" />
                Our team is always ready to assist you.
              </p>
            </div>

            {/* 3 Contact Info Cards */}
            <div className="space-y-2.5 pt-0.5">

              {/* 1. Visit Us */}
              <a
                href="https://www.google.com/maps/place/Myk+Traders/@9.3705874,78.8537747,17z"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100/90 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8F2FF] text-[#0066FF] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0B1B3D] leading-tight">
                      Visit Us
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium pt-0.5 leading-tight">
                      Thangappa Road, near Setu Complex, Pattinamkathan,
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                      Ramanathapuram, Tamil Nadu – 623501
                    </p>
                  </div>
                </div>
                <ArrowRight size={15} strokeWidth={2} className="text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>

              {/* 2. Call Us */}
              <a
                href="tel:06380073771"
                className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100/90 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E6F8ED] text-[#10B981] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0B1B3D] leading-tight">
                      Call Us
                    </h3>
                    <p className="text-[11px] font-bold text-slate-700 pt-0.5 leading-tight">
                      +91 63800 73771
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight pt-0.5">
                      Mon - Sat, 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
                <ArrowRight size={15} strokeWidth={2} className="text-slate-400 group-hover:text-[#10B981] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>

              {/* 3. Email Us */}
              <a
                href="mailto:myktraders.business@gmail.com"
                className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100/90 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFEBEB] text-[#EF4444] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0B1B3D] leading-tight">
                      Email Us
                    </h3>
                    <p className="text-[11px] font-bold text-slate-700 pt-0.5 leading-tight">
                      myktraders.business@gmail.com
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight pt-0.5">
                      We usually respond within 24 hours.
                    </p>
                  </div>
                </div>
                <ArrowRight size={15} strokeWidth={2} className="text-slate-400 group-hover:text-[#EF4444] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN: Google Map Showcase */}
          <div className="lg:col-span-7 h-full min-h-[280px] lg:min-h-[320px]">
            <div className="w-full h-full min-h-[280px] lg:min-h-[320px] rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xs relative group">
              
              {/* Google Map Embed */}
              <iframe
                title="MYK Traders Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.6346747587883!2d78.8537747!3d9.3705874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01bd61cdb44dd3%3A0x4933b1cff5d779ce!2sMyk%20Traders!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[280px] lg:min-h-[320px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Popup Card on Map */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 z-10 text-center min-w-[220px] pointer-events-auto">
                {/* Red Pin Badge */}
                <div className="w-8 h-8 rounded-full bg-[#EF4444] text-white flex items-center justify-center mx-auto -mt-7 shadow-md mb-2">
                  <MapPin size={18} strokeWidth={2.5} />
                </div>
                
                <h4 className="text-sm font-black text-[#0B1B3D]">MYK Traders</h4>
                <p className="text-xs text-slate-500 font-medium pt-0.5 pb-2">Ramanathapuram, Tamil Nadu</p>
                
                <a
                  href="https://www.google.com/maps/place/Myk+Traders/@9.3705874,78.8537747,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0066FF] hover:underline"
                >
                  <span>Get Directions</span>
                  <ArrowRight size={13} strokeWidth={2.5} />
                </a>
              </div>

              {/* Top Right Fullscreen Icon Control */}
              <a
                href="https://www.google.com/maps/place/Myk+Traders/@9.3705874,78.8537747,17z"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-xl shadow-md border border-slate-100 transition-all"
                aria-label="Expand Map"
              >
                <Maximize2 size={16} strokeWidth={2} />
              </a>

              {/* Bottom Right Zoom Control Buttons */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-slate-100 flex flex-col divide-y divide-slate-100 overflow-hidden">
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
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-xs text-xs font-bold text-slate-600">
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
