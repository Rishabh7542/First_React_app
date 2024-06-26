// src/components/NavBar/NavBar.js
import React from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItem';

const NavBar = () => {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' }
    ];
    return (
        <nav className="navbar">
            <div className="navbar__logo">MyWebsite</div>
            <ul className="navbar__links">
                {links.map((link, index) => (
                    <NavBarItem key={index} link={link} />
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
