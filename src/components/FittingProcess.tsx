import React from 'react';
import { Ruler, Sparkles, CheckCircle, HelpCircle } from 'lucide-react';
import { FITTING_STEPS, CLIENT_PREP_TIPS } from '../data/businessData';

export const FittingProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#101217] relative border-y border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <Ruler className="w-3.5 h-3.5" />
            <span>The Fitting Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] mb-4">
            How Your Garment Is Crafted
          </h2>
          <p className="text-sm sm:text-base text-[#a39f91] font-light leading-relaxed">
            A methodical four-stage process ensuring your suit or bespoke outfit drapes naturally and feels tailored to your posture.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {FITTING_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-lg bg-[#14161f] border border-[#232734] hover:border-[#c5a059]/40 transition-colors flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif font-bold text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors">
                    {step.step}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#c5a059]/50" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#faf7f0] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#a09c8e] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f222d] flex items-center gap-2 text-[11px] text-[#c5a059]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Stage {step.step} Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Fitting Prep Advice */}
        <div className="rounded-lg bg-[#151720] border border-[#272b38] p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6 text-sm font-serif font-semibold text-[#faf7f0]">
            <HelpCircle className="w-4 h-4 text-[#c5a059]" />
            <span>Helpful Preparation Tips for Your Fitting Visit</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_PREP_TIPS.map((tip, idx) => (
              <div key={idx} className="border-l-2 border-[#c5a059]/50 pl-4 py-1">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#faf7f0] mb-1.5">
                  {tip.title}
                </h4>
                <p className="text-xs text-[#9d998c] leading-relaxed">
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
