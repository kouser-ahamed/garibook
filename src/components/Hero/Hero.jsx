import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm';
import { homeData } from '../../data/homeData';

export default function Hero() {
  const { typingPhrases, subtitle, ctaText, ctaLink } = homeData.hero;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(typingPhrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = typingPhrases[currentPhraseIndex];

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause at full text before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayedText === '') {
      // When completely deleted, switch to next phrase and pause briefly
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      timer = setTimeout(() => {}, 300);
    } else {
      // Typing or deleting a character
      const speed = isDeleting ? 30 : 70;
      timer = setTimeout(() => {
        setDisplayedText(prev => {
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
    <section className="relative bg-white pt-[140px] max-md:pt-[110px] max-md:pb-20 overflow-visible z-[2]">
      <div className="container">
        {/* Main Hero Header Row */}
        <div className="grid grid-cols-[1.15fr_0.85fr] max-[1100px]:grid-cols-1 gap-12 max-[1100px]:gap-6 items-start mb-10">
          {/* Left Column: Heading with Typewriter Effect */}
          <div className="w-full">
            <div className="hero-title-container min-h-[140px] max-[1100px]:min-h-0 flex items-center">
              <h1 className="text-[clamp(2.4rem,4.2vw,3.8rem)] font-bold font-heading leading-[1.15] text-[#121212] tracking-[-1.5px]">
                <span className="text-[#121212]">{displayedText}</span>
                <span className="inline-block text-primary-gb font-normal animate-blinkCursor ml-1">|</span>
              </h1>
            </div>
          </div>

          {/* Right Column: Subtitle & Yellow Action Button */}
          <div className="hero-right-content flex flex-col items-start pt-2">
            <p className="text-[1.35rem] leading-[1.5] font-medium text-[#8c8c8c] mb-6">{subtitle}</p>
            <div className="w-auto">
              <a href={ctaLink} className="theme-warning-btn">
                <span>{ctaText}</span>
                <ArrowRight size={22} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Booking Form Widget */}
        <div className="relative w-full mt-5 -mb-20 z-20">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
