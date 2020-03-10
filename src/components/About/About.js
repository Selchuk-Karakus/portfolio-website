import React from "react";
import "./about.css";
import jsLogo from "../../assets/images/js.svg";
import computerLogo from "../../assets/images/computer.svg";
import teamLogo from "../../assets/images/team.svg";
import transferLogo from "../../assets/images/transfer.svg";
import reactLogo from "../../assets/images/react.svg";

function About() {
  return (
    <div id="About">
      <main className="About">
        <h1>About Me</h1>
        <section>
          <p>
            I'm interested in I.T and everything it orbits! An aspiring
            <strong> Software Developer</strong> focusing primarily on{" "}
            <strong>JavaScript</strong>, <strong>React</strong>,{" "}
            <strong>NodeJs</strong>,<strong> ExpressJS</strong> and{" "}
            <strong>MongoDB</strong>. And, besides "CODE", I cant think of
            anything better than being outdoors or travelling. People interest
            me, getting to know people and spending time to understand other
            cultures and their customs make me feel good. I also enjoy drinking
            scotch and anything that tastes like it, reading books and listening
            to 60's and 70's rock makes me feel alive. And, of course struming a
            guitar.
          </p>
          <img className="aboutLogo" src={jsLogo} alt="js logo" />
          <img className="aboutLogo" src={reactLogo} alt="react logo" />
          <hr />
          <p>
            Before my devotion to computer programming, I did years of
            professional work in the hospitality industry where I’ve picked up
            key skills including <strong>communication</strong>,{" "}
            <strong>teamwork</strong> and <strong>customer service</strong>.
          </p>
          <img src={teamLogo} alt="team logo" />
          <hr />
          <p>
            I'm now exploring various roles in software development looking to
            make tech industry a home.
          </p>
          <img src={computerLogo} alt="computer logo" />
          <hr />
          <p>
            As a career changer I believe I am abnormally driven with a
            frightening big appetite, and I'm looking forward to strengthening
            my development skills in a team environment, while bringing what
            skills I have to the table. Can't wait to build exciting, elegant
            and <strong>responsive</strong> website's and applications and
            differ!
          </p>
          <img src={transferLogo} alt="transfer logo" />
        </section>
      </main>
    </div>
  );
}

export default About;
