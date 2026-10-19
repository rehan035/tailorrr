import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { FittingProcess } from './components/FittingProcess';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e8e6df] flex flex-col selection:bg-[#c5a059] selection:text-[#0c0d10]">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <ServicesSection />
        <FittingProcess />
        <GallerySection />
        <TestimonialsSection />
        <GoogleMapsSection />
        <ContactSection />
      </main>

      {/* Floating & Mobile Sticky Conversion Actions */}
      <FloatingActions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
