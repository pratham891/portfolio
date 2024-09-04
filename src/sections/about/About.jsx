import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='About'>
            <div className="about-heading">
                <p>Hey, I'm Pratham Singh</p>
            </div>

            <div className="about-desc">
                <p>Passionate about technology and innovation, I am a Software Engineer dedicated to exploring new tools and techniques to enhance my skills and deliver impactful results.</p>
            </div>

            <div className="about-options">
                <a href="https://www.linkedin.com/in/pratham-singh-596591203/" className="hire-me">
                    Hire Me
                </a>

                <a href="https://bit.ly/pratham-singh-resume" className="downloa-cv">
                    My CV
                </a>
            </div>
        </div>
    );
}

export default About;
