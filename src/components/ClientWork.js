import React, { useEffect, useState, useRef } from "react";
import att from "../assets/att.png";
import att_full from "../assets/att-full.png";
import hsbc from "../assets/hsbc.png";
import hsbc_full from "../assets/hsbc-full.png";
import jh from "../assets/JH-computer.png";
import jh_full from "../assets/jh-full.png";
import showcase from "../assets/showcase.png";
import showcase_full from "../assets/showcase-full.png";
import "../styles/ClientWork.scss";
import Tag from "./Tag";
import { Fade } from "react-awesome-reveal";

import { revealChildren } from "../assets/utils/utils";

import { VscLinkExternal } from "react-icons/vsc";

export default function ClientWork() {
  const projectsRef = useRef(null);

  const [size, setSize] = useState(
    window.innerWidth < 1024 ? "mobile" : "desktop"
  );

  const handleResize = () => {
    setSize(window.innerWidth < 1024 ? "mobile" : "desktop");
  };

  useEffect(() => {
    revealChildren(projectsRef);
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <section className="client-work" id="work">
      <div className="client-header">
        <h4 className="title">client work</h4>
        <p className="subtitle">Selected works developed for clients.</p>
      </div>
      <div className="all-projects" ref={projectsRef}>
        <div className="project right">
          <div className="project-info">
            <h5>
              <a
                href="http://showcase.courageousstudios.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {size !== "mobile" && (
                  <VscLinkExternal
                    color={"white"}
                    className="external"
                    size={"0.8em"}
                  />
                )}
              </a>
              Courageous Showcase 2020{" "}
            </h5>
            <p>
              Showcase website for 2020 video lineup from Courageous Studios.
            </p>
            {size !== "desktop" && (
              <a
                href="http://showcase.courageousstudios.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscLinkExternal
                  color={"white"}
                  className="external-mobile"
                  size={"1em"}
                />
              </a>
            )}
            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"Sass"} />
            </div>
          </div>
          <img
            src={size === "desktop" ? showcase_full : showcase}
            alt="project screenshot"
          />
        </div>
        <div className="project">
          <div className="project-info">
            <h5>
              John Hancock Hub{" "}
              <a
                href="http://sponsorcontent.cnn.com/interactive/john-hancock/the-game-of-happy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {size !== "mobile" && (
                  <VscLinkExternal
                    color={"white"}
                    className="external"
                    size={"0.8em"}
                  />
                )}
              </a>
            </h5>
            <p>
              Responsive suite of pages for John Hancock. Pages include full
              width video pages, articles, and an infographic.
            </p>
            {size !== "desktop" && (
              <a
                href="http://sponsorcontent.cnn.com/interactive/john-hancock/the-game-of-happy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscLinkExternal
                  color={"white"}
                  className="external-mobile"
                  size={"1em"}
                />
              </a>
            )}
            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"YouTube API"} />
              <Tag title={"Infographic"} />
            </div>
          </div>
          <img
            src={size === "desktop" ? jh_full : jh}
            alt="project screenshot"
          />
        </div>
        <div className="project right">
          <img
            src={size === "desktop" ? att_full : att}
            alt="project screenshot"
          />
          <div className="project-info">
            <h5>
              {" "}
              <a
                href="https://www.cnn.com/interactive/ATT/ForcesOfChange/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {size !== "mobile" && (
                  <VscLinkExternal
                    color={"white"}
                    className="external"
                    size={"0.8em"}
                  />
                )}
              </a>{" "}
              AT&T Forces of Change{" "}
            </h5>
            <p>
              Responsive landing page for the Forces of Change video series.
              Continuously updated with new videos as they are created.
            </p>
            {size !== "desktop" && (
              <a
                href="https://www.cnn.com/interactive/ATT/ForcesOfChange/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscLinkExternal
                  color={"white"}
                  className="external-mobile"
                  size={"1em"}
                />
              </a>
            )}
            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"YouTube API"} />
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h5>
              HSBC Articles{" "}
              <a
                href="https://www.cnn.com/interactive/HSBC/SecuringTheWorld"
                target="_blank"
                rel="noopener noreferrer"
              >
                {size !== "mobile" && (
                  <VscLinkExternal
                    color={"white"}
                    className="external"
                    size={"0.8em"}
                  />
                )}
              </a>
            </h5>
            <p>
              Suite of responsive pages for HSBC campaign, including two
              articles and a white paper. Features include custom image
              slideshow, parallax image header, and embedded videos.
            </p>
            {size !== "desktop" && (
              <a
                href="https://www.cnn.com/interactive/HSBC/SecuringTheWorld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscLinkExternal
                  color={"white"}
                  className="external-mobile"
                  size={"1em"}
                />
              </a>
            )}
            <div className="tag-container">
              <Tag title={"React.js"} />
              <Tag title={"YouTube API"} />
            </div>
          </div>
          <img
            src={size === "desktop" ? hsbc_full : hsbc}
            alt="project screenshot"
          />
        </div>
        {/* </Fade> */}
      </div>
    </section>
  );
}
