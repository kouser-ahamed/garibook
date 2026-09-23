import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowRight, User } from 'lucide-react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'English' ? 'বাংলা' : 'English'));
  };

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Earn With Garibook', href: '#driver' },
    { label: 'Garibook Business', href: '#business' },
    { label: 'Garibook Club', href: '#club' },
    { label: 'Campaign', href: '#campaign' },
    { label: 'Blogs', href: '#blogs' }
  ];

  return (
    <>
      <header
        className={`theme-navbar-wrapper fixed sm:absolute top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isSticky
            ? 'is-sticky !fixed top-0 left-0 !bg-white py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] animate-navSlideDown'
            : 'bg-transparent pt-9 pb-5 max-[991px]:py-[18px]'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="/" className="inline-flex items-center">
              <img
                src="/assets/logo.svg"
                alt="Garibook"
                className="h-11 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden min-[992px]:flex items-center gap-8 max-[1100px]:gap-5">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="group relative text-[1.05rem] font-medium text-[#121212] py-1.5 transition-colors duration-300 hover:text-primary-gb"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] bg-primary-gb rounded-full -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                type="button"
                className="hidden min-[992px]:inline-flex items-center gap-2 bg-primary-gb text-white py-2.5 px-[18px] rounded-lg text-[0.95rem] font-semibold transition-all duration-300 hover:bg-primary-gb-hover hover:-translate-y-px"
                onClick={toggleLanguage}
                title="Switch Language"
              >
                <Globe size={18} />
                <span>{language}</span>
              </button>

              {/* Login Button */}
              <a
                href="#login"
                className="inline-flex items-center justify-center bg-primary-gb text-white text-[1.05rem] font-semibold py-2.5 px-7 rounded-lg lowercase transition-all duration-300 hover:bg-primary-gb-hover hover:shadow-[0_4px_14px_rgba(14,82,255,0.3)] hover:-translate-y-px max-[991px]:py-2 max-[991px]:px-[18px] max-[991px]:text-[0.95rem]"
              >
                login
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className="hidden max-[991px]:block text-[#121212] p-1"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm z-[9999] transition-all duration-350 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-[380px] h-full bg-primary-gb text-white p-8 max-sm:p-6 flex flex-col justify-between shadow-[-8px_0_24px_rgba(0,0,0,0.2)] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/20">
            <img src="/assets/logo-white.svg" alt="Garibook" height="36" />
            <button
              type="button"
              className="text-white p-1"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-[18px] mt-8 flex-grow">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="group flex items-center justify-between text-[1.25rem] font-semibold text-white py-2.5 border-b border-white/10 transition-all duration-200 hover:pl-2 hover:text-warning-gb"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/20">
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 w-full p-3.5 rounded-[10px] font-semibold text-base bg-white/15 text-white transition-colors hover:bg-white/25"
              onClick={toggleLanguage}
            >
              <Globe size={18} />
              <span>Language: {language}</span>
            </button>

            <a
              href="#login"
              className="flex items-center justify-center gap-2.5 w-full p-3.5 rounded-[10px] font-semibold text-base bg-warning-gb text-dark-gb transition-all hover:bg-warning-gb-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={18} />
              <span>Login to Garibook</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
