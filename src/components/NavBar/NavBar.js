import React from "react";
import "./NavBar.css";


const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div></div>
      <div className="navbar-logo"><a href="/">SK</a></div>
      <div className='separator'></div>
      <div className="navbar-navigation-items">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contacts</a></li>
        </ul>
      </div>
      <div></div>
      <div></div>
    </nav>
</header>
);

export default navbar;
    