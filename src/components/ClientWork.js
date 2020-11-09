import React from "react";
import att from "../assets/forces-of-change.png";
import hulu from "../assets/shape-the-future.png";
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
          <img src={hulu} alt="preview" />
          <div className="info">
            <p className="name">HSBC Fleece Stuff</p>
            <p className="description">
              Responsive landing page for AT&T Forces of Change video series.
            </p>
            <div className="tags">
              <Tag title={"React.js"} />
              <Tag title={"Sass"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
