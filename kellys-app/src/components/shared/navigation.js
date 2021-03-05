import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <header>
            <h3> <NavLink to="/">Kelly White</NavLink> </h3>
            <nav className="navigation" id="navigation">
                <ul>
                    <li> <NavLink to="/portfolio">PORTFOLIO</NavLink> </li>
                    <li> <NavLink to="/resume">RÉSUMÉ</NavLink> </li>
                    <li> <NavLink to="/contact">CONTACT</NavLink> </li>
                    <li> <NavLink to="/login">LOGIN</NavLink></li>
                </ul>
            </nav>
       </header>
    );
}
 
export default Navigation;