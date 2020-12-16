import React, { useEffect, useRef } from "react";
import headshot from "../assets/headshot.png";
import ScrollReveal from "scrollreveal";
import Fade from "react-reveal/Fade";

import "../styles/About.scss";

export default function About() {
  const graphRef = useRef(null);

  // useEffect(() => {
  //   ScrollReveal().reveal(graphRef.current, {
  //     delay: 1000,
  //     duration: 1500,
  //   });
  // }, []);

  return (
    <section className="about">
      <div className="about-content">
        <h4>about me</h4>
        <Fade bottom cascade>
          <p ref={graphRef}>
            I’m currently a web developer at{" "}
            <span>Courageous Studios, WarnerMedia</span>. I am a software
            engineer and business consultant with a unique background.
          </p>
        </Fade>

        <p>
          As a software engineer I enjoy building things that improve people’s
          lives. Whether thats a client or the end user, I enjoy bridging the
          gap between technical issues and business needs.
        </p>
        <p>
          <span>When I’m not at my computer</span>, I enjoy reading sci-fi
          novels, knitting scarves and blankets for my friends and family, and
          baking sweets!
        </p>
        {/* </Fade> */}

        {/* <Fade bottom delay={1000}> */}
        <img src={headshot} alt="headshot" />
        {/* </Fade> */}
      </div>
    </section>
  );
}
