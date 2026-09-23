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
    const ctx = gsap.context(() => {
      // Bidirectional ScrollTrigger Timeline bound to scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 35%',
          scrub: 1, // Smoothly binds forward and backward progress directly to user scroll
        },
      });

      // 1. Heading appears from bottom first
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
        // 2. Center Image starts hidden in middle and grows big from center
        .fromTo(
          bannerRef.current,
          { scale: 0.45, opacity: 0, transformOrigin: 'center center' },
          { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '+=0.1'
        )
        // 3. 3 Feature Cards slide in from the right sequentially
        // Forward: Card 1 -> Card 2 -> Card 3
        // Reverse (bottom-up): Card 3 (last) hides first -> Card 2 hides -> Card 1 hides!
        .fromTo(
          featuresRef.current?.children || [],
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.25,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black py-16 sm:py-20 px-6 lg:px-8 text-white overflow-hidden"
      id="freedom"
    >
      <div className="max-w-[1420px] mx-auto">
        {/* Step 1: Heading */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight mb-8"
        >
          {heading || 'Freedom in Every Journey'}
        </h2>

        {/* Step 2: Center Image */}
        <div
          ref={bannerRef}
          className="w-full max-h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          <img
            src={bannerImage || '/assets/images/freedom_banner.jpg'}
            alt="Freedom in Every Journey"
            className="w-full h-full max-h-[480px] object-cover"
          />
        </div>

        {/* Step 3: 3 Feature Cards */}
        <div
          ref={featuresRef}
          className="flex flex-col sm:flex-row items-start justify-center gap-8 sm:gap-14 lg:gap-20"
        >
          {/* Card 1: Choose the Car */}
          <div className="flex-1 flex flex-col items-start">
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
          <div className="flex-1 flex flex-col items-start">
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
          <div className="flex-1 flex flex-col items-start">
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
    </section>
  );
}
