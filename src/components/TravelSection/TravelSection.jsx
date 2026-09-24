import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeData } from '../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

export default function TravelSection() {
  const { cards } = homeData.travelScenarios;

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px): Starts after section enters deeper (top 70%)
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 12%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      ).fromTo(
        cardsRef.current?.children || [],
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power2.out',
        },
        '+=0.1'
      );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 10%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      ).fromTo(
        cardsRef.current?.children || [],
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '+=0.08'
      );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 5%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }
      ).fromTo(
        cardsRef.current?.children || [],
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-20"
      id="travel"
    >
      <div className="max-w-[1420px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef}>
          <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
            More Than Miles — <br className="hidden md:block" /> We Bring People Together
          </h2>
        </div>

        {/* 3 Travel Scenario Cards */}
        <div
          ref={cardsRef}
          className="travel-scenarios-grid grid grid-cols-3 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 gap-7 max-sm:gap-5 mt-[36px] sm:mt-[42px]"
        >
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
