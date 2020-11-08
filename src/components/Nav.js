import React from "react";
import logo from "../assets/Logo.png";
import "../styles/Nav.scss";

export default function Nav() {
  return (
    <nav>
      <img src={logo} />
      <div>
        <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
