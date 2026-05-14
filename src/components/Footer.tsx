"use client";

import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-32 pb-10 px-6 md:px-12 relative overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">

        <h2 className="font-display text-[12vw] leading-none text-white uppercase tracking-tighter mb-12 hover:text-lando-lime transition-colors duration-500 cursor-pointer text-center">
          Let's Connect
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          <a
            href="mailto:raj309457@gmail.com"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-lando-lime group-hover:bg-lando-lime transition-all duration-300">
              <IconMail className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/ayush-kumar-60b667231"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-lando-lime group-hover:bg-lando-lime transition-all duration-300">
              <IconBrandLinkedin className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Ayushkumar-gitt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-lando-lime group-hover:bg-lando-lime transition-all duration-300">
              <IconBrandGithub className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">GitHub</span>
          </a>

          <a
            href="tel:+919110998663"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-lando-lime group-hover:bg-lando-lime transition-all duration-300">
              <IconPhone className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">IconPhone</span>
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 mt-10">
          <p className="font-sans text-gray-500 text-sm">
            © {new Date().getFullYear()} Ayush Kumar. All rights reserved.
          </p>
          <div className="font-mono text-xs text-gray-600 uppercase tracking-widest mt-4 md:mt-0 flex gap-4">
             <span>Sitamarhi, Bihar, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
