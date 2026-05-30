import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '#home-section' },
    { name: 'About', link: '#about-section' },
    { name: 'Our Services', link: '#services-section' },
    { name: 'Contact Us', link: '#footer-section' }
  ];

  // Advanced smooth scroll with fixed navbar height offsets
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navbarHeight = 80; // matching the sticky h-20 height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Auto-close drawer on mobile link clicks
  };

  // Scroll smoothly to top of the page when clicking the logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#fcfcfc] backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section - Smooth Scroll to Top */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center flex-shrink-0 cursor-pointer group"
          >
            <img className='w-16 h-16 rounded-xl' src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation Links - W/ Smooth Scroll Offset */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleScroll(e, item.link)}
                className="font-sans text-[13px] font-semibold text-neutral-800 uppercase tracking-widest hover:text-[#C58A6D] transition-colors duration-300 relative py-1.5 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C58A6D] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-[#C58A6D] hover:bg-[#C58A6D]/5 focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu - W/ Smooth Scroll Offset */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pt-2 pb-6 space-y-2 bg-white border-t border-neutral-100 shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => handleScroll(e, item.link)}
              className="block px-3 py-3.5 rounded-lg text-sm font-semibold text-neutral-800 uppercase tracking-widest hover:text-[#C58A6D] hover:bg-[#C58A6D]/5 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;