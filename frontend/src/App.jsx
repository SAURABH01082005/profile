import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Awards from './components/Awards';
import SchoolAchievements from './components/SchoolAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or default to dark mode (true)
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isDarkMode) {
      bodyClass.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      bodyClass.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Dynamic Navigation Bar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Container */}
      <main>
        {/* Hero Landing Page */}
        <Hero />

        {/* Portfolio Projects Grid Showcase */}
        <Projects />

        {/* Interactive Milestone & Education Timeline */}
        <Timeline />

        {/* Skills Competency Dashboard */}
        <Skills />

        {/* Honors & Achievements section */}
        <Awards />

        {/* High School Achievements section */}
        <SchoolAchievements />

        {/* validated Contact Page */}
        <Contact />

        
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}

export default App;
