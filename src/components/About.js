import React from "react";
import headshot from "../assets/headshot.png";
import "../styles/About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about-info">
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
      </div>
      <div className="skills">
        <div className="left-section">
          <p>skills</p>
        </div>
        <div className="right-section">
          <div className="lists">
            <dl>
              <dt>languages</dt>
              <dd>Javascript (ES6)</dd>
              <dd>HTML5</dd>
              <dd>CSS/Sass</dd>
              <dd>Python</dd>
              <dd>Ruby/Rails</dd>
              <dd>GraphQL</dd>
              <dd>SQL</dd>
            </dl>

            <dl>
              <dt>frameworks</dt>
              <dd>React</dd>
              <dd>Vue</dd>
              <dd>Express</dd>
              <dd>Node</dd>
              <dd>Bootstrap</dd>
            </dl>

            <dl>
              <dt>tools</dt>
              <dd>Command Line</dd>
              <dd>Git & Github</dd>
              <dd>Chrome DevTools</dd>
              <dd>Postman</dd>
              <dd>npm</dd>
              <dd>AWS</dd>
              <dd>Google Analytics</dd>
              <dd>Heroku</dd>
            </dl>

            <dl>
              <dt>design</dt>
              <dd>Photoshop</dd>
              <dd>Sketch</dd>
              <dd>Wireframing</dd>
              <dd>Wix</dd>
              <dd>Squarespace</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
