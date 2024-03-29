import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import { Link } from "react-scroll";

import "../styles/Home.scss";
import { revealChildren } from "../assets/utils/utils";

export default function Home() {
  const homeContent = useRef(null);

  useEffect(() => {
    setTimeout(revealChildren(homeContent, 1, "20px"), 5000);
  });

  return (
    <section className="home" style={{ height: window.innerHeight }}>
      <div ref={homeContent}>
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
