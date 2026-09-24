import React from 'react';
import { ArrowRight } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function AppDownload() {
  const { subtitle, ctaText } = homeData.appDownload;

  return (
    <section className="bg-white pt-14 sm:pt-18 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 overflow-visible" id="download-app">
      <div className="container overflow-visible">
        <div className="relative bg-primary-gb rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] px-8 sm:px-14 lg:px-20 py-12 sm:py-16 lg:py-20 shadow-[0_20px_50px_rgba(14,82,255,0.22)] overflow-visible">
          {/* Left Content */}
          <div className="relative z-10 max-w-[560px] text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black font-heading text-white leading-[1.18] tracking-tight">
              Download <br /> Garibook Mobile App
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-white/95 font-normal leading-relaxed max-w-[480px]">
              {subtitle || 'Download our Customer, Smart Driver and Enterprise App'}
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                href="https://onelink.to/gbweb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 bg-warning-gb hover:bg-warning-gb-hover text-dark-gb font-bold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-gb-warning hover:shadow-gb-warning-hover hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <span>{ctaText || 'Download App'}</span>
                <ArrowRight size={22} className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>

          {/* Right Phone Mockup with Hand */}
          <div className="mt-10 lg:mt-0 flex justify-center lg:block lg:absolute lg:right-10 xl:right-20 lg:bottom-0 pointer-events-none z-10">
            <img
              src="/assets/images/app_download_phone.png"
              alt="Garibook Mobile App"
              className="h-[320px] sm:h-[400px] lg:h-[470px] xl:h-[500px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
