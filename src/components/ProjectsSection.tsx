import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PROJECTS_DATA, ProjectItem } from '../data';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onLiveProjectClick?: (name: string) => void;
  key?: any;
}

function ProjectCard({ project, index, totalCards, onLiveProjectClick }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking on the individual card container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Card scales down as we scroll past it
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Adjust sticky top offset so they stack nicely with 28px separation
  const topOffset = 96 + index * 28; // top-24 is 96px

  return (
    <div 
      ref={containerRef} 
      className="h-[85vh] w-full relative"
    >
      <motion.div
        style={{ 
          scale,
          top: `${topOffset}px`,
        }}
        className="sticky w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 justify-between shadow-2xl origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
          {/* Project Details */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span 
              className="font-black leading-none text-[#D7E2EA] select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm font-light">
                {project.category}
              </span>
              <h3 
                className="text-[#D7E2EA] font-medium uppercase tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Button */}
          <LiveProjectButton onClick={() => onLiveProjectClick?.(project.name)} />
        </div>

        {/* Bottom Row: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 w-full items-stretch flex-1 overflow-hidden">
          {/* Left Column (40% width) */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
            <div 
              style={{ height: 'clamp(110px, 14vw, 200px)' }} 
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5"
            >
              <img 
                src={project.col1Image1} 
                alt={`${project.name} preview 1`} 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div 
              style={{ height: 'clamp(140px, 20vw, 300px)' }} 
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-white/5"
            >
              <img 
                src={project.col1Image2} 
                alt={`${project.name} preview 2`} 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width) */}
          <div className="md:col-span-6 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5 min-h-[220px]">
            <img 
              src={project.col2Image} 
              alt={`${project.name} main presentation`} 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectsSectionProps {
  onLiveProjectClick?: (name: string) => void;
}

export function ProjectsSection({ onLiveProjectClick }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-28 z-30"
      style={{ contentVisibility: 'auto' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[10rem] select-none">
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky Stacking List of Projects */}
        <div className="flex flex-col gap-12 sm:gap-16 w-full">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              totalCards={PROJECTS_DATA.length} 
              onLiveProjectClick={onLiveProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
