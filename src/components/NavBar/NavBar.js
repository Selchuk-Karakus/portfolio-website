import React from "react";
import "./NavBar.css";


function NavBar() {
  return ( 
      <nav className="navbar navbar-navigation">
        <div className="navbar-logo"><a href="#Home">SK</a></div>
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
    