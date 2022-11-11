import React from "react";
import "./about.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNodeDotJs } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaGit } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

const About = () => {
  return (
    <div id="About">
      <main className="About">
        <h1>About Me</h1>
        <article>
          <section>
            <p>
              During COVID-19 lockdown, I decided to focus my efforts on
              teaching myself how to code to a professional level. This idea
              came about coincidently, taking the advice of a stranger who had
              dined as a guest at the restaurant I was managing not long before
              we got hit - this sparked my interest in programming.
            </p>
            <p>
              It didn't take long before I realised the value of putting myself
              out there, asking loads of questions to professional developers,
              and adopting a headfirst learning approach. Less than a year ago,
              I found a community with a great support network through
              CodeYourFuture, where I did an eight-month, part-time Software
              Developer program. I was surrounded by self-motivated, highly
              driven co-trainees daily in a family-like environment supported by
              volunteers from the tech industry who where there to help us turn
              our dreams into reality.
            </p>
            <p>
              In this eight months part-time training I would be covering a
              broad range of software development skills (
              <strong>P.E.R.N Stack</strong>) and methodologies (
              <strong>Agile</strong>) and put them into practice on a final team
              project during the last month of the program, day after day, week
              after week at CodeYourFuture.
            </p>
            <p>
              Throughout the journey I have gained valuable skills which I hope
              will transform me into a<strong> Full Stack Developer</strong>. I
              have a real passion for code. And, I want to pursue my passion and
              let it take me as far as it can go in a sector driven by life
              extended education model where curiosity, creativity and
              problem-solving are nurtured and rewarded.
            </p>
            <p>
              It is this cycle of transparent knowledge-sharing and the
              excitement of never being short of learning a new skill, a new way
              to write code that made me feel at home in the CodeYourFuture
              community and I feel ready to turn this into a lifelong career -
              I’m interested in organisations that share my enthusiasm for
              developing high-quality products and that will help me grow as a
              developer with code reviews and peer support.
            </p>
          </section>
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
            <SiNodeDotJs size="70px" className="aboutLogo" />
            <FiGithub size="70px" className="aboutLogo" />
            <FaGit size="70px" className="aboutLogo" />
            <SiVisualstudiocode size="70px" className="aboutLogo" />
          </div>
        </article>
      </main>
    </div>
  );
};

export default About;
