import './styles.css';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

import React from 'react';

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://uk.linkedin.com/in/ikenna-agada-4a1941218"
          className="contact"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            linkedin <span>Ikenna Agada</span>
          </h2>
        </a>

        <a
          href="mailto:ikennaagada@gmail.com"
          className="contact"
        >
          <AiOutlineGoogle className="icon" />
          <h2>
            email <span id='mailText'>ikennaagada@gmail.com</span>
          </h2>
        </a>

        <a href="https://github.com/ikenna98/" className="contact">
          <AiOutlineGithub className="icon" />
          <h2>
            github <span>ikenna98</span>
          </h2>
        </a>
      </div>
    </div>
  )
}

export default Contact
