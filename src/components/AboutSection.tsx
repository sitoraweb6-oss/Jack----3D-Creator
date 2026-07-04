import { ContactButton } from './ContactButton';
import { AnimatedText } from './AnimatedText';
import { FadeIn } from './FadeIn';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  const bioText = "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center overflow-hidden"
      style={{ contentVisibility: 'auto' }}
    >
      {/* Decorative 3D Images absolutely positioned in corners */}
      
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decor"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-[bounce_6s_ease-in-out_infinite]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Object"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-[bounce_8s_ease-in-out_infinite]"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Block Decor"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-[bounce_7s_ease-in-out_infinite]"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Geometric Group Decor"
            referrerPolicy="no-referrer"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-[bounce_9s_ease-in-out_infinite]"
          />
        </FadeIn>
      </div>

      {/* Center content container */}
      <div className="flex flex-col items-center justify-center relative z-20 max-w-2xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[10rem] select-none">
            About me
          </h2>
        </FadeIn>

        {/* Animated Text Paragraph */}
        <div className="mb-16 sm:mb-20 md:mb-24 w-full">
          <AnimatedText text={bioText} />
        </div>

        {/* Bottom Contact Button */}
        <FadeIn delay={0.1} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
