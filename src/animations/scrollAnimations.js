import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  window.ScrollTrigger = ScrollTrigger;
  window.gsap = gsap;
}

/**
 * Initializes ScrollTrigger reveals and numeric counters for homepage sections.
 * Wrapped in gsap.context() for safe cleanup in React lifecycle / StrictMode.
 * Uses fromTo with clearProps onComplete so CSS hover transforms and states remain unhindered.
 */
export const initScrollAnimations = (scopeRef) => {
  const ctx = gsap.context(() => {
    // 1. Generic Section Headers reveal
    gsap.utils.toArray('.gsap-section-header').forEach((header) => {
      gsap.fromTo(
        header,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          onComplete: () => gsap.set(header, { clearProps: 'opacity,transform' })
        }
      );
    });

    // 2. Statistics Numeric Counters Animation
    const counterElements = gsap.utils.toArray('.stat-counter-number');
    if (counterElements.length > 0) {
      ScrollTrigger.create({
        trigger: '.happy-client-wrap-inside',
        start: 'top 85%',
        onEnter: () => {
          counterElements.forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const obj = { val: 0 };

            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                if (target >= 1000) {
                  const kVal = Math.floor(obj.val / 1000);
                  el.innerText = `${kVal}K${suffix}`;
                } else {
                  el.innerText = `${Math.floor(obj.val)}${suffix}`;
                }
              }
            });
          });
        },
        once: true
      });
    }

    // 3. Service Cards stagger reveal
    const serviceCards = gsap.utils.toArray('.service-card-item');
    if (serviceCards.length > 0) {
      gsap.fromTo(
        serviceCards,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.service-cards-grid',
            start: 'top 88%',
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          onComplete: () => gsap.set(serviceCards, { clearProps: 'opacity,transform' })
        }
      );
    }

    // 4. Freedom Section 3 Pillars stagger
    const freedomBoxes = gsap.utils.toArray('.freedom-box-item');
    if (freedomBoxes.length > 0) {
      gsap.fromTo(
        freedomBoxes,
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.freedom-boxes-row',
            start: 'top 88%',
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          onComplete: () => gsap.set(freedomBoxes, { clearProps: 'opacity,transform' })
        }
      );
    }

    // 5. Travel Scenarios Cards
    const travelCards = gsap.utils.toArray('.travel-scenario-card');
    if (travelCards.length > 0) {
      gsap.fromTo(
        travelCards,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.travel-scenarios-grid',
            start: 'top 88%',
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          onComplete: () => gsap.set(travelCards, { clearProps: 'opacity,transform' })
        }
      );
    }

    // 6. Smart Driver Section yellow card entrance
    const driverCard = document.querySelector('.smart-driver-card');
    if (driverCard) {
      gsap.fromTo(
        driverCard,
        { scale: 0.98, y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: driverCard,
            start: 'top 88%',
            once: true
          },
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => gsap.set(driverCard, { clearProps: 'opacity,transform' })
        }
      );
    }

    // 7. Blog Cards Stagger
    const blogCards = gsap.utils.toArray('.blog-card-item');
    if (blogCards.length > 0) {
      gsap.fromTo(
        blogCards,
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.blogs-grid',
            start: 'top 88%',
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          onComplete: () => gsap.set(blogCards, { clearProps: 'opacity,transform' })
        }
      );
    }
  }, scopeRef);

  return ctx;
};
