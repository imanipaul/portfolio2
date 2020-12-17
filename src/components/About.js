import React, { useEffect, useRef } from "react";
import headshot from "../assets/headshot.png";
import ScrollReveal from "scrollreveal";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";

import "../styles/About.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h4>about me</h4>
        <div className="about-info">
          <div className="all-copy">
            <Fade direction="up" cascade damping={0.25}>
              <p>Hi! I'm Imani, a software engineer based in New York.</p>
              <p>
                As a software engineer I enjoy building things that improve
                people’s lives. Whether thats a client or the end user, I enjoy
                bridging the gap between technical issues and business needs.
              </p>
              <p>
                I’m currently a web developer at{" "}
                <span>
                  <a href="#">Courageous Studios, WarnerMedia</a>
                </span>
                . I am a software engineer and business consultant with a unique
                background.
              </p>

              <p>
                <span className="underline">When I’m not at my computer</span>,
                I enjoy reading sci-fi novels, knitting scarves and blankets for
                my friends and family, and baking sweets!
              </p>
            </Fade>
          </div>
          <img src={headshot} alt="headshot" />
        </div>
      </div>
    </section>
  );
}
