import React from "react";
import att from "../assets/forces-of-change.png";
import hulu from "../assets/shape-the-future.png";
import hsbc from "../assets/hsbc.png";
import jh from "../assets/jh.png";
import jh2 from "../assets/JH-computer.png";
import "../styles/ClientWork.scss";
import Tag from "./Tag";

export default function ClientWork() {
  return (
    <section className="client-work">
      <div className="client-header">
        <h4 className="title">client work</h4>
        <p className="subtitle">Selected works developed for clients.</p>
      </div>
      <div className="all-projects">
        <div className="project">
          <div className="project-info">
            <h5>John Hancock Hub</h5>
            <p>
              Responsive landing page for the Forces of Change video series.
            </p>

            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"YouTube API"} />
            </div>
          </div>
          <div className="project-image">
            <img src={jh2} alt="project screenshot" />
          </div>
        </div>
      </div>
      {/* <div className="content">
        <div className="project">
          <img src={att} alt="preview" />
          <div className="info">
            <p className="name">AT&T Forces of Change</p>
            <p className="description">
              Responsive landing page for AT&T Forces of Change video series.
            </p>
            <div className="tags">
              <Tag title={"React.js"} />
              <Tag title={"Sass"} />
            </div>
          </div>
        </div>
        <div className="project">
          <img src={hulu} alt="preview" />
          <div className="info">
            <p className="name">AT&T Forces of Change</p>
            <p className="description">
              Responsive website for the Hulu Shape The Future installation in
              NYC.
            </p>
            <div className="tags">
              <Tag title={"JavaScript"} />
              <Tag title={"HTML"} />
              <Tag title={"CSS"} />
            </div>
          </div>
        </div>
        <div className="project">
          <img src={hsbc} alt="preview" />
          <div className="info">
            <p className="name">HSBC Articles</p>
            <p className="description">
              Responsive hub for Investment Grade Cashmere and Securing the
              World articles, as well as a whitepaper.
            </p>
            <div className="tags">
              <Tag title={"React.js"} />
              <Tag title={"Sass"} />
              <Tag title={"Parallax Design"} />
            </div>
          </div>
        </div>
        <div className="project">
          <img src={jh} alt="preview" />
          <div className="info">
            <p className="name">John Hancock Hub</p>
            <p className="description">
              Responsive hub built for John Hancock includes several article
              pages, video pages, and an infographic.
            </p>
            <div className="tags">
              <Tag title={"React.js"} />
              <Tag title={"Sass"} />
              <Tag title={"Youtube API"} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
