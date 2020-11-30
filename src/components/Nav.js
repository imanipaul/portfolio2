import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import Logo from "./Logo";
import "../styles/Nav.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";

export default function Nav() {
  let navRef = useRef(null);
  let [size, setSize] = useState("");

  useEffect(() => {
    window.addEventListener("resize", function () {
      window.innerWidth < 768 ? setSize("mobile") : setSize("desktop");
    });
  });

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (size === "mobile" && currentScrollPos === 0) {
      navRef.current.style.bottom = "-100px";
    } else if (prevScrollPos > currentScrollPos) {
      size === "desktop"
        ? (navRef.current.style.top = "0")
        : (navRef.current.style.bottom = "0");
    } else {
      size === "desktop"
        ? (navRef.current.style.top = "-100px")
        : (navRef.current.style.bottom = "-100px");
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <nav ref={navRef}>
      {/* <img src={logo} alt="logo" /> */}
      <Logo fill="#fff" class="logo " />
      <div className="menu ">
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
