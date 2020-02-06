import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer id='Contacts' className='Footer'>
            <h2>Get In Touch</h2>
            <p>Let's grab a drink to find out if I can be of any help to you. 
                Please don't hesitate to contact me by email.
                 Or reach out to me on: LinkedIn.</p>
            <ul>
                <li><a href='https://www.linkedin.com/in/selchuk-karakus/' target='_blank'>LinkedIn</a></li>
                <li><a href='https://github.com/Selchuck' target='_blank'>GitHub</a></li>
                <li><a href='https://twitter.com/KarakusSelchuk' target='_blank'>Twitter</a></li>
            </ul>
        </footer>
    )
}

export default Footer;