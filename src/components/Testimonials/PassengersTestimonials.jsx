import React, { useState, useEffect, useRef } from "react";
import { Play, X, ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonialsData } from "../../data/testimonialsData";

gsap.registerPlugin(ScrollTrigger);

export const PassengersTestimonials = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const controlsRef = useRef(null);
  const sliderRef = useRef(null);

  // Manage modal keyboard event and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveVideoId(null);
      }
    };

    if (activeVideoId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoId]);

  // GSAP ScrollTrigger timeline matching FeaturedNews and BookingArrivalSection
  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      const allCards = sliderRef.current ? Array.from(sliderRef.current.children) : [];
      const first3Cards = allCards.slice(0, 3);
      const remainingCards = allCards.slice(3);

      gsap.set(headingRef.current, { y: 80, opacity: 0, force3D: true });
      gsap.set(controlsRef.current, { x: -90, opacity: 0, force3D: true });
      if (first3Cards.length) gsap.set(first3Cards, { y: 95, opacity: 0, force3D: true });
      if (remainingCards.length) gsap.set(remainingCards, { y: 95, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "top 0%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )
        .to(
          controlsRef.current,
          { x: 0, opacity: 1, duration: 0.85, ease: "power2.out" },
          "+=0.08"
        )
        .to(
          first3Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: "power2.out",
          },
          "+=0.12"
        )
        .to(
          remainingCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.14,
            ease: "power2.out",
          },
          "+=0.12"
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
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
          start: "top 46%",
          end: "top 0%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }
      )
        .to(
          controlsRef.current,
          { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" },
          "+=0.08"
        )
        .to(
          first2Cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.15,
            ease: "power2.out",
          },
          "+=0.1"
        )
        .to(
          remainingCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
          },
          "+=0.08"
        );
    });

    // 3. Mobile (< 640px)
    mm.add("(max-width: 639px)", () => {
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
          start: "top 48%",
          end: "top 0%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
        .to(
          controlsRef.current,
          { x: 0, opacity: 1, duration: 0.65, ease: "power2.out" },
          "+=0.06"
        )
        .to(
          firstCard,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "+=0.08"
        )
        .to(
          remainingCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "+=0.08"
        );
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  // Arrow button handlers with smooth scrolling and looping
  const handlePrev = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const firstCard = sliderRef.current.firstElementChild;
    const step = firstCard ? firstCard.offsetWidth + 32 : 380;

    if (scrollLeft <= 10) {
      sliderRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const firstCard = sliderRef.current.firstElementChild;
    const step = firstCard ? firstCard.offsetWidth + 32 : 380;

    if (scrollLeft + clientWidth >= scrollWidth - 15) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-slate-50/70 py-16 sm:py-24 border-t border-slate-100 overflow-hidden"
      id="passenger-testimonials"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Layout with Title & Arrow Navigation Controls */}
        <div className="flex items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
          <div ref={headingRef}>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.12] tracking-tight font-heading">
              Our Passengers Speak For Us
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-2.5 sm:mt-3 max-w-2xl font-normal leading-relaxed">
              Real stories and genuine highway experiences from passengers who travel intercity with freedom, safety, and comfort.
            </p>
          </div>

          {/* Navigation Controls matching FeaturedNews */}
          <div ref={controlsRef} className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-200 hover:border-slate-900 hover:text-slate-900 hover:bg-white active:scale-95 shadow-sm cursor-pointer"
              aria-label="Previous Testimonials"
              title="Previous Testimonials"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-200 hover:border-slate-900 hover:text-slate-900 hover:bg-white active:scale-95 shadow-sm cursor-pointer"
              aria-label="Next Testimonials"
              title="Next Testimonials"
            >
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Responsive Carousel Grid */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id || idx}
              className="w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)] flex-shrink-0 snap-start flex flex-col group cursor-pointer select-none"
              onClick={() => setActiveVideoId(item.videoId)}
            >
              {/* Card Thumbnail Box with Overlays */}
              <div className="relative rounded-[24px] overflow-hidden aspect-video bg-slate-900 mb-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-slate-200/70 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] group-hover:-translate-y-1">
                {/* Thumbnail Image adjusted so both the left logo/badge and top-right Garibook logo remain completely unclipped */}
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-[102%] max-w-none h-full object-cover -translate-x-[0.75%] sm:-translate-x-[1%] group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    if (item.fallbackThumbnail && e.currentTarget.src !== item.fallbackThumbnail) {
                      e.currentTarget.src = item.fallbackThumbnail;
                    }
                  }}
                />

                {/* Subtle Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 group-hover:from-black/70 transition-colors pointer-events-none" />

                {/* Centered Circular Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#ef233c] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(239,35,60,0.55)] group-hover:scale-110 group-hover:bg-[#d90429] transition-all duration-300 ease-out">
                    <Play size={20} className="fill-white translate-x-0.5 text-white sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>

              {/* Passenger Metadata Underneath */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-primary-gb transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Full-Screen Video Modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideoId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
              aria-label="Close Video"
            >
              <X size={22} />
            </button>

            {/* 16:9 Responsive Embed Iframe */}
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Passenger Video Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PassengersTestimonials;
