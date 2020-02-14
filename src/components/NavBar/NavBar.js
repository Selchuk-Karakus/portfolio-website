import React from "react";
import "./NavBar.css";
import Logo from '../images/logo.svg';


function NavBar() {
  return ( 
      <nav className="navbar navbar-navigation">
        <div className="navbar-logo"><a href="#Home"><img src={Logo}/></a></div>
        <div className='separator'></div>
        <div className="navbar-navigation-items">
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contacts">Contacts</a></li>
          </ul>
        </div>
      </nav>
  );
}

export default NavBar;
    