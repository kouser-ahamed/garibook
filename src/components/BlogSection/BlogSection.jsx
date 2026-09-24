import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogsData } from '../../data/blogsData';

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection({ onSelectBlog }) {
  const blogs = blogsData;
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef(null);

  // GSAP ScrollTrigger bidirectional animation matching BookingArrivalSection
  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      const cards = cardsRef.current ? Array.from(cardsRef.current.children) : [];

      gsap.set(headingRef.current, { y: 80, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -80, opacity: 0, force3D: true });
      if (cards.length) gsap.set(cards, { y: 95, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'top 2%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Title comes first - rising up from bottom
      tl.to(
        headingRef.current,
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
        // 2. Show All Blogs button reveals in its position sliding smoothly from left
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '+=0.08'
        )
        // 3. Blog Cards rise up from bottom with staggered sequence
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      const cards = cardsRef.current ? Array.from(cardsRef.current.children) : [];

      gsap.set(headingRef.current, { y: 65, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -65, opacity: 0, force3D: true });
      if (cards.length) gsap.set(cards, { y: 80, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'top 2%',
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
          { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '+=0.08'
        )
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.16,
            ease: 'power2.out',
          },
          '+=0.1'
        );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      const cards = cardsRef.current ? Array.from(cardsRef.current.children) : [];

      gsap.set(headingRef.current, { y: 45, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -45, opacity: 0, force3D: true });
      if (cards.length) gsap.set(cards, { y: 60, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 52%',
          end: 'top 5%',
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
          { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '+=0.06'
        )
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '+=0.08'
        );
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  const handleOpenBlog = (e, id) => {
    e.preventDefault();
    if (onSelectBlog) {
      onSelectBlog(id);
    } else {
      window.location.hash = `#blog-${id}`;
    }
  };

  return (
    <section ref={sectionRef} className="bg-white section-padding overflow-hidden" id="blogs">
      <div className="container">
        {/* Section Header */}
        <div className="blog-header-row flex items-start sm:items-end justify-between mb-8 sm:mb-[45px] gap-4 sm:gap-6 flex-col sm:flex-row">
          <div ref={headingRef} className="max-w-[680px]">
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
              Beyond Destinations
            </h2>
            <p className="text-sm sm:text-base lg:text-[1.15rem] leading-[1.6] text-[#666666] mt-2 sm:mt-3">
              Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
            </p>
          </div>
          <div ref={buttonRef}>
            <a
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                if (onSelectBlog) onSelectBlog(blogs[0]?.id || 1);
              }}
              className="group inline-flex items-center gap-2 text-base sm:text-[1.15rem] font-bold text-primary-gb transition-transform duration-200 hover:translate-x-1 cursor-pointer"
            >
              <span>Show All Blogs</span>
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div
          ref={cardsRef}
          className="blogs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[30px]"
        >
          {blogs.map((blog, idx) => (
            <div key={blog.id || idx} className="blog-card-wrapper h-full flex flex-col">
              <article
                onClick={(e) => handleOpenBlog(e, blog.id)}
                className="blog-card-item group bg-white rounded-[18px] overflow-hidden border border-border-color shadow-[0_6px_20px_rgba(0,0,0,0.05)] flex flex-col flex-grow transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:border-[#b0c4de] cursor-pointer select-none"
              >
                <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                    onLoad={() => ScrollTrigger.refresh()}
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/travel_tour.jpg";
                    }}
                  />
                  <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-primary-gb/90 text-white py-1 px-3 sm:py-1.5 sm:px-3.5 rounded-md text-[0.75rem] sm:text-[0.8rem] font-semibold backdrop-blur-sm z-10">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6 pt-5 sm:pt-[26px] flex flex-col flex-grow">
                  <div className="flex items-center gap-3 sm:gap-4.5 mb-2.5 sm:mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-[0.85rem] text-[#888888] font-medium">
                      <Calendar size={13} /> {blog.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-[0.85rem] text-[#888888] font-medium">
                      <Clock size={13} /> {blog.readTime}
                    </span>
                  </div>

                  <h4 className="text-[1.15rem] sm:text-[1.3rem] font-bold font-heading leading-[1.35] text-dark-gb mb-2.5 sm:mb-3 group-hover:text-primary-gb transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-xs sm:text-[0.95rem] leading-[1.55] text-[#666666] mb-4 sm:mb-5 flex-grow line-clamp-3">
                    {blog.desc || blog.excerpt}
                  </p>

                  <div>
                    <span className="group/btn inline-flex items-center gap-2 text-[0.95rem] font-bold text-primary-gb transition-all duration-200 group-hover:gap-3">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
