import React from 'react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 light-theme:bg-zinc-100 border-t border-zinc-900 light-theme:border-zinc-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-zinc-500 light-theme:text-zinc-600 text-sm font-medium">
          © {new Date().getFullYear()} {profileData.personal.name}. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 light-theme:bg-white 
                     hover:bg-zinc-800 light-theme:hover:bg-zinc-200 
                     border border-zinc-800 light-theme:border-zinc-300 
                     text-zinc-400 light-theme:text-zinc-700 
                     hover:text-white light-theme:hover:text-zinc-900 
                     transition-all duration-300 text-sm"
        >
          <span>↑</span> Back to Top
        </button>

      </div>
    </footer>
  );
}