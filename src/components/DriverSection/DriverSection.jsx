import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeData } from '../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

export default function DriverSection() {
  const { heading, description, appMockup, ctaText, ctaLink } = homeData.smartDriver;

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      // Initial hidden states matching BookingArrival pattern
      gsap.set(headingRef.current, { y: 80, opacity: 0, force3D: true });
      gsap.set(cardRef.current, { y: 95, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -90, opacity: 0, force3D: true });
      gsap.set(mockupRef.current, { y: 95, opacity: 0, force3D: true });

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
        // 2. Yellow banner card rises up from bottom
        .to(
          cardRef.current,
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '+=0.08'
        )
        // 3. CTA Button reveals smoothly from left
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.85, ease: 'power2.out' },
          '+=0.08'
        )
        // 4. Phone mockup image rises up from bottom
        .to(
          mockupRef.current,
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '+=0.1'
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      gsap.set(headingRef.current, { y: 65, opacity: 0, force3D: true });
      gsap.set(cardRef.current, { y: 80, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -75, opacity: 0, force3D: true });
      gsap.set(mockupRef.current, { y: 80, opacity: 0, force3D: true });

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
          cardRef.current,
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '+=0.08'
        )
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '+=0.08'
        )
        .to(
          mockupRef.current,
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '+=0.1'
        );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      gsap.set(headingRef.current, { y: 55, opacity: 0, force3D: true });
      gsap.set(cardRef.current, { y: 70, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -60, opacity: 0, force3D: true });
      gsap.set(mockupRef.current, { y: 70, opacity: 0, force3D: true });

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
          cardRef.current,
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.06'
        )
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '+=0.06'
        )
        .to(
          mockupRef.current,
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.08'
        );
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding overflow-hidden" id="driver">
      <div className="container">
        {/* Section Header */}
        <div ref={headingRef} className="section-header mb-8 sm:mb-10">
          <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
            {heading}
          </h2>
        </div>

        {/* Big Vibrant Yellow Banner Card */}
        <div ref={cardRef} className="smart-driver-card bg-[#efc30c] rounded-[24px] sm:rounded-[28px] mt-8 sm:mt-10 overflow-hidden shadow-[0_16px_40px_rgba(239,195,12,0.25)] relative">
          <div className="grid grid-cols-[1.1fr_0.9fr] max-[991px]:grid-cols-1 items-end pt-8 px-5 pb-0 sm:pt-10 sm:px-8 sm:pb-0 lg:pt-[54px] lg:pl-[64px] lg:pr-0 lg:pb-0 gap-8 sm:gap-10">
            {/* Left Content */}
            <div className="flex flex-col items-start pb-8 sm:pb-10 lg:pb-[54px] lg:pr-6">
              <h2 className="text-[clamp(1.85rem,4.2vw,3.8rem)] font-extrabold font-heading leading-[1.15] text-primary-gb tracking-[-1px] mb-4 sm:mb-5">
                0% Commission <br /> 100% Freedom
              </h2>
              <p className="text-sm sm:text-base lg:text-[1.25rem] leading-[1.55] font-semibold text-[#121212] mb-6 sm:mb-7 max-w-[580px]">
                {description}
              </p>

              <div className="flex flex-col gap-2.5 sm:gap-3 mb-7 sm:mb-9">
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-[1.05rem] font-semibold text-[#1a1a1a]">
                  <Check size={18} className="text-primary-gb flex-shrink-0" />
                  <span>Choose your own fare and bid directly</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-[1.05rem] font-semibold text-[#1a1a1a]">
                  <Check size={18} className="text-primary-gb flex-shrink-0" />
                  <span>Daily earnings withdraw directly to bKash / Bank</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-[1.05rem] font-semibold text-[#1a1a1a]">
                  <Check size={18} className="text-primary-gb flex-shrink-0" />
                  <span>24/7 dedicated driver hotline & trip insurance</span>
                </div>
              </div>

              <div ref={buttonRef} className="w-full sm:w-auto">
                <a href={ctaLink} className="theme-primary-btn !bg-primary-gb !text-white py-3.5 sm:py-[18px] px-6 sm:px-9 w-full sm:w-auto justify-center text-sm sm:text-base">
                  <span>{ctaText}</span>
                  <ArrowRight size={20} className="btn-icon" />
                </a>
              </div>
            </div>

            {/* Right Driver & Phone Illustration (Anchored at Bottom, Rising to Top) */}
            <div ref={mockupRef} className="flex justify-center lg:justify-end items-end max-[991px]:-order-1 self-end w-full leading-none overflow-hidden">
              <img
                src={appMockup}
                alt="Garibook Smart Driver"
                className="w-auto h-[320px] sm:h-[400px] lg:h-[470px] xl:h-[510px] max-w-none object-contain object-bottom block drop-shadow-md select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
