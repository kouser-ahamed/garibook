import React from 'react';
import { ArrowRight } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function Footer() {
  const { columns, nrb, link3, tradeLicense, copyright } = homeData.footer;

  return (
    <footer className="bg-black text-white pt-16 sm:pt-20 pb-0" id="footer">
      <div className="container">
        {/* Main 4 Columns Widget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 sm:pb-16">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h6 className="text-white text-base lg:text-[17px] font-bold font-heading mb-5">
                {col.title}
              </h6>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-[#cccccc] text-[14px] leading-relaxed transition-colors duration-200 hover:text-warning-gb inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mid Row: Download App & Product / Powered Attribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start py-10 sm:py-14 border-t border-white/10">
          {/* Download App Mini Banner */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-white leading-tight mb-4 sm:mb-5">
              Download Our <br /> Garibook Mobile App
            </h3>
            <a
              href="https://onelink.to/gbweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary-gb hover:bg-primary-gb-hover text-white font-bold text-sm sm:text-[15px] py-3.5 px-6 sm:px-7 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-gb-btn w-full sm:w-auto"
            >
              <span>Download App</span>
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* A Product By NRB */}
          <div className="flex flex-col items-start">
            <h4 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-white mb-4 sm:mb-5">
              A Product By
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={nrb.logo}
                alt={nrb.name}
                className="h-11 sm:h-14 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-tight">
                  {nrb.name}
                </span>
                <a
                  href={nrb.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-warning-gb text-xs sm:text-[14px] font-bold mt-1.5 hover:underline transition-colors"
                >
                  <span>Visit Website</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Powered By Link 3 */}
          <div className="flex flex-col items-start">
            <h4 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-white mb-4 sm:mb-5">
              Powered By
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={link3.logo}
                alt={link3.name}
                className="h-11 sm:h-14 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-tight">
                  {link3.name}
                </span>
                <a
                  href={link3.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-warning-gb text-xs sm:text-[14px] font-bold mt-1.5 hover:underline transition-colors"
                >
                  <span>Visit Website</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 py-6 sm:py-8 border-t border-white/10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 flex-wrap justify-center sm:justify-start">
            <a href="/" title="garibook" className="inline-flex items-center">
              <img
                src="/assets/logo-white.svg"
                alt="garibook"
                title="garibook"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#terms" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors">
                Terms & Conditions
              </a>
              <a href="#privacy" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-white/70 text-xs sm:text-sm text-center lg:text-left leading-relaxed">
            Trade license number: <br className="hidden sm:inline" />
            {tradeLicense}
          </div>

          <div className="text-white/80 text-xs sm:text-sm text-center lg:text-right">
            {copyright}
          </div>
        </div>
      </div>

      {/* Very Bottom Full-Width Edge-to-Edge Payment Partner Brands Banner */}
      <div className="w-full bg-white border-t border-slate-200 py-1.5 sm:py-2.5 overflow-x-auto scrollbar-none">
        <img
          src="/assets/images/ssl.png"
          alt="Payment Methods: Visa, Mastercard, Amex, UnionPay, bKash, Nagad, Rocket, Bank Asia, EBL, MTB, SSLCommerz"
          className="w-full min-w-[1000px] lg:min-w-full h-auto block"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
