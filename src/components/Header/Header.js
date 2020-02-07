import React from "react";
import "./Header.css";
// import bubbles from "../images/bubbles.jpg"


function Header() { 
  return (
    <header id='Home' className="container">
        <h1 className="header">Selchuk Karakus</h1>
          <div className="intro">
              <p className='animated fadeInLeftBig delay-1s'>Website & Portfolio of a Software Developer | London-based</p>
          </div>
    </header>
  );
} 

export default Header