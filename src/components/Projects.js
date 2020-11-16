import React from "react";
import Tag from "./Tag";
import jh2 from "../assets/JH-computer.png";
import atm from "../assets/atm.png";
import chumleys from "../assets/chumleys.png";
import ensemble from "../assets/ensemble.png";
import recollect from "../assets/recollect.png";
import speedtype from "../assets/speedtype.png";

import "../styles/Projects.scss";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h4 className="title">projects</h4>
        <p className="subtitle">Other cool things I've worked on!</p>
      </div>
      <div className="all-projects">
        <div className="project-card">
          <h5>Speed Type</h5>
          <p>Single player speed typing game made with multiple levels.</p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"YouTube API"} />
          </div>
          <img src={speedtype} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>Recollect</h5>
          <p>Full stack inventory app for household essentials.</p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"YouTube API"} />
          </div>
          <img src={recollect} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>Ensemble</h5>
          <p>
            A full stack site for connecting with fellow students and
            instructors.
          </p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"YouTube API"} />
          </div>
          <img src={ensemble} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>Chumley's</h5>
          <p>
            Restaurant site redesign for local NYC eatery. Created through
            collaboration with UX designers.
          </p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"YouTube API"} />
          </div>
          <img src={chumleys} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>All Things Music</h5>
          <p>Popular music search engine using React and LastFM API</p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"YouTube API"} />
          </div>
          <img src={atm} alt="project screenshot" />
        </div>
      </div>
    </section>
  );
}
