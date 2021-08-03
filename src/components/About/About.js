import React from "react";
import "./about.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const About = () => {
  return (
    <div id="About">
      <main className="About">
        <h1>About Me</h1>
        <section>
          <p>
            In late December 2018, I decided to focus my efforts on teaching
            myself how to code to a professional level. This idea came about
            coincidently taking the advice of a stranger who had dined as a
            guest at the restaurant I was managing at the time - this is what
            sparked my interest in programming.
            <br />
            <br />
            It didn't take long before I realised the value of putting myself
            out there, asking loads of questions to professional developers, and
            adopting a headfirst learning approach. Less than a month later, I
            found a community with a great support network through Le Wagon, 9
            weeks Ruby and Ruby on Rails programme where I was surrounded by
            self-motivated, highly driven individuals on a daily basis.
            <br />
            <br />
            After the completion of the course at Le Wagon, I spent roughly 3
            months applying to jobs. And with no job offers on the table I had
            no choice but to go back into hospitality due to financial burden.
            There I was - feeding people once again. But I hadn't given up just
            yet. I would go back and study coding as soon as I had saved up some
            money.
            <br />
            <br />
            Fast forward to January 2020, I decided to go ahead with a 8 weeks
            programme where I would be covering a broad range of software
            development skills (<strong>M.E.R.N Stack</strong>) and
            methodologies (<strong>Agile</strong>) and put them into practice on
            a project, day after day, week after week at Kodiri, an inclusive
            learning environment.
            <br />
            <br />
            Throughout the journey I have gained valuable skills which I hope
            will transform me into a<strong> JavaScript Developer</strong>{" "}
            focusing primarily on <strong>HTML5</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React</strong>, and{" "}
            <strong>Redux</strong>. I have a real passion for code. Ultimately,
            I have no regrets about leaving hospitality and pursuing my ambition
            to be a software developer, in a sector driven by life long
            education model where curiosity and creativity are nurtured and
            rewarded is a breath of fresh air.
            <br />
            <br />
            It is this cycle of transparent knowledge sharing that made me feel
            at home in the tech world, and I'd love to join a company that
            values this.
          </p>

          <div className="tech-stack">
            <h2>Tech Stack</h2>
            <AiOutlineHtml5
              size="70px"
              className="aboutLogo"
              alt="html5 logo"
            />
            <RiCss3Fill size="70px" className="aboutLogo" alt="css logo" />
            <IoLogoJavascript size="70px" className="aboutLogo" alt="js logo" />
            <FaReact size="70px" className="aboutLogo" alt="react logo" />
            <SiRedux size="70px" className="aboutLogo" alt="redux logo" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
