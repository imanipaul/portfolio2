import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <div className="icon">
          <AiOutlineLinkedin size={"1.5em"} />
        </div>
        <div className="icon">
          <FiGithub size={"1.5em"} />
        </div>
        <div className="icon">
          <AiOutlineMail size={"1.5em"} />
        </div>
      </div>

      <div className="disclaimer">
        <p>Designed & Developed by Imani Paul</p>
        <p>© 2020</p>
      </div>
    </footer>
  );
}
