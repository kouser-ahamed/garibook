import React from 'react';
import { homeData } from '../../data/homeData';

export default function Statistics() {
  const { statistics } = homeData;

  return (
    <section className="w-full bg-[linear-gradient(270deg,#0e53ff_0%,#0038c4_100%)] relative overflow-hidden" id="statistics">
      <div className="happy-client-wrap-inside relative pt-40 pb-[140px] max-[991px]:pt-[100px] max-[991px]:pb-[130px] w-full overflow-hidden">
        <div className="container">
          <div className="max-w-[900px] mb-[60px] max-md:mb-[30px]">
            <h2 className="text-[clamp(2.2rem,4.2vw,3.8rem)] font-bold font-heading leading-[1.15] text-white tracking-[-1px] gsap-section-header">
              From Everyday Rides to <br className="hidden md:block" /> Meaningful Journeys
            </h2>
          </div>

          <div className="mt-[60px] max-md:mt-[30px]">
            <ul className="flex items-center justify-end max-[991px]:justify-start gap-14 max-[991px]:gap-8 max-md:grid max-md:grid-cols-2 max-md:gap-6 w-full flex-wrap list-none">
              {statistics.map((stat, idx) => (
                <li key={idx} className="flex flex-col items-start min-w-[160px] max-[991px]:min-w-[130px]">
                  <h4
                    className="stat-counter-number text-[clamp(2.4rem,3.8vw,3.2rem)] font-extrabold font-heading leading-none text-warning-gb mb-2 tracking-[-1px]"
                    data-target={stat.targetNumber}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </h4>
                  <span className="text-[1.25rem] font-semibold text-white/95">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated road and moving sedan car */}
        <div className="absolute bottom-0 left-0 w-[400%] h-20 bg-[url('/assets/images/city_skyline.svg')] bg-repeat-x bg-[length:1200px_80px] animate-moveCity pointer-events-none z-[1]" />
        <div className="absolute bottom-4 left-[60px] max-md:left-5 z-[3] animate-driveCar pointer-events-none">
          <img
            src="/assets/cars/intercity_car_rental.svg"
            alt="Garibook Car"
            className="w-[110px] max-md:w-[85px] h-auto drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </section>
  );
}
