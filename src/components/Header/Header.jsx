import React from "react";
import './Header.css'

const Header = () => {
    return(
        <>
            <header>
                <div className={'nav'}>
                    <li><a href={'#s'}>Home</a></li>
                    <li><a href={'#s'}>About me</a></li>
                    <li><a href={'#s'}>Projects</a></li>
                    <li><a href={'#s'}>Contact</a></li>
                </div>
            </header>
        </>
    );
}

export default Header;