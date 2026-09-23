import React from 'react';
import { homeData } from '../../data/homeData';

export default function Statistics() {
  const { statistics } = homeData;

  return (
    <section
      className="w-full bg-gradient-to-r from-[#0052cc] to-[#003d99] relative overflow-hidden"
      id="statistics"
    >
      <div className="happy-client-wrap-inside relative pt-60 lg:pt-64 pb-24 max-[991px]:pt-50 max-[991px]:pb-20 w-full overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-[850px] mb-12 max-md:mb-8">
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-bold font-heading leading-[1.18] text-white tracking-[-1px] gsap-section-header">
              From Everyday Rides to <br className="hidden sm:inline" /> Meaningful Journeys
            </h2>
          </div>

          <div className="mt-12 max-md:mt-6">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-md:gap-6 w-full list-none p-0 m-0">
              {statistics.map((stat, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-start bg-white/5 backdrop-blur-[2px] p-6 max-sm:p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <h4
                    className="stat-counter-number text-[clamp(2.2rem,3.4vw,3.2rem)] font-extrabold font-heading leading-none text-warning-gb mb-2.5 tracking-[-1px]"
                    data-target={stat.targetNumber}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </h4>
                  <span className="text-[1.1rem] max-sm:text-[0.95rem] font-semibold text-white/90">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* City outline silhouette illustration at the bottom */}
        <div className="absolute bottom-0 left-0 w-[400%] h-20 bg-[url('/assets/images/city_skyline.svg')] bg-repeat-x bg-[length:1200px_80px] animate-moveCity pointer-events-none z-[1]" />

        {/* Animated white car moving along the road from left to right triggered via GSAP / ScrollTrigger */}
        <div className="absolute bottom-3 left-0 z-[6] pointer-events-none stats-car-track w-full">
          <div className="stats-moving-car inline-block animate-driveCar">
            <img
              src="/assets/cars/white_sedan.svg"
              alt="Garibook White Sedan"
              className="w-[125px] max-md:w-[95px] h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
