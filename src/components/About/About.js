import React from 'react';
import './About.css';
import jsLogo from '../../assets/images/js.svg';
import computerLogo from '../../assets/images/computer.svg';
import teamLogo from '../../assets/images/team.svg';
import transferLogo from '../../assets/images/transfer.svg';
import reactLogo from '../../assets/images/react.svg';

function About() {
    return (
        <div id='About'>
            <main className='About'>
                <h1>About Me</h1>
                <section>
                    <p>
                        I'm interested in I.T and everything it orbits! A graduate of KODIRI 
                        a bootcamp teaching <strong>Full-Stack Development</strong> focusing primarily
                        on <strong>JavaScript</strong>, <strong>React</strong>, <strong>NodeJs</strong>,
                        <strong> ExpressJS</strong> and <strong>MongoDB</strong>.
                    </p>
                    <img className="aboutLogo" src={jsLogo} alt="js logo"/>
                    <img className="aboutLogo" src={reactLogo} alt="react logo"/>
                    <hr />
                    <p>
                        Before my devotion to computer programming,
                        I did years of professional work in the hospitality industry where 
                        I’ve picked up key skills including <strong>communication</strong>, <strong>teamwork</strong> and <strong>customer service</strong>.
                    </p>
                    <img src={teamLogo} alt="team logo"/>
                    <hr />
                    <p>
                        I'm now exploring various roles in software development looking
                        to make tech industry a home.
                    </p>
                    <img src={computerLogo} alt="computer logo"/>
                    <hr />
                    <p>
                        As a career changer I believe I am abnormally driven with a frightening big appetite,
                        and now want to join a team to build exciting,
                        elegant and <strong>responsive</strong> website's and applications for any sector
                        where good <strong>user-friendly</strong> design makes a difference!
                    </p>
                    <img src={transferLogo} alt="transfer logo"/>
                </section>
            </main>
        </div>
    );
}

export default About;