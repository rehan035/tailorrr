import React, { useState } from 'react';
import { 
  MessageSquare, 
  Navigation, 
  MapPin, 
  Sparkles, 
  Phone, 
  Scissors, 
  Clock, 
  ShieldCheck, 
  Ruler, 
  Info,
  ChevronRight,
  Eye
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroStyle {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  hotspots: {
    title: string;
    detail: string;
    top: string;
    left: string;
  }[];
}

const HERO_STYLES: HeroStyle[] = [
  {
    id: 'bespoke-suit',
    name: 'Bespoke Charcoal Two-Piece',
    category: 'Executive Suiting',
    badge: 'Signature Cut',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=85',
    description: 'Precision hand-basted chest canvas, sharp notch lapels, and tailored waist drape.',
    hotspots: [
      {
        title: 'Hand-Rolled Lapel',
        detail: 'Basted with resilient horsehair canvas to hold a natural, rolling curve.',
        top: '32%',
        left: '42%',
      },
      {
        title: 'Natural Shoulder Transition',
        detail: 'Soft internal padding tailored to the client’s exact shoulder posture.',
        top: '22%',
        left: '26%',
      },
      {
        title: 'Surgeon’s Cuffs',
        detail: 'Functional sleeve buttonholes with horn buttons and fine pick-stitching.',
        top: '65%',
        left: '22%',
      },
    ],
  },
  {
    id: 'prince-coat',
    name: 'Midnight Black Formal & Prince Coat',
    category: 'Ceremony & Wedding',
    badge: 'Occasion Luxury',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=85',
    description: 'Regal structured collar, clean chest silhouette, and evening elegance.',
    hotspots: [
      {
        title: 'Mandarin & Bandhgala Collar',
        detail: 'Crisp standing collar cut to sit flush without neck friction.',
        top: '20%',
        left: '50%',
      },
      {
        title: 'Structured Front Closure',
        detail: 'Hand-aligned horn or metallic crested buttons with clean overlap.',
        top: '45%',
        left: '48%',
      },
      {
        title: 'Satin Edge Trimming',
        detail: 'Refined silk-blend facing along lapels and chest pocketing.',
        top: '35%',
        left: '38%',
      },
    ],
  },
  {
    id: 'craft-heritage',
    name: 'Custom Tailored Kurta & Waistcoat',
    category: 'Traditional Menswear',
    badge: 'Pakistani Heritage',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=2000&q=85',
    description: 'Crisp hand-pressed collar, tailored armholes, and balanced hem proportions.',
    hotspots: [
      {
        title: 'Custom Ban Collar',
        detail: 'Fitted to your exact neck measurement with premium fused interlining.',
        top: '24%',
        left: '48%',
      },
      {
        title: 'Reinforced Placket',
        detail: 'Double needle-stitched button placket with hidden security buttons.',
        top: '40%',
        left: '46%',
      },
      {
        title: 'Tailored Waistcoat Drape',
        detail: 'Form-fitting back belt and contoured chest line for celebratory wear.',
        top: '55%',
        left: '38%',
      },
    ],
  },
];

export const Hero: React.FC = () => {
  const [activeStyleIndex, setActiveStyleIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const currentStyle = HERO_STYLES[activeStyleIndex];

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#0a0b0e]">
      {/* Dynamic Background Image with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {HERO_STYLES.map((style, idx) => (
          <img
            key={style.id}
            src={style.image}
            alt={`${style.name} tailored by Zafar Brothers Gents Tailors`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
              idx === activeStyleIndex ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
            }`}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Cinematic Luxury Dark Charcoal & Gold Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/90 to-[#0a0b0e]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-[#0a0b0e]/70" />
        
        {/* Subtle Tailoring Grid / Canvas texture pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#c5a059 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* Left Column: Headlines, Value Proposition & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Workshop Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#191b26]/95 via-[#1e2230]/90 to-[#191b26]/95 border border-[#c5a059]/45 text-[#f5ebd2] text-xs uppercase tracking-[0.22em] font-medium shadow-lg shadow-black/40 backdrop-blur-md hover:border-[#c5a059] transition-all">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="font-semibold text-[#faf7f0]">Sir Syed Chowk, Tipu Road</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#13151e]/80 border border-white/10 text-[11px] text-[#a39f91] backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-[#c5a059]" />
                <span>Bespoke Gents Tailors</span>
              </div>
            </div>

            {/* Exact Headline as requested */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-[#faf7f0] leading-[1.08] tracking-tight">
              A Perfect Fit. <br />
              <span className="text-[#c5a059] italic font-normal selection:text-[#0a0b0e]">A Lasting</span> Impression.
            </h1>

            {/* Exact Supporting Text as requested */}
            <p className="text-lg sm:text-xl text-[#d4cfc2] font-sans font-light leading-relaxed max-w-2xl">
              {BUSINESS_INFO.supportingText}
            </p>

            <p className="text-xs sm:text-sm text-[#9c988c] max-w-xl leading-relaxed">
              Handcrafted bespoke suiting, formal Prince coats, traditional Pakistani attire, and master alterations—patterned individually to your distinct posture in Rawalpindi.
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary CTA: Chat on WhatsApp */}
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  `Hello Zafar Brothers, I would like to consult on bespoke tailoring for ${currentStyle.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] active:scale-[0.98] transition-all font-semibold tracking-wider uppercase text-xs sm:text-sm shadow-xl shadow-[#c5a059]/20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform group-hover:scale-110" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Secondary CTA: Get Directions (exact URL) */}
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded border border-[#343846] hover:border-[#c5a059] text-[#f2efe6] hover:text-[#c5a059] bg-[#14161f]/80 backdrop-blur-md transition-all font-medium tracking-wide text-xs sm:text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              >
                <Navigation className="w-4 h-4 text-[#c5a059] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span>Get Directions</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded bg-[#161822]/70 hover:bg-[#1e212d] text-[#c5a059] border border-[#2b2f3d] transition-colors text-xs font-medium"
                title={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </div>

            {/* Quick Tailoring Feature Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#b8b3a4]">
              <div className="flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>24+ Body Measurements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Master Pattern Cutting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Fit &amp; Drape Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bespoke Showcase & Hotspot Explorer */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden bg-[#12141c]/90 border border-[#2a2d3a] shadow-2xl backdrop-blur-md">
              
              {/* Garment Image Showcase with Interactive Anatomy Hotspots */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full overflow-hidden bg-[#161822]">
                <img
                  src={currentStyle.image}
                  alt={currentStyle.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                />

                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/20 to-transparent" />

                {/* Garment Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0b0e]/85 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold text-[#c5a059] border border-[#c5a059]/40 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    <span>{currentStyle.badge}</span>
                  </span>
                </div>

                {/* Hotspot Hint */}
                <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#d4cfc2] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                  <Eye className="w-3 h-3 text-[#c5a059]" />
                  <span>Tap pins for anatomy</span>
                </div>

                {/* Interactive Anatomy Hotspots on the Suit */}
                {currentStyle.hotspots.map((hotspot, idx) => (
                  <div
                    key={idx}
                    className="absolute z-20"
                    style={{ top: hotspot.top, left: hotspot.left }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)}
                      onMouseEnter={() => setActiveHotspot(idx)}
                      className="group/pin relative flex items-center justify-center w-7 h-7 rounded-full bg-[#0a0b0e]/90 text-[#c5a059] border-2 border-[#c5a059] shadow-lg shadow-black/80 hover:scale-115 transition-transform focus:outline-none"
                      aria-label={`View detail: ${hotspot.title}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#c5a059] group-hover/pin:animate-ping" />
                      <span className="absolute -inset-1 rounded-full border border-[#c5a059]/40 animate-pulse" />
                    </button>

                    {/* Hotspot Tooltip Popover */}
                    {activeHotspot === idx && (
                      <div className="absolute left-8 -top-4 w-52 sm:w-60 p-3 rounded-lg bg-[#0e1017]/95 border border-[#c5a059]/60 shadow-2xl backdrop-blur-md z-30 animate-fadeIn">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-bold">
                            Craft Detail
                          </span>
                          <span className="text-[9px] text-[#8e8a7d]">Anatomy</span>
                        </div>
                        <h4 className="text-xs font-serif font-bold text-[#faf7f0] mb-1">
                          {hotspot.title}
                        </h4>
                        <p className="text-[11px] text-[#cac5b7] leading-relaxed">
                          {hotspot.detail}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Bottom Garment Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/95 to-transparent">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold">
                      {currentStyle.category}
                    </span>
                    <span className="text-[10px] text-[#8e8a7d]">Rawalpindi Workshop</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#faf7f0] mb-1">
                    {currentStyle.name}
                  </h3>
                  <p className="text-xs text-[#b8b3a5] leading-relaxed">
                    {currentStyle.description}
                  </p>
                </div>
              </div>

              {/* Style Switcher Selector Tabs */}
              <div className="p-3 bg-[#0d0e14] border-t border-[#232734] grid grid-cols-3 gap-1.5 text-center">
                {HERO_STYLES.map((style, idx) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => {
                      setActiveStyleIndex(idx);
                      setActiveHotspot(null);
                    }}
                    className={`py-2 px-1.5 rounded text-[11px] font-medium tracking-wide transition-all ${
                      idx === activeStyleIndex
                        ? 'bg-[#c5a059] text-[#0a0b0e] font-semibold shadow-sm'
                        : 'text-[#9c978b] hover:text-[#faf7f0] hover:bg-[#161822]'
                    }`}
                  >
                    <span className="truncate block">
                      {idx === 0 ? 'Classic Suit' : idx === 1 ? 'Prince Coat' : 'Kurta & Coat'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Floating Trust Card */}
            <div className="mt-3 p-3 rounded-lg bg-[#141620]/80 border border-[#262938] flex items-center justify-between text-xs text-[#a09c8f]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Fast Consultation: Usually replies in &lt;15 mins</span>
              </div>
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hello Zafar Brothers, I would like to book a fitting consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a059] hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Book Slot</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Editorial Highlights Strip */}
      <div className="relative z-10 bg-[#08090c]/90 border-t border-[#1d202b] backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#b0aba0]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#141620] border border-[#282c3c] flex items-center justify-center text-[#c5a059] shrink-0">
              <Ruler className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-semibold text-[#faf7f0]">24+ Measurements</p>
              <p className="text-[11px] text-[#807d72]">Precision body anatomy drafting</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#141620] border border-[#282c3c] flex items-center justify-center text-[#c5a059] shrink-0">
              <Scissors className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-semibold text-[#faf7f0]">Canvas &amp; Drape</p>
              <p className="text-[11px] text-[#807d72]">Natural chest roll &amp; posture</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#141620] border border-[#282c3c] flex items-center justify-center text-[#c5a059] shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-semibold text-[#faf7f0]">Sir Syed Chowk</p>
              <p className="text-[11px] text-[#807d72]">Tipu Road, Rawalpindi</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#141620] border border-[#282c3c] flex items-center justify-center text-[#c5a059] shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-semibold text-[#faf7f0]">+92 300 5324484</p>
              <p className="text-[11px] text-[#807d72]">Direct workshop line</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
