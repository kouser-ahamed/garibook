import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { featuredNewsData } from "../../data/featuredNewsData";

export const FeaturedNews = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100 overflow-hidden" id="featured-news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Layout */}
        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.12] tracking-tight font-heading">
              We Featured by Top news <br /> Platforms
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
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
