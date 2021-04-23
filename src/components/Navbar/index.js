import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
// import { Link as LinkS } from 'react-scroll';
import { NavItem, NavLinks, NavLogo, NavMenu, NavBar, Hamburger } from './Navbar.styles.jsx';

function Navbar({ toggle }) {
    const [, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const [scrollNav, setScrollNav] = useState(false);

    // const changeNav = () => {
    //     if (window.scrollY >= 80){
    //         setScrollNav(true);
    //     }
    //     else {
    //         setScrollNav(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav);
    // }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <NavBar scrollNav={scrollNav}>
                <NavLogo to='/Portfolio-Website/'>
                    <h1>LALJR</h1>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks onClick={toggleHome}>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='/'
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='/'
                            onClick={closeMobileMenu}
                        >
                            Works
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='/'
                            onClick={closeMobileMenu}
                        >
                            Contact Me
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <Hamburger onClick={toggle}>
                    <FaBars />
                </Hamburger>
            </NavBar>
        </>
    );
}

export default Navbar;