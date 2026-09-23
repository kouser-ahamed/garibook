import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeData } from '../../data/homeData';
import RunningCar from '../RunningCar/RunningCar';

gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const { statistics } = homeData;
  const sectionRef = useRef(null);
  const skylineTrackRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. City Skyline Moving Smoothly from Right to Left (Infinite Seamless Parallax)
      if (skylineTrackRef.current) {
        gsap.to(skylineTrackRef.current, {
          x: "-50%",
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      }

      // 2. Animated Counter Numbers (ScrollTrigger)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          statistics.forEach((stat, idx) => {
            const el = numberRefs.current[idx];
            if (!el) return;

            const target = stat.targetNumber;
            const suffix = stat.suffix || '';
            const obj = { val: 0 };

            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: 'power2.out',
              onUpdate: () => {
                el.innerText = `${Math.floor(obj.val).toLocaleString('en-US')}${suffix}`;
              },
              onComplete: () => {
                el.innerText = `${target.toLocaleString('en-US')}${suffix}`;
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [statistics]);

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="w-full bg-gradient-to-r from-[#0052cc] to-[#003d99] relative overflow-hidden overflow-x-hidden pt-44 sm:pt-48 lg:pt-52"
    >
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-12 gsap-section-header">
            From Everyday Rides to <br className="hidden sm:inline" /> Meaningful Journeys
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span
                ref={(el) => (numberRefs.current[idx] = el)}
                className="text-yellow-400 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight"
              >
                0{stat.suffix}
              </span>
              <span className="text-white text-sm sm:text-base font-medium mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated City Skyline & Driving Car (Bottom Horizon) */}
      <div className="relative w-full overflow-hidden h-32 sm:h-36 lg:h-40 mt-12 pointer-events-none select-none">
        {/* City Skyline Scrolling Track (Right to Left Seamless Loop) */}
        <div
          ref={skylineTrackRef}
          className="absolute bottom-0 left-0 flex w-[200%] h-28 sm:h-32 lg:h-36 pointer-events-none opacity-85"
          style={{ willChange: 'transform' }}
        >
          <img
            src="/assets/images/gemini-svg.svg"
            alt="City Skyline"
            className="w-1/2 h-full object-contain object-bottom pointer-events-none flex-shrink-0"
          />
          <img
            src="/assets/images/gemini-svg.svg"
            alt="City Skyline"
            className="w-1/2 h-full object-contain object-bottom pointer-events-none flex-shrink-0"
          />
        </div>

        {/* White Car Anchored on the Left, Cruising Forward (Skyline Scrolls Behind) */}
        <div
          className="absolute bottom-1 left-4 sm:left-12 lg:left-20 z-10 h-auto pointer-events-none"
        >
          <RunningCar />
        </div>
      </div>
    </section>
  );
}
