import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { CoreAttribution } from './components/CoreAttribution';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Heart, ArrowUp } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [projectToast, setProjectToast] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Set title programmatically just to be safe
    document.title = "Jack -- 3D Creator";

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Determine custom offsets if needed
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLiveProjectClick = (projectName: string) => {
    setProjectToast(projectName);
    // Auto fade out toast after 4s
    setTimeout(() => {
      setProjectToast(null);
    }, 4000);
  };

  return (
    <div 
      id="app-wrapper"
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased relative selection:bg-[#B600A8]/30 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection 
        onContactClick={() => setIsContactOpen(true)}
        onNavClick={handleScrollToSection}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection 
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection 
        onLiveProjectClick={handleLiveProjectClick}
      />

      {/* Simple, Craftsmanship-led Footer */}
      <footer id="footer" className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 py-12 px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <span className="font-bold uppercase tracking-wider text-lg">JACK</span>
          <p className="text-xs text-[#D7E2EA]/50 font-light uppercase tracking-widest">
            © {new Date().getFullYear()} Jack. All Rights Reserved. Crafted with Passion.
          </p>
        </div>
        
        {/* Core Attribution */}
        <CoreAttribution variant="footer" />

        <div className="flex items-center gap-6 text-sm text-[#D7E2EA]/60 uppercase tracking-widest font-mono text-xs">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onClick={() => setIsContactOpen(true)}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
            Available for Hire
          </span>
          <span className="text-[#D7E2EA]/20">|</span>
          <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollToSection('hero')}>
            Back To Top
          </span>
        </div>
      </footer>

      {/* Core Attribution - Floating on Desktop */}
      <CoreAttribution variant="floating" />

      {/* Contact Form Modal Overlay */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Project Toast Notification */}
      <AnimatePresence>
        {projectToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 bg-[#121212] border border-[#D7E2EA]/20 p-5 rounded-2xl shadow-2xl flex items-start gap-4 max-w-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#B600A8]/10 text-[#B600A8] flex items-center justify-center shrink-0 mt-0.5">
              <Info size={18} />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h4 className="font-semibold text-white text-sm">Launching {projectToast}</h4>
              <p className="text-xs text-[#D7E2EA]/70 leading-relaxed">
                Opening the secure cloud demonstration container. High-fidelity textures are being fetched...
              </p>
              <div className="flex gap-3 mt-2 text-[10px] uppercase font-bold tracking-wider text-[#B600A8]">
                <span>Status: Connected</span>
                <span>•</span>
                <span>FPS: 60/60</span>
              </div>
            </div>
            <button 
              onClick={() => setProjectToast(null)}
              className="text-[#D7E2EA]/40 hover:text-white cursor-pointer p-1"
            >
              <XIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleScrollToSection('hero')}
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-white text-[#0C0C0C] flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#D7E2EA] transition-colors"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
