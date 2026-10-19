import React, { useState } from 'react';
import { Camera, X, MessageSquare, Maximize2, Tag } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/businessData';

type FilterCategory = 'all' | 'suits' | 'formal' | 'craftsmanship' | 'traditional';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: 'All Garments & Work' },
    { key: 'suits', label: 'Bespoke Suits' },
    { key: 'formal', label: 'Formal & Prince' },
    { key: 'craftsmanship', label: 'Craft & Fabrics' },
    { key: 'traditional', label: 'Custom Tailoring' },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] mb-4">
            Craftsmanship & Tailored Silhouettes
          </h2>
          <p className="text-sm sm:text-base text-[#a39f91] font-light leading-relaxed">
            Examine our cuts, stitch definition, lapel finishes, and structural suiting details.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] ${
                activeCategory === cat.key
                  ? 'bg-[#c5a059] text-[#0d0e11] shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#151720] text-[#a39f91] hover:text-[#faf7f0] hover:bg-[#1f222d] border border-[#262936]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#14161f] border border-[#232733] hover:border-[#c5a059]/60 transition-all duration-300 shadow-lg"
            >
              {/* Aspect Ratio Container (Consistent 4:5 ratio) */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#181a24]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0f1117]/85 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#c5a059] border border-[#c5a059]/30">
                  <Tag className="w-2.5 h-2.5" />
                  <span>{item.categoryLabel}</span>
                </span>
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform">
                <h3 className="font-serif font-bold text-base text-[#faf7f0] mb-1 group-hover:text-[#c5a059] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a09c8f] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          />
          <div className="relative w-full max-w-3xl bg-[#14161f] border border-[#2b2e3b] rounded-lg shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row">
            {/* Modal Image */}
            <div className="w-full md:w-3/5 bg-black flex items-center justify-center max-h-[60vh] md:max-h-[80vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-2/5 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#242733] bg-[#12141c]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium">
                    {selectedImage.categoryLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="p-1 text-[#a39f91] hover:text-[#faf7f0] rounded focus:outline-none"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#faf7f0] mb-3">
                  {selectedImage.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#bab5a7] leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                <div className="p-3 rounded bg-[#181a24] border border-[#242734] text-xs text-[#8a887c]">
                  Custom tailoring and fabric matching available at our Rawalpindi shop. Bring your chosen fabric or consult with us.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f222d] space-y-2">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Zafar Brothers, I am interested in tailoring a garment similar to "${selectedImage.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="w-full py-2.5 px-4 rounded border border-[#2b2e3b] text-xs text-[#a39f91] hover:text-[#faf7f0] transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
