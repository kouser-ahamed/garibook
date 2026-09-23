import gsap from 'gsap';

/**
 * Initializes the smooth entrance timeline for the Hero viewport
 * Elements: Navbar -> Hero Heading -> Hero Subtitle -> CTA -> Booking UI
 */
export const initHeroEntrance = (scopeRef) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // 1. Navbar elements drop in smoothly
    tl.from('.theme-navbar-wrapper', {
      y: -25,
      opacity: 0,
      duration: 0.6
    })
    // 2. Hero Heading entrance
    .from('.hero-title-container', {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')
    // 3. Hero Subtitle & CTA button
    .from('.hero-right-content', {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')
    // 4. Booking UI Widget floats up and scales smoothly
    .from('.ctd-wrap', {
      y: 30,
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      ease: 'back.out(1.1)',
      onComplete: () => {
        // Ensure all inline styles are cleanly cleared once the animation finishes
        gsap.set('.ctd-wrap', { clearProps: 'transform' });
      }
    }, '-=0.2');

  }, scopeRef);

  return ctx;
};
