import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

import "../styles/Home.scss";

export default function Home() {
  return (
    <section className="home" style={{ height: window.innerHeight }}>
      <div>
        <h1>Imani Paul</h1>

        <h2>
          Software Engineer. Web Developer. {window.innerWidth < 425 && <br />}
          Creative Problem Solver.
        </h2>
      </div>
      <button>View my work</button>
      <Particles options={particlesOptions} />
    </section>
  );
}
