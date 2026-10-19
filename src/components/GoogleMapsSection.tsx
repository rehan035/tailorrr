import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const GoogleMapsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#101217] relative border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] mb-4">
            Visit Our Workshop in Rawalpindi
          </h2>
          <p className="text-sm sm:text-base text-[#a39f91] font-light leading-relaxed">
            Conveniently situated at Sir Syed Chowk on Tipu Road. Use the interactive map below or tap for direct navigation.
          </p>
        </div>

        {/* Location & Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Info Column (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Address Card */}
            <div className="rounded-lg bg-[#14161f] border border-[#232734] p-6 sm:p-7 shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded bg-[#1e212c] text-[#c5a059] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#faf7f0] mb-1">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">
                    Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="p-3.5 rounded bg-[#0d0e13] border border-[#222530] mb-5">
                <p className="text-xs text-[#8a887e] uppercase tracking-wider mb-1 font-mono">
                  Full Workshop Address:
                </p>
                <p className="text-sm text-[#e5e2d6] font-medium leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Copy Address Button */}
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded border border-[#2e3240] hover:border-[#c5a059] text-xs font-medium text-[#d4d0c2] hover:text-[#faf7f0] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Address Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#c5a059]" />
                      <span>Copy Address Text</span>
                    </>
                  )}
                </button>

                {/* Primary Directions CTA (Exact URL required) */}
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#c5a059]/15"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Get Directions (Turn-by-Turn)</span>
                </a>

                {/* Open in Google Maps Search Link */}
                <a
                  href={BUSINESS_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#1b1e28] hover:bg-[#232734] text-xs text-[#c5a059] hover:text-[#d8b26e] font-medium transition-colors border border-[#262a37]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Search</span>
                </a>
              </div>
            </div>

            {/* Quick Contact & Consultation Access */}
            <div className="rounded-lg bg-[#14161f] border border-[#232734] p-6 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#a39f91] font-semibold">
                Direct Contact at the Workshop
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#1c1f2b] hover:bg-[#252938] text-xs font-medium text-[#faf7f0] transition-colors border border-[#292d3b]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello Zafar Brothers, I am planning to visit your workshop at Sir Syed Chowk for tailoring.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#1c1f2b] hover:bg-[#252938] text-xs font-medium text-[#c5a059] transition-colors border border-[#292d3b]"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Pin verification notice */}
              <div className="flex items-start gap-2.5 pt-3 border-t border-[#1f222d] text-[11px] text-[#8e8a7e] leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <p>
                  Address verification: Sir Syed Chowk, Tipu Road, Jinnah Colony, Rawalpindi. If you need landmark guidance when approaching Sir Syed Chowk, call our direct phone line.
                </p>
              </div>
            </div>
          </div>

          {/* Right / Map Embed Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-[#262a37] bg-[#14161f] shadow-2xl relative">
              {/* Map Container */}
              <div className="relative w-full h-[400px] sm:h-[480px]">
                <iframe
                  title="Google Map location for Zafar Brothers Gents Tailors at Sir Syed Chowk, Tipu Road, Rawalpindi"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Navigation Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-md bg-[#101217]/95 backdrop-blur-md border border-[#2c303c] shadow-lg max-w-xs hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                    <span className="text-xs font-serif font-bold text-[#faf7f0]">
                      Sir Syed Chowk Workshop
                    </span>
                  </div>
                  <p className="text-[11px] text-[#a39f91]">
                    Tipu Road, Jinnah Colony, Rawalpindi
                  </p>
                </div>
              </div>

              {/* Map Footer Bar with Direct Actions */}
              <div className="p-4 bg-[#14161f] border-t border-[#232734] flex flex-wrap items-center justify-between gap-3 text-xs text-[#a09c8f]">
                <span>Search location: Rawalpindi, Punjab, Pakistan</span>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c5a059] hover:underline font-medium"
                  >
                    <span>Direct Turn-by-Turn Route</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
