import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function Services() {
  const { tabs, ridesCards, business, club, vms } = homeData.services;
  const [activeTab, setActiveTab] = useState('rides');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);

  // Auto-cycling animation for the "Rides" tab cards
  useEffect(() => {
    if (activeTab !== 'rides' || isUserHovering) return;

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % ridesCards.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [activeTab, isUserHovering, ridesCards.length]);

  const renderServiceDetail = (data) => (
    <div className="tab-pane-fade animate-modalPop">
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[50px] max-[900px]:gap-[30px] items-center bg-[#f8fbff] rounded-[24px] p-12 max-[900px]:p-7 border border-[#dee7f2] shadow-[0_8px_30px_rgba(14,82,255,0.06)]">
        {/* Left Column: Headline, Paragraph, Points, Learn More CTA */}
        <div className="flex flex-col items-start">
          <h3 className="text-[clamp(1.9rem,2.8vw,2.6rem)] font-bold font-heading text-dark-gb mb-4 leading-[1.2]">
            {data.title}
          </h3>
          <p className="text-[1.1rem] leading-[1.65] text-[#555555] mb-7">
            {data.description}
          </p>

          <div className="flex flex-col gap-3.5 mb-8 w-full">
            {data.points.map((pt, i) => (
              <div key={i} className="flex items-center gap-3 text-[1.02rem] font-semibold text-[#1e293b]">
                <div className="w-5 h-5 rounded-full bg-primary-gb/15 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={15} className="text-primary-gb" />
                </div>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <a
            href={data.link}
            className="group inline-flex items-center justify-between gap-3 bg-primary-gb text-white font-bold text-[1.05rem] py-3.5 px-8 rounded-full shadow-[0_4px_16px_rgba(14,82,255,0.28)] hover:bg-primary-gb-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,82,255,0.38)] transition-all duration-300"
          >
            <span>Learn More</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Column: Contextual Showcase Image with Smooth Transition */}
        <div className="w-full h-full overflow-hidden rounded-2xl group">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[380px] max-[900px]:h-[260px] object-cover rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header gsap-section-header mb-2">
          <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
            Our Services
          </h2>
        </div>

        {/* Tab Navigation: Rides, Garibook Business, Garibook Club, VMS */}
        <div className="mt-6 mb-12">
          <div className="inline-flex gap-3 flex-wrap max-sm:w-full" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`font-bold text-[1.05rem] py-3 px-8 rounded-full transition-all duration-300 max-sm:flex-1 max-sm:text-center max-sm:py-2.5 max-sm:px-4 max-sm:text-[0.92rem] cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary-gb text-white shadow-[0_4px_16px_rgba(14,82,255,0.35)] scale-[1.02]'
                    : 'bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0] hover:text-[#121212]'
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveCardIndex(0);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Rides Content */}
        {activeTab === 'rides' && (
          <div className="tab-pane-fade animate-modalPop">
            <div className="mb-8 rides-subheading gsap-section-header">
              <h3 className="text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold font-heading text-[#121212] leading-[1.2] tracking-[-0.5px]">
                Every Ride <br className="hidden sm:inline" /> One Platform
              </h3>
            </div>

            {/* 4 Cards with Auto-Cycling Active Animation */}
            <div
              className="service-cards-grid grid grid-cols-4 max-[1150px]:grid-cols-2 max-sm:grid-cols-1 gap-6"
              onMouseEnter={() => setIsUserHovering(true)}
              onMouseLeave={() => setIsUserHovering(false)}
            >
              {ridesCards.map((card, idx) => {
                const isActive = activeCardIndex === idx;

                return (
                  <div
                    key={card.id}
                    className={`service-card-item group p-7 min-h-[340px] max-sm:min-h-0 max-sm:py-6 max-sm:px-5 rounded-2xl flex flex-col justify-between items-start transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] relative overflow-hidden cursor-pointer ${
                      isActive
                        ? 'bg-primary-gb text-white -translate-y-2 shadow-[0_20px_35px_rgba(14,82,255,0.32)] border-2 border-primary-gb'
                        : 'bg-white text-[#121212] border-2 border-[#e2e8f0] shadow-sm hover:border-primary-gb/50 hover:-translate-y-1 hover:shadow-md'
                    }`}
                    onMouseEnter={() => setActiveCardIndex(idx)}
                    onClick={() => setActiveCardIndex(idx)}
                  >
                    {/* Top Vector Car Illustration */}
                    <div className="w-full flex items-center justify-between mb-6">
                      <div className="relative">
                        <img
                          src={card.icon}
                          alt={card.title}
                          className={`h-[64px] w-auto transition-transform duration-300 ${
                            isActive ? 'scale-110 translate-x-1' : 'group-hover:scale-105'
                          }`}
                        />
                      </div>
                      {/* Active indicator dot or badge */}
                      {card.badge && (
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors duration-300 ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-primary-gb/10 text-primary-gb'
                          }`}
                        >
                          {card.badge}
                        </span>
                      )}
                    </div>

                    {/* Card Content: Title & Description */}
                    <div className="w-full">
                      <h4
                        className={`text-[1.35rem] font-bold font-heading mb-2.5 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-[#121212]'
                        }`}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={`text-[0.95rem] leading-[1.55] transition-colors duration-300 ${
                          isActive ? 'text-white/90' : 'text-[#64748b]'
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Active highlight bottom bar */}
                    <div
                      className={`absolute bottom-0 left-0 h-1.5 transition-all duration-300 ${
                        isActive ? 'w-full bg-warning-gb' : 'w-0 bg-transparent'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Garibook Business */}
        {activeTab === 'business' && renderServiceDetail(business)}

        {/* Tab 3: Garibook Club */}
        {activeTab === 'club' && renderServiceDetail(club)}

        {/* Tab 4: VMS (Vehicle Management System) */}
        {activeTab === 'vms' && renderServiceDetail(vms)}
      </div>
    </section>
  );
}
