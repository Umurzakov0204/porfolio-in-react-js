import React from "react";
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return(
        <>
            <header>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </nav>
            </header>
        </>
    );
}

export default Header;