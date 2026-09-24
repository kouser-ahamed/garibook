import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, X, ArrowRight, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [activeNav, setActiveNav] = useState('#about');
  const stickyNavRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'English' ? 'বাংলা' : 'English'));
  };

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Earn With Garibook', href: '#driver' },
    { label: 'Garibook Business', href: '#business' },
    { label: 'Garibook Club', href: '#club' },
    { label: 'Campaign', href: '#campaign' },
    { label: 'Blogs', href: '#blogs' }
  ];

  // Set active link from hash on load if present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setActiveNav(window.location.hash);
    }
  }, []);

  // Slide down floating sticky navbar when scrolling past top header
  useEffect(() => {
    // Initially hide sticky bar above viewport (-100px)
    gsap.set(stickyNavRef.current, { y: -100, opacity: 0 });

    const handleScroll = () => {
      if (window.scrollY > 140) {
        gsap.to(stickyNavRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      } else {
        gsap.to(stickyNavRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.25,
          ease: 'power3.in',
          overwrite: 'auto'
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Top-Right Floating English Language Switcher Button (Styled matching the login button) */}
      <div className="absolute top-2.5 right-4 sm:top-3 sm:right-6 lg:right-8 z-[60]">
        <button
          type="button"
          className="bg-[#1a56db] hover:bg-blue-700 text-white text-[16px] font-semibold px-5 py-2 rounded-lg transition-all shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
          onClick={toggleLanguage}
          title="Switch Language"
        >
          <Globe className="w-4 h-4" />
          <span>{language}</span>
        </button>
      </div>

      {/* 2. Default Top Header in Hero Viewport (Pushed down lower than English button) */}
      <header className="theme-navbar-wrapper absolute top-0 left-0 w-full z-[50] mt-10 lg:mt-[54px] pb-4 bg-transparent">
        <div className="max-w-[1420px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo (Left Edge) */}
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center">
              <img
                src="/assets/logo.svg"
                alt="garibook"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Menu Links & Login (Right Edge - Clean links, increased font size, no underlines) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link, idx) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setActiveNav(link.href)}
                  className={`group relative text-[16px] py-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#1a56db] font-semibold'
                      : 'text-gray-700 font-medium hover:text-[#1a56db]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Centered line expanding outwards from middle to both sides on hover & active */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#1a56db] rounded-full transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            {/* Blue Login Button */}
            <a
              href="#login"
              className="bg-[#1a56db] hover:bg-blue-700 text-white text-[16px] font-semibold px-5 py-2 rounded-lg transition-all shadow-sm lowercase inline-flex items-center justify-center cursor-pointer"
            >
              login
            </a>
          </div>

          {/* Mobile Hamburger Toggle & Login */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#login"
              className="bg-[#1a56db] hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 min-w-[65px] rounded-md transition-all shadow-sm lowercase inline-flex items-center justify-center"
            >
              login
            </a>
            <button
              type="button"
              className="text-[#121212] p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Floating Animated Sticky Navbar with GSAP ScrollTrigger (-100px to top-0) */}
      <div
        ref={stickyNavRef}
        className="fixed top-0 left-0 w-full z-[999] bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.08)] py-3.5 border-b border-gray-100 transition-shadow"
      >
        <div className="max-w-[1420px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo (Left Edge) */}
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center">
              <img
                src="/assets/logo.svg"
                alt="garibook"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Menu Links & Login (Right Edge) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link, idx) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setActiveNav(link.href)}
                  className={`group relative text-[16px] py-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#1a56db] font-semibold'
                      : 'text-gray-700 font-medium hover:text-[#1a56db]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Centered line expanding outwards from middle to both sides on hover & active */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#1a56db] rounded-full transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            {/* Blue Login Button */}
            <a
              href="#login"
              className="bg-[#1a56db] hover:bg-blue-700 text-white text-[16px] font-semibold px-5 py-2 rounded-lg transition-all shadow-sm lowercase inline-flex items-center justify-center cursor-pointer"
            >
              login
            </a>
          </div>

          {/* Mobile Hamburger Toggle & Login */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#login"
              className="bg-[#1a56db] hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 min-w-[65px] rounded-md transition-all shadow-sm lowercase inline-flex items-center justify-center"
            >
              login
            </a>
            <button
              type="button"
              className="text-[#121212] p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-[9999] transition-all duration-350 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-[380px] h-full bg-primary-gb text-white p-7 max-sm:p-6 flex flex-col justify-between shadow-[-8px_0_24px_rgba(0,0,0,0.2)] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between pb-5 border-b border-white/20">
            <img src="/assets/logo-white.svg" alt="Garibook" height="34" />
            <button
              type="button"
              className="text-white p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-6 flex-grow">
            {navLinks.map((link, idx) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={idx}
                  href={link.href}
                  className={`group flex items-center justify-between text-[1.05rem] py-2.5 border-b border-white/10 transition-all duration-200 hover:pl-2 ${isActive ? 'text-warning-gb font-bold' : 'text-white font-medium hover:text-warning-gb'
                    }`}
                  onClick={() => {
                    setActiveNav(link.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-3.5 pt-5 border-t border-white/20">
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 w-full p-3 rounded-full font-semibold text-sm bg-white/15 text-white transition-colors hover:bg-white/25 cursor-pointer"
              onClick={toggleLanguage}
            >
              <Globe size={16} />
              <span>Language: {language}</span>
            </button>

            <a
              href="#login"
              className="flex items-center justify-center gap-2.5 w-full p-3 rounded-full font-bold text-sm bg-warning-gb text-dark-gb transition-all hover:bg-warning-gb-hover lowercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={16} />
              <span>Login to Garibook</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
