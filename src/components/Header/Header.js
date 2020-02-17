import React from "react";
import "./Header.css";
import ScrollDown from "../images/scrollDown.svg";


function Header() { 
  return (
    <header id='Home' className="container">
        <h1 className="header">Selchuk Karakus</h1>
          <div className="intro">
              <p className='animated fadeInLeftBig delay-1s'>Website &
               Portfolio of a Software Developer | London-based</p>
          </div>
          <div className="scroll-down animated bounce delay-2s">
            <img src={ScrollDown}/>
          </div>
    </header>
  );
} 

export default Header