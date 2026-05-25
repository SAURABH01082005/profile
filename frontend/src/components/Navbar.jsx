import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profileData';

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Milestones' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section on scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-zinc-950/80 light-theme:bg-white/80 border-b border-zinc-900 light-theme:border-zinc-200 backdrop-blur-md shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo / Initials */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center gap-2 group font-semibold text-lg sm:text-xl tracking-tight text-white light-theme:text-zinc-900"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-105 transition-transform duration-300">
                SY
              </span>
              <span className="font-heading hover:text-violet-400 light-theme:hover:text-violet-600 transition-colors">
                {profileData.personal.name}
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-violet-400 light-theme:text-violet-600 border-b-2 border-violet-500 pb-1'
                    : 'text-zinc-400 light-theme:text-zinc-600 hover:text-white light-theme:hover:text-zinc-900'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-zinc-900 light-theme:bg-zinc-100 hover:bg-zinc-800 light-theme:hover:bg-zinc-200 border border-zinc-800 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-600 hover:text-white light-theme:hover:text-zinc-950 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun Icon for Dark Mode
                <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 1111.24 3.06a9 9 0 002.76 16.24H12z" />
                </svg>
              ) : (
                // Moon Icon for Light Mode
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu & Dark Mode Buttons */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-zinc-900 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-600"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 1111.24 3.06a9 9 0 002.76 16.24H12z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-600 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-72 border-b border-zinc-900 light-theme:border-zinc-200 bg-zinc-950/95 light-theme:bg-white/95' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-violet-600 text-white'
                  : 'text-zinc-400 light-theme:text-zinc-600 hover:bg-zinc-900 light-theme:hover:bg-zinc-100 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
