import React from 'react';
import { homeData } from '../../data/homeData';

export default function TravelSection() {
  const { cards } = homeData.travelScenarios;

  return (
    <section className="bg-white section-padding" id="travel">
      <div className="container">
        {/* Section Header */}
        <div className="section-header gsap-section-header">
          <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
            More Than Miles — <br className="hidden md:block" /> We Bring People Together
          </h2>
        </div>

        {/* 3 Travel Scenario Cards */}
        <div className="travel-scenarios-grid grid grid-cols-3 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 gap-7 max-sm:gap-5 mt-[45px]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="travel-scenario-card group relative rounded-[20px] overflow-hidden h-[420px] max-[1024px]:h-[360px] max-sm:h-[320px] cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
            >
              <div className="relative w-full h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.75)_100%)]" />
              </div>
              <div className="absolute inset-0 w-full h-full p-8 max-sm:p-5 flex flex-col justify-between z-[2] pointer-events-none">
                <h4 className="text-[1.85rem] max-sm:text-[1.55rem] font-bold font-heading text-white tracking-[-0.5px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                  {card.title}
                </h4>
                <p className="text-base font-medium text-white/90 leading-[1.4] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  {card.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
