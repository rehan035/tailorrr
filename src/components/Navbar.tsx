import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top micro bar for quick business reach */}
      <div className="bg-[#0b0c0f] border-b border-[#232630] text-xs text-[#a3a093] py-2 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
            <span className="truncate text-[#beb9ab] font-medium">{BUSINESS_INFO.addressShort}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-semibold tracking-wider text-[#e6d5b0] hover:text-[#c5a059] transition-colors">{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-[#353945]">|</span>
            <span className="hidden sm:inline text-[#9e9a8d] tracking-wide">Gents Bespoke Tailoring</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101216]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-[#232630]/80 py-3.5'
            : 'bg-[#101216]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Text-based luxury logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm"
          >
            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 text-[#c5a059] transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-[0.18em] text-[#faf7f0] uppercase transition-colors group-hover:text-[#c5a059]">
                ZAFAR BROTHERS
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#c5a059] uppercase pl-6 font-sans font-medium flex items-center gap-1.5 transition-colors group-hover:text-[#d8b26e]">
              Gents Tailors • Rawalpindi
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm text-[#d4d1c7] hover:text-[#c5a059] font-medium tracking-wide transition-colors relative group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] rounded"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-[#c5a059] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="p-2.5 rounded-full border border-[#2b2e38] text-[#e5e3db] hover:border-[#c5a059] hover:text-[#c5a059] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              title={`Call ${BUSINESS_INFO.phone}`}
              aria-label={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello Zafar Brothers, I would like to inquire about men\'s tailoring and fittings.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded bg-[#c5a059] text-[#0d0e11] hover:bg-[#d8b26e] active:scale-[0.98] transition-all shadow-md shadow-[#c5a059]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c5a059]"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu toggle & quick chat */}
          <div className="flex sm:hidden items-center gap-2.5">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello Zafar Brothers Gents Tailors, I would like to inquire about bespoke tailoring.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#c5a059] to-[#d8b26e] text-[#0d0e11] font-semibold text-[11px] uppercase tracking-wider shadow-md shadow-[#c5a059]/25 hover:brightness-110 active:scale-95 transition-all"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Chat</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#2b2f3d] bg-[#161822]/90 text-[#d4d1c7] hover:text-[#faf7f0] hover:border-[#c5a059]/50 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a059]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#12141a] border-l border-[#242733] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232630]">
                <div>
                  <span className="text-lg font-serif font-bold tracking-widest text-[#faf7f0] uppercase block">
                    ZAFAR BROTHERS
                  </span>
                  <span className="text-[10px] tracking-wider text-[#a39f93] uppercase block">
                    Gents Tailors • Rawalpindi
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#a3a093] hover:text-[#faf7f0] focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-3 py-3 rounded text-base font-medium text-[#d4d1c7] hover:text-[#c5a059] hover:bg-[#1a1d26] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Actions at bottom of mobile drawer */}
            <div className="pt-6 border-t border-[#232630] space-y-3">
              <div className="text-xs text-[#8a887e] mb-2">
                <span className="block text-[#faf7f0] font-semibold">Workshop Address</span>
                <span>{BUSINESS_INFO.addressShort}</span>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded border border-[#2e323f] text-sm text-[#e5e3db] hover:border-[#c5a059] hover:text-[#c5a059] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hello Zafar Brothers Gents Tailors, I would like to inquire about bespoke tailoring.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded bg-[#c5a059] text-[#0d0e11] hover:bg-[#d8b26e] transition-colors text-sm font-semibold uppercase tracking-wider shadow"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded bg-[#1a1d26] text-xs text-[#a3a093] hover:text-[#faf7f0] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Get Directions in Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
