import React, { useState, useEffect } from 'react';

export default function ProjectMediaModal({ isOpen, onClose, project }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(12);
  const [volume, setVolume] = useState(80);
  const [videoUrl, setVideoUrl] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('images');

  useEffect(() => {
    if (isOpen && project) {
      setIsPlaying(false);
      setProgress(12);
      setVideoUrl(project.videoUrl || '');
      setActiveImageIndex(0);
      // Default to video if available, else images
      setActiveTab(project.videoUrl ? 'video' : 'images');
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  // Handle mock slideshow & video progress increments
  useEffect(() => {
    let timer;
    if (isPlaying && activeTab === 'images') {
      timer = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev >= 100 ? 0 : prev + 5;
          // Every 25% progress, slide to next image if available
          if (project.imageUrls && project.imageUrls.length > 1) {
            if (nextProgress % 25 === 0) {
              setActiveImageIndex((idx) => (idx + 1) % project.imageUrls.length);
            }
          }
          return nextProgress;
        });
      }, 600);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeTab, project]);

  const hasMultipleImages = project.imageUrls && project.imageUrls.length > 1;
  const currentImage = (project.imageUrls && project.imageUrls.length > 0)
    ? project.imageUrls[activeImageIndex]
    : project.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-4xl glass-panel border border-zinc-850 light-theme:border-zinc-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-900 light-theme:border-zinc-200">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white light-theme:text-zinc-900 font-heading">
              {project.title} — Visual Demo
            </h3>
            <p className="text-xs text-zinc-400 light-theme:text-zinc-500 mt-0.5">
              {project.tagline}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 light-theme:bg-zinc-100 hover:bg-zinc-800 light-theme:hover:bg-zinc-200 border border-zinc-800 light-theme:border-zinc-300 text-zinc-400 light-theme:text-zinc-700 hover:text-white light-theme:hover:text-zinc-950 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Toggle Tabs if both images and video exist */}
        {project.videoUrl && (project.imageUrl || (project.imageUrls && project.imageUrls.length > 0)) && (
          <div className="flex justify-center border-b border-zinc-900 light-theme:border-zinc-250 bg-zinc-950/20 light-theme:bg-zinc-100/50 p-2 gap-2">
            <button
              onClick={() => {
                setActiveTab('video');
                setIsPlaying(false);
              }}
              className={`px-4.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-950/20'
                  : 'text-zinc-400 hover:text-white light-theme:text-zinc-650 light-theme:hover:text-zinc-950'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Watch Video Demo
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`px-4.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'images'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-950/20'
                  : 'text-zinc-400 hover:text-white light-theme:text-zinc-650 light-theme:hover:text-zinc-950'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Screenshots ({project.imageUrls?.length || 1})
            </button>
          </div>
        )}

        {/* Media Container */}
        <div className="flex-grow p-5 bg-zinc-950/50 light-theme:bg-zinc-50 flex flex-col items-center justify-center overflow-y-auto min-h-[300px]">
          
          {currentImage || videoUrl ? (
            <div className="w-full relative rounded-2xl overflow-hidden border border-zinc-900 light-theme:border-zinc-200 bg-zinc-950 shadow-inner group flex flex-col">
              
              {activeTab === 'images' ? (
                // Carousel Image View Mode
                <div className="relative w-full flex flex-col">
                  
                  {/* Main Display Image */}
                  <div className="relative aspect-video max-h-[50vh] flex items-center justify-center bg-black/60 overflow-hidden">
                    <img 
                      src={currentImage} 
                      alt={`${project.title} Slide`} 
                      className="max-w-full max-h-[50vh] object-contain mx-auto select-none" 
                    />

                    {/* Nav arrows */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={() => {
                            setIsPlaying(false);
                            setActiveImageIndex((prev) => (prev === 0 ? project.imageUrls.length - 1 : prev - 1));
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/75 border border-zinc-800 text-white hover:bg-violet-650 hover:border-violet-500 transition-all cursor-pointer shadow-lg z-10 hover:scale-105"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setIsPlaying(false);
                            setActiveImageIndex((prev) => (prev === project.imageUrls.length - 1 ? 0 : prev + 1));
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/75 border border-zinc-800 text-white hover:bg-violet-655 hover:border-violet-500 transition-all cursor-pointer shadow-lg z-10 hover:scale-105"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Mock playing animation overlay */}
                    {isPlaying && (
                      <div className="absolute inset-0 bg-zinc-950/45 flex flex-col items-center justify-center backdrop-blur-[1px]">
                        <div className="w-16 h-16 rounded-full bg-violet-650/90 flex items-center justify-center text-white shadow-xl animate-pulse">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </div>
                        <div className="mt-4 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-805 backdrop-blur-md text-center max-w-sm mx-auto">
                          <p className="text-xs font-semibold text-zinc-350">Simulating Live Tour...</p>
                          <p className="text-[10px] text-zinc-550 mt-1">Auto-cycling layout screenshots</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {hasMultipleImages && (
                    <div className="w-full p-3.5 border-t border-zinc-900 light-theme:border-zinc-200 bg-zinc-950/45 flex justify-center items-center gap-2 overflow-x-auto">
                      {project.imageUrls.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setIsPlaying(false);
                            setActiveImageIndex(idx);
                          }}
                          className={`w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                            activeImageIndex === idx
                              ? 'border-violet-500 scale-105 shadow-md shadow-violet-950/30'
                              : 'border-zinc-850 light-theme:border-zinc-300 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              ) : (
                // Real Video Player Embed (Local MP4 / YouTube Embed)
                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={videoUrl}
                      title={`${project.title} Demo`}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video 
                      src={videoUrl} 
                      controls 
                      autoPlay
                      className="w-full h-full max-h-[50vh]"
                      poster={project.imageUrl}
                    />
                  )}
                </div>
              )}

            </div>
          ) : (
            // No Image or Video Fallback
            <div className="p-12 text-center max-w-md">
              <div className="w-16 h-16 rounded-full bg-zinc-900 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-200 flex items-center justify-center text-zinc-500 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-white light-theme:text-zinc-800">No Media Files Attached</h4>
              <p className="text-xs text-zinc-400 light-theme:text-zinc-500 mt-2">
                This project focuses on core logic libraries or Python datasets. View the source code repository on GitHub for full details and Jupyter Notebook sheets!
              </p>
            </div>
          )}

        </div>

        {/* Custom Video Controls Panel (For screenshots simulation or real MP4 controllers) */}
        {activeTab === 'images' && currentImage && (
          <div className="p-4 bg-zinc-950 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Play/Pause & Timers */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-xl bg-violet-650 hover:bg-violet-600 text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause tour" : "Play tour"}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <div className="text-xs font-mono text-zinc-400">
                <span>{isPlaying ? `0:${progress.toString().padStart(2, '0')}` : '0:00'}</span>
                <span className="mx-1">/</span>
                <span>1:30</span>
              </div>
            </div>

            {/* Seek Bar Slider */}
            <div className="flex-grow max-w-md h-1.5 bg-zinc-850 rounded-full overflow-hidden mx-2 border border-zinc-900 cursor-pointer relative group">
              <div 
                className="h-full bg-gradient-to-r from-violet-650 to-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Volume Controllers */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-550" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <input 
                type="range" 
                min="0" 
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-16 sm:w-20 h-1 bg-zinc-850 rounded-full appearance-none cursor-pointer accent-violet-605"
              />
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
