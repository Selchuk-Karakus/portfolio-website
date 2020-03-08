import React from "react";
import "./NavBar.css";
import Logo from '../../assets/images/logo.svg';

const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;
console.log('hello')
class NavBar extends React.Component {

  handleOnScroll(){
   
  }

  render () {
  return ( 
      <nav onScroll={this.handleOnScroll} className="navbar navbar-navigation stroke">
        <div className="navbar-logo"><a href="#Home"><img src={Logo} alt="company logo"/></a></div>
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
}

export default NavBar;
    