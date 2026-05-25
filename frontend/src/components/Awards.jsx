import React, { useState, useRef, useEffect } from 'react';
import { profileData } from '../data/profileData';

export default function Awards() {
  const { achievements } = profileData;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const carouselRef = useRef(null);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused || achievements.length <= 1) return;

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
    }, 4500);

    return () => clearInterval(timer);
  }, [achievements, isPaused]);

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
        carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
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

  const openPhotoModal = (achievement) => {
    setSelectedPhoto(achievement);
    setPhotoIndex(0);
  };

  return (
    <section id="awards" className="relative py-20 overflow-hidden bg-zinc-950/30 light-theme:bg-zinc-50/50 border-t border-b border-zinc-900 light-theme:border-zinc-200">
      
      {/* Decorative glows */}
      <div className="absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light-theme:text-zinc-900 font-heading">
            Honors & <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 light-theme:text-zinc-500 mt-4 leading-relaxed">
            Highlights of my academic excellence, engineering competition placements, and speed-coding contests.
          </p>
        </div>

        {/* Carousel controls header row */}
        <div className="flex justify-end gap-3 mb-8 max-w-5xl mx-auto">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 rounded-xl bg-zinc-900/80 light-theme:bg-zinc-100 hover:bg-zinc-850 light-theme:hover:bg-zinc-200 border border-zinc-805 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-650 hover:text-white light-theme:hover:text-zinc-950 transition-all duration-300 shadow-md hover:border-violet-500/40 cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Previous Achievement"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 rounded-xl bg-zinc-900/80 light-theme:bg-zinc-100 hover:bg-zinc-850 light-theme:hover:bg-zinc-200 border border-zinc-805 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-650 hover:text-white light-theme:hover:text-zinc-955 transition-all duration-300 shadow-md hover:border-violet-500/40 cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Next Achievement"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Achievements Carousel */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth pb-8 px-1 max-w-5xl mx-auto"
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] shrink-0 snap-start glass-panel rounded-3xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-lg hover:border-violet-500/40 light-theme:hover:border-violet-400/40 hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between text-left overflow-hidden"
            >
              
              {/* Optional Visual Image header */}
              {item.imageUrl && (
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-900 light-theme:border-zinc-200 flex items-center justify-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Glassy hover overlay */}
                  <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <button 
                      onClick={() => openPhotoModal(item)}
                      className="px-4 py-2 rounded-xl bg-violet-650/90 text-white font-medium text-xs flex items-center gap-1.5 shadow-lg border border-violet-500 scale-95 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Details
                    </button>
                  </div>
                </div>
              )}

              {/* Achievement Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  
                  {/* Date Tag & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      {item.year}
                    </span>
                    {idx === 0 && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold uppercase tracking-wide">
                        ★ First Place
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white light-theme:text-zinc-900 mb-1 leading-snug font-heading group-hover:text-violet-400 light-theme:group-hover:text-violet-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs font-semibold text-zinc-400 light-theme:text-zinc-550 mb-3.5">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 light-theme:text-zinc-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                </div>

                {/* Footer Tag or Trigger button */}
                <div className="pt-4 border-t border-zinc-900 light-theme:border-zinc-200 flex items-center justify-between">
                  {item.highlight ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-955 light-theme:bg-zinc-100 border border-zinc-900 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-700 text-[10px] font-mono font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping"></span>
                      {item.highlight}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-500">Verified Citation</span>
                  )}

                  {item.imageUrl && (
                    <button
                      onClick={() => openPhotoModal(item)}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-violet-400 hover:text-violet-300 light-theme:text-violet-650 light-theme:hover:text-violet-750 transition-colors cursor-pointer"
                    >
                      View Doc
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Carousel Visual Progress Indicator bar */}
        {achievements.length > 1 && (
          <div className="max-w-xs mx-auto mt-6 h-1 bg-zinc-900/50 light-theme:bg-zinc-200 rounded-full overflow-hidden border border-zinc-800/10 relative">
            <div 
              className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-150"
              style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
            ></div>
          </div>
        )}

      </div>

      {/* Light Full-Screen Modal for certificates / ceremony photos */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-955/90 backdrop-blur-md animate-fade-in-up">
          <div className="relative w-full max-w-3xl glass-panel border border-zinc-850 light-theme:border-zinc-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-900 light-theme:border-zinc-200 bg-zinc-950">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  {selectedPhoto.title} — Verified File
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {selectedPhoto.organization}
                </p>
              </div>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close document modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Document Visual Viewer */}
            <div className="flex-grow p-4 bg-zinc-950 flex flex-col items-center justify-center overflow-y-auto max-h-[60vh] select-none">
              <img 
                src={selectedPhoto.imageUrls ? selectedPhoto.imageUrls[photoIndex] : selectedPhoto.imageUrl} 
                alt="Certificate Document" 
                className="max-w-full max-h-[55vh] object-contain rounded-lg border border-zinc-800 shadow-inner"
              />
            </div>

            {/* Multi-Photo Carousel Buttons (Ceremony + Certificate) */}
            {selectedPhoto.imageUrls && selectedPhoto.imageUrls.length > 1 && (
              <div className="p-4 bg-zinc-950 border-t border-zinc-900 flex justify-center items-center gap-2">
                {selectedPhoto.imageUrls.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhotoIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 ${
                      photoIndex === idx
                        ? 'bg-violet-600 text-white shadow-md'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {idx === 0 ? "View Certificate" : "View Photo"}
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
