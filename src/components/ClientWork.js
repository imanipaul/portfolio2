import React from "react";
import att from "../assets/att.png";
import att_full from "../assets/att-full.png";
import hsbc from "../assets/hsbc.png";
import hsbc_full from "../assets/hsbc-full.png";
import jh from "../assets/JH-computer.png";
import jh_full from "../assets/jh-full.png";
import "../styles/ClientWork.scss";
import Tag from "./Tag";

import { FiGithub } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";

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

            <div className="icons">
              <FiGithub color={"white"} size={"1.5em"} />
              <VscLinkExternal
                color={"white"}
                className="external"
                size={"1.5em"}
              />
            </div>
          </div>
          <img
            src={window.innerWidth > 1024 ? jh_full : jh}
            alt="project screenshot"
          />
        </div>
        <div className="project right">
          <img
            src={window.innerWidth > 1024 ? att_full : att}
            alt="project screenshot"
          />
          <div className="project-info">
            <h5>AT&T Forces of Change</h5>
            <p>
              Responsive landing page for the Forces of Change video series.
            </p>

            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"YouTube API"} />
            </div>

            <div className="icons">
              <FiGithub color={"white"} size={"1.5em"} />
              <VscLinkExternal
                color={"white"}
                className="external"
                size={"1.5em"}
              />
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h5>HSBC Articles</h5>
            <p>
              Responsive landing page for the Forces of Change video series.
            </p>

            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"YouTube API"} />
            </div>

            <div className="icons">
              <FiGithub color={"white"} size={"1.5em"} />
              <VscLinkExternal
                color={"white"}
                className="external"
                size={"1.5em"}
              />
            </div>
          </div>
          <img
            src={window.innerWidth > 1024 ? hsbc_full : hsbc}
            alt="project screenshot"
          />
        </div>
      </div>
    </section>
  );
}
