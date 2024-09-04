import React from 'react';
import './projects.css';
import projectsList from './projectsList';
import ProjectCard from '../../components/project-card/ProjectCard.jsx';

const Projects = () => {
    return (
        <div className='Projects'>
            <div className="heading">
                Projects
            </div>

            <div className="project-cards">
                {
                    projectsList.map((item, index) => (
                        <div className="project-card" key={index}>
                            <ProjectCard
                                img={item.img}
                                title={item.projectName}
                                desc={item.projectDesc}
                                live={item.liveLink}
                                srcCode={item.srcCodeLink}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;
