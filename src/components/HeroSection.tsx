import React from 'react';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { FadeIn } from './FadeIn';

interface HeroSectionProps {
  onContactClick?: () => void;
  onNavClick?: (sectionId: string) => void;
}

export function HeroSection({ onContactClick, onNavClick }: HeroSectionProps) {
  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Price', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'about' }, // About contains contact or we trigger onContactClick
  ];

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === 'about' && onContactClick) {
      // scroll to about
      onNavClick?.('about');
    } else {
      onNavClick?.(target);
    }
  };

  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]"
      style={{ contentVisibility: 'auto' }}
    >
      {/* Corner Decor */}
      <div className="absolute top-0 right-0 p-4 z-40 pointer-events-none select-none">
        <div className="w-24 h-[1px] bg-[#BBCCD7]/20 rotate-45 translate-x-10 -translate-y-4"></div>
      </div>

      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full z-30">
        <div className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          <div className="text-[1.4rem] font-black tracking-tight text-[#D7E2EA] select-none">JACK</div>
          <div className="flex gap-6 sm:gap-8 md:gap-12">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.target}`}
                onClick={(e) => handleLinkClick(e, link.target)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-100 opacity-70 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-20 px-6">
        <div className="overflow-hidden w-full text-center mt-6 sm:mt-4 md:-mt-5">
          <FadeIn as="h1" delay={0.15} y={40}>
            <span className="hero-heading block font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] select-none">
              Hi, i&apos;m jack
            </span>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait - Centered absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 flex justify-center">
        <FadeIn delay={0.6} y={30} className="w-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack Portrait"
              referrerPolicy="no-referrer"
              className="w-[90%] sm:w-full object-contain pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Overlay Project Badge */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/10 shadow-lg">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] font-medium text-[#D7E2EA]">Available for new projects</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 flex justify-between items-end">
        {/* Left: Text */}
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right: Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
