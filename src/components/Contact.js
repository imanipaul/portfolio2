import React from "react";

import "../styles/Contact.scss";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <section className="contact">
      <Fade cascade delay={500}>
        <h4>let's work together</h4>
        <p>
          I’d love to hear from you. Send me a message and we can create
          something amazing together!
        </p>
        <button>Get In Touch</button>
      </Fade>
      <Footer />
    </section>
  );
}
