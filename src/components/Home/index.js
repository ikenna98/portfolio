import "./styles.css";
import img from "../Props/myPicture.PNG";
import Button from "../Button";
import { BsMouse } from "react-icons/bs";
import React, { useState } from "react";

function Home() {
  const [toggle, setToggle] = useState(false);

  const changeWheel = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div
          onClick={changeWheel}
          className={toggle ? "hover-show active" : "hover-show"}
        >
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="Creator of the website" />
      </div>
      <h3>{toggle ? null : "Click my picture!"}</h3>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I am a highly motivated, hardworking mechanical engineering graduate
          based in London. I believe that creativity is vital in the workplace
          as it gives you the ability to contribute inventive and imaginative
          ideas. I have always been passionate about technology as it is the
          perfect mix of creativity and logic; with the ability to shape the
          world.
        </p>
      </h2>

      <Button />
    </div>
  );
}

export default Home;
