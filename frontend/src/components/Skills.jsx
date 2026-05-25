import React from 'react';
import { profileData } from '../data/profileData';

export default function Skills() {
  const { skills } = profileData;

  const skillGroups = [
    { title: "Languages", data: skills.languages, color: "from-amber-500 to-orange-500" },
    { title: "Frameworks & Libraries", data: skills.frameworks, color: "from-cyan-500 to-blue-500" },
    { title: "Databases", data: skills.databases, color: "from-emerald-500 to-teal-500" },
    { title: "Core CS & Foundations", data: skills.concepts, color: "from-rose-500 to-pink-500" }
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full radial-glow-secondary opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light-theme:text-zinc-900 font-heading">
            Technical <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 light-theme:text-zinc-500 mt-4 leading-relaxed">
            My technology toolkit maps my strengths in full-stack MERN web engineering, backend frameworks, relational/NoSQL datastores, and algorithmic foundations.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-zinc-800/80 light-theme:border-zinc-200 shadow-sm hover:border-zinc-700/60 light-theme:hover:border-zinc-300 transition-all duration-300 group text-left"
            >
              <h3 className="text-lg font-bold text-white light-theme:text-zinc-900 mb-6 font-heading border-b border-zinc-900 light-theme:border-zinc-200 pb-3 flex items-center justify-between">
                <span>{group.title}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"></span>
              </h3>

              <div className="space-y-4">
                {group.data.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    
                    {/* Skill Info */}
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-zinc-350 light-theme:text-zinc-700 font-sans">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-zinc-500 light-theme:text-zinc-550">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-zinc-900 light-theme:bg-zinc-100 rounded-full overflow-hidden border border-zinc-950 light-theme:border-zinc-200">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${group.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
