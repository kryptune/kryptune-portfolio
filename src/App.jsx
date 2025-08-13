import {useState, useEffect} from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [viewedSections, setViewedSections] = useState([]);

  // useEffect to set up the IntersectionObserver
  useEffect(() => {
    // Options for the IntersectionObserver
    const options = {
      root: null, // The viewport
      rootMargin: '0px',
      threshold: 0.3, // 30% of the section must be visible to be considered active
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the section is intersecting the viewport, set it as the active section
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setViewedSections(prev => prev.includes(entry.target.id) ? prev : [...prev, entry.target.id]);
          if (entry.target.id === "home"){
            setViewedSections([])
          }
        }
      });
    }, options);

    // Find all sections and observe each element
    const sections = ['home', 'about', 'skills', 'projects', 'contact'].map(id => document.getElementById(id));
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
      <Sidebar sessionID={activeSection} setActiveSection={setActiveSection} setViewedSections={setViewedSections} />
      <div className="main-content">
        <Home />
        <AboutMe viewedSection={viewedSections} />
        <Skills viewedSection={viewedSections} />
        <Projects viewedSection={viewedSections} />
        <Contact viewedSection={viewedSections} />
      </div>
    </div>
  )
}

export default App

