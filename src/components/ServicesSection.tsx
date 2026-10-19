import React, { useState } from 'react';
import { Scissors, Check, MessageSquare, ArrowRight, Info, X } from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/businessData';

export const ServicesSection: React.FC = () => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <Scissors className="w-3.5 h-3.5" />
            <span>Tailoring Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] mb-4">
            Bespoke Services & Garment Construction
          </h2>
          <p className="text-sm sm:text-base text-[#a39f91] font-light leading-relaxed">
            From sharp corporate suiting and occasion Prince coats to precision alterations and custom Pakistani tailoring.
          </p>
        </div>

        {/* Proposed Categories Notice Banner as requested in brief */}
        <div className="mb-12 p-4 rounded-md bg-[#14161d] border border-[#262936] text-xs text-[#a6a294] flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-[#faf7f0]">Owner Confirmation Note:</strong> These proposed tailoring categories represent our core offerings. Specific garment patterns, fabric selections, and fittings are tailored directly to client preferences upon consultation.
          </p>
        </div>

        {/* Services Grid (4 Refined Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-lg bg-[#12141a] border border-[#222530] hover:border-[#c5a059]/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden bg-[#181a24]">
                <img
                  src={service.image}
                  alt={`${service.title} at Zafar Brothers Gents Tailors`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-750"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-transparent" />
                
                {service.badge && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#0f1116]/85 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#faf7f0] mb-1 group-hover:text-[#c5a059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#c5a059] font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#a39f91] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 mb-6 border-t border-[#1f222c] pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#cbc7bb]">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTAs */}
                <div className="space-y-2 pt-2 border-t border-[#1f222c]">
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-[#a39f91] hover:text-[#faf7f0] transition-colors font-medium"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModalService(null)}
          />
          <div className="relative w-full max-w-lg bg-[#14161e] border border-[#2c303d] rounded-lg shadow-2xl p-6 sm:p-8 z-10 overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block">
                  Service Overview
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#faf7f0]">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="p-1.5 text-[#a3a093] hover:text-[#faf7f0] rounded focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#cac6b8] leading-relaxed mb-6">
              {activeModalService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#a39f91] font-semibold mb-3">
                Tailoring Highlights:
              </h4>
              <div className="space-y-2.5">
                {activeModalService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e2ded2]">
                    <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded bg-[#1c1e28] border border-[#2b2e3b] text-xs text-[#a39f91] mb-6">
              To discuss fabric yardage, lapel cut, or schedule a fitting at Sir Syed Chowk, connect directly via WhatsApp.
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(activeModalService.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="py-3 px-4 rounded border border-[#313543] text-xs text-[#cac6b8] hover:text-[#faf7f0] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
