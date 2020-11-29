import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

import "../styles/Home.scss";

export default function Home() {
  // const [sectionHeight, setSectionHeight] = useState(window.innerHeight);

  // const handleResize = () => {
  //   setSectionHeight(window.innerHeight);

  //   console.log("section height is", sectionHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="home" style={{ height: window.innerHeight }}>
      <div>
        <h1>Imani Paul</h1>

        <h2>
          Software Engineer. Web Developer. {window.innerWidth < 426 && <br />}
          Creative&nbsp;Problem&nbsp;Solver.
        </h2>
      </div>
      <a href="#">
        <span></span>
      </a>
      <Particles options={particlesOptions} />
    </section>
  );
}
