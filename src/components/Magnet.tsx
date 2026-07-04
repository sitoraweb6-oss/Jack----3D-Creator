import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to element center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Check if cursor is within padding distance of element edge
      const maxDistanceX = rect.width / 2 + padding;
      const maxDistanceY = rect.height / 2 + padding;

      const insideX = Math.abs(distanceX) < maxDistanceX;
      const insideY = Math.abs(distanceY) < maxDistanceY;

      if (insideX && insideY) {
        setIsHovered(true);
        // Translate is distance divided by strength factor
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={containerRef} style={style} className={className}>
      {children}
    </div>
  );
}
