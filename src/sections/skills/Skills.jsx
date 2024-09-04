import React from 'react';
import './skills.css';
import TitleUlCard from '../../components/title-ul-card/TitleUlCard';
import skillset from './skillset.js';

const Skills = () => {
    return (
        <div className='skills' style={{ border: "1px solid #fff" }}>
            <div className="heading">
                Technical Skills
            </div>

            <div className="skill-cards">
                {
                    skillset.map((item, index) => (
                        <div className="skill-card" key={index}>
                            <TitleUlCard
                                title={item.domain}
                                ulList={item.skills}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;
