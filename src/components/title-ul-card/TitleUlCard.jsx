import React from 'react';
import './titleUlcard.css';

const TitleUlCard = ({ title, ulList }) => {
    return (
        <div className='titleUlCard'>
            <div className="title">
                <p>{title}</p>
            </div>

            <div className="ul-list">
                {
                    ulList.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
            </div>
        </div>
    );
}

export default TitleUlCard;
