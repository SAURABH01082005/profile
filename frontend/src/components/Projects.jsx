import React, { useState, useRef, useEffect } from 'react';
import { profileData } from '../data/profileData';
import ProjectMediaModal from './ProjectMediaModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  const categories = ['All', 'Full-Stack', 'Web', 'Python/ML'];

  const filteredProjects = activeFilter === 'All' 
    ? profileData.projects 
    : profileData.projects.filter(p => p.category === activeFilter);

  const [isPaused, setIsPaused] = useState(false);

  // Scroll back to start when filter changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
      setScrollProgress(0);
    }
  }, [activeFilter]);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const card = container.firstElementChild;
          if (card) {
            const cardWidth = card.offsetWidth;
            container.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
          }
        }
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [filteredProjects, isPaused]);

  const handleScroll = (e) => {
    const container = e.target;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      const percentage = (container.scrollLeft / maxScroll) * 100;
      setScrollProgress(percentage);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild;
      if (card) {
        const cardWidth = card.offsetWidth;
        carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' }); // Width + gap
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild;
      if (card) {
        const cardWidth = card.offsetWidth;
        carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
      }
    }
  };

  const handleOpenMedia = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">

      
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[20%] left-[-5%] w-[35vw] h-[35vw] rounded-full radial-glow-secondary opacity-25"></div>
        <div className="absolute top-[10%] right-[-5%] w-[30vw] h-[30vw] rounded-full radial-glow opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light-theme:text-zinc-900 font-heading">
            Featured <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 light-theme:text-zinc-500 mt-4 leading-relaxed">
            A showcase of my software engineering projects. Click on **"Watch Demo Video & Screenshots"** to see live walk-throughs and design structures.
          </p>
        </div>

        {/* Controls Row: Filters on Left, Navigation on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          {/* Filters Panel */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border cursor-pointer transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-900/10'
                    : 'bg-zinc-900/50 light-theme:bg-zinc-100 border-zinc-800 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-700 hover:text-white light-theme:hover:text-zinc-955 hover:bg-zinc-900 light-theme:hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Navigation chevrons */}
          {filteredProjects.length > 0 && (
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button 
                onClick={scrollLeft}
                className="w-11 h-11 rounded-xl bg-zinc-900/80 light-theme:bg-zinc-100 hover:bg-zinc-850 light-theme:hover:bg-zinc-200 border border-zinc-805 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-650 hover:text-white light-theme:hover:text-zinc-950 transition-all duration-300 shadow-md hover:border-violet-500/40 cursor-pointer active:scale-95 flex items-center justify-center"
                aria-label="Previous Project"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-11 h-11 rounded-xl bg-zinc-900/80 light-theme:bg-zinc-100 hover:bg-zinc-850 light-theme:hover:bg-zinc-200 border border-zinc-805 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-650 hover:text-white light-theme:hover:text-zinc-955 transition-all duration-300 shadow-md hover:border-violet-500/40 cursor-pointer active:scale-95 flex items-center justify-center"
                aria-label="Next Project"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Projects Carousel Container */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth pb-8 px-1"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] shrink-0 snap-start glass-panel rounded-3xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-lg hover:border-violet-500/40 light-theme:hover:border-violet-400/40 hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between text-left overflow-hidden"
            >
              
              {/* Project Card Media Image Cover */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950/80 border-b border-zinc-900 light-theme:border-zinc-200 flex items-center justify-center">
                {project.imageUrl ? (
                  <>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    {/* Hover Overlay Play Badge */}
                    <div className="absolute inset-0 bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <button 
                        onClick={() => handleOpenMedia(project)}
                        className="px-4 py-2.5 rounded-xl bg-violet-600/90 text-white font-medium text-xs flex items-center gap-1.5 shadow-lg border border-violet-500 scale-95 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Watch Demo Video
                      </button>
                    </div>
                  </>
                ) : (
                  // Custom Abstract Grid Fallback for Code projects
                  <div className="w-full h-full bg-gradient-to-tr from-zinc-950 to-zinc-900 flex flex-col justify-center p-6 relative">
                    <div className="absolute inset-0 grid-mesh opacity-20"></div>
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="font-mono text-xs text-zinc-500">source_code_schema</div>
                  </div>
                )}

                {/* Top Left Award / Milestone Tag */}
                {project.achievement && (
                  <div className="absolute top-3.5 left-3.5 bg-amber-500/95 border border-amber-400 text-black px-2.5 py-0.5 rounded-lg text-[10px] font-bold tracking-wide shadow-md">
                    ★ {project.achievement}
                  </div>
                )}
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 light-theme:bg-zinc-150 border border-zinc-800 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-655 text-[10px] font-bold tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white light-theme:text-zinc-900 font-heading mb-1 group-hover:text-violet-400 light-theme:group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-zinc-400 light-theme:text-zinc-500 uppercase tracking-wider mb-3.5">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 light-theme:text-zinc-650 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                </div>

                <div>
                  
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-950 light-theme:bg-zinc-100 border border-zinc-900 light-theme:border-zinc-250 text-zinc-400 light-theme:text-zinc-700 text-[10px] font-mono font-medium hover:border-violet-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-900 light-theme:border-zinc-200">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white light-theme:text-zinc-600 light-theme:hover:text-zinc-950 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      Repo
                    </a>
                    
                    {project.imageUrl ? (
                      <button
                        onClick={() => handleOpenMedia(project)}
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-400 hover:text-violet-300 light-theme:text-violet-600 light-theme:hover:text-violet-750 transition-colors ml-auto cursor-pointer"
                      >
                        Visual Demo
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-400 hover:text-violet-300 light-theme:text-violet-600 light-theme:hover:text-violet-750 transition-colors ml-auto"
                      >
                        Live
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Carousel Visual Progress Indicator bar */}
        {filteredProjects.length > 1 && (
          <div className="max-w-xs mx-auto mt-6 h-1 bg-zinc-900/50 light-theme:bg-zinc-200 rounded-full overflow-hidden border border-zinc-800/10 relative">
            <div 
              className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-150"
              style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
            ></div>
          </div>
        )}

      </div>

      {/* Video / Photo Overlay Modal */}
      <ProjectMediaModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

    </section>
  );
}
