import React from 'react';
import { ArrowRight } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function BookingArrivalSection() {
  const { ctaText, items } = homeData.bookingArrival;

  return (
    <section className="bg-black text-white section-padding" id="booking-arrival">
      <div className="container">
        {/* Header Row */}
        <div className="booking-arrival-header gsap-section-header flex items-end justify-between mb-[45px] gap-6 max-[991px]:flex-col max-[991px]:items-start">
          <div>
            <h2 className="text-white text-[clamp(2rem,3.8vw,3rem)] font-bold font-heading leading-[1.2]">
              From Booking to Arrival <br className="hidden lg:block" /> It’s All in Your Hands
            </h2>
          </div>
          <div>
            <a href="#download-app" className="theme-primary-btn">
              <span>{ctaText}</span>
              <ArrowRight size={20} className="btn-icon" />
            </a>
          </div>
        </div>

        {/* Bento Mosaic Grid */}
        <div className="grid grid-cols-3 max-[991px]:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-4">
          {items.map((item, idx) => {
            const isItem1 = idx === 0;
            const isItem2 = idx === 1;

            let cardClasses = 'relative rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer transition-transform duration-350 hover:-translate-y-1 group ';
            if (isItem1) {
              cardClasses += 'col-span-2 max-sm:col-span-1 h-[340px] max-[991px]:h-[280px] max-sm:h-[220px]';
            } else if (isItem2) {
              cardClasses += 'col-span-1 max-[991px]:col-span-2 max-sm:col-span-1 h-[340px] max-[991px]:h-[260px] max-sm:h-[220px]';
            } else {
              cardClasses += 'col-span-1 h-[280px] max-sm:h-[220px]';
            }

            return (
              <div key={idx} className={cardClasses}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 max-sm:py-[18px] max-sm:px-3.5 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.85)_100%)] flex flex-col gap-1">
                  <h5 className="text-[1.35rem] font-bold font-heading text-white">{item.title}</h5>
                  <p className="text-[0.95rem] text-white/80">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
