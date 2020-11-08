import React from "react";
import "../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div>
        <h1>
          Hi, I am <span className="name">Imani Paul</span>.
        </h1>
        <h2>
          I'm a software engineer, web developer, and creative problem solver.
        </h2>
      </div>
      <button>Get in touch</button>
    </section>
  );
}
