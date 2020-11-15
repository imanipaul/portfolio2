import React from "react";
// import Particles from "react-tsparticles";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

import "../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div>
        {/* <h1>
          Hi, I am <span className="name">Imani Paul</span>.
        </h1>
        <h2>
          I'm a software engineer, web developer, and creative problem solver.
        </h2> */}
        <p>Hello, I am</p>
        <h1>Imani Paul</h1>

        <h2>
          Software Engineer. Web Developer. <br />
          Creative Problem Solver.
        </h2>
      </div>
      <button>View my work</button>
      <Particles options={particlesOptions} />
    </section>
  );
}
