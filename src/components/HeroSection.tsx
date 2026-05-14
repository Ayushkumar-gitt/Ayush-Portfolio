"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Create initial animation just like landonorris.com loading text
      gsap.fromTo(
        ".hero-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" }
      );

      gsap.fromTo(
        ".hero-role",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-summary",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power3.out" }
      );

      // Floating animation for image if present
      gsap.to(".hero-image", {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black px-6 md:px-12"
    >
      {/* Background decoration elements reminiscent of the 3D vibe */}
      <div className="absolute top-0 right-0 w-1/2 h-screen opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-lando-lime blur-[150px]" />
      </div>

      {/* Interactive Photo Reveal Element */}
      <div className="absolute right-10 md:right-32 top-1/2 -translate-y-1/2 z-20 w-[40vw] md:w-[25vw] max-w-[400px] aspect-[3/4] group" style={{ perspective: "1000px" }}>
        <div className="w-full h-full relative transition-transform duration-700 ease-out cursor-crosshair" style={{ transformStyle: "preserve-3d" }} id="hover-card">

          {/* Inject style for hover effect */}
          <style dangerouslySetInnerHTML={{__html: `
            .group:hover #hover-card {
              transform: rotateY(180deg);
            }
          `}} />

          {/* Front (Helmet/Cover) */}
          <div className="absolute w-full h-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 opacity-80" />
            <div className="text-lando-lime font-mono text-xs uppercase tracking-[0.4em] rotate-90 absolute -right-6 mix-blend-difference z-10">Hover to Reveal</div>

            {/* Abstract Helmet/Visor Shape */}
            <div className="w-3/4 h-1/2 relative z-10">
              <div className="absolute top-1/4 left-0 w-full h-1 bg-lando-lime shadow-[0_0_15px_#ccff00]" />
              <div className="absolute top-1/2 left-[10%] w-[80%] h-1 bg-white/20" />
              <div className="absolute top-3/4 left-[20%] w-[60%] h-1 bg-white/10" />
              <svg className="w-full h-full opacity-30 text-lando-lime" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 50 Q50 90 90 50 Q50 10 10 50" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Back (Photo) */}
          <div className="absolute w-full h-full bg-black overflow-hidden border border-lando-lime/30 shadow-[0_0_30px_rgba(204,255,0,0.15)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
            <img
              src="/ayush_photo.jpg"
              alt="Ayush Kumar"
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-lando-lime font-mono text-xs tracking-widest uppercase">System Online</p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 mt-20 relative pointer-events-none" ref={textRef}>
        <h2 className="hero-role text-lando-lime font-mono text-sm md:text-base tracking-widest uppercase mb-4">
          Web Developer (Fresher)
        </h2>

        <div className="overflow-hidden mb-2">
          <h1 className="hero-text font-display text-[15vw] leading-[0.8] tracking-tighter text-white uppercase mix-blend-difference relative z-30">
            Ayush
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-text font-display text-[15vw] leading-[0.8] tracking-tighter text-outline uppercase pl-[5vw] mix-blend-difference relative z-30">
            Kumar
          </h1>
        </div>

        <div className="mt-12 md:mt-24 max-w-2xl hero-summary">
          <div className="w-12 h-1 bg-lando-lime mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl font-sans font-light leading-relaxed">
            <span className="text-white font-medium">Web Developer</span> with strong foundations in Data Structures and Algorithms using Java. Skilled in building full-stack web applications using modern JavaScript frameworks, REST APIs, and databases. Currently learning Generative AI, backend systems, and scalable web architectures.
          </p>

          <div className="mt-10 flex gap-4">
            <a href="#projects" className="px-8 py-4 bg-lando-lime text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
              View Work
            </a>
            <a href="#contact" className="px-8 py-4 border border-gray-700 text-white font-bold uppercase tracking-widest text-sm hover:border-white transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-2 opacity-50 hero-summary">
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-left translate-y-8 mb-10">Scroll</span>
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden relative">
          <div className="w-full h-1/2 bg-white absolute top-0 animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
