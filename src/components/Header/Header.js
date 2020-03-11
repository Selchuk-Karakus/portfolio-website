import React from "react";
import "./header.css";
import ScrollDown from "../../assets/images/scrollDown.svg";

const Header = () => {
  return (
    <header id="Home" className="container">
      <h1 className="header">Selchuk Karakus</h1>
      <div className="intro">
        <p className="animated slideInLeft delay-1s slow">
          Website & Portfolio of a Software Developer | London-based
        </p>
      </div>
      <div className="scroll-down animated bounce slower infinite">
        <a href="#About">
          <img src={ScrollDown} alt="arrow pointing down" />
        </a>
      </div>
    </header>
  );
}

export default Header;
