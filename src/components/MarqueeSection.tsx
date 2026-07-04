import { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data';

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once at start
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tripled images for seamless scrolling
  const tripledRow1 = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const tripledRow2 = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  // Moves RIGHT on scroll (translateX(offset - 200))
  const row1Translation = scrollOffset - 200;
  // Moves LEFT on scroll (translateX(-(offset - 200)))
  const row2Translation = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
      style={{ contentVisibility: 'auto' }}
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves RIGHT */}
        <div className="w-full overflow-hidden select-none">
          <div
            className="flex gap-3 whitespace-nowrap"
            style={{
              transform: `translateX(${row1Translation}px)`,
              willChange: 'transform',
            }}
          >
            {tripledRow1.map((url, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0"
                style={{ width: '420px', height: '270px' }}
              >
                <img
                  src={url}
                  alt={`Gallery project top-row preview ${index + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves LEFT */}
        <div className="w-full overflow-hidden select-none">
          <div
            className="flex gap-3 whitespace-nowrap"
            style={{
              transform: `translateX(${row2Translation}px)`,
              willChange: 'transform',
            }}
          >
            {tripledRow2.map((url, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0"
                style={{ width: '420px', height: '270px' }}
              >
                <img
                  src={url}
                  alt={`Gallery project bottom-row preview ${index + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
