import React, { useState } from "react";
import Typed from "./Typed";
import arrowDown from "../assets/imgs/down-arrow.svg";
import linkdinLogo from "../assets/imgs/linkdinLogo.svg";
import githubLogo from "../assets/imgs/githubLogo.svg";
import whatsappLogo from "../assets/imgs/whatsappLogo.svg";
import profilePic from "../assets/imgs/me-bg.jpg";
import Zoom from "react-reveal/Zoom";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const imgStyle = {
    transform: ` perspective(1000px) rotateX(${mouseX}deg) rotateY(${mouseY}deg) scale3d(1, 1,1)`,
  };

  const handleMouseEnter = (ev) => {
    setMouseX(ev.movementX);
    setMouseY(ev.movementY);
  };
  return (
    <Zoom>
      <section
        className="hero-container flex wrap align-center justify-center"
        id="home"
      >
        <div className="content">
          <h2>
            Hi There,
            <br />
            I'm Yonatan <span>Arm</span>
          </h2>
          <p className="dev flex row ">
            I Am
            <Typed />
          </p>
          <span className="btn-about flex align-center justify-center">
            <AnchorLink href="#about" className="flex align-center">
              About Me
              <img src={arrowDown} alt="arrow-down" />
            </AnchorLink>
          </span>
          <div className="sociel-media flex row">
            <div>
              <a
                href="https://www.linkedin.com/in/yonatan-arm-b2a3b0238/"
                target="blank"
              >
                <img src={linkdinLogo} alt="linkdinLogo" />
              </a>
            </div>
            <div>
              <a href="https://github.com/Yonatan-Arm" target="blank">
                <img src={githubLogo} alt="githubLogo" />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/+972528349626/?text=Hi Yonatan"
                target="blank"
              >
                <img src={whatsappLogo} alt="whatsappLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-pic">
          <img
            src={profilePic}
            alt="profile-Pic"
            style={imgStyle}
            onMouseMove={(ev) => handleMouseEnter(ev)}
          />
        </div>
      </section>
    </Zoom>
  );
}
