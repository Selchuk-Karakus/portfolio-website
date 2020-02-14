import React from 'react';
import GmailLogo from '../images/gmail.svg';
import TwitterLogo from '../images/twitter.svg';
import GithubLogo from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import './Footer.css';

function Footer() {
    return (
        <footer id='Contacts' className='Footer'>
            <h2>Get In Touch</h2>
            <p>Let's grab a drink to find out if I can be of any help to you. 
                Please don't hesitate to contact me by email.
                 Or reach out to me on: LinkedIn.</p>
            <ul>
                <li className='zoom'><a href='https://www.linkedin.com/in/selchuk-karakus/' target='_blank'><img src={LinkedIn} /></a></li>
                <li className='zoom'><a href='https://github.com/Selchuck' target='_blank'><img src={GithubLogo} /></a></li>
                <li className='zoom'><a href='https://twitter.com/KarakusSelchuk' target='_blank'><img src={TwitterLogo} /></a></li>
                <li className='zoom'><a href='mailto:selchuk.karakus@gmail.com' target='_blank'><img src={GmailLogo} /></a></li>
            </ul>
        </footer>
    )   
}

export default Footer;