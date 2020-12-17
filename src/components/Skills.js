import React from "react";
import "../styles/Skills.scss";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills-content">
        <h4>skills</h4>
        <div className="skills-lists">
          <div className="list">
            <h5>languages</h5>
            <ul>
              <Fade direction="up" cascade damping={0.25} triggerOnce={true}>
                <li>Javascript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS/Sass</li>
                <li>Python</li>
                <li>Ruby/Rails</li>
                <li>GraphQL</li>
                <li>SQL</li>
              </Fade>
            </ul>
          </div>

          <div className="list">
            <h5>tools</h5>
            <ul>
              <Fade
                direction="up"
                cascade
                damping={0.25}
                delay={500}
                triggerOnce={true}
              >
                <li>Command Line</li>
                <li>Git & Github</li>
                <li>Chrome DevTools</li>
                <li>Postman</li>
                <li>npm</li>
                <li>AWS</li>
                <li>Google Analytics</li>
                <li>Heroku</li>
              </Fade>
            </ul>
          </div>

          <div className="list">
            <h5>frameworks</h5>
            <ul>
              <Fade
                direction="up"
                cascade
                damping={0.25}
                delay={1000}
                triggerOnce={true}
              >
                <li>React</li>
                <li>Vue</li>
                <li>Node</li>
                <li>Bootstrap</li>
              </Fade>
            </ul>
          </div>

          <div className="list">
            <h5>design</h5>
            <ul>
              <Fade
                direction="up"
                cascade
                damping={0.25}
                delay={1500}
                triggerOnce={true}
              >
                <li>Photoshop</li>
                <li>Sketch</li>
                <li>Wireframing</li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
