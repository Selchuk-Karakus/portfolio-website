import React from "react";
import "./navBar.css";
import Logo from "../../assets/images/logo.svg";
import NavBarMobile from "./NavBarMobile";
import NavBarDeskTop from "./NavBarDeskTop";

const NavBar = () => {
  return (
    <nav className="navbar navbar-navigation stroke">
      <div className="navbar-logo">
        <a href="#Home">
          <img src={Logo} alt="company logo" />
        </a>
      </div>
      <div className="separator"></div>
      <NavBarMobile />
      <NavBarDeskTop />
    </nav>
  );
};

export default NavBar;
