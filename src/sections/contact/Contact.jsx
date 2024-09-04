import React from 'react';
import './contact.css';
import socials from './socials';

const Contact = () => {
    return (
        <div className='Contact'>
            <div className="social-icons">
                {
                    socials.map((item, index) => (
                        <a href={item.link} className="social" key={index} >
                            {item.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default Contact;
