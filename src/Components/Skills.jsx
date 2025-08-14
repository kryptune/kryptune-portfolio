import React from 'react';
import skillsData from './Data/Skills-data';

export default function Skills({viewedSection}) {
    const skillsElements = skillsData.map((skill) => (
        <div key={skill.id} className="skills--container">
                    <div key={skill.id} className="skills--category">{skill.name}</div>
                    <div className="skills--items"> 
                        {skill.skills.map((item, index) => (
                            <div key={index} className="skills--item">
                                <i className={skill.icons[index]}></i> {item}
                            </div>
                        ))}
                    </div>
                </div>
    )); 
    return (
        <section className="skills animate-fade-in-up" id="skills">
            <h1 className='skills-title'>My Skills</h1>
            <div className="skills--list">
                {skillsElements}
            </div>
        </section>
    );
}

