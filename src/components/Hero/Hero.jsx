import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm';
import { homeData } from '../../data/homeData';

export default function Hero() {
  const { typingPhrases, subtitle, ctaText, ctaLink } = homeData.hero;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = typingPhrases[currentPhraseIndex];

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause at full text before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText === '') {
      // When completely deleted, cycle to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      timer = setTimeout(() => { }, 400);
    } else {
      // Typing or deleting speed
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentPhrase.substring(0, prev.length - 1);
          } else {
            return currentPhrase.substring(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingPhrases]);

  return (
    <section id="home" className="relative bg-white pt-[140px] md:pt-[150px] lg:pt-[156px] pb-4 max-md:pb-6 overflow-visible z-[2]">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 sm:mb-12 lg:mb-14">
          {/* Left Column: Heading with Typewriter Effect */}
          <div className="w-full max-w-[480px]">
            <div className="hero-title-container min-h-[96px] sm:min-h-[110px] lg:min-h-[125px] flex items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
                <span>{displayedText}</span>
                <span className="inline-block text-blue-600 font-normal animate-pulse ml-1 select-none">|</span>
              </h1>
            </div>
          </div>

          {/* Right Column: Subtitle & Yellow Action Button */}
          <div className="hero-right-content flex flex-col items-start max-w-md pt-1 sm:pt-2">
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-left">
              {subtitle}
            </p>
            <a
              href={ctaLink}
              className="bg-[#facc15] hover:bg-[#eab308] text-gray-900 font-semibold px-6 sm:px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-3 shadow-sm hover:shadow transition-all cursor-pointer group w-full sm:w-auto"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Floating Booking Form Widget (Physically shifted downwards into blue background) */}
        <div className="relative w-full z-20 mt-6 translate-y-28 lg:translate-y-32 -mb-12 lg:-mb-16 max-md:-mb-8 ctd-wrap">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
