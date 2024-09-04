import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='About' style={{ border: "1px solid #fff", marginTop: "50px" }}>
            <div className="about-heading">
                <p>Hey, I'm Pratham Singh</p>
            </div>

            <div className="about-desc">
                <p>I am a Software Engineer exploring about tech and opportunities.</p>
            </div>

            <div className="about-options">
                <div className="hire-me">
                    Hire Me
                </div>

                <div className="download-cv">
                    Download CV
                </div>
            </div>
        </div>
    );
}

export default About;
