import React, { useState } from 'react';
import { profileData } from '../data/profileData';

export default function Research() {
  const { researchInterests, publications } = profileData;
  const [activeBibtex, setActiveBibtex] = useState(null);

  const toggleBibtex = (index) => {
    setActiveBibtex(activeBibtex === index ? null : index);
  };

  return (
    <section id="research" className="relative py-20 overflow-hidden bg-zinc-950/30 light-theme:bg-zinc-50/50 border-t border-b border-zinc-900 light-theme:border-zinc-200">
      
      {/* Decorative Blur */}
      <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light-theme:text-zinc-900 font-heading">
            Academic <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Research</span> & Focus
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 light-theme:text-zinc-500 mt-4 leading-relaxed">
            Exploring new horizons in distributed computing while building real-world MERN architectures.
            My research combines theoretical models with high-throughput database systems.
          </p>
        </div>

        {/* Part 1: Research Areas Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {researchInterests.map((interest, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm hover:border-violet-500/50 light-theme:hover:border-violet-400/50 hover:scale-[1.02] transition-all duration-300 group text-left flex flex-col justify-between"
            >
              <div>
                {/* Visual Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 light-theme:text-violet-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white light-theme:text-zinc-900 mb-2 font-heading">
                  {interest.title}
                </h3>
                <p className="text-zinc-400 light-theme:text-zinc-500 text-sm leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Publications Grid */}
        <div className="max-w-4xl mx-auto text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white light-theme:text-zinc-900 mb-8 font-heading flex items-center gap-2.5">
            <svg className="w-6 h-6 text-violet-400 light-theme:text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Selected Publications & Preprints
          </h3>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Badge Year */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-200 text-zinc-400 light-theme:text-zinc-600 text-xs font-semibold">
                      {pub.year}
                    </span>
                    <span className="text-xs text-violet-400 light-theme:text-violet-600 font-medium">
                      Peer Reviewed
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white light-theme:text-zinc-900 mb-1 leading-snug font-heading">
                    {pub.title}
                  </h4>
                  
                  <p className="text-sm text-zinc-300 light-theme:text-zinc-700 mb-1.5">
                    {pub.authors.split(', ').map((author, aIdx) => (
                      <span key={aIdx} className={author.includes("A. Rivera") ? "font-bold text-white light-theme:text-zinc-950" : ""}>
                        {author}{aIdx < pub.authors.split(', ').length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>

                  <p className="text-xs italic text-zinc-500 light-theme:text-zinc-500 mb-4">
                    {pub.venue}
                  </p>
                </div>

                {/* PDF & Cite Buttons */}
                <div className="flex items-center gap-3 mt-2">
                  <a 
                    href={pub.pdfUrl}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 light-theme:bg-zinc-100 hover:bg-zinc-800 light-theme:hover:bg-zinc-200 text-zinc-300 light-theme:text-zinc-700 text-xs font-medium border border-zinc-800 light-theme:border-zinc-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Paper
                  </a>
                  
                  <button 
                    onClick={() => toggleBibtex(idx)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 light-theme:bg-zinc-100 hover:bg-zinc-800 light-theme:hover:bg-zinc-200 text-zinc-300 light-theme:text-zinc-700 text-xs font-medium border border-zinc-800 light-theme:border-zinc-300 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Cite (BibTeX)
                  </button>
                </div>

                {/* Expandable Citation panel */}
                {activeBibtex === idx && (
                  <div className="mt-4 p-3 rounded-lg bg-zinc-950 light-theme:bg-zinc-100 border border-zinc-900 light-theme:border-zinc-200 font-mono text-[11px] text-zinc-300 light-theme:text-zinc-700 overflow-x-auto relative animate-fade-in-up">
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(pub.bibtex);
                        alert("BibTeX copied to clipboard!");
                      }}
                      className="absolute top-2 right-2 px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 light-theme:bg-zinc-200 light-theme:hover:bg-zinc-300 text-[10px] font-sans text-zinc-400 hover:text-white transition-colors border border-zinc-800 light-theme:border-zinc-300 cursor-pointer"
                    >
                      Copy
                    </button>
                    <pre className="whitespace-pre-wrap">{pub.bibtex}</pre>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
