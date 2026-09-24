import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NewsCard } from "./NewsCard";
import { featuredNewsData } from "../../data/featuredNewsData";

gsap.registerPlugin(ScrollTrigger);

export const FeaturedNews = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const controlsRef = useRef(null);
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // GSAP ScrollTrigger bidirectional animation matching BookingArrivalSection
  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      const allCards = sliderRef.current ? Array.from(sliderRef.current.children) : [];
      const first3Cards = allCards.slice(0, 3);
      const remainingCards = allCards.slice(3);

      // Initial hidden states: Title & Images rise from bottom, Controls reveal from left
      gsap.set(headingRef.current, { y: 80, opacity: 0, force3D: true });
      gsap.set(controlsRef.current, { x: -90, opacity: 0, force3D: true });
      if (first3Cards.length) gsap.set(first3Cards, { y: 95, opacity: 0, force3D: true });
      if (remainingCards.length) gsap.set(remainingCards, { y: 95, opacity: 0, force3D: true });

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
        // 2. Navigation controls reveal smoothly from left
        .to(
          controlsRef.current,
          { x: 0, opacity: 1, duration: 0.85, ease: 'power2.out' },
          '+=0.08'
        )
        // 3. First 3 News Cards rise up from bottom
        .to(
          first3Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power2.out',
          },
          '+=0.12'
        )
        // 4. Remaining cards rise up from bottom
        .to(
          remainingCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '+=0.12'
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      const allCards = sliderRef.current ? Array.from(sliderRef.current.children) : [];
      const first2Cards = allCards.slice(0, 2);
      const remainingCards = allCards.slice(2);

      gsap.set(headingRef.current, { y: 65, opacity: 0, force3D: true });
      gsap.set(controlsRef.current, { x: -75, opacity: 0, force3D: true });
      if (first2Cards.length) gsap.set(first2Cards, { y: 80, opacity: 0, force3D: true });
      if (remainingCards.length) gsap.set(remainingCards, { y: 80, opacity: 0, force3D: true });

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
          controlsRef.current,
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
          remainingCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      const allCards = sliderRef.current ? Array.from(sliderRef.current.children) : [];
      const firstCard = allCards.slice(0, 1);
      const remainingCards = allCards.slice(1);

      gsap.set(headingRef.current, { y: 55, opacity: 0, force3D: true });
      gsap.set(controlsRef.current, { x: -60, opacity: 0, force3D: true });
      if (firstCard.length) gsap.set(firstCard, { y: 70, opacity: 0, force3D: true });
      if (remainingCards.length) gsap.set(remainingCards, { y: 70, opacity: 0, force3D: true });

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
          controlsRef.current,
          { x: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '+=0.06'
        )
        .to(
          firstCard,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '+=0.08'
        )
        .to(
          remainingCards,
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

  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);
    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const firstCard = sliderRef.current.firstElementChild;
    const step = firstCard ? firstCard.offsetWidth + 32 : 380; // card width + 32px gap

    if (scrollLeft <= 10) {
      // Loop to end for seamless endless exploration
      sliderRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const firstCard = sliderRef.current.firstElementChild;
    const step = firstCard ? firstCard.offsetWidth + 32 : 380; // card width + 32px gap

    if (scrollLeft + clientWidth >= scrollWidth - 15) {
      // Loop back to beginning
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-24 border-t border-slate-100 overflow-hidden"
      id="featured-news"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Layout */}
        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-6">
          <div ref={headingRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.12] tracking-tight font-heading">
              We Featured by Top news <br /> Platforms
            </h2>
          </div>

          {/* Navigation Controls */}
          <div ref={controlsRef} className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-200 hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 active:scale-95 shadow-sm"
              aria-label="Previous News"
              title="Previous News"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-200 hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 active:scale-95 shadow-sm"
              aria-label="Next News"
              title="Next News"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Responsive Carousel Grid */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuredNewsData.map((article, idx) => (
            <div
              key={article.id || idx}
              className="w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)] flex-shrink-0 snap-start"
            >
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
