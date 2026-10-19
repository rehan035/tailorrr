import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const FloatingActions: React.FC = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Tablet) - Positioned on opposite side (left) */}
      <aside
        aria-label="Quick contact"
        className={`fixed bottom-6 left-6 z-40 transition-all duration-300 hidden sm:block ${
          showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
            'Hello Zafar Brothers, I would like to inquire about men\'s tailoring and appointments.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#1b251d] border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600 transition-all shadow-2xl shadow-black/80 hover:shadow-emerald-950/50"
          aria-label="Direct WhatsApp Chat with Zafar Brothers"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>
          <span className="text-xs uppercase tracking-wider font-semibold pl-0.5 pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Conversion Bar (Screens < sm) */}
      <nav
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0e1015]/95 backdrop-blur-md border-t border-[#232632] px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl"
      >
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded bg-[#171922] text-[#e5e2d6] active:bg-[#252836] border border-[#262936] text-[11px] font-medium"
        >
          <Phone className="w-4 h-4 text-[#c5a059] mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
            'Hello Zafar Brothers, I would like to consult on tailoring services.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#c5a059] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider active:bg-[#d8b26e] shadow-md shadow-[#c5a059]/20"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <a
          href={BUSINESS_INFO.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded bg-[#171922] text-[#e5e2d6] active:bg-[#252836] border border-[#262936] text-[11px] font-medium"
        >
          <Navigation className="w-4 h-4 text-[#c5a059] mb-0.5" />
          <span>Directions</span>
        </a>
      </nav>
    </>
  );
};
