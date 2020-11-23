import React from "react";
import "./about.css";
import jsLogo from "../../assets/images/js.svg";
import cssLogo from "../../assets/images/css.svg";
import reduxLogo from "../../assets/images/redux.svg";
import reactLogo from "../../assets/images/react.svg";
import htmlLogo from "../../assets/images/html5.svg";

const About = () => {
  return (
    <div id="About">
      <main className="About">
        <h1>About Me</h1>
        <section>
          <p>
            I'm interested in I.T and everything it orbits! I'm a 
            <strong> Front-end Developer</strong> focusing primarily on{" "}
            <strong>HTML5</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React</strong>,{" "}and{" "}
            <strong>Redux</strong>. I have a real passion
            for code and hope to bridge my developer-designer sides in
            the future and transform my self into a Full-Stack Developer. 
          </p>
          <img className="aboutLogo" src={htmlLogo} alt="html5 logo" />
          <img className="aboutLogo" src={cssLogo} alt="css logo" />
          <img className="aboutLogo" src={jsLogo} alt="js logo" />
          <img className="aboutLogo" src={reactLogo} alt="react logo" />
          <img className="aboutLogo" src={reduxLogo} alt="redux logo" />
          <hr />
          <p>
            Before my devotion to writing code, I did years of
            professional work in the hospitality industry where I’ve picked up
            key skills including <strong>communication</strong>,{" "}
            <strong>teamwork</strong> and <strong>customer service</strong>.
          </p>
          <hr />
          <p>
            I'm now exploring various roles in software development looking to
            brake into the tech industry.
          </p>
          <hr />
          <p>
            As a career changer I believe I am abnormally driven with a
            frightening big appetite, and I'm looking forward to strengthening
            my development skills in a team environment, while bringing what
            skills I have to the table. Can't wait to build exciting, elegant
            and <strong>responsive</strong> website's and applications!
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
