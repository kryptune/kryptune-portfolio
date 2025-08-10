import React from 'react';
import links from './Data/Links';
export default function Sidebar() {
    const linkElements = links.map((link) => (
        <a key={link.title} href={link.link} className="sidebar--link">
            <span className='sidebar--icon'><i className={link.icon} ></i></span>
            <span className='sidebar--link--title'>{link.title}</span>
        </a>
    )); 
    return (
        <div className="sidebar">
            <img className='sidebar--title' src="/kryptune-icon.PNG" alt="Kryptune Icon" />
            {linkElements}
        </div>
    );
}