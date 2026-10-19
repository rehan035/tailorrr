import React, { useState } from 'react';
import { Phone, MessageSquare, Navigation, Send, CheckCircle2, AlertCircle, Clock, MapPin, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FormState {
  fullName: string;
  phone: string;
  service: string;
  fittingDate: string;
  fabricStatus: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    service: "Men's Suit Tailoring",
    fittingDate: '',
    fabricStatus: 'I have my own fabric',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a complete contact number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Build formatted message for WhatsApp dispatch
    const composedMessage = `*New Tailoring Inquiry - Zafar Brothers Gents Tailors*
• *Name:* ${formData.fullName.trim()}
• *Phone:* ${formData.phone.trim()}
• *Service:* ${formData.service}
• *Fabric Status:* ${formData.fabricStatus}
${formData.fittingDate ? `• *Preferred Date:* ${formData.fittingDate}` : ''}
${formData.message.trim() ? `• *Notes:* ${formData.message.trim()}` : ''}`;

    setSubmittedMessage(composedMessage);
  };

  const handleLaunchWhatsApp = () => {
    if (!submittedMessage) return;
    const url = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(submittedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Consultation & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#faf7f0] mb-4">
            Connect with Zafar Brothers
          </h2>
          <p className="text-sm sm:text-base text-[#a39f91] font-light leading-relaxed">
            Reach out directly by phone, send a WhatsApp message, or plan your fitting visit to our Rawalpindi tailoring workshop.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards as specified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Call Now */}
          <div className="p-6 rounded-lg bg-[#14161f] border border-[#232734] hover:border-[#c5a059]/50 transition-colors flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1e212d] flex items-center justify-center text-[#c5a059] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#a39f91] font-medium block mb-1">
                Direct Line
              </span>
              <h3 className="text-xl font-serif font-bold text-[#faf7f0] mb-2">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="text-xs text-[#9d998c] leading-relaxed mb-6">
                Call us directly to check workshop availability, discuss fabric yardage, or ask questions.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#1f222d] hover:bg-[#c5a059] text-[#faf7f0] hover:text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-all border border-[#2c303e]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Us */}
          <div className="p-6 rounded-lg bg-[#14161f] border border-[#c5a059]/40 hover:border-[#c5a059] transition-colors flex flex-col justify-between shadow-xl relative">
            <span className="absolute -top-2.5 right-4 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#c5a059] text-[#0d0e11]">
              Fastest Response
            </span>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1b251d] flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#a39f91] font-medium block mb-1">
                Instant Chat
              </span>
              <h3 className="text-xl font-serif font-bold text-[#faf7f0] mb-2">
                WhatsApp Us
              </h3>
              <p className="text-xs text-[#9d998c] leading-relaxed mb-6">
                Send suit reference photos, request timeline estimates, or book your measurement slot.
              </p>
            </div>
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello Zafar Brothers, I would like to inquire about men\'s bespoke tailoring.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#c5a059]/20"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Card 3: Get Directions */}
          <div className="p-6 rounded-lg bg-[#14161f] border border-[#232734] hover:border-[#c5a059]/50 transition-colors flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1e212d] flex items-center justify-center text-[#c5a059] mb-4">
                <Navigation className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#a39f91] font-medium block mb-1">
                Workshop Location
              </span>
              <h3 className="text-xl font-serif font-bold text-[#faf7f0] mb-2">
                Get Directions
              </h3>
              <p className="text-xs text-[#9d998c] leading-relaxed mb-6">
                Sir Syed Chowk, Tipu Road, Jinnah Colony, Rawalpindi. Opens turn-by-turn navigation in Google Maps.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#1f222d] hover:bg-[#c5a059] text-[#faf7f0] hover:text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-all border border-[#2c303e]"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Tailoring Inquiry & Appointment Request Form */}
        <div className="max-w-3xl mx-auto rounded-lg bg-[#13151d] border border-[#242735] p-6 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-1">
              <Scissors className="w-3.5 h-3.5" />
              <span>Appointment & Style Inquiry</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#faf7f0]">
              Plan Your Measurement or Fitting
            </h3>
            <p className="text-xs sm:text-sm text-[#9f9b8e] mt-1">
              Fill in your details below. Once verified, you can immediately send this complete request to our master tailor on WhatsApp.
            </p>
          </div>

          {!submittedMessage ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#d4d0c2] font-medium mb-2">
                    Your Full Name <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Tariq Mehmood"
                    className={`w-full px-4 py-3 rounded bg-[#1a1c25] border ${
                      errors.fullName ? 'border-rose-500' : 'border-[#2d313e]'
                    } text-sm text-[#faf7f0] placeholder-[#6e6c64] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#d4d0c2] font-medium mb-2">
                    Phone / WhatsApp Number <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. 0300 1234567"
                    className={`w-full px-4 py-3 rounded bg-[#1a1c25] border ${
                      errors.phone ? 'border-rose-500' : 'border-[#2d313e]'
                    } text-sm text-[#faf7f0] placeholder-[#6e6c64] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-wider text-[#d4d0c2] font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#1a1c25] border border-[#2d313e] text-sm text-[#faf7f0] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                  >
                    <option value="Men's Suit Tailoring">Men&apos;s Suit Tailoring (Two/Three-Piece)</option>
                    <option value="Formal Wear & Prince Coats">Formal Wear &amp; Prince Coats</option>
                    <option value="Alterations & Fitting">Alterations &amp; Fitting Adjustments</option>
                    <option value="Custom Tailoring">Custom Tailoring (Shalwar Kameez / Kurta)</option>
                  </select>
                </div>

                {/* Fabric Status */}
                <div>
                  <label htmlFor="fabricStatus" className="block text-xs uppercase tracking-wider text-[#d4d0c2] font-medium mb-2">
                    Fabric Preference
                  </label>
                  <select
                    id="fabricStatus"
                    value={formData.fabricStatus}
                    onChange={(e) => setFormData({ ...formData, fabricStatus: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#1a1c25] border border-[#2d313e] text-sm text-[#faf7f0] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                  >
                    <option value="I have my own fabric">I will bring my own fabric</option>
                    <option value="I need advice on fabric yardage">I need advice on fabric yardage &amp; blend</option>
                    <option value="Consultation needed first">I want to discuss options at the shop</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="fittingDate" className="block text-xs uppercase tracking-wider text-[#d4d0c2] font-medium mb-2">
                  Target Date / Preferred Fitting Day (Optional)
                </label>
                <input
                  type="date"
                  id="fittingDate"
                  value={formData.fittingDate}
                  onChange={(e) => setFormData({ ...formData, fittingDate: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#1a1c25] border border-[#2d313e] text-sm text-[#faf7f0] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                />
              </div>

              {/* Message / Details */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#d4d0c2] font-medium mb-2">
                  Specific Requests or Notes (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Wedding suit required within 2 weeks, double-breasted cut preferred..."
                  className="w-full px-4 py-3 rounded bg-[#1a1c25] border border-[#2d313e] text-sm text-[#faf7f0] placeholder-[#6e6c64] focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#c5a059]/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Verify &amp; Prepare WhatsApp Message</span>
              </button>
            </form>
          ) : (
            /* Verified Confirmation Mechanism */
            <div className="p-6 rounded bg-[#161924] border border-emerald-500/30 text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#faf7f0] mb-2">
                Inquiry Details Prepared Successfully
              </h4>
              <p className="text-xs sm:text-sm text-[#b0ac9e] max-w-md mx-auto mb-6">
                Your tailoring specifications have been compiled. Tap below to send them directly to <strong className="text-[#faf7f0]">+92 300 5324484</strong> on WhatsApp.
              </p>

              {/* Message preview snippet */}
              <div className="p-4 rounded bg-[#0f1118] border border-[#252836] text-left text-xs font-mono text-[#d4d0c3] mb-6 whitespace-pre-line max-h-48 overflow-y-auto">
                {submittedMessage}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleLaunchWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e11] font-semibold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Now via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmittedMessage(null)}
                  className="py-3 px-6 rounded border border-[#2f3342] text-xs text-[#a09c8f] hover:text-[#faf7f0] transition-colors"
                >
                  Edit Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
