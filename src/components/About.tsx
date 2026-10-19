import React from 'react';
import { Scissors, Compass, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#101217] relative border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual craftsmanship showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Tailoring Craftsmanship Image */}
              <div className="relative rounded-lg overflow-hidden border border-[#2b2e3b] shadow-2xl bg-[#161820]">
                <img
                  src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=80"
                  alt="Tailoring shears, measurement tape, and hand-cut pattern cloth at Zafar Brothers Gents Tailors"
                  className="w-full h-[420px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101217] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#101217]/90 backdrop-blur-md border border-[#2c303c]">
                  <p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
                    Rawalpindi Workshop
                  </p>
                  <p className="text-sm font-serif text-[#faf7f0]">
                    Dedicated to clean lines, balanced drape, and individual comfort.
                  </p>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c5a059]/40 pointer-events-none" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c5a059]/40 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Concise, authentic introduction */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-3">
              <Scissors className="w-3.5 h-3.5" />
              <span>The Craft of Tailoring</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] leading-tight mb-6">
              Precision Cutting & Personal Attention to Every Stitch
            </h2>

            {/* Concise and editable content respecting prompt rules */}
            <p className="text-base sm:text-lg text-[#d3cfc2] font-light leading-relaxed mb-6">
              Located at Sir Syed Chowk on Tipu Road in Rawalpindi, <strong className="text-[#faf7f0] font-normal">Zafar Brothers Gents Tailors</strong> specializes in men&apos;s tailored garments designed around your distinct body posture and personal style.
            </p>

            <p className="text-sm sm:text-base text-[#a39f91] leading-relaxed mb-8">
              We focus on accurate physical measurements, balanced shoulder and chest canvas construction, and clean finishing across formal two-piece and three-piece suits, wedding attire, Prince coats, and traditional tailored Pakistani garments.
            </p>

            {/* Craftsmanship Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="p-4 rounded bg-[#161820] border border-[#252834] hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#20232c] text-[#c5a059]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#faf7f0] text-base">Individual Cut</h3>
                </div>
                <p className="text-xs text-[#a09c8f] leading-relaxed">
                  Every garment is patterned to your unique shoulder slope, chest curvature, and height proportions.
                </p>
              </div>

              <div className="p-4 rounded bg-[#161820] border border-[#252834] hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#20232c] text-[#c5a059]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#faf7f0] text-base">Structural Fit</h3>
                </div>
                <p className="text-xs text-[#a09c8f] leading-relaxed">
                  Proper internal canvassing provides clean shape retention without stiffness or uncomfortable bunching.
                </p>
              </div>

              <div className="p-4 rounded bg-[#161820] border border-[#252834] hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#20232c] text-[#c5a059]">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#faf7f0] text-base">Hand Finishing</h3>
                </div>
                <p className="text-xs text-[#a09c8f] leading-relaxed">
                  Refined lapel edges, smooth sleeve heads, clean inner pocketing, and durable button stitching.
                </p>
              </div>

              <div className="p-4 rounded bg-[#161820] border border-[#252834] hover:border-[#c5a059]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#20232c] text-[#c5a059]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#faf7f0] text-base">Client Consultation</h3>
                </div>
                <p className="text-xs text-[#a09c8f] leading-relaxed">
                  Direct guidance on cloth requirements, collar styles, trouser breaks, and occasion appropriateness.
                </p>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm text-[#c5a059] hover:text-[#d8b26e] font-medium tracking-wide group"
              >
                <span>Explore our tailoring services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-[#3b3e4a]">•</span>
              <a
                href="#location"
                className="text-xs text-[#a39f91] hover:text-[#faf7f0] transition-colors"
              >
                Visit Workshop at Sir Syed Chowk, Tipu Road
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
