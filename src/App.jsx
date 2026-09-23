import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import Services from './components/Services/Services';
import FreedomSection from './components/FreedomSection/FreedomSection';
import TravelSection from './components/TravelSection/TravelSection';
import BookingArrivalSection from './components/BookingArrival/BookingArrivalSection';
import DriverSection from './components/DriverSection/DriverSection';
import Testimonials from './components/Testimonials/Testimonials';
import BlogSection from './components/BlogSection/BlogSection';
import AppDownload from './components/AppDownload/AppDownload';
import Footer from './components/Footer/Footer';
import { initHeroEntrance } from './animations/heroAnimations';
import { initScrollAnimations } from './animations/scrollAnimations';
import { ArrowUp } from 'lucide-react';
import './index.css';

export default function App() {
  const mainRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

        {/* 9. News & Passenger Testimonials */}
        <Testimonials />

        {/* 10. Beyond Destinations (Blogs) */}
        <BlogSection />

        {/* 11. Download App Banner */}
        <AppDownload />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-to-top-btn fixed bottom-9 right-9 w-[52px] h-[52px] rounded-full bg-primary-gb text-white flex items-center justify-center shadow-[0_8px_24px_rgba(14,82,255,0.4)] z-[998] hover:bg-primary-gb-hover hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
