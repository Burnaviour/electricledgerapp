import React from 'react';
// import { NavLink } from 'react-router-dom';
import {Nav, NavbarContainter, NavLogo,MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink,NavBtn,NavSVG} from "./NavbarElements";
import {FaBars} from 'react-icons/fa'
import HeroSection from '../HeroSection';
import svg from  '../../../src/assets/logo.svg';
 
// MobileIcon ,NavMenu,  NavLinks
const Navbar = () => {
  return (
    <>
    <Nav>
        <NavbarContainter>
            
            <NavLogo to = "/">
              <NavSVG>
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <image href={svg} height="50" width="50" />
              </svg>
              </NavSVG>
              Electric Ledger
                

            </NavLogo>


            <MobileIcon>
              <FaBars  />
            </MobileIcon>
            
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>
                  About
                </NavLinks>

                <NavLinks to='discover'>
                  Contact
                </NavLinks>

                <NavLinks to='register'>
                  Register
                </NavLinks>

                <NavLinks to='login'>
                  Login
                </NavLinks>
              </NavItem>


            </NavMenu>
            <NavBtn>

                <NavBtnLink to = "/login">Organization Login</NavBtnLink>

            </NavBtn>
        </NavbarContainter>
        

    </Nav>
    
    {/* <HeroSection/> */}
    </>
  );
};

export default Navbar;