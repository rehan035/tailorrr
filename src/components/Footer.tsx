import React from 'react';
import { Scissors, MapPin, Phone, MessageSquare, ExternalLink, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090c] border-t border-[#1a1c24] text-[#a09c8f] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#181a22]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-[#c5a059]" />
              <span className="text-xl font-serif font-bold tracking-[0.16em] text-[#faf7f0] uppercase">
                ZAFAR BROTHERS
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium">
              Gents Tailors • Rawalpindi
            </p>
            <p className="text-sm text-[#8c887b] leading-relaxed max-w-sm">
              Providing bespoke suiting, formal event attire, alterations, and custom handcrafted tailoring for discerning gentlemen at Sir Syed Chowk, Tipu Road.
            </p>
            <div className="pt-2 text-xs text-[#6f6c62]">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#faf7f0] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>About the Workshop</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Tailoring Services</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Fitting Process</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Garment Gallery</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Client Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Google Map &amp; Directions</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Contact &amp; Inquiries</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Direct Reach (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#faf7f0] font-semibold mb-4">
              Workshop Location &amp; Reach
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#cac6b8]">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#c5a059] transition-colors font-medium"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello Zafar Brothers, I would like to consult on tailoring services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a059] transition-colors font-medium flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-[#c5a059]" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#c5a059] hover:underline"
              >
                <span>Open Directions to Tipu Road in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and verification disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6b60]">
          <p>© {new Date().getFullYear()} Zafar Brothers Gents Tailors. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Sir Syed Chowk, Tipu Road, Rawalpindi, Pakistan • Verification of specific fittings via WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
};
