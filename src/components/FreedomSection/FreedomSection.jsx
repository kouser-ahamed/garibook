import React from 'react';
import { homeData } from '../../data/homeData';

export default function FreedomSection() {
  const { heading, bannerImage, pillars } = homeData.freedom;

  return (
    <section className="bg-black text-white section-padding" id="freedom">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header gsap-section-header">
          <h2 className="text-white text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading tracking-[-1px]">{heading}</h2>
        </div>

        {/* Cinematic Wide Journey Banner */}
        <div className="group w-full mt-10 mb-[50px] overflow-hidden rounded-[20px] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <img
            src={bannerImage}
            alt="Freedom in Every Journey"
            className="w-full h-[clamp(280px,35vw,480px)] max-sm:h-[240px] object-cover transition-transform duration-600 group-hover:scale-[1.02]"
          />
        </div>

        {/* 3 Value Proposition Pillars */}
        <div className="freedom-boxes-row grid grid-cols-3 max-[991px]:grid-cols-2 max-sm:grid-cols-1 gap-9 max-sm:gap-5 justify-end">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="freedom-box-item flex flex-col items-start p-4 rounded-[14px] bg-white/[0.03] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 hover:border-primary-gb/40"
            >
              <div className="mb-5">
                <img src={pillar.icon} alt={pillar.title} className="w-[60px] h-[60px]" />
              </div>
              <div>
                <h5 className="text-[1.55rem] font-bold font-heading mb-2.5 text-white">{pillar.title}</h5>
                <p className="text-[1.05rem] text-[#9d9d9d] leading-[1.5]">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
