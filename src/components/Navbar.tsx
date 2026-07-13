import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { ACADEMY_INFO } from '../data';
import logoImage from '../assets/images/Talnet logo.jpeg';

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Programs' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'results', label: 'Results' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-md shadow-lg shadow-slate-950/20 py-3'
            : 'bg-slate-950/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none py-5'
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logoImage}
                  alt="Talent Science Academy Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg md:text-xl text-white tracking-tight block leading-none">
                  TALENT SCIENCE
                </span>
                <span className="font-sans font-semibold text-[10px] uppercase text-blue-400 tracking-wider block mt-0.5">
                  Academy
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-slate-800/40 rounded-lg -z-10 border border-slate-700/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
              
              {/* Desktop CTA Button */}
              <button
                onClick={() => handleItemClick('contact')}
                className="ml-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/15 hover:shadow-blue-600/25 transition-all duration-200 cursor-pointer"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                        isActive
                          ? 'bg-blue-950/50 text-blue-400 font-semibold border-l-4 border-blue-500'
                          : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 px-4">
                  <button
                    onClick={() => handleItemClick('contact')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/10 text-center block"
                  >
                    Enroll Now / Register Inquiry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
