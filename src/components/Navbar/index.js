import React from 'react';
// import { NavLink } from 'react-router-dom';
import {Nav, NavbarContainter, NavLogo, MobileIcon ,NavMenu, NavItem, NavLinks} from "./NavbarElements";
// import {FaBars} from 'react-icons/fa'
// MobileIcon ,NavMenu, NavItem, NavLinks
const Navbar = () => {
  return (
    <>
    <Nav>
        <NavbarContainter>
            <NavLogo to = "/">
                Electric Ledger

            </NavLogo>
            <MobileIcon>
              {/* <FaBars   /> */}
            </MobileIcon>
            
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>
                  About
                </NavLinks>
              </NavItem>


            </NavMenu>

        </NavbarContainter>

    </Nav>
    
    </>
  );
};

export default Navbar;