import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  // Split text into words to prevent half-word linebreaks
  const words = text.split(' ');
  
  // Track continuous indices for each character (including virtual spaces) to compute scroll alignment
  let charCounter = 0;
  const structuredWords = words.map((word) => {
    const chars = word.split('').map((char) => {
      const idx = charCounter;
      charCounter++;
      return { char, index: idx };
    });
    // Increment for the trailing space (representing ' ')
    charCounter++;
    return chars;
  });

  const totalLength = charCounter > 0 ? charCounter : 1;

  return (
    <p 
      ref={containerRef}
      className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto select-none"
      style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)' }}
    >
      {structuredWords.map((wordChars, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {wordChars.map(({ char, index }) => (
            <Character
              key={index}
              char={char}
              index={index}
              total={totalLength}
              progress={scrollYProgress}
            />
          ))}
          {/* Add a space after the word, unless it's the last word */}
          {wordIndex < words.length - 1 && <span className="inline-block w-[0.25em]">&nbsp;</span>}
        </span>
      ))}
    </p>
  );
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  key?: any;
}

function Character({ char, index, total, progress }: CharacterProps) {
  // Determine start/end offset for each character to fade in sequentially
  const start = index / total;
  const end = Math.min(1, start + 0.15); // Smooth 15% scrolling threshold overlap
  
  const opacity = useTransform(progress, [0, start, end, 1], [0.2, 0.2, 1, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0 pointer-events-none"
      >
        {char}
      </motion.span>
    </span>
  );
}
