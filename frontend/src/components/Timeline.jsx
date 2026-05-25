import React from 'react';
import { profileData } from '../data/profileData';

export default function Timeline() {
  const { education } = profileData;

  const milestones = [
    {
      year: "Aug 2023 - May 2027",
      title: "B.E. in Computer Engineering",
      org: "Don Bosco Institute of Technology (DBIT) | Mumbai University",
      desc: "Currently pursuing under graduation. Rigorous courses in Data Structures & Algorithms, OOPs, Database Internals, and Computer Networks. Averaging a strong academic CGPA of 8.6.",
      badge: "Degree Program"
    },
    {
      year: "Feb 2024",
      title: "Winner of 3rd Prize - Innoquest 2024",
      org: "Hosted at Don Bosco Institute of Technology",
      desc: "Developed and presented 'AttendEase', a custom school attendance management system integrated with lesson plan course mappings. Placed 3rd out of dozens of academic technical submissions.",
      badge: "Award Placement"
    },
    {
      year: "April 2024",
      title: "Codethon Competitor",
      org: "Organized by Datta Meghe College, Thane",
      desc: "Competed in speed-coding rounds, optimizing complex programming challenges in C++ under aggressive execution timeframes.",
      badge: "Speed Contest"
    }
  ];

  return (
    <section id="timeline" className="relative py-20 overflow-hidden bg-zinc-950/30 light-theme:bg-zinc-50/50 border-t border-b border-zinc-900 light-theme:border-zinc-200">
      
      {/* Visual glowing ring */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light-theme:text-zinc-900 font-heading">
            Academic <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 light-theme:text-zinc-500 mt-4 leading-relaxed">
            A chronological timeline of my educational credentials, hackathon participations, and academic coding milestones.
          </p>
        </div>

        {/* Unified Centered Timeline */}
        <div className="max-w-3xl mx-auto relative border-l border-zinc-800 light-theme:border-zinc-200 pl-6 sm:pl-8 space-y-12 ml-4 sm:ml-auto">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group text-left">
              
              {/* Timeline marker node */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 light-theme:bg-white border-2 border-violet-500 group-hover:bg-violet-400 transition-colors shadow-md"></span>

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm hover:border-violet-500/30 light-theme:hover:border-violet-400/30 transition-all duration-300">
                
                {/* Meta details row */}
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <span className="text-xs font-semibold text-violet-400 light-theme:text-violet-600 font-mono">
                    {item.year}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900 light-theme:bg-zinc-100 border border-zinc-800 light-theme:border-zinc-250 text-zinc-500 light-theme:text-zinc-650 text-[10px] font-mono font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg sm:text-xl font-bold text-white light-theme:text-zinc-900 font-heading">
                  {item.title}
                </h4>

                {/* Organization */}
                <p className="text-xs sm:text-sm font-semibold text-zinc-300 light-theme:text-zinc-750 mt-0.5 mb-3.5">
                  {item.org}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 light-theme:text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
