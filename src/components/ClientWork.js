import React from "react";
import att from "../assets/forces-of-change.png";
import hulu from "../assets/shape-the-future.png";
import hsbc from "../assets/hsbc.png";
import jh from "../assets/jh.png";
import "../styles/ClientWork.scss";
import Tag from "./Tag";

export default function ClientWork() {
  return (
    <section className="client-work">
      <p className="title">client work</p>
      <p className="subtitle">Selected works developed for clients.</p>
      <div className="content">
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
      </div>
    </section>
  );
}
