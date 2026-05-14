"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Perplexity Clone",
    subtitle: "AI Research Assistant",
    tech: ["React.js", "Node.js", "Python", "LangChain", "LLMs"],
    description: "Built an AI-powered research assistant with real-time query processing, retrieval-based search, and structured AI-generated responses.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1665&auto=format&fit=crop", // Tech placeholder
  },
  {
    title: "Snitch",
    subtitle: "Full-Stack E-Commerce",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description: "Developed a full-stack e-commerce application with authentication, product management, and RESTful APIs using MERN architecture.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop", // Tech placeholder
  },
  {
    title: "Self-Initiated",
    subtitle: "Web Developer",
    tech: ["React.js", "Node.js", "MongoDB", "Git"],
    description: "Developed full-stack web applications, designed RESTful APIs with authentication, validation, and used Git for collaborative workflows.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1772&auto=format&fit=crop", // Tech placeholder
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll setup
      const sections = gsap.utils.toArray(".project-panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (containerRef.current?.offsetWidth || 0),
        }
      });

      // Title animation
      gsap.fromTo(
        ".projects-title",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-screen bg-lando-grey overflow-hidden flex flex-col pt-10 px-6 md:px-12"
    >
      <div className="z-20 pointer-events-none shrink-0 mb-8 md:mb-16">
        <h2 className="projects-title font-display text-5xl md:text-8xl text-white uppercase tracking-tighter">
          ON <br />
          <span className="text-outline-lime">TRACK</span>
        </h2>
        <p className="mt-4 font-mono text-sm tracking-widest text-white uppercase max-w-xs">
          Projects and applications built to solve complex problems.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex flex-1 w-[300vw] items-center pb-12 md:pb-48 relative z-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-panel w-screen h-full flex items-center px-4 md:px-20 lg:px-32 flex-shrink-0 relative"
          >
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center justify-center md:justify-between pb-10">

              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 z-10 pr-4 md:pr-0">
                <div className="inline-block px-3 py-1 border border-lando-lime text-lando-lime font-mono text-xs uppercase tracking-widest">
                  0{index + 1}
                </div>
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-none">
                  {project.title}
                </h3>
                <h4 className="font-sans text-lg md:text-xl text-gray-400">
                  {project.subtitle}
                </h4>
                <p className="font-sans text-sm md:text-base text-gray-300 font-light max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 text-white text-[10px] md:text-xs font-mono uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 h-[30vh] sm:h-[40vh] md:h-[60vh] mt-6 md:mt-0 relative group overflow-hidden">
                <div className="absolute inset-0 bg-lando-lime mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
