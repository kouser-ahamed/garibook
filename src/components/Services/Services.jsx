import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function Services() {
  const { tabs, ridesCards, business, club, vms } = homeData.services;
  const [activeTab, setActiveTab] = useState('rides');
  const [hoveredCard, setHoveredCard] = useState('intercity');

  const renderServiceDetail = (data) => (
    <div className="tab-pane-fade active">
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[50px] max-[900px]:gap-[30px] items-center bg-[#f7faff] rounded-[20px] p-[50px] max-[900px]:p-[30px] border border-border-color">
        <div className="flex flex-col">
          <h3 className="text-[clamp(1.8rem,2.8vw,2.5rem)] font-bold font-heading text-dark-gb mb-5 leading-[1.25]">{data.title}</h3>
          <p className="text-[1.15rem] leading-[1.6] text-[#555555] mb-7">{data.description}</p>
          <div className="flex flex-col gap-3.5 mb-9">
            {data.points.map((pt, i) => (
              <div key={i} className="flex items-center gap-3 text-[1.05rem] font-semibold text-[#222222]">
                <CheckCircle size={18} className="text-primary-gb flex-shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <a href={data.link} className="theme-primary-btn w-fit">
            <span>Learn More</span>
            <ArrowRight size={20} className="btn-icon" />
          </a>
        </div>
        <div className="w-full h-full">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[380px] max-[900px]:h-[280px] object-cover rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header gsap-section-header">
          <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
            Our Services
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="mt-7 mb-[50px]">
          <div className="inline-flex gap-4 flex-wrap max-sm:flex max-sm:w-full" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`font-semibold text-[1.15rem] py-3.5 px-10 rounded-xl transition-all duration-300 max-sm:flex-[1_1_calc(50%-10px)] max-sm:text-center max-sm:py-3 max-sm:px-4 max-sm:text-[0.95rem] ${
                  activeTab === tab.id
                    ? 'bg-primary-gb text-white'
                    : 'bg-[#e9e9e9] text-[#121212] hover:bg-primary-gb hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Rides Content */}
        {activeTab === 'rides' && (
          <div className="tab-pane-fade active">
            <div className="mb-10 rides-subheading gsap-section-header">
              <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold font-heading text-[#121212] leading-[1.2]">
                Every Ride <br /> One Platform
              </h2>
            </div>

            <div className="service-cards-grid grid grid-cols-4 max-[1200px]:grid-cols-2 max-sm:grid-cols-1 gap-6">
              {ridesCards.map((card) => {
                const isCurrentActive = hoveredCard === card.id;
                return (
                  <div
                    key={card.id}
                    className={`service-card-item group p-[30px] pt-9 min-h-[350px] max-sm:min-h-0 max-sm:py-7 max-sm:px-[22px] rounded-2xl flex flex-col justify-between items-start transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] relative overflow-hidden cursor-pointer border border-[#dee7f2]/50 ${
                      isCurrentActive
                        ? 'bg-primary-gb -translate-y-1.5 shadow-[0_16px_32px_rgba(14,82,255,0.25)]'
                        : 'bg-[#f5f8ff] hover:bg-primary-gb hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(14,82,255,0.25)]'
                    }`}
                    onMouseEnter={() => setHoveredCard(card.id)}
                  >
                    <div className="relative z-[2] mb-6">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className={`h-[68px] w-auto transition-transform duration-350 ${
                          isCurrentActive ? 'scale-[1.08] translate-x-1.5' : 'group-hover:scale-[1.08] group-hover:translate-x-1.5'
                        }`}
                      />
                    </div>
                    <div>
                      <h5
                        className={`text-[1.45rem] font-bold font-heading mb-3 transition-colors duration-300 ${
                          isCurrentActive ? 'text-white' : 'text-[#121212] group-hover:text-white'
                        }`}
                      >
                        {card.title}
                      </h5>
                      <p
                        className={`text-base leading-[1.55] transition-colors duration-300 ${
                          isCurrentActive ? 'text-white' : 'text-[#777777] group-hover:text-white'
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Business Content */}
        {activeTab === 'business' && renderServiceDetail(business)}

        {/* Tab 3: Club Content */}
        {activeTab === 'club' && renderServiceDetail(club)}

        {/* Tab 4: VMS Content */}
        {activeTab === 'vms' && renderServiceDetail(vms)}
      </div>
    </section>
  );
}
