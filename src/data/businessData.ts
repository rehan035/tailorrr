export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
  whatsappMsg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suits' | 'formal' | 'craftsmanship' | 'traditional';
  categoryLabel: string;
  image: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'Zafar Brothers Gents Tailors',
  tagline: 'A Perfect Fit. A Lasting Impression.',
  supportingText: "Explore men's tailoring and timeless style.",
  phone: '+92 300 5324484',
  phoneClean: '+923005324484',
  whatsappUrl: 'https://wa.me/923005324484',
  address: 'Sir Syed Chowk, Tipu Road, Jinnah Colony, Rawalpindi, Pakistan',
  addressShort: 'Sir Syed Chowk, Tipu Road, Rawalpindi',
  city: 'Rawalpindi',
  province: 'Punjab',
  country: 'Pakistan',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Zafar%20Brothers%20Gents%20Tailors%2C%20Sir%20Syed%20Chowk%2C%20Tipu%20Road%2C%20Rawalpindi%2C%20Pakistan',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Zafar%20Brothers%20Gents%20Tailors%2C%20Sir%20Syed%20Chowk%2C%20Tipu%20Road%2C%20Rawalpindi%2C%20Pakistan',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Zafar%20Brothers%20Gents%20Tailors,%20Sir%20Syed%20Chowk,%20Tipu%20Road,%20Rawalpindi,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  businessHoursNote: 'Open for fittings and consultations. Prior appointment or WhatsApp check recommended.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'suit-tailoring',
    title: "Men's Suit Tailoring",
    tagline: 'Two-Piece & Three-Piece Bespoke Suiting',
    description:
      'Individually structured lounge suits, business two-piece suits, and three-piece waistcoated ensembles tailored for clean drape, sharp shoulder lines, and effortless comfort.',
    features: [
      'Bespoke chest canvas and shoulder pad shaping',
      'Notch, peak, or shawl lapel customization',
      'Functional sleeve cuffs and hand-stitched detailing',
      'Personalized trouser taper, waistband, and pleat styling',
    ],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular Choice',
    whatsappMsg:
      "Hello Zafar Brothers, I would like to inquire about Men's Suit Tailoring (Two-Piece / Three-Piece).",
  },
  {
    id: 'formal-wear',
    title: 'Formal Wear',
    tagline: 'Tuxedos, Prince Coats & Ceremony Attire',
    description:
      'Sophisticated eveningwear, satin-lapel tuxedos, regal Prince coats, and reception attire tailored to command presence at weddings and distinguished occasions.',
    features: [
      'Tailored Prince coats with precision high-neck collars',
      'Black tie dinner jackets and satin trim finishing',
      'Structured chest silhouettes and lining selection',
      'Accent buttoning and hand-finished buttonholes',
    ],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    badge: 'Occasion Wear',
    whatsappMsg:
      'Hello Zafar Brothers, I would like to inquire about Formal Wear and Prince Coat tailoring.',
  },
  {
    id: 'alterations-fitting',
    title: 'Alterations & Fitting',
    tagline: 'Restructuring, Tapering & Precision Adjustments',
    description:
      'Bring existing suits, coats, and trousers to an immaculate fit. We adjust chest widths, shorten or lengthen sleeves, taper trouser legs, and adjust waistbands.',
    features: [
      'Jacket waist suppression and back drape correction',
      'Sleeve length adjustment preserving cuff button alignment',
      'Trouser seat, waist, and inseam tapering',
      'Coat collar gap adjustments and lining repairs',
    ],
    image:
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80',
    badge: 'Precision Restyle',
    whatsappMsg:
      'Hello Zafar Brothers, I would like to consult on alterations and fitting adjustments for my garments.',
  },
  {
    id: 'custom-tailoring',
    title: 'Custom Tailoring',
    tagline: 'Traditional Shalwar Kameez, Kurta & Waistcoats',
    description:
      'Pakistani menswear tailored with exacting proportions. Crisp collars, customized cuffs, neat plackets, and tailored waistcoats for daily sophistication and festive gatherings.',
    features: [
      'Bespoke Shalwar Kameez with custom collar and cuff sizing',
      'Tailored waistcoats with structured chest and piping',
      'Clean placket buttoning and reinforced seam construction',
      'Choice of ban collar, shirt collar, or soft tailored collars',
    ],
    image:
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    badge: 'Crafted Heritage',
    whatsappMsg:
      'Hello Zafar Brothers, I would like to inquire about Custom Tailoring (Shalwar Kameez / Kurta / Waistcoats).',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Charcoal Wool Bespoke Two-Piece',
    category: 'suits',
    categoryLabel: 'Bespoke Suit',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
    description:
      'Hand-cut charcoal suiting with tailored notch lapel, clean shoulder transition, and matching trouser balance.',
  },
  {
    id: 'gal-2',
    title: 'Tailoring Bench & Measurement Craft',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship',
    image:
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=80',
    description:
      'Chalk grading, shears, and measurement tape essential to individual pattern drafting.',
  },
  {
    id: 'gal-3',
    title: 'Midnight Formal Tuxedo & Lapel Detailing',
    category: 'formal',
    categoryLabel: 'Formal Wear',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    description:
      'Evening elegance featuring satin face lapels, clean chest structure, and precision button alignment.',
  },
  {
    id: 'gal-4',
    title: 'Double-Breasted Statement Coat',
    category: 'suits',
    categoryLabel: 'Bespoke Suit',
    image:
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
    description:
      'Sharp peak lapels with six-button layout, fitted waist suppression, and confident posture.',
  },
  {
    id: 'gal-5',
    title: 'Fine Cloth Selection & Texture',
    category: 'craftsmanship',
    categoryLabel: 'Fabric Selection',
    image:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
    description:
      'High-grade woolen fabrics and blend cloths carefully inspected for weave, weight, and climate suitability.',
  },
  {
    id: 'gal-6',
    title: 'Sleeve Cuff & Hand-Finished Stitching',
    category: 'craftsmanship',
    categoryLabel: 'Finishing Details',
    image:
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1000&q=80',
    description:
      'Close-up craftsmanship showing clean edge pick-stitching and horn button placement.',
  },
  {
    id: 'gal-7',
    title: 'Tailored Waistcoat & Layered Silhouette',
    category: 'traditional',
    categoryLabel: 'Custom Tailoring',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
    description:
      'Structured waistcoat tailoring suitable for festive Pakistani gatherings and multi-piece suiting.',
  },
  {
    id: 'gal-8',
    title: 'Workshop Stitching & Seam Reinforcement',
    category: 'craftsmanship',
    categoryLabel: 'Workshop',
    image:
      'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=1000&q=80',
    description:
      'Heavy-duty and precision needlework ensuring resilient internal seams and long-lasting shape.',
  },
];

export const FITTING_STEPS = [
  {
    step: '01',
    title: 'Consultation & Style Selection',
    description:
      'Discuss your desired garment style, silhouette, lapel type, occasion requirements, and fabric weight appropriate for your preference.',
  },
  {
    step: '02',
    title: 'Comprehensive Measurements',
    description:
      'We record precision body dimensions—including posture, shoulder slope, sleeve drop, and waistline—to draft a garment that aligns naturally with your posture.',
  },
  {
    step: '03',
    title: 'Drafting & Workshop Cutting',
    description:
      'Your individual pattern is marked and cut by hand. Canvassing and lining are assembled with balanced tension for enduring drape.',
  },
  {
    step: '04',
    title: 'Try-On & Final Hand-Press',
    description:
      'A final fitting verifies comfort and drape. Any micro-adjustments are completed before meticulous steam pressing and handover.',
  },
];

export const CLIENT_PREP_TIPS = [
  {
    title: 'Bring or Wear the Right Shoes',
    tip: 'When having trousers or formal suits measured, wearing or bringing the dress shoes you plan to wear ensures the exact break on your shoe.',
  },
  {
    title: 'Wear a Fitted Base Shirt',
    tip: 'A well-fitted dress shirt allows the most accurate chest, shoulder, and collar measurements without excess bulk.',
  },
  {
    title: 'Fabric Guidance',
    tip: 'You can bring your own chosen fabric, or consult with us on appropriate yardage, weave, and seasonal suitability before purchasing cloth.',
  },
];
