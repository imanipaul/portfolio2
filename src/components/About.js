import React, { useEffect, useRef } from "react";
import headshot from "../assets/headshot.png";

import sr from "../assets/utils/sr";
import { revealChildren } from "../assets/utils/utils.js";

import "../styles/About.scss";

export default function About() {
  let contentRef = useRef(null);
  let imageRef = useRef(null);

  const config = {
    origin: "right",
    duration: 1000,
    delay: 350,
    distance: "0px",
    scale: 1,
    easing: "ease",
  };

  useEffect(() => {
    revealChildren(contentRef);

    sr.reveal(imageRef.current, config);
  });

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h4>about me</h4>
        <div className="about-info">
          <div className="all-copy" ref={contentRef}>
            <p>Hi! I'm Imani, a software engineer based in New York.</p>
            <p>
              As a software engineer I enjoy building things that improve
              people’s lives. Whether that's a client or the end user, I enjoy
              bridging the gap between technical issues and business needs.
            </p>
            <p>
              I’m currently part of the{" "}
              <span className="link">
                <a
                  href="https://www.nike.com/snkrs-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SNKRS
                </a>
              </span>{" "}
              Web team at{" "}
              <span className="link">
                <a
                  href="https://www.nike.com/snkrs-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S23NYC
                </a>
              </span>
              , Nike's New York Studio. I am a software engineer and business
              consultant with a unique background.
            </p>

            <p>
              <span>When I’m not at my computer</span>, I enjoy reading sci-fi
              novels, knitting scarves and blankets for my friends and family,
              and baking sweets!
            </p>
          </div>
          <img ref={imageRef} src={headshot} alt="headshot" />
        </div>
      </div>
    </section>
  );
}
