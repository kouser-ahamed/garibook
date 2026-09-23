import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function DriverSection() {
  const { heading, description, appMockup, ctaText, ctaLink } = homeData.smartDriver;

  return (
    <section className="bg-white section-padding overflow-hidden" id="driver">
      <div className="container">
        {/* Section Header */}
        <div className="section-header gsap-section-header">
          <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
            {heading}
          </h2>
        </div>

        {/* Big Vibrant Yellow Banner Card */}
        <div className="smart-driver-card bg-[#efc30c] rounded-[28px] max-sm:rounded-[20px] mt-10 overflow-hidden shadow-[0_16px_40px_rgba(239,195,12,0.25)]">
          <div className="grid grid-cols-[1.15fr_0.85fr] max-[991px]:grid-cols-1 items-center py-[60px] px-[70px] max-[991px]:py-10 max-[991px]:px-[30px] max-sm:py-[30px] max-sm:px-5 gap-10 max-[991px]:gap-9">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              <h2 className="text-[clamp(2.4rem,4.2vw,3.8rem)] font-extrabold font-heading leading-[1.15] text-primary-gb tracking-[-1px] mb-5">
                0% Commission <br /> 100% Freedom
              </h2>
              <p className="text-[1.25rem] leading-[1.55] font-semibold text-[#121212] mb-7 max-w-[580px]">
                {description}
              </p>

              <div className="flex flex-col gap-3 mb-9">
                <div className="flex items-center gap-3 text-[1.05rem] font-semibold text-[#1a1a1a]">
                  <Check size={20} className="text-primary-gb flex-shrink-0" />
                  <span>Choose your own fare and bid directly</span>
                </div>
                <div className="flex items-center gap-3 text-[1.05rem] font-semibold text-[#1a1a1a]">
                  <Check size={20} className="text-primary-gb flex-shrink-0" />
                  <span>Daily earnings withdraw directly to bKash / Bank</span>
                </div>
                <div className="flex items-center gap-3 text-[1.05rem] font-semibold text-[#1a1a1a]">
                  <Check size={20} className="text-primary-gb flex-shrink-0" />
                  <span>24/7 dedicated driver hotline & trip insurance</span>
                </div>
              </div>

              <div className="w-full sm:w-auto">
                <a href={ctaLink} className="theme-primary-btn !bg-primary-gb !text-white py-[18px] px-9 max-sm:w-full max-sm:justify-center">
                  <span>{ctaText}</span>
                  <ArrowRight size={22} className="btn-icon" />
                </a>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="flex justify-center items-center max-[991px]:-order-1">
              <div className="relative max-w-[380px] max-[991px]:max-w-[300px] rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-4 border-white/40 transition-transform duration-400 hover:-translate-y-2 hover:scale-[1.02]">
                <img
                  src={appMockup}
                  alt="Garibook Smart Driver App"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
