import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* <div className="navbar-logo">
                        <Link to="home" smooth={true} duration={500}>
                            MyPortfolio
                        </Link>
                    </div> */}
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="about" smooth={true} duration={500} className="navbar-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="skills" smooth={true} duration={500} className="navbar-link">Skills</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="projects" smooth={true} duration={500} className="navbar-link">Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="contact" smooth={true} duration={500} className="navbar-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
