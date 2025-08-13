import React from 'react';

export default function AboutMe({viewedSection}) {
    return (
        <section className={`about-me ${viewedSection.includes("about") ? "animate-fade-in-up" : ""} `} id="about">
            <h2 className="about-me-title">About Me</h2>
            <p className="about-me-description">
                I’m Rolando De La Torre, a detail-oriented software developer passionate about building efficient, 
                scalable, and user-friendly web applications. Skilled in React.js, JavaScript, HTML/CSS, and Python, 
                I strive to create seamless experiences that delight users while continuously sharpening my skills.
            </p>
            <div className="about-me-content">
                <div className="about-me-education">
                    <h3 className="about-me--title"> <i className="fa-solid fa-graduation-cap">   </i> Education </h3>
                    <h4 className="about-me-education-degree"> Bachelor of Science in Electronics Engineering (BSECE) </h4>
                    <p className="about-me-education-institution"> Bicol State College of Applied Sciences and Technology (BISCAST) </p>
                    <p className="about-me-education-year"> 2015-2020 </p>
                    <p className="about-me-education-award"> Academic Distinction Award with GWA 1.67 </p>
                </div>
                <div className="about-me-experience">
                    <h3 className="about-me--title"> <i className="fa-solid fa-user-tie">   </i> Experience </h3>
                    <h4 className="about-me-experience-role"> Application Technical Support | DevOps </h4>
                    <p className="about-me-experience-company"> ACCENTURE </p>
                    <p className="about-me-experience-duration"> 2021 - 2024 </p>
                </div>
            </div>
        </section>
    )      
}