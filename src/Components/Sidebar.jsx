import React from 'react';
import links from './Data/Links';
import { useWindowSize } from 'react-use';

export default function Sidebar({sessionID, setActiveSection}) {

    const { width } = useWindowSize()
      // Function to handle smooth scrolling when a sidebar link is clicked
      const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update the active section state immediately to give visual feedback
          setActiveSection(id);
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
            <div className='sidebar-social-links'>
               <a href="https://github.com/kryptune" target="_blank" rel="noopener noreferrer" className='contact-social-github' aria-label='GitHub'>
                   <i className="fa-brands fa-github side-icon"></i>
               </a>
               <a href="https://www.linkedin.com/in/rolando-de-la-torre-030387358/" target="_blank" rel="noopener noreferrer" className='contact-social-linkedin' aria-label='LinkedIn'>
                   <i className="fa-brands fa-linkedin side-icon"></i>
               </a>
               <a href="mailto:rolandodelatorre01@gmail.com" className='contact-info-email' aria-label='Contact Email'>
                   <i className="fa-solid fa-envelope side-icon"></i>
               </a>
            </div>
        </div>
    );
}

