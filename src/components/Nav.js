import React, { useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import "../styles/Nav.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";

export default function Nav() {
  let navRef = useRef(null);

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navRef.current.style.top = "0";
    } else {
      navRef.current.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <nav ref={navRef}>
      <div className="menu">
        <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      {/* <div className="menu">

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
      </div> */}
    </nav>
  );
}
