import React from 'react';
import links from './Data/Links';
import { useWindowSize } from 'react-use';

export default function Sidebar({sessionID, setActiveSection, setViewedSections}) {

    const { width } = useWindowSize()
      // Function to handle smooth scrolling when a sidebar link is clicked
      const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update the active section state immediately to give visual feedback
          setActiveSection(id);
          setViewedSections(prev => prev.includes(id) ? prev : [...prev, id]);
        }
      };
    const linkElements = links.map((link) => (
        <div key={link.title} onClick={() => handleScrollToSection(link.id)} className={`sidebar--link ${sessionID === link.id ? "active-title" : ""}`}>
            <span className={`sidebar--icon ${sessionID === link.id ? "active-icon" : ""}`}><i className={link.icon} ></i></span>
            <span className="sidebar--link--title">{width > 768 ? link.title: ""}</span>
        </div>
    )); 
    return (
        <div className={width > 768 ? 'sidebar' : "navbar"}>
            <img className='sidebar--title' src="/kryptune-icon.PNG" alt="Kryptune Icon" />
            <div className={width < 768 ? 'navbar-links' : "sidebar-links"}>   
                {linkElements}
            </div>
        </div>
    );
}

