import React from 'react';
import { ArrowRight } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function Footer() {
  const { columns, nrb, link3, tradeLicense, copyright } = homeData.footer;

  return (
    <footer className="bg-black text-white pt-[70px] pb-10" id="footer">
      <div className="container">
        {/* Main 4 Columns Widget */}
        <div className="mb-[60px]">
          <div className="grid grid-cols-[1.2fr_1.5fr_1.8fr_1.5fr] max-[1100px]:grid-cols-2 max-md:grid-cols-1 gap-9 max-md:gap-7">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h6 className="text-white text-[1.35rem] font-bold font-heading mb-6 capitalize">{col.title}</h6>
                <ul className="flex flex-col gap-3.5 list-none">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-[#cccccc] text-[1.05rem] leading-[1.6] transition-colors duration-250 hover:text-warning-gb">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mid Row: Download App & Product/Powered Attribution */}
        <div className="mb-[50px]">
          <div className="grid grid-cols-[1fr_1.2fr] max-[1100px]:grid-cols-1 gap-[50px] items-center">
            {/* Download App Mini Banner */}
            <div>
              <h3 className="text-[clamp(1.8rem,2.8vw,2.3rem)] font-bold font-heading text-white leading-[1.25] mb-5">
                Download Our <br /> Garibook Mobile App
              </h3>
              <a href="#download-app" className="theme-primary-btn py-4 px-8 w-fit">
                <span>Download App</span>
                <ArrowRight size={20} className="btn-icon" />
              </a>
            </div>

            {/* Partner / Company Badges */}
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-7">
              {/* Product By NRB */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[1.25rem] font-bold font-heading text-white">A Product By</h4>
                <div className="flex items-center gap-4 bg-white/[0.05] border border-white/[0.12] rounded-[14px] p-4 px-5">
                  <img
                    src={nrb.logo}
                    alt={nrb.name}
                    className="h-12 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <a
                      href={nrb.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-warning-gb text-[0.95rem] font-bold mt-1 transition-transform duration-200 hover:translate-x-1"
                    >
                      <span>Visit Website</span>
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Powered By Link 3 */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[1.25rem] font-bold font-heading text-white">Powered By</h4>
                <div className="flex items-center gap-4 bg-white/[0.05] border border-white/[0.12] rounded-[14px] p-4 px-5">
                  <img
                    src={link3.logo}
                    alt={link3.name}
                    className="h-12 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <a
                      href={link3.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-warning-gb text-[0.95rem] font-bold mt-1 transition-transform duration-200 hover:translate-x-1"
                    >
                      <span>Visit Website</span>
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-none h-px bg-white/15 mb-7.5" />

        {/* Bottom Bar */}
        <div className="flex items-center justify-between mb-7.5 flex-wrap gap-5 max-md:flex-col max-md:items-start">
          <div className="flex items-center gap-9 max-md:flex-col max-md:items-start max-md:gap-4">
            <img src="/assets/logo-white.svg" alt="Garibook" className="h-[38px] w-auto" />
            <div className="flex items-center gap-6">
              <a href="#terms" className="text-[#cccccc] text-[1.05rem] leading-[1.6] transition-colors duration-250 hover:text-warning-gb">Terms & Conditions</a>
              <a href="#privacy" className="text-[#cccccc] text-[1.05rem] leading-[1.6] transition-colors duration-250 hover:text-warning-gb">Privacy Policy</a>
            </div>
          </div>

          <div className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-2">
            <span className="text-[0.9rem] text-[#888888] leading-[1.4]">
              Trade license number: <br className="hidden md:inline" /> {tradeLicense}
            </span>
            <p className="text-[0.95rem] text-[#aaaaaa]">{copyright}</p>
          </div>
        </div>

        {/* SSL / Payment Methods Banner */}
        <div className="w-full mt-5 overflow-x-auto rounded-xl">
          <img
            src="/assets/images/ssl_banner.svg"
            alt="SSLCommerz Verified Payment Methods"
            className="w-full min-w-[800px] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
