import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import Logo from "./Logo";
import "../styles/Nav.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";

export default function Nav() {
  let navRef = useRef(null);
  let contactRef = useRef(null);
  let contactRef2 = useRef(null);
  let aboutRef = useRef(null);
  let workRef = useRef(null);
  let projectRef = useRef(null);
  let menuRef = useRef(null);
  let [size, setSize] = useState(
    window.innerWidth < 768 ? "mobile" : "desktop"
  );
  let [mobileNavExpanded, setMobileNavExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function () {
      window.innerWidth < 768 ? setSize("mobile") : setSize("desktop");
    });
  });

  function resetNav() {
    navRef.current.style.bottom = "-100px";

    setTimeout(() => setMobileNavExpanded(false), 300);
    // setMobileNavExpanded(false);
  }

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let app = document.querySelector(".App");
    let contact = document.querySelector(".contact");

    if (size === "mobile" && currentScrollPos === 0) {
      navRef.current.style.bottom = "-100px";
      setMobileNavExpanded(false);
    } else if (
      size === "mobile" &&
      window.innerHeight + currentScrollPos >=
        app.offsetHeight - contact.offsetHeight
    ) {
      navRef.current.style.bottom = "-100px";
      setMobileNavExpanded(false);
    } else if (prevScrollPos > currentScrollPos) {
      size === "desktop"
        ? (navRef.current.style.top = "0")
        : (navRef.current.style.bottom = "0");
    } else {
      size === "desktop" ? (navRef.current.style.top = "-100px") : resetNav();
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <nav ref={navRef}>
      <Logo fill="#fff" class="logo" />
      <div className="menu ">
        <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

      <section className="mobile-nav">
        <div
          ref={contactRef}
          className={`item ${mobileNavExpanded ? "hide" : "show"}`}
        >
          <AiOutlineMail />
          <p>Contact</p>
        </div>
        <div
          ref={aboutRef}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
        >
          <BsPerson />
          <p>About</p>
        </div>
        <div
          ref={workRef}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
        >
          <BsCodeSlash />
          <p>Work</p>
        </div>
        <p className="name">Imani Paul</p>

        <div
          ref={menuRef}
          className={`item ${mobileNavExpanded ? "hide" : "show"}`}
          onClick={() => {
            setMobileNavExpanded(true);
          }}
        >
          <CgMenu />
          <p>Menu</p>
        </div>
        <div
          ref={projectRef}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
        >
          <BiCodeCurly />
          <p>Projects</p>
        </div>
        <div
          ref={contactRef2}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
        >
          <AiOutlineMail />
          <p>Contact</p>
        </div>
      </section>
    </nav>
  );
}
