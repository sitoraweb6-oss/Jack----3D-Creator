import React from 'react';

/**
 * Core Attribution Component
 * Developed by Sitora Web
 * Link: https://sitora.org
 */
interface CoreAttributionProps {
  variant?: 'footer' | 'floating';
  className?: string;
}

export function CoreAttribution({ variant = 'footer', className = '' }: CoreAttributionProps) {
  if (variant === 'floating') {
    return (
      <div 
        className={`hidden md:flex fixed bottom-6 right-6 z-50 pointer-events-auto select-none ${className}`}
        id="sitora-floating-attribution"
      >
        <a
          href="https://sitora.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212]/80 border border-[#D7E2EA]/10 backdrop-blur-md text-[#D7E2EA]/50 text-xs font-mono uppercase tracking-widest hover:text-[#D7E2EA] hover:border-[#B600A8]/30 hover:shadow-[0_0_15px_rgba(182,0,168,0.25)] transition-all duration-300 group"
          style={{ willChange: 'transform' }}
        >
          <span>Developed by</span>
          <span className="font-bold text-[#D7E2EA]/80 group-hover:text-white transition-colors duration-200">
            Sitora Web
          </span>
        </a>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center pointer-events-auto select-none ${className}`}
      id="sitora-footer-attribution"
    >
      <a
        href="https://sitora.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/40 font-mono uppercase tracking-widest hover:text-[#D7E2EA]/80 hover:shadow-[0_0_10px_rgba(182,0,168,0.15)] transition-all duration-300"
      >
        <span>Developed by</span>
        <span className="font-bold underline decoration-[#B600A8]/50 hover:decoration-[#B600A8] transition-colors">
          Sitora Web
        </span>
      </a>
    </div>
  );
}
