import React, { useState } from "react";
import {GiOverInfinity} from 'react-icons/gi';
import {Nav, NavMenu, NavLink, Bars, NavLogo, Close, DivIcon } from "./NavbarElement";



const Navbar =()=>{

    const[active, setActive] = useState(false)
    function showMenu(){
        setActive(!active)
    }

    return (
        <>
            <Nav className={active? 'nav-active':'navbar'}>
                 
                <NavLogo to="/" activeStyle>
                <GiOverInfinity/>
                  Dev~up
                </NavLogo>

                <DivIcon className="changer">
                        <Bars className="menu" onClick={showMenu}/>
                        <Close className="closeMenu" onClick={showMenu}/>
                </DivIcon>

                <NavMenu>
                        <NavLink to="/" activeStyle>
                            <p>Home</p>
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            <p>About</p>
                        </NavLink>
                        <NavLink to="/projects" activeStyle>
                            <p>Projects</p>
                        </NavLink>
                        <NavLink to="/contact" activeStyle>
                            <p>Contact</p>
                        </NavLink> 
                </NavMenu>
            </Nav>
        </>
    )
};

export default Navbar
