import React, { useState } from "react";
import logo from "../assets/Logo.png";
import "../styles/Nav.scss";

export default function Nav() {
  const [hidden, setHidden] = useState(true);

  return (
    <nav>
      <button onClick={() => setHidden(!hidden)}>Open</button>
      <div className={hidden ? "hidden" : "visible"}>
        <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
