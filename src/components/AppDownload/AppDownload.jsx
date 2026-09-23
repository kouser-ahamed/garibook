import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function AppDownload() {
  const { subtitle, ctaText } = homeData.appDownload;

  return (
    <section className="bg-white section-padding" id="download-app">
      <div className="container">
        <div className="bg-primary-gb rounded-[28px] max-md:rounded-[20px] py-20 px-[70px] max-md:py-[45px] max-md:px-6 shadow-[0_16px_40px_rgba(14,82,255,0.25)] relative overflow-hidden">
          <div className="relative z-[2] max-w-[650px]">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white py-1.5 px-4 rounded-full text-[0.9rem] font-semibold mb-5">
              <Smartphone size={18} />
              <span>Available on iOS & Android</span>
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold font-heading text-white leading-[1.15] tracking-[-1px] mb-4.5">
              Download <br /> Garibook Mobile App
            </h2>
            <p className="text-[1.25rem] text-white/90 leading-[1.5] mb-8">{subtitle}</p>
            <div>
              <a
                href="https://onelink.to/gbweb"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-warning-btn py-[18px] px-9 max-md:w-full max-md:justify-center"
              >
                <span>{ctaText}</span>
                <ArrowRight size={22} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
