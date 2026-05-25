import React from 'react';
import { profileData } from '../data/profileData';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  const { name, title, specialization, institution, advisor, bio, github, linkedin } = profileData.personal;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90svh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Decorative Radial Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full radial-glow animate-glow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full radial-glow-secondary animate-glow" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute inset-0 grid-mesh opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Left Content */}
          <div className="flex-1 text-left order-2 lg:order-1 animate-fade-in-up">
            
            {/* Graduate Student & Developer Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 light-theme:text-violet-600 light-theme:bg-violet-500/5 text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
              <span>{institution} • {specialization}</span>
            </div>

            {/* Title with Gradient Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light-theme:text-zinc-900 mb-4 font-heading leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">{name}</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-300 light-theme:text-zinc-700 mb-6 font-heading">
              {title}
            </h2>

            {/* Short Bio Description */}
            <p className="text-base sm:text-lg text-zinc-400 light-theme:text-zinc-500 leading-relaxed mb-8 max-w-2xl">
              {bio}
            </p>

            

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium shadow-md shadow-violet-900/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                View Showcase
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-zinc-900 light-theme:bg-zinc-100 hover:bg-zinc-800 light-theme:hover:bg-zinc-200 text-white light-theme:text-zinc-800 font-medium border border-zinc-800 light-theme:border-zinc-300 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Get In Touch
              </button>

              {/* Minimal social links */}
              <div className="flex items-center gap-3.5 ml-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900/50 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-600 hover:text-white light-theme:hover:text-zinc-950 transition-colors shadow-sm"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900/50 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-600 hover:text-white light-theme:hover:text-zinc-950 transition-colors shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Hero Right Avatar Frame */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 animate-float">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 bg-gradient-to-tr from-violet-600/10 to-indigo-500/10 scale-105"></div>
              <div className="absolute inset-2 rounded-full border border-zinc-800 light-theme:border-zinc-200 shadow-inner"></div>
              
              {/* Spinning Accent Border */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-600 via-transparent to-indigo-500 opacity-70 blur-[2px] animate-spin" style={{ animationDuration: '20s' }}></div>

              {/* Main Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-zinc-700/60 light-theme:border-zinc-200/80 bg-zinc-900/50 backdrop-blur-md shadow-2xl flex items-center justify-center">
                {heroImg ? (
                  <img 
                    src={heroImg} 
                    alt={name} 
                    className="w-full h-full object-cover scale-[1.02] hover:scale-110 transition-transform duration-500" 
                  />
                ) : (
                  // Elegant CSS avatar fallback
                  <div className="text-7xl font-extrabold bg-gradient-to-br from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              {/* Micro interactive indicator badge */}
              <div className="absolute bottom-4 right-4 bg-zinc-950 light-theme:bg-white border border-zinc-800 light-theme:border-zinc-300 shadow-md px-3.5 py-1.5 rounded-2xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-md shadow-green-500/30 animate-pulse"></span>
                <span className="text-xs font-semibold text-zinc-300 light-theme:text-zinc-700">Open to Internships</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
