// src/components/NavBar/NavBarItem.js
import React from 'react';

const NavBarItem = ({ link }) => {
    return (
        <li className="navbar__item">
            <a href={link.url} className="navbar__link">
                {link.name}
            </a>
        </li>
    );
};

export default NavBarItem;
