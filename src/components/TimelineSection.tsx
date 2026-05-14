"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in timeline items as you scroll
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });

      // Title parallax
      gsap.to(".timeline-title-bg", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative min-h-screen bg-lando-grey py-20 md:py-32 px-4 md:px-12 overflow-hidden"
    >
      {/* Background massive text like Lando site */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <h2 className="timeline-title-bg font-display text-[25vw] text-white/5 whitespace-nowrap leading-none mix-blend-overlay">
          OFF TRACK
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20">

        {/* Experience & Certifications Column */}
        <div className="w-full md:w-1/2 space-y-12 md:space-y-20">
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-8 h-[2px] bg-lando-lime"></div>
              <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider">
                Experience
              </h3>
            </div>

            <div className="timeline-item border-l border-gray-700 pl-6 md:pl-8 ml-2 md:ml-4 relative">
              <div className="absolute w-3 h-3 bg-lando-lime rounded-full -left-[6.5px] top-2"></div>
              <span className="font-mono text-lando-lime text-[10px] md:text-xs tracking-widest uppercase">2024 - Present</span>
              <h4 className="font-display text-2xl md:text-3xl text-white uppercase mt-2">Web Developer (Projects)</h4>
              <p className="font-sans text-gray-400 mt-2 text-sm md:text-base">Self-Initiated · Remote</p>
              <ul className="mt-4 space-y-2 font-sans font-light text-gray-300 text-xs md:text-sm list-disc list-inside marker:text-gray-600">
                <li>Developed full-stack web applications using React.js, Node.js, and MongoDB.</li>
                <li>Designed RESTful APIs with authentication, validation, and database integration.</li>
                <li>Used Git for version control, debugging, and collaborative workflows.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-8 h-[2px] bg-white"></div>
              <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider">
                Certifications
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="timeline-item bg-black/40 p-4 md:p-6 border-l-2 border-transparent hover:border-white transition-colors duration-300">
                <h4 className="font-sans text-base md:text-lg text-white font-medium">Oracle Certified Foundations Associate</h4>
                <p className="font-mono text-[10px] md:text-xs text-gray-500 mt-2 uppercase tracking-wider">Oracle</p>
              </div>
              <div className="timeline-item bg-black/40 p-4 md:p-6 border-l-2 border-transparent hover:border-white transition-colors duration-300">
                <h4 className="font-sans text-base md:text-lg text-white font-medium">Software Engineering Virtual Experience</h4>
                <p className="font-mono text-[10px] md:text-xs text-gray-500 mt-2 uppercase tracking-wider">Goldman Sachs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="w-full md:w-1/2 space-y-10">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="w-8 h-[2px] bg-white"></div>
            <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider">
              Education
            </h3>
          </div>

          <div className="space-y-8 md:space-y-12">
             <div className="timeline-item relative">
              <div className="flex justify-between items-end border-b border-gray-700 pb-3 md:pb-4 mb-3 md:mb-4">
                <span className="font-mono text-white text-[10px] md:text-xs tracking-widest uppercase">2025 - 2027</span>
                <span className="font-mono text-lando-lime text-[10px] md:text-xs tracking-widest uppercase">Ongoing</span>
              </div>
              <h4 className="font-display text-2xl md:text-3xl text-white uppercase leading-none">
                Master of Computer Applications (MCA)
              </h4>
              <p className="font-sans text-gray-400 mt-2 md:mt-3 text-sm md:text-base">Birla Institute of Technology, Mesra</p>
            </div>

            <div className="timeline-item relative">
              <div className="flex justify-between items-end border-b border-gray-700 pb-3 md:pb-4 mb-3 md:mb-4">
                <span className="font-mono text-white text-[10px] md:text-xs tracking-widest uppercase">2022 - 2025</span>
                <span className="font-mono text-gray-500 text-[10px] md:text-xs tracking-widest uppercase">71%</span>
              </div>
              <h4 className="font-display text-2xl md:text-3xl text-gray-300 uppercase leading-none">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="font-sans text-gray-400 mt-2 md:mt-3 text-sm md:text-base">B.R.A. Bihar University, Bihar</p>
            </div>
          </div>

          {/* Decorative image mapping to "Off Track" visual style */}
          <div className="timeline-item mt-10 md:mt-16 relative w-full h-[200px] md:h-[300px] overflow-hidden group">
            <div className="absolute inset-0 bg-lando-lime mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
             <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop"
                alt="Code placeholder"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
          </div>

        </div>

      </div>
    </section>
  );
}
