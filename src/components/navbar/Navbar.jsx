import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarHeight = 70;

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={toggleNavbar}>
                        <FaBars />
                    </div>
                    <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                        <li className="navbar-item">
                            <Link to="about" smooth={true} duration={500} offset={-navbarHeight} className="navbar-link" onClick={toggleNavbar}>About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="skills" smooth={true} duration={500} offset={-navbarHeight} className="navbar-link" onClick={toggleNavbar}>Skills</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="projects" smooth={true} duration={500} offset={-navbarHeight} className="navbar-link" onClick={toggleNavbar}>Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="contact" smooth={true} duration={500} offset={-navbarHeight} className="navbar-link" onClick={toggleNavbar}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
