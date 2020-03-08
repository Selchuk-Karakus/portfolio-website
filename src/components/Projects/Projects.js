import React from "react";
import "./projects.css";
import ClickMe from "../../assets/images/clickMe.svg";
import "./projectsData";
import projectsData from "./projectsData";

function Projects({ project }) {
  return (
    <div id="Projects" className="Projects">
      <h1>My Projects</h1>
      <section className="project-container">
        {projectsData.map(project => (
          <div key={projectsData.tittle} className="item">
            <img src={project.imgUrl} alt="logo of project" />
            <div className="overlay">
              <h1>{project.tittle}</h1>
              <p>{project.description}</p>
              <a href={project.linkUrl} target="_blank">
                <img
                  className="animated pulse delay-1s clickMe"
                  src={ClickMe}
                  alt="arrow pointing down"
                />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
