import "./styles.css";
import { BsMouse } from "react-icons/bs";

import React from "react";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
    </div>
  );
}

export default Footer;
