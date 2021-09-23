import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, NavMobileIcon, NavMenu, NavItem, NavLinks, NavButton, BtnLinks  } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Kalani.</NavLogo>
                <NavMobileIcon onClick={toggle}>
                    <FaBars/>
                </NavMobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-10}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="service" smooth={true} duration={500} spy={true} exact='true' offset={-10}>Service</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu" smooth={true} duration={500} spy={true} exact='true' offset={-10}>Menu</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavButton>
                    <BtnLinks to="/signin" >Sign In</BtnLinks>
                </NavButton>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
