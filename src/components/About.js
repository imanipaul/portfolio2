import React from "react";
import headshot from "../assets/headshot.png";
import "../styles/About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h4>about me</h4>
        <p>
          I’m currently a web developer at{" "}
          <span>Courageous Studios, WarnerMedia</span>. I am a software engineer
          and business consultant with a unique background.
        </p>
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

        <img src={headshot} alt="headshot" />
      </div>

      {/* <div className="about-info">
        <div className="left-section">
          <p>about me</p>
          <img src={headshot} alt="headshot" />
        </div>
        <div className="right-section">
          <p>
            I’m currently a web developer at{" "}
            <span>Courageous Studios, WarnerMedia</span>. I am a software
            engineer and business consultant with a unique background.
          </p>
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
        </div>
      </div> */}
    </section>
  );
}
