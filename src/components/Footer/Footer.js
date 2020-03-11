import React from "react";
import GmailLogo from "../../assets/images/gmail.svg";
import TwitterLogo from "../../assets//images/twitter.svg";
import GithubLogo from "../../assets/images/github.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="Contacts" className="Footer">
      <h1>Get In Touch</h1>
      <p>
        Let's grab a drink to find out if I can be of any help to you. Please
        don't hesitate to contact me by email. Or reach out to me on LinkedIn.
      </p>
      <ul>
        <li className="zoom">
          <a
            href="https://www.linkedin.com/in/selchuk-karakus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
        </li>
        <li className="zoom">
          <a href="https://github.com/Selchuck" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="github logo" />
          </a>
        </li>
        <li className="zoom">
          <a href="https://twitter.com/KarakusSelchuk" target="_blank" rel="noopener noreferrer">
            <img src={TwitterLogo} alt="twitter logo" />
          </a>
        </li>
        <li className="zoom">
          <a href="mailto:selchuk.karakus@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={GmailLogo} alt="gmail logo" />
          </a>
        </li>
      </ul>
      <small>
        &copy; Copyright 2020, Selchuk Karakus @ www.selchuk-karakus.now.sh
      </small>
    </footer>
  );
}

export default Footer;
