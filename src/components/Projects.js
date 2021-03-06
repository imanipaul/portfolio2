import React, { useEffect, useRef } from "react";
import Tag from "./Tag";
import portfoliov1 from "../assets/portfoliov1.png";
import atm from "../assets/atm.png";
import chumleys from "../assets/chumleys.png";
import ensemble from "../assets/ensemble.png";
import recollect from "../assets/recollect.png";
import speedtype from "../assets/speedtype.png";

import { VscLinkExternal } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";

import { revealChildren } from "../assets/utils/utils.js";

import "../styles/Projects.scss";

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    revealChildren(projectsRef);
  });

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h4 className="title">projects</h4>
        <p className="subtitle">Other cool things I've worked on!</p>
      </div>
      <div className="all-projects" ref={projectsRef}>
        <div className="project-card">
          <h5>
            Speed Type{" "}
            <a
              href="https://imanipaul.github.io/speed-type/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLinkExternal className="external" size={"0.8em"} />
            </a>
            <a
              href="https://github.com/imanipaul/speed-type"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="github" size={"0.8em"} />
            </a>
          </h5>
          <p>Single player speed typing game made with multiple levels.</p>
          <div className="tag-container">
            <Tag title={"Vanilla JS"} />
            <Tag title={"HTML"} />
            <Tag title={"CSS"} />
          </div>
          <img src={speedtype} alt="project screenshot" />
        </div>
        <div className="project-card">
          <h5>
            Portfolio V1{" "}
            <a
              href="https://imanipaul.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLinkExternal className="external" size={"0.8em"} />
            </a>
            <a
              href="https://github.com/imanipaul/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="github" size={"0.8em"} />
            </a>
          </h5>
          <p>The first iteration of my portfolio!</p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"Smooth Scroll"} />
          </div>
          <img src={portfoliov1} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>
            Recollect{" "}
            <a
              href="http://recollect.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLinkExternal className="external" size={"0.8em"} />
            </a>
            <a
              href="https://github.com/imanipaul/ReCollect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="github" size={"0.8em"} />
            </a>
          </h5>
          <p>Full stack inventory app for household essentials.</p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"PostgreSQL"} />
            <Tag title={"Rails"} />
          </div>
          <img src={recollect} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>
            Ensemble{" "}
            <a
              href="http://ensemble-ga.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLinkExternal className="external" size={"0.8em"} />
            </a>
            <a
              href="https://github.com/imanipaul/Ensemble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="github" size={"0.8em"} />
            </a>
          </h5>
          <p>
            A full stack site for connecting with fellow students and
            instructors.
          </p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"Rails"} />
          </div>
          <img src={ensemble} alt="project screenshot" size={"0.8em"} />
        </div>

        <div className="project-card">
          <h5>
            Chumley's{" "}
            <a
              href="http://chumleys-app.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLinkExternal className="external" size={"0.8em"} />
            </a>
            <a
              href="https://github.com/imanipaul/Chumleys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="github" size={"0.8em"} />
            </a>
          </h5>
          <p>
            Restaurant site redesign for local NYC eatery. Created through
            collaboration with UX designers.
          </p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"Sketch"} />
          </div>
          <img src={chumleys} alt="project screenshot" />
        </div>

        <div className="project-card">
          <h5>
            All Things Music{" "}
            <a
              href="https://all-things-music.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLinkExternal className="external" size={"0.8em"} />
            </a>
            <a
              href="https://github.com/imanipaul/all-things-music"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="github" size={"0.8em"} />
            </a>
          </h5>
          <p>Popular music search engine using React and LastFM API</p>
          <div className="tag-container">
            <Tag title={"React.js"} />
            <Tag title={"AudioDB API"} />
          </div>
          <img src={atm} alt="project screenshot" />
        </div>
      </div>
    </section>
  );
}
