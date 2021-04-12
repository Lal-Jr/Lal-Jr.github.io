import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
// import { Link as LinkS } from 'react-scroll';
import { NavItem, NavLinks, NavLogo, NavMenu, NavBar, Hamburger } from './Navbar.styles.jsx';
// import Dropdown from '../Dropdown/index';
// import image from '../../images/ieeeheader.png';

function Navbar({ toggle }) {
    const [, setClick] = useState(false);

    // const [dropdown, setDropdown] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const [scrollNav, setScrollNav] = useState(false);

    // const onMouseEnter = () => {
    //     if (window.innerWidth < 900) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // };

    // const onMouseLeave = () => {
    //     if (window.innerWidth < 900) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //     }
    // };

    const changeNav = () => {
        if (window.scrollY >= 80){
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
                    <NavItem>
                        <NavLinks to='/' onClick={toggleHome}>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='/aboutus'
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='/team'
                            onClick={closeMobileMenu}
                        >
                            Team
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='/events'
                            onClick={closeMobileMenu}
                        >
                            Events
                        </NavLinks>
                    </NavItem>
                    {/* <NavItem
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <NavLinks
                            to='/'
                            onClick={closeMobileMenu}
                        >
                            More
                            <FaCaretDown />
                        </NavLinks>
                        {dropdown && <Dropdown />}
                    </NavItem> */}
                    <NavItem>
                        <NavLinks
                            to='/contactus'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
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