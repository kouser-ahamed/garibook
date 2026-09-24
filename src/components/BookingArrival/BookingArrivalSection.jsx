import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeData } from '../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

export default function BookingArrivalSection() {
  const { ctaText, items } = homeData.bookingArrival;

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      const first2Cards = gridRef.current ? Array.from(gridRef.current.children).slice(0, 2) : [];
      const next3Cards = gridRef.current ? Array.from(gridRef.current.children).slice(2, 5) : [];

      // Initial hidden states: Title & Images rise up from bottom, Button reveals from left
      gsap.set(headingRef.current, { y: 80, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -90, opacity: 0, force3D: true });
      if (first2Cards.length) gsap.set(first2Cards, { y: 95, opacity: 0, force3D: true });
      if (next3Cards.length) gsap.set(next3Cards, { y: 95, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 45%',
          end: 'top 0%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Title comes first - rising up from bottom
      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
        // 2. Download App button reveals in its position sliding smoothly from left, slower and fully opening
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.85, ease: 'power2.out' },
          '+=0.08'
        )
        // 3. Next 2 Images (Top Row) - rising up from bottom
        .to(
          first2Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power2.out',
          },
          '+=0.12'
        )
        // 4. Next 3 Images (Bottom Row) - rising up from bottom
        // Reverse (scroll up): 3 images hide -> 2 images hide -> button slides back left -> title hides
        .to(
          next3Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.16,
            ease: 'power2.out',
          },
          '+=0.12'
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      const first2Cards = gridRef.current ? Array.from(gridRef.current.children).slice(0, 2) : [];
      const next3Cards = gridRef.current ? Array.from(gridRef.current.children).slice(2, 5) : [];

      gsap.set(headingRef.current, { y: 65, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -75, opacity: 0, force3D: true });
      if (first2Cards.length) gsap.set(first2Cards, { y: 80, opacity: 0, force3D: true });
      if (next3Cards.length) gsap.set(next3Cards, { y: 80, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 46%',
          end: 'top 0%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' }
      )
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '+=0.08'
        )
        .to(
          first2Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.15,
            ease: 'power2.out',
          },
          '+=0.1'
        )
        .to(
          next3Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      const first2Cards = gridRef.current ? Array.from(gridRef.current.children).slice(0, 2) : [];
      const next3Cards = gridRef.current ? Array.from(gridRef.current.children).slice(2, 5) : [];

      gsap.set(headingRef.current, { y: 55, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -60, opacity: 0, force3D: true });
      if (first2Cards.length) gsap.set(first2Cards, { y: 70, opacity: 0, force3D: true });
      if (next3Cards.length) gsap.set(next3Cards, { y: 70, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 48%',
          end: 'top 0%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '+=0.06'
        )
        .to(
          first2Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '+=0.08'
        )
        .to(
          next3Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '+=0.08'
        );
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
      id="booking-arrival"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="booking-arrival-header flex items-start sm:items-end justify-between mb-8 sm:mb-11 gap-5 sm:gap-6 flex-col lg:flex-row">
          <div ref={headingRef}>
            <h2 className="text-white text-[clamp(1.75rem,3.8vw,3rem)] font-bold font-heading leading-[1.2]">
              From Booking to Arrival It’s <br className="hidden sm:inline" /> All in Your Hands
            </h2>
          </div>
          <div ref={buttonRef} className="w-full sm:w-auto">
            <a href="#download-app" className="theme-primary-btn w-full sm:w-auto justify-center py-3.5 sm:py-[18px] px-6 sm:px-7 text-base sm:text-[1.15rem]">
              <span>{ctaText}</span>
              <ArrowRight size={20} className="btn-icon" />
            </a>
          </div>
        </div>

        {/* Bento Mosaic Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 max-[991px]:grid-cols-2 max-sm:grid-cols-1 gap-5 sm:gap-6 max-sm:gap-4"
        >
          {items.map((item, idx) => {
            const isItem1 = idx === 0;
            const isItem2 = idx === 1;

            const cardThemes = [
              'bg-[#1056ea]', // 1. Explore Freely (Blue)
              'bg-[#eaf0f8]', // 2. Total Freedom (Light Blue-Gray)
              'bg-[#f0f2fb]', // 3. Safe & Insured Travel (Soft Lavender)
              'bg-white',     // 4. Your Preferred Car (Pure White)
              'bg-[#f7f0d6]', // 5. Smooth Journey (Soft Warm Cream)
            ];

            let cardClasses =
              `relative rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer transition-transform duration-350 hover:-translate-y-1 group border border-white/10 ${cardThemes[idx] || 'bg-neutral-900'} `;
            if (isItem1) {
              cardClasses +=
                'col-span-2 max-sm:col-span-1 h-[380px] lg:h-[395px] max-[991px]:h-[300px] max-sm:h-[230px]';
            } else if (isItem2) {
              cardClasses +=
                'col-span-1 max-[991px]:col-span-2 max-sm:col-span-1 h-[380px] lg:h-[395px] max-[991px]:h-[340px] max-sm:h-[320px]';
            } else {
              cardClasses += 'col-span-1 h-[340px] lg:h-[360px] max-[991px]:h-[320px] max-sm:h-[300px]';
            }

            return (
              <div key={idx} className={cardClasses}>
                {/* Image fills the card edge-to-edge without being cut off */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Bottom Title & Subtitle Banner */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col gap-0.5 pointer-events-none">
                  <h5 className="text-[1.1rem] sm:text-[1.28rem] font-bold font-heading text-white leading-snug drop-shadow-md">
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-[0.92rem] text-white/85 drop-shadow-sm">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
