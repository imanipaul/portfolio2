import React from "react";
import logo from "../assets/Logo.png";
import "../styles/Nav.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";

export default function Nav() {
  return (
    <nav>
      <div className="menu">
        {/* <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Contact</p> */}

        <div>
          <BsPerson size={"1.5em"} />
          <p>about</p>
        </div>

        <div>
          <BiCodeCurly size={"1.5em"} />
          <p>work</p>
        </div>
        <div>
          <BsCodeSlash size={"1.5em"} />
          <p>projects</p>
        </div>
        <div>
          <AiOutlineMail size={"1.5em"} title={"contact"} />
          <p>contact</p>
        </div>
      </div>
    </nav>
  );
}
