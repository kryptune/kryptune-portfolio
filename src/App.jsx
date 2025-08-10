import React from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <Sidebar />
      <div className="main-content">
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
