import React from "react";
import "./projects.css";
import ClickMe from "../../assets/images/clickMe.svg";

function Projects({projectList}) {
  console.log(projectList);
  return (
    <div id="Projects" className="Projects">
      <h1>My Projects</h1>
      <section className="project-container">
        {projectList.map((project, index) => (
          <div key={index} className="item">
            <img src={project.imgUrl} alt="logo of kodflix" />
            <div className="overlay">
              <h1>{project.tittle}</h1>
              <p>{project.description}</p>
              <a href={project.linkUrl} target="_blank">
                <img
                  className="animated flash delay-2s clickMe"
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
