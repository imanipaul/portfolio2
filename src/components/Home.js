import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import { Link } from "react-scroll";

import "../styles/Home.scss";

export default function Home() {
  return (
    <section className="home" style={{ height: window.innerHeight }}>
      <div>
        <h1>Imani Paul</h1>

        <h2>
          Software Engineer. Web Developer. {window.innerWidth < 426 && <br />}
          Creative&nbsp;Problem&nbsp;Solver.
        </h2>
      </div>
      <Link to="about" smooth={true}>
        <span></span>
      </Link>
      <Particles options={particlesOptions} />
    </section>
  );
}
