import React, { useEffect, useRef } from "react";
import headshot from "../assets/headshot.png";
import ScrollReveal from "scrollreveal";
import { Fade } from "react-awesome-reveal";

import sr from "../assets/utils/sr";

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

  const allConfigs = [
    {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      scale: 1,
      easing: "ease",
    },
    {
      origin: "bottom",
      duration: 1000,
      delay: 250,
      distance: "100px",
      scale: 1,
      easing: "ease",
    },
    {
      origin: "bottom",
      duration: 1000,
      delay: 350,
      distance: "100px",
      scale: 1,
      easing: "ease",
    },
    {
      origin: "bottom",
      duration: 1000,
      delay: 450,
      distance: "100px",
      scale: 1,
      easing: "ease",
    },
  ];

  const setConfig = (origin = "bottom", delay = 100, distance = "100px") => {
    let config = {
      origin,
      duration: 1000,
      delay,
      distance,
      scale: 1,
      easing: "ease",
    };

    return config;
  };

  useEffect(() => {
    // console.log("content ref children", cont+entRef.current.children);
    // console.log("content ref", Array.from(contentRef.current.children));
    let allChildren = Array.from(contentRef.current.children);

    // allChildren.forEach((ref, i) => sr.reveal(ref, allConfigs[i]));
    allChildren.forEach((ref, i) => {
      sr.reveal(ref, setConfig("bottom", (i + 1) * 100, "100px"));
    });
    sr.reveal(imageRef.current, config);

    // sr.reveal(contentRef.current, config);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h4>about me</h4>
        <div className="about-info">
          <div className="all-copy" ref={contentRef}>
            {/* <Fade direction="up" cascade damping={0.25} triggerOnce={true}> */}
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
              <span className="underline">When I’m not at my computer</span>, I
              enjoy reading sci-fi novels, knitting scarves and blankets for my
              friends and family, and baking sweets!
            </p>
            {/* </Fade> */}
          </div>
          <img ref={imageRef} src={headshot} alt="headshot" />
        </div>
      </div>
    </section>
  );
}
