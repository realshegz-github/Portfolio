import React, { useState } from "react";
// import { GiOverInfinity } from "react-icons/gi";
import {
  Nav,
  NavMenu,
  NavLink,
  Bars,
  NavLogo,
  Close,
  DivIcon,
} from "./NavbarElement";

const Navbar = () => {
  const [active, setActive] = useState(false);
  function showMenu() {
    setActive(!active);
  }

  return (
    <>
      <Nav className={active ? "nav-active" : "navbar"}>
        <NavLogo to="/" activeStyle>
          Dev~up
        </NavLogo>

        <DivIcon className="changer">
          <Bars className="menu" onClick={showMenu} />
          <Close className="closeMenu" onClick={showMenu} />
        </DivIcon>

        <NavMenu>
          <NavLink href="#about" activeStyle>
            <p>About</p>
          </NavLink>
          <NavLink href="#services" activeStyle>
            <p>Services</p>
          </NavLink>
          <NavLink
            href="https://test-phasecurve-web.azurewebsites.net/"
            activeStyle
          >
            <p>Project</p>
          </NavLink>
          <NavLink href="#contact" activeStyle>
            <p>Contact</p>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
