import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import Services from './components/Services/Services';
import FreedomSection from './components/FreedomSection/FreedomSection';
import TravelSection from './components/TravelSection/TravelSection';
import BookingArrivalSection from './components/BookingArrival/BookingArrivalSection';
import DriverSection from './components/DriverSection/DriverSection';
import FeaturedNews from './components/FeaturedNews/FeaturedNews';
import PassengersTestimonials from './components/Testimonials/PassengersTestimonials';
import BlogSection from './components/BlogSection/BlogSection';
import BlogDetail from './components/BlogSection/BlogDetail';
import AppDownload from './components/AppDownload/AppDownload';
import Footer from './components/Footer/Footer';
import { initHeroEntrance } from './animations/heroAnimations';
import { initScrollAnimations } from './animations/scrollAnimations';
import { ArrowUp } from 'lucide-react';
import './index.css';

export default function App() {
  const mainRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeBlogId, setActiveBlogId] = useState(null);

  // Sync with URL hash for seamless deep-linking (#blog-1, #blog-2, #blog-3)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog-')) {
        const id = hash.replace('#blog-', '');
        if (id && !isNaN(Number(id))) {
          setActiveBlogId(Number(id));
        }
      } else {
        setActiveBlogId(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    // 1. Initialize GSAP Hero entrance timeline
    const heroCtx = initHeroEntrance(mainRef.current);

    // 2. Initialize GSAP ScrollTrigger reveals and counters
    const scrollCtx = initScrollAnimations(mainRef.current);

    // 3. Scroll-to-top button visibility listener
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup animations and listeners on unmount (Strict Mode safe!)
    return () => {
      heroCtx.revert();
      scrollCtx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="homepage-root relative w-full overflow-x-hidden min-h-screen bg-white" ref={mainRef}>
      {/* 1. Top Navbar */}
      <Navbar />

      {/* Blog Details Page View */}
      {activeBlogId ? (
        <BlogDetail
          blogId={activeBlogId}
          onBack={() => {
            setActiveBlogId(null);
            window.location.hash = '#blogs';
            setTimeout(() => {
              const el = document.getElementById('blogs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          onSelectBlog={(id) => {
            setActiveBlogId(id);
            window.location.hash = `#blog-${id}`;
          }}
        />
      ) : null}

      {/* Main Homepage Sections (hidden when viewing blog details, preserving GSAP & DOM state) */}
      <div style={{ display: activeBlogId ? 'none' : 'block' }}>
        <main>
          {/* 2. Hero & Booking Form */}
          <Hero />

          {/* 3. Statistics Section */}
          <Statistics />

          {/* 4. Our Services Section */}
          <Services />

          {/* 5. Freedom in Every Journey */}
          <FreedomSection />

          {/* 6. Travel Scenarios (More Than Miles) */}
          <TravelSection />

          {/* 7. From Booking to Arrival (Mosaic) */}
          <BookingArrivalSection />

          {/* 8. Be a Smart Driver */}
          <DriverSection />

          {/* 9. We Featured by Top news Platforms */}
          <FeaturedNews />

          {/* 10. Our Passengers Speak For Us (Video Testimonials) */}
          <PassengersTestimonials />

          {/* 11. Beyond Destinations (Blogs) */}
          <BlogSection
            onSelectBlog={(id) => {
              setActiveBlogId(id);
              window.location.hash = `#blog-${id}`;
            }}
          />

          {/* 12. Download App Banner */}
          <AppDownload />
        </main>
      </div>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-to-top-btn fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-primary-gb text-white flex items-center justify-center shadow-[0_8px_24px_rgba(14,82,255,0.4)] z-[998] hover:bg-primary-gb-hover hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="sm:w-[22px] sm:h-[22px]" />
        </button>
      )}
    </div>
  );
}
