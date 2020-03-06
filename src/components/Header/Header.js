import React from "react";
import "./Header.css";
import ScrollDown from "../../assets/images/scrollDown.svg";

function Header() { 
  return (
    <header id='Home' className="container">
        <h1 className="header">Selchuk Karakus</h1>
          <div className="intro">
              <p className='animated slideInLeft delay-1s slow'>Website &
               Portfolio of a Software Developer | London-based</p>
          </div>
          <div className="scroll-down animated bounce slower infinite">
            <img src={ScrollDown} alt="arrow pointing down"/>
          </div>
    </header>
  );
} 

export default Header