import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  category: 'suits' | 'wedding' | 'alterations' | 'traditional';
  quote: string;
  rating: number;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Hamza Farooq',
    location: 'Saddar, Rawalpindi',
    service: 'Bespoke Three-Piece Wedding Suit',
    category: 'wedding',
    quote:
      'The fit around the chest and shoulder line was immaculate right on the first try-on. They delivered two days ahead of my wedding reception, properly steamed and hand-finished. Finding such disciplined craftsmanship in Rawalpindi is rare.',
    rating: 5,
    date: 'Recent Client',
  },
  {
    id: 't-2',
    name: 'Adnan Malik',
    location: 'Chaklala Scheme III, Rawalpindi',
    service: 'Midnight Black Prince Coat',
    category: 'wedding',
    quote:
      'I needed a bespoke Prince coat with a precise standing collar that wouldn’t pinch or gap at the back. Master tailor understood the collar slope immediately. It commanded compliments throughout the family banquet.',
    rating: 5,
    date: 'Recent Client',
  },
  {
    id: 't-3',
    name: 'Shahid Raza',
    location: 'Bahria Town, Rawalpindi',
    service: 'Executive Charcoal Two-Piece',
    category: 'suits',
    quote:
      'I specifically wanted light internal chest canvas without stiff shoulder padding. The drape is smooth, comfortable during long corporate meetings, and holds its silhouette after continuous wear.',
    rating: 5,
    date: 'Verified Fitting',
  },
  {
    id: 't-4',
    name: 'Dr. M. Usman',
    location: 'Tipu Road Resident, Rawalpindi',
    service: 'Custom Shalwar Kameez & Tailored Waistcoat',
    category: 'traditional',
    quote:
      'Being local to Tipu Road, I have had multiple traditional suits tailored here. The collar curves, placket finish, and waist suppression on the waistcoat are consistently sharp.',
    rating: 5,
    date: 'Regular Client',
  },
  {
    id: 't-5',
    name: 'Bilal Tariq',
    location: 'Westridge, Rawalpindi',
    service: 'Suit Restructuring & Sleeve Tapering',
    category: 'alterations',
    quote:
      'Brought in a high-end imported blazer that felt boxy. They re-pinned the side seams, adjusted the sleeve length while preserving the functional cuff buttons, and made it look made-to-measure.',
    rating: 5,
    date: 'Verified Fitting',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'suits' | 'wedding' | 'traditional' | 'alterations'>('all');

  const filteredTestimonials =
    filter === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === filter);

  useEffect(() => {
    // Reset index if filter changes
    setCurrentIndex(0);
  }, [filter]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const activeItem = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0a0b0e] relative border-b border-[#1f222c] overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Social Proof &amp; Client Words</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] mb-4">
            Client Experiences &amp; Fitting Reviews
          </h2>
          <p className="text-sm sm:text-base text-[#a09c8f] font-light leading-relaxed">
            Gentlemen across Rawalpindi and the twin cities who trust Zafar Brothers for their milestone celebrations, executive wardrobes, and master alterations.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'All Reviews' },
            { key: 'wedding', label: 'Wedding & Prince Coats' },
            { key: 'suits', label: 'Bespoke Suiting' },
            { key: 'traditional', label: 'Custom Traditional' },
            { key: 'alterations', label: 'Master Alterations' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] ${
                filter === tab.key
                  ? 'bg-[#c5a059] text-[#0d0e11] font-semibold shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#14161f] text-[#a09c8f] hover:text-[#faf7f0] border border-[#232733]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Luxury Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#141620] to-[#0f1118] border border-[#2c303f] p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            
            {/* Top Bar inside card: Quote mark & Rating */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-full bg-[#1e222e] border border-[#2f3343] flex items-center justify-center text-[#c5a059]">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(activeItem.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                ))}
                <span className="ml-2 text-xs font-mono text-[#c5a059] font-semibold">5.0</span>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="text-lg sm:text-2xl font-serif text-[#faf7f0] leading-relaxed mb-8 italic">
              &ldquo;{activeItem.quote}&rdquo;
            </blockquote>

            {/* Client Details Footer inside card */}
            <div className="pt-6 border-t border-[#232735] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-bold text-base text-[#faf7f0]">
                    {activeItem.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>{activeItem.date}</span>
                  </span>
                </div>
                <p className="text-xs text-[#c5a059] font-medium tracking-wide">
                  {activeItem.service}
                </p>
                <p className="text-xs text-[#8e8a7d]">
                  {activeItem.location}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-[#2b2f3e] bg-[#161822] text-[#d4cfc2] hover:text-[#c5a059] hover:border-[#c5a059] transition-colors focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#8e8a7d] px-1">
                  {currentIndex + 1} / {filteredTestimonials.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-[#2b2f3e] bg-[#161822] text-[#d4cfc2] hover:text-[#c5a059] hover:border-[#c5a059] transition-colors focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting 3-Card Grid for Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#12141c] border border-[#222532] hover:border-[#c5a059]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#cdc8ba] leading-relaxed mb-4 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#1d202b]">
                <p className="text-xs font-serif font-bold text-[#faf7f0]">
                  {item.name}
                </p>
                <p className="text-[11px] text-[#c5a059]">
                  {item.service}
                </p>
                <p className="text-[10px] text-[#8e8a7d]">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof CTA: Share Your Experience on WhatsApp */}
        <div className="rounded-xl bg-[#141722] border border-[#272b3a] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-serif font-bold text-[#faf7f0] mb-1">
              Have you had a suit or garment fitted at Zafar Brothers?
            </h4>
            <p className="text-xs text-[#a39f91]">
              Share your fitting feedback or photo directly with our master tailor on WhatsApp.
            </p>
          </div>

          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Hello Zafar Brothers, I would like to share my feedback on my tailored suit.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-[#c5a059]/15"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Share Feedback on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
