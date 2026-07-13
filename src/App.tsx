import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { ACADEMY_INFO } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Interactive Scroll Synchronization
  useEffect(() => {
    const sections = ['home', 'about', 'courses', 'faculty', 'results', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset to trigger before section hits the absolute top
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Small offset calculation to account for the sticky navbar height (around 80px)
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950" id="main-root">
      
      {/* Dynamic Header & Navigation Area */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Sections Body */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero onCtaclick={handleNavClick} />

        {/* About Section */}
        <About />

        {/* Programs / Courses Section */}
        <Courses onCtaclick={handleNavClick} />

        {/* Faculty Section */}
        <Faculty />

        {/* Results Section */}
        <Results />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact & Pre-Registration Section */}
        <Contact />

      </main>

      {/* Premium Informative Footer */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-900/80" id="app-footer">
        
        {/* Absolute Bottom copyright block */}
        <div className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] sm:text-xs px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-sans">
              &copy; {new Date().getFullYear()} {ACADEMY_INFO.name}. All Rights Reserved. Designed for Intermediate (FSc) & CAIE Aspirants in Faisalabad, Pakistan.
            </p>
            <div className="flex items-center gap-4 font-mono text-[10px]">
              <a href="#about" onClick={() => handleNavClick('about')} className="hover:text-blue-400">Board Guidelines</a>
              <span>&bull;</span>
              <a href="#contact" onClick={() => handleNavClick('contact')} className="hover:text-blue-400">Inquiry Desk</a>
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}
