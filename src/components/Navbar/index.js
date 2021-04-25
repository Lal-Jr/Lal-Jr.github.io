import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { NavItem, NavLogo, NavMenu, NavBar, Hamburger } from './Navbar.styles.jsx';

function Navbar({ toggle }) {
    const [,setClick] = useState(false);

    const closeMenu = () => setClick(false);

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= window.innerHeight){
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
 
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <NavBar scrollNav={scrollNav}>
                <NavLogo onClick={toggleHome}>
                    <h1>LALJR</h1>
                </NavLogo>
                <NavMenu>
                    <NavItem onClick={toggleHome}>
                        Home
                    </NavItem>
                    <NavItem 
                        activeClassName='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                        onClick={closeMenu}
                    >
                        About Us
                    </NavItem>
                    <NavItem
                        activeClassName='active'
                        to='work'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                        onClick={closeMenu}
                    >
                        My Works
                    </NavItem>
                    <NavItem
                        activeClassName='active'
                        to='contact'
                        spy={true}
                        smooth={true} 
                        offset={0}
                        duration={800}
                        onClick={closeMenu}
                    >
                        Contact Me
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