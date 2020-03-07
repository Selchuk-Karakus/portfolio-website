import React from "react";
import "./Header.css";
import ScrollDown from "../../assets/images/scrollDown.svg";

class Header extends React.Component {
  
  handleScroll = e => {
    let style = 'visible'
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      style={display: "none"}
    }
  }

  render() {
    return (
      <header id="Home" className="container">
        <h1 className="header">Selchuk Karakus</h1>
        <div className="intro">
          <p className="animated slideInLeft delay-1s slow">
            Website & Portfolio of a Software Developer | London-based
          </p>
        </div>
        <div onScroll={this.handleScroll} className="scroll-down animated bounce slower infinite">
          <a href="#About">
            <img src={ScrollDown} alt="arrow pointing down" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
