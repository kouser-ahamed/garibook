import React, { useState } from 'react';
import { Minus, X, ChevronDown, CheckCircle2 } from 'lucide-react';

/**
 * Garibook Pin Road SVG Logo for the chat modal header
 */
const GaribookPinLogo = () => (
  <svg
    viewBox="0 0 160 195"
    className="w-7 h-7 sm:w-8 sm:h-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#0E52FF"
      d="M154.1,82.7L154.1,82.7c-1.6,35.4-22.4,60.1-34.8,71.8c-11.3-5.6-27.7-18.3-36.2-27.9 c11.9-10.5,34.1-43.5,20.5-65.1c-5.8-9-16.9-14.6-28.2-14.5c-10.8,0.1-20,5.5-25.9,15c-3.3,6.3-3.1,12.4-2.9,17.2 c0.2,4.2,1,10.4,5.5,20.2c11.1,23,29.2,41.4,60.6,61.4c-2.5,2.3-5,4.7-7.4,7c-3.3,3.1-6.7,6.3-10,9.4l-2.8,2.6l-0.3,0.2l0.1,0.1 c-0.3,0.2-0.5,0.5-0.8,0.8c-0.4,0.4-0.8,0.7-1.2,1.1c-2.5,2.4-5.1,4.8-7.7,7.2l-3.5,3.3c-12.6-8.9-112.5-82.5-68.4-154.6 C28.8,10.5,54.3,1.1,76.8,1.1c8.3,0,16.2,1.3,23.1,3.4C127.9,12.8,156.4,43.1,154.1,82.7z"
    />
    <g fill="#FFFFFF">
      <path d="M30.6,109.6c-0.3-0.7-1.1-0.9-1.8-0.6c-0.7,0.3-1,1.1-0.6,1.8c2.7,5.6,6,10.9,9.6,16 c0.4,0.6,1.3,0.7,1.9,0.3l0.1-0.1c0.6-0.4,0.7-1.3,0.3-1.9C36.6,120.2,33.4,115,30.6,109.6z" />
      <path d="M72.6,21c-6.6,0.4-13.1,1.9-19.2,4.4c-0.4,0.2-0.6,0.6-0.4,1l0.1,0.2c0.2,0.4,0.6,0.6,1,0.4 c5.9-2.5,12.2-4,18.6-4.5c0.4,0,0.8-0.4,0.7-0.8C73.4,21.3,73.1,20.9,72.6,21z" />
      <path d="M22.7,81.4c-0.1-1.7-0.2-3.5-0.1-5.2c0-1.3,0.1-2.7,0.2-4.1c0-0.6-0.4-1.2-1.1-1.2h0 c-0.6-0.1-1.2,0.4-1.3,1.1c-0.1,1.4-0.2,2.8-0.2,4.2c0,1.8,0,3.6,0.1,5.4c0.2,3.2,0.6,6.4,1.2,9.5c0.1,0.6,0.8,1,1.4,0.9l0.2,0 c0.6-0.1,1-0.8,0.9-1.4C23.3,87.5,22.9,84.5,22.7,81.4z" />
      <path d="M110.3,32.7c0.2-0.3,0.1-0.7-0.1-0.8c-5.4-3.9-11.5-6.9-18-8.8c-0.3-0.1-0.7,0.1-0.8,0.4l0,0.2 c-0.1,0.3,0.1,0.7,0.4,0.7c6.3,1.8,12.3,4.7,17.7,8.4C109.7,33,110.1,33,110.3,32.7z" />
      <path d="M37.8,37.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4-0.1c-2.4,2.2-4.5,4.7-6.4,7.4c-1.9,2.7-3.5,5.5-4.9,8.5 c-0.2,0.5,0,1.1,0.5,1.3l0.2,0.1c0.5,0.2,1.1,0,1.3-0.5c1.3-2.9,2.8-5.6,4.6-8.2C33.5,42.2,35.6,39.8,37.8,37.6z" />
      <path d="M64,156c0.6,0.6,1.6,0.6,2.2,0l0.1-0.1c0.6-0.6,0.6-1.6,0-2.2c-4.3-4.1-8.6-8.3-12.7-12.7 c-0.6-0.6-1.5-0.7-2.2-0.1c-0.6,0.6-0.7,1.5-0.1,2.2C55.4,147.5,59.7,151.8,64,156z" />
      <path d="M133.3,82.5l-0.2,0c-0.1,0-0.2,0.1-0.2,0.2c-0.4,6.8-1.9,13.6-4.2,20.1c0,0.1,0,0.3,0.1,0.3 c0.1,0,0.3,0,0.3-0.1c2.3-6.5,3.9-13.3,4.4-20.2C133.5,82.6,133.4,82.5,133.3,82.5z" />
      <path d="M131.8,64.5c0.2-0.1,0.4-0.3,0.3-0.5c-0.8-3.3-1.9-6.6-3.3-9.7c-1.4-3.1-3.1-6.1-5.1-8.9 c-0.1-0.2-0.4-0.2-0.6-0.1l-0.2,0.1c-0.2,0.1-0.2,0.4-0.1,0.6c2,2.7,3.7,5.6,5.1,8.6c1.4,3,2.5,6.2,3.3,9.5 C131.4,64.4,131.6,64.6,131.8,64.5z" />
      <path d="M108.1,136L108.1,136c5-5,9.3-10.6,13-16.6l-0.3-0.2C117.2,125.3,112.9,130.9,108.1,136z" />
      <path d="M95.6,177.2l-2.7,2.5c-4.4-3-8.7-6.1-12.8-9.4c-0.7-0.6-0.9-1.7-0.3-2.4c0.6-0.7,1.7-0.8,2.4-0.3 C86.6,171,91,174.2,95.6,177.2z" />
    </g>
  </svg>
);

export default function LiveChatWidget({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+880',
    phone: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Close modal on Escape key press
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.query.trim() && !formData.phone.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      countryCode: '+880',
      phone: '',
      query: '',
    });
  };

  return (
    <>
      {/* Live Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-[1000] w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] bg-white rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.28)] border border-slate-200/80 overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95">
          {/* Header Bar */}
          <div className="bg-[#0E52FF] px-4 py-3 flex items-center justify-between">
            {/* Left circular Garibook badge */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md">
              <GaribookPinLogo />
            </div>

            {/* Right window actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors p-1 cursor-pointer"
                aria-label="Minimize Chat"
                title="Minimize"
              >
                <Minus size={22} className="stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors p-1 cursor-pointer"
                aria-label="Close Chat"
                title="Close"
              >
                <X size={22} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 bg-white">
            {submitted ? (
              <div className="py-8 px-2 text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Your query has been submitted. Our live support team will reach
                  out to you shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#0E52FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0043e0] transition-colors shadow-sm cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-center font-bold text-slate-900 text-[15px] sm:text-[16px] leading-snug mb-5">
                  Welcome to Garibook Live Chat Support Service!
                </h3>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0E52FF] focus:ring-1 focus:ring-[#0E52FF] transition-all"
                    />
                  </div>

                  {/* Phone field with Country Code */}
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none pl-3 pr-7 py-2.5 rounded-lg border border-slate-300 text-slate-800 bg-white text-sm focus:outline-none focus:border-[#0E52FF] focus:ring-1 focus:ring-[#0E52FF] transition-all cursor-pointer font-medium"
                      >
                        <option value="+880">+880</option>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+971">+971</option>
                        <option value="+966">+966</option>
                        <option value="+60">+60</option>
                        <option value="+65">+65</option>
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500"
                      />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0E52FF] focus:ring-1 focus:ring-[#0E52FF] transition-all"
                    />
                  </div>

                  {/* Query textarea */}
                  <div>
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Write your query here"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0E52FF] focus:ring-1 focus:ring-[#0E52FF] transition-all resize-none"
                    />
                  </div>

                  {/* Submit / Send button positioned bottom right */}
                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="w-12 h-12 rounded-full bg-[#0E52FF] hover:bg-[#0043e0] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(14,82,255,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      aria-label="Send Query"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-white translate-x-0.5"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer Bar */}
          <div className="bg-[#0E52FF] py-2 px-4 text-center select-none">
            <span className="text-white text-xs tracking-wide">
              Powered by{' '}
              <span className="text-[#38bdf8] font-bold">iDESK</span>
              <span className="text-[#22c55e] font-bold">360</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
