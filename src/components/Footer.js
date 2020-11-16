import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <AiOutlineLinkedin color={"white"} size={"1.5em"} />
        <FiGithub color={"white"} size={"1.5em"} />
        <AiOutlineMail color={"white"} size={"1.5em"} />
      </div>

      <div className="disclaimer">
        <p>Designed & Developed by Imani Paul</p>
        <p>© 2020</p>
      </div>
    </footer>
  );
}
