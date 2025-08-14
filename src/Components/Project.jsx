import React from 'react';
import Project_data from './Data/Project-data';

export default function Project({viewedSection}) {
    const projectElements = Project_data.map((project) => (
        <div key={project.id} className="project--card">
            <div className="project--image-container">
                <a href={project.link} className="project--link" target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} className='project--image'/>
                </a>
            </div>
            <div className="project--info">
                <h2 className="project--title">{project.title}</h2>
                <p className="project--description">{project.description}</p>
                <div className="project--tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project--tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    ));
    return (
        <section className="projects animate-fade-in-up" id='projects'>
            <h1 className='project-title'>My Projects</h1>
            <div className="project--list">
                {projectElements}
            </div>
        </section>
    )}