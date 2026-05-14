"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Java", "JavaScript"],
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1736&auto=format&fit=crop"
  },
  {
    id: "ai",
    title: "Generative AI",
    skills: ["LangChain", "LLMs", "RAG"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "CI/CD Basics", "Google Cloud"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1788&auto=format&fit=crop"
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 md:py-32 px-4 md:px-12 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-8 items-center">

        {/* Left text column */}
        <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 z-10">
          <div>
            <h2 className="skills-title font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4">
              Technical <br />
              <span className="text-outline-lime">Arsenal</span>
            </h2>
            <p className="font-mono text-xs md:text-sm tracking-widest text-gray-400 uppercase max-w-md leading-relaxed">
              From robust backends to interactive frontends and AI integrations,
              building the next generation of web applications.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category)}
                onMouseEnter={() => setActiveCategory(category)}
                className={`group cursor-pointer border-b border-gray-800 pb-3 md:pb-4 transition-colors duration-300 ${activeCategory.id === category.id ? 'border-lando-lime' : 'hover:border-gray-500'}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-display text-2xl md:text-3xl uppercase transition-colors duration-300 ${activeCategory.id === category.id ? 'text-lando-lime' : 'text-gray-500 group-hover:text-white'}`}>
                    {category.title}
                  </h3>
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${activeCategory.id === category.id ? 'bg-lando-lime' : 'bg-transparent'}`} />
                </div>

                {/* Mobile view of skills directly under */}
                <div className={`lg:hidden mt-2 md:mt-4 transition-all duration-300 overflow-hidden ${activeCategory.id === category.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-white/10 text-white text-[10px] md:text-xs font-mono uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual column - akin to the Helmet showcase */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative hidden lg:flex items-center justify-center">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                activeCategory.id === category.id
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-95 z-0'
              }`}
            >
              {/* Dynamic Image representing the skill */}
              <div className="relative w-full h-3/4 overflow-hidden rounded-sm group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover filter grayscale sepia-[0.2] hue-rotate-[70deg] contrast-125"
                />

                {/* Overlaying skills visually */}
                <div className="absolute inset-0 z-20 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/60">
                   <div className="flex flex-wrap justify-center gap-4">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="px-4 py-2 border border-lando-lime text-lando-lime font-mono text-sm uppercase transform -rotate-2 hover:rotate-0 hover:bg-lando-lime hover:text-black transition-all duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Hover image to view</p>
                <h4 className="font-display text-4xl text-white uppercase">{category.title} Stack</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
