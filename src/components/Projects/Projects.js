import React from "react";
import "./projects.css";
import ClickMe from "../images/clickMe.svg";

function Projects() {
  return (
    <div id="Projects" className="Projects">
      <h1>My Projects</h1>
      <section className="project-container">
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo of kodflix"
          />
          <div className="overlay">
            <h1>KodFlix</h1>
            <p>
              A Netflix like platform of some of my favourite TV shows, built
              using JavaScript, ReactJs, Node, Express and MongoDB.
            </p>
            <a href="http://kodflix-kodiri.herokuapp.com/" target="_blank">
              <img
                className="animated flash delay-2s clickMe"
                src={ClickMe}
                alt="arrow pointing down"
              />
            </a>
          </div>
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1546622891-02c72c1537b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo of pub crawl"
          />
          <div className="overlay">
            <h1>Pub Crawl</h1>
            <p>
              A web-page that generates a pub crawl built with Ruby on Rails,
              Mapbox, JavaScript and Google Place’s API done over the final two
              weeks of Le Wagon.
            </p>
            <a href="http://www.randomcheers.com/" target="_blank">
              <img className="animated flash delay-2s clickMe" src={ClickMe} />
            </a>
          </div>
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo of robofriends"
          />
          <div className="overlay">
            <h1>Robo Friends</h1>
            <p>
              A single page application where the user can search for robot
              friends among all. Created with HTML5, CSS3, JavaScript, React,
              Redux, tachyons, robohash API and jsonplaceholder API.
            </p>
            <a
              href="https://reverent-allen-d1e546.netlify.com/"
              target="_blank"
            >
              <img className="animated flash delay-2s clickMe" src={ClickMe} />
            </a>
          </div>
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo of zappa rentals"
          />
          <div className="overlay">
            <h1>Zappa Rentals</h1>
            <p>
              A web-page that generates a pub crawl built with Ruby on Rails,
              Mapbox, JavaScript and Google Place’s API done over the final two
              weeks of Le Wagon.
            </p>
            <a href="http://airbnb-maxlongbao.herokuapp.com/" target="_blank">
              <img className="animated flash delay-2s clickMe" src={ClickMe} />
            </a>
          </div>
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo of we pair"
          />
          <div className="overlay">
            <h1>We-Pair</h1>
            <p>
              An on going joint project working with four others at KODIRI. An
              app which brings those together who want to find someone who wants
              to do the same thing as them for the same purpose - learn
              programming or improve and develop their current programming
              skills by pair programming.
            </p>
            <a href="http://we-pair.herokuapp.com/" target="_blank">
              <img className="animated flash delay-2s clickMe" src={ClickMe} />
            </a>
          </div>
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo of analog clock"
          />
          <div className="overlay">
            <h1>Analog Clock</h1>
            <p>A analog clock created using pure JavaScript.</p>
            <a href="https://silly-spence-036a7d.netlify.com/" target="_blank">
              <img className="animated flash delay-2s clickMe" src={ClickMe} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
