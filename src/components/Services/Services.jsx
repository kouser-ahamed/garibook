import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { homeData } from '../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const { tabs, business, club, vms } = homeData.services;
  const [activeTab, setActiveTab] = useState('rides');
  const [activeId, setActiveId] = useState('intercity');

  const sectionWrapperRef = useRef(null);
  const ourServicesRef = useRef(null);
  const pillsRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px): 4 cards in 1 horizontal row
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionWrapperRef.current,
          start: 'top 85%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      tl.fromTo(
        ourServicesRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
        .fromTo(
          pillsRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.08'
        )
        .fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.08'
        )
        .fromTo(
          cardsContainerRef.current?.children || [],
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    });

    // 2. Tablet (640px to 1023px): 2 columns x 2 rows
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionWrapperRef.current,
          start: 'top 85%',
          end: 'top 15%',
          scrub: 1,
        },
      });

      tl.fromTo(
        ourServicesRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
        .fromTo(
          pillsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '+=0.06'
        )
        .fromTo(
          headingRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '+=0.06'
        )
        .fromTo(
          cardsContainerRef.current?.children || [],
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '+=0.08'
        );
    });

    // 3. Mobile (< 640px): 1 column, 4 stacked cards
    mm.add('(max-width: 639px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionWrapperRef.current,
          start: 'top 85%',
          end: 'top 10%',
          scrub: 1,
        },
      });

      tl.fromTo(
        ourServicesRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }
      )
        .fromTo(
          pillsRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
          '+=0.05'
        )
        .fromTo(
          headingRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
          '+=0.05'
        )
        .fromTo(
          cardsContainerRef.current?.children || [],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '+=0.06'
        );
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  const services = [
    {
      id: 'intercity',
      title: 'Intercity Car Rental',
      desc: 'Travel between cities with comfort and confidence.',
      image: '/assets/cars/intercity_car_rental.svg',
      badge: 'Popular',
    },
    {
      id: 'rideshare',
      title: 'Ride share',
      desc: 'Go anywhere in the city, quickly and easily.',
      image: '/assets/cars/rideshare.svg',
      badge: 'Fast',
    },
    {
      id: 'airport',
      title: 'Airport Rental',
      desc: "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
      image: '/assets/cars/airport_rental.svg',
      badge: '24/7',
    },
    {
      id: 'hourly',
      title: 'Hourly Rental',
      desc: 'Rent a car by the hour, tailored to your needs.',
      image: '/assets/cars/hourly_rental.svg',
      badge: 'Flexible',
    },
  ];

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
    <section ref={sectionWrapperRef} className="w-full bg-white py-12 sm:py-16 lg:py-20" id="services">
      <div className="max-w-[1420px] mx-auto px-6 lg:px-8">
        {/* Top Section Header */}
        <h2
          ref={ourServicesRef}
          className="text-2xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.12] mb-4 sm:mb-5"
        >
          Our Services
        </h2>

        {/* Category Filter Pills */}
        <div ref={pillsRef} className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8" role="tablist">
          {tabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`px-5 sm:px-7 py-2 sm:py-3 rounded-2xl text-xs sm:text-base font-bold transition-all cursor-pointer ${isTabActive
                  ? 'bg-[#0052fe] text-white shadow-sm'
                  : 'bg-[#eaedf0] text-slate-700 hover:bg-slate-200'
                  }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'rides') setActiveId('intercity');
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Rides Content */}
        {activeTab === 'rides' && (
          <div className="tab-pane-fade animate-modalPop">
            <h3
              ref={headingRef}
              className="text-2xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.12] mb-8 sm:mb-10"
            >
              Every Ride <br /> One Platform
            </h3>

            {/* 4 Cards Grid */}
            <div
              ref={cardsContainerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              onMouseLeave={() => setActiveId('intercity')}
            >
              {services.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div key={item.id} className="h-full">
                    <div
                      onMouseEnter={() => setActiveId(item.id)}
                      onClick={() => setActiveId(item.id)}
                      className={`group relative overflow-hidden rounded-2xl p-6 min-h-[310px] flex flex-col justify-between transition-all duration-300 cursor-pointer ${isActive
                        ? 'bg-[#0052fe] shadow-xl shadow-blue-500/20 -translate-y-1.5'
                        : 'bg-[#f8fafc] hover:bg-white hover:shadow-lg border border-slate-100 hover:-translate-y-1'
                        }`}
                    >
                      {/* Top Car Graphic Area */}
                      <div className="relative w-full h-24 flex items-center overflow-visible">
                        {/* Extended White Pocket Notch on the left */}
                        <div
                          className={`absolute -left-6 top-1/2 -translate-y-1/2 h-16 w-32 bg-white rounded-r-2xl transition-all duration-300 pointer-events-none z-10 ${isActive
                            ? "opacity-100 scale-x-100 origin-left"
                            : "opacity-0 scale-x-0 origin-left"
                            }`}
                        />

                        {/* Car Illustration */}
                        <div
                          className={`relative z-20 transition-transform duration-300 ease-out ${isActive ? "translate-x-5" : "translate-x-0"
                            }`}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-auto object-contain select-none"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="mt-6 z-20">
                        <h4
                          className={`text-xl font-bold mb-2 transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed transition-colors duration-200 ${isActive ? 'text-white/90' : 'text-slate-500'
                            }`}
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Accent Bar */}
                      <div
                        className={`absolute bottom-0 left-0 h-1.5 transition-all duration-300 ${isActive ? 'w-full bg-[#facc15]' : 'w-0 bg-transparent'
                          }`}
                      />
                    </div>
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
