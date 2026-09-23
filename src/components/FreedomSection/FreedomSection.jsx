import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Banknote } from 'lucide-react';
import { homeData } from '../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

export default function FreedomSection() {
  const { heading, bannerImage } = homeData.freedom;

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bannerRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      gsap.set(headingRef.current, { y: 40, opacity: 0 });
      gsap.set(bannerRef.current, { scale: 0.5, opacity: 0, transformOrigin: 'center center' });
      if (featuresRef.current?.children) {
        gsap.set(featuresRef.current.children, { x: 70, opacity: 0 });
      }

      // end: 'top 0%' ensures that while the section is on screen,
      // scrolling up immediately hides the cards first in plain sight!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 0%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Forward:
      // 1. Heading appears first
      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }
      )
        // 2. Page moves a bit up, then Center Image expands
        .to(
          bannerRef.current,
          { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.15'
        )
        // 3. ONLY AFTER image is full size: 3 Cards slide in from the right
        // Reverse (scroll up from bottom):
        // 1. Cards hide first! (Card 3 -> Card 2 -> Card 1)
        // 2. Then Image shrinks and fades out!
        // 3. Then Heading slides down and fades out!
        .to(
          featuresRef.current?.children || [],
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.16,
            ease: 'power2.out',
          },
          '+=0.12'
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      gsap.set(headingRef.current, { y: 35, opacity: 0 });
      gsap.set(bannerRef.current, { scale: 0.55, opacity: 0, transformOrigin: 'center center' });
      if (featuresRef.current?.children) {
        gsap.set(featuresRef.current.children, { x: 50, opacity: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 0%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
        .to(
          bannerRef.current,
          { scale: 1, opacity: 1, duration: 0.55, ease: 'power2.out' },
          '+=0.12'
        )
        .to(
          featuresRef.current?.children || [],
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      gsap.set(headingRef.current, { y: 25, opacity: 0 });
      gsap.set(bannerRef.current, { scale: 0.6, opacity: 0, transformOrigin: 'center center' });
      if (featuresRef.current?.children) {
        gsap.set(featuresRef.current.children, { x: 40, opacity: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 0%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }
      )
        .to(
          bannerRef.current,
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '+=0.1'
        )
        .to(
          featuresRef.current?.children || [],
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.12,
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
      className="w-full bg-black py-14 sm:py-16 px-6 lg:px-8 text-white overflow-hidden"
      id="freedom"
    >
      <div className="max-w-[1420px] mx-auto">
        {/* Step 1: Heading */}
        <h2
          ref={headingRef}
          style={{ opacity: 0 }}
          className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight mb-6 sm:mb-8"
        >
          {heading || 'Freedom in Every Journey'}
        </h2>

        {/* Step 2: Center Image */}
        <div
          ref={bannerRef}
          style={{ opacity: 0 }}
          className="w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-10"
        >
          <img
            src={bannerImage || '/assets/images/freedom_banner.jpg'}
            alt="Freedom in Every Journey"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Step 3: 3 Feature Cards - Right Aligned */}
        <div className="w-full flex justify-end">
          <div
            ref={featuresRef}
            className="flex flex-col sm:flex-row items-start justify-end gap-8 sm:gap-10 lg:gap-14 w-full sm:w-auto"
          >
            {/* Card 1: Choose the Car */}
            <div
              style={{ opacity: 0 }}
              className="w-full sm:w-[240px] lg:w-[270px] flex flex-col items-start"
            >
              <div className="bg-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-lg shadow-blue-600/30">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                Choose the Car
              </h4>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Pick what suits your comfort.
              </p>
            </div>

            {/* Card 2: Choose the Driver */}
            <div
              style={{ opacity: 0 }}
              className="w-full sm:w-[240px] lg:w-[270px] flex flex-col items-start"
            >
              <div className="bg-[#facc15] text-black p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-lg shadow-yellow-500/20">
                <svg
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="2.5" />
                  <path d="M12 2v7.5" />
                  <path d="M4.5 16.5l5.5-3" />
                  <path d="M19.5 16.5l-5.5-3" />
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                Choose the Driver
              </h4>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Based on ratings and reviews.
              </p>
            </div>

            {/* Card 3: Choose the Fare */}
            <div
              style={{ opacity: 0 }}
              className="w-full sm:w-[240px] lg:w-[270px] flex flex-col items-start"
            >
              <div className="bg-[#10b981] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/20">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                Choose the Fare
              </h4>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Select the bid that fits your budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
