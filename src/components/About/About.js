import React from 'react';
import './About.css';

function About() {
    return (
        <div id='About'>
            <main className='About'>
                <h1>About Me</h1>
                <section>
                    <p>
                        I'm interested in I.T and everything it orbits! A graduate of KODIRI, 
                        a bootcamp teaching <strong>Full-Stack Developer</strong> focusing primarirly
                        on <strong>JavaScript</strong>, <strong>React</strong>, <strong>NodeJs</strong>,
                        <strong>ExpressJS</strong> and <strong>MongoDB</strong>.
                    </p>
                    <hr />
                    <p>
                        Before my devotion to computer programming,
                        I did years of professional work in hospitality industry where 
                        I’ve picked up key skills including <strong>communication</strong>, <strong>teamwork</strong> and <strong>customer service</strong>.
                    </p>
                    <hr />
                    <p>
                        I'm now exploring various roles in software development looking
                        to make tech industry a home.
                    </p>
                    <hr />
                    <p>
                        As a career changer I believe I am abnormaly driven with a frightening big appetite,
                        and now want to join a team to build exciting,
                        elegant and responsive website's and applications for any sector
                        where good user-friendly design makes a difference!
                    </p>
                </section>
            </main>
        </div>
    );
}

export default About;