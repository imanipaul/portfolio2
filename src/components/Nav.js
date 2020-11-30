import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import Logo from "./Logo";
import "../styles/Nav.scss";

import { AiOutlineMail, AiOutlineMenuFold } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";

export default function Nav() {
  let navRef = useRef(null);
  let [size, setSize] = useState("");
  let [mobileNavExpanded, setMobileNavExpanded] = useState(false);

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
      <Logo fill="#fff" class="logo" />
      <div className="menu ">
        <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

      <section className="mobile-nav">
        <div className={`item ${mobileNavExpanded ? "hide" : "show"}`}>
          <AiOutlineMail />
          <p>Contact</p>
        </div>
        <div className={`item ${mobileNavExpanded ? "show" : "hide"}`}>
          <BsPerson />
          <p>About</p>
        </div>
        <div className={`item ${mobileNavExpanded ? "show" : "hide"}`}>
          <BsCodeSlash />
          <p>Work</p>
        </div>
        <p className="name">Imani Paul</p>

        <div
          className={`item ${mobileNavExpanded ? "hide" : "show"}`}
          onClick={() => {
            console.log(mobileNavExpanded);
            setMobileNavExpanded(true);
          }}
        >
          <CgMenu />
          <p>Menu</p>
        </div>
        <div className={`item ${mobileNavExpanded ? "show" : "hide"}`}>
          <BiCodeCurly />
          <p>Projects</p>
        </div>
        <div className={`item ${mobileNavExpanded ? "show" : "hide"}`}>
          <AiOutlineMail />
          <p>Contact</p>
        </div>
      </section>
    </nav>
  );
}
