import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { homeData } from '../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

export default function AppDownload() {
  const { subtitle, ctaText } = homeData.appDownload;

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 1. Desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      gsap.set(cardRef.current, { scale: 0.94, opacity: 0, force3D: true });
      gsap.set(headingRef.current, { y: 70, opacity: 0, force3D: true });
      gsap.set(subtitleRef.current, { y: 50, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -80, opacity: 0, force3D: true });
      gsap.set(phoneRef.current, { y: 130, opacity: 0, scale: 0.92, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          end: 'top 12%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Blue card expands and lights up
      tl.to(
        cardRef.current,
        { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out' }
      )
        // 2. Heading rises from bottom
        .to(
          headingRef.current,
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '-=0.4'
        )
        // 3. Subtitle rises
        .to(
          subtitleRef.current,
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.45'
        )
        // 4. Yellow Download App button slides in smoothly from left
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.35'
        )
        // 5. Phone mockup with hand rises up and pops above the card edge
        .to(
          phoneRef.current,
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.65'
        );
    });

    // 2. Tablet (640px to 1023px)
    mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
      gsap.set(cardRef.current, { scale: 0.96, opacity: 0, force3D: true });
      gsap.set(headingRef.current, { y: 55, opacity: 0, force3D: true });
      gsap.set(subtitleRef.current, { y: 40, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -60, opacity: 0, force3D: true });
      gsap.set(phoneRef.current, { y: 90, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          end: 'top 10%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        cardRef.current,
        { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
        .to(
          headingRef.current,
          { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' },
          '-=0.35'
        )
        .to(
          subtitleRef.current,
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        )
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.3'
        )
        .to(
          phoneRef.current,
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '-=0.5'
        );
    });

    // 3. Mobile (< 640px)
    mm.add('(max-width: 639px)', () => {
      gsap.set(cardRef.current, { y: 35, opacity: 0, force3D: true });
      gsap.set(headingRef.current, { y: 40, opacity: 0, force3D: true });
      gsap.set(subtitleRef.current, { y: 30, opacity: 0, force3D: true });
      gsap.set(buttonRef.current, { x: -40, opacity: 0, force3D: true });
      gsap.set(phoneRef.current, { y: 60, opacity: 0, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 15%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        cardRef.current,
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
        .to(
          headingRef.current,
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        )
        .to(
          subtitleRef.current,
          { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
          '-=0.35'
        )
        .to(
          buttonRef.current,
          { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.25'
        )
        .to(
          phoneRef.current,
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '-=0.4'
        );
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-14 sm:pt-18 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 overflow-visible"
      id="download-app"
    >
      <div className="container overflow-visible">
        <div
          ref={cardRef}
          className="relative bg-primary-gb rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] px-5 sm:px-10 lg:px-20 py-8 sm:py-14 lg:py-20 shadow-[0_20px_50px_rgba(14,82,255,0.22)] overflow-visible"
        >
          {/* Left Content */}
          <div className="relative z-10 max-w-[560px] text-left">
            <h2
              ref={headingRef}
              className="text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black font-heading text-white leading-[1.18] tracking-tight"
            >
              Download <br className="hidden sm:inline" /> Garibook Mobile App
            </h2>
            <p
              ref={subtitleRef}
              className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-xl text-white/95 font-normal leading-relaxed max-w-[480px]"
            >
              {subtitle || 'Download our Customer, Smart Driver and Enterprise App'}
            </p>
            <div ref={buttonRef} className="mt-6 sm:mt-10">
              <a
                href="https://onelink.to/gbweb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-warning-gb hover:bg-warning-gb-hover text-dark-gb font-bold text-sm sm:text-base lg:text-lg py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-gb-warning hover:shadow-gb-warning-hover hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer w-full sm:w-auto"
              >
                <span>{ctaText || 'Download App'}</span>
                <ArrowRight size={20} className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>

          {/* Right Phone Mockup with Hand */}
          <div
            ref={phoneRef}
            className="mt-8 lg:mt-0 flex justify-center lg:block lg:absolute lg:right-10 xl:right-20 lg:bottom-0 pointer-events-none z-10"
          >
            <img
              src="/assets/images/app_download_phone.png"
              alt="Garibook Mobile App"
              className="h-[260px] sm:h-[360px] lg:h-[470px] xl:h-[500px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
              loading="lazy"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
