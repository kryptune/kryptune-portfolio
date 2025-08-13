import React from 'react';
import links from './Data/Links';
export default function Sidebar(props) {
    const linkElements = links.map((link) => (
        <a key={link.title} href={link.link} className={`sidebar--link ${props.sessionID === link.link.slice(1)? "active-title" : ""}`}>
            <span className={`sidebar--icon ${props.sessionID === link.link.slice(1)? "active-icon" : ""}`}><i className={link.icon} ></i></span>
            <span className="sidebar--link--title">{link.title}</span>
        </a>
    )); 
    return (
        <div className="sidebar">
            <img className='sidebar--title' src="/kryptune-icon.PNG" alt="Kryptune Icon" />
            {linkElements}
        </div>
    );
}

