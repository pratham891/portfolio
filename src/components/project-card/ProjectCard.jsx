import React from 'react';
import './projectCardStyle.css';

const ProjectCard = ({ img, title, desc, live, srcCode }) => {
    return (
        <div>
            <div className="img">
                <img src={img} alt="project-snap" />
            </div>

            <div className="title">
                <p>{title}</p>
            </div>

            <div className="desc">
                <p>{desc}</p>
            </div>

            <div className="links">
                <a href={live} className="live">Live</a>

                <a href={srcCode} className="live">Source Code</a>
            </div>
        </div>
    );
}

export default ProjectCard;
