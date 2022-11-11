import React from "react";
import "./projects.css";
import ClickMe from "../../assets/images/clickMe.svg";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div id="Projects" className="Projects">
      <h1>My Projects</h1>
      <section className="project-container">
        {projectsData.map((project, index) => (
          <div key={index} className="item">
            <img src={project.imgUrl} alt="logo of project" />
            <div className="overlay">
              <h1>{project.tittle}</h1>
              <p className="project-paragraph">{project.description}</p>
              <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
                <p>
                  <img
                  className="animated pulse delay-2s clickMe"
                  src={ClickMe}
                  alt="arrow pointing down"
                  />
                  View Project
                </p>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
