import {useState, useEffect} from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
    const [activeSection, setActiveSection] = useState('home');

  // useEffect to set up the IntersectionObserver
  useEffect(() => {
    // Options for the IntersectionObserver
    const options = {
      root: null, // The viewport
      rootMargin: '0px',
      threshold: 0.15, // 10% of the section must be visible to be considered active
    };

    // Find all sections and observe each element
    const sections = ['home', 'about', 'skills', 'projects', 'contact'].map(id => document.getElementById(id));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the section is intersecting the viewport, set it as the active section
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('is-visible');
      
          if (entry.target.id === 'home') {
              // Remove is-visible from all sections when navigating back to home
              sections.forEach(section => {
                  if (section.id !== 'home') {
                      section.classList.remove('is-visible');
                  }
              });
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount


  return (
    <div className="portfolio-app">
      <Sidebar sessionID={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <footer>Copyright © 2025 Kryptune - All Rights Reserved</footer>
      </div>
    </div>
  )
}

export default App

