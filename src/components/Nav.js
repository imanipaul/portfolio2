import React, { useEffect, useRef, useState } from "react";

import Logo from "./Logo";
import "../styles/Nav.scss";

import { Link } from "react-scroll";

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
      <Logo fill="#151515" textFill="#151515" class="logo" />
      {/* <img src={logo7} className="logo" /> */}
      <div className="menu ">
        <Link to="about" smooth={true} isDynamic={true} spy={true}>
          About
        </Link>
        <Link to="work" smooth={true} isDynamic={true} spy={true}>
          Work
        </Link>
        <Link to="projects" smooth={true} isDynamic={true} spy={true}>
          Projects
        </Link>
        <Link to="contact" smooth={true} isDynamic={true} spy={true}>
          Contact
        </Link>
      </div>

      <section className="mobile-nav">
        {/* <Link to="contact" smooth={true} isDynamic={true}> */}
        <Link
          ref={contactRef}
          className={`item ${mobileNavExpanded ? "hide" : "show"}`}
          to="contact"
          smooth={true}
        >
          <AiOutlineMail />
          <p>Contact</p>
        </Link>
        {/* </Link> */}
        {/* <Link to="about" smooth={true} isDynamic={true} spy={true}> */}
        <Link
          ref={aboutRef}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
          to="about"
          smooth={true}
        >
          <BsPerson />
          <p>About</p>
        </Link>
        {/* </Link> */}
        {/* <Link to="work" smooth={true} isDynamic={true} spy={true}> */}
        <Link
          ref={workRef}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
          to="work"
          smooth={true}
        >
          <BsCodeSlash />
          <p>Work</p>
        </Link>
        {/* </Link> */}
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
        {/* <Link to="projects" smooth={true} isDynamic={true} spy={true}> */}
        <Link
          ref={projectRef}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
          to="projects"
          smooth={true}
        >
          <BiCodeCurly />
          <p>Projects</p>
        </Link>
        {/* </Link> */}
        {/* <Link to="contact" smooth={true} isDynamic={true} spy={true}> */}
        <Link
          ref={contactRef2}
          className={`item ${mobileNavExpanded ? "show" : "hide"}`}
          to="contact"
          smooth={true}
        >
          <AiOutlineMail />
          <p>Contact</p>
        </Link>
        {/* </Link> */}
      </section>
    </nav>
  );
}
