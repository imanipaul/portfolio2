import React, { useEffect, useRef } from "react";

import "../styles/Contact.scss";

import sr from "../assets/utils/sr";

export default function Contact() {
  const contactRef = useRef(null);

  const config = {
    origin: "bottom",
    duration: 1000,
    delay: 350,
    distance: "0px",
    scale: 1,
    easing: "ease",
    viewFactor: 0.5,
  };

  useEffect(() => {
    sr.reveal(contactRef.current, config);
  });

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <h4>let's work together</h4>
      <p>
        I’d love to hear from you. Send me a message and we can create something
        amazing together!
      </p>
      <a href="mailto:imanipaul1@gmail.com">
        <button>Get In Touch</button>
      </a>
    </section>
  );
}
