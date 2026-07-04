import { SERVICES_DATA } from '../data';
import { FadeIn } from './FadeIn';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20"
      style={{ contentVisibility: 'auto' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40}>
            <h2 
              className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className={`flex flex-row items-center gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 ${
                index === 0 ? 'border-t' : ''
              } border-b border-[#0C0C0C]/15`}
            >
              {/* Left Column: Number */}
              <div 
                className="font-black text-[#0C0C0C] min-w-[70px] sm:min-w-[110px] md:min-w-[160px] select-none leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                <div className="flex flex-col gap-2 sm:gap-3 w-full">
                  <h3 
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p 
                    className="font-light leading-relaxed text-[#0C0C0C]/75 max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
