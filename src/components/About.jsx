import React, { useState } from "react";
import profile from "../assets/imgs/profile-link.jpeg";
import arrowRight from "../assets/imgs/arrow-right.svg";
import userImg from "../assets/imgs/man-user.svg";
import resume from "../assets/imgs/Yonatan_Arm_cv2.pdf";
import { Fade } from "react-reveal";

export default function About() {
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
    <section className="about-section" id="about">
      <h2>
        <img src={userImg} alt="user-Img" />
        About <span>Me</span>
      </h2>
      <div className="about-content flex row">
        <div className="image">
          <img
            src={profile}
            alt="profile"
            style={imgStyle}
            onMouseMove={(ev) => handleMouseEnter(ev)}
          />
        </div>
        <Fade top>
          <div className="content flex column">
            <h3> I'm Yonatan</h3>
            <span> Full Stack Developer</span>
            <p>
              As a full-stack developer specializing in the MERN stack, i thrive
              on creating dynamic and user-friendly web applications. With a
              solid background in web development and a passion for coding, I
              have honed my skills in the latest technologies and web
              development best practices.
            </p>
            <div className="contact-details ">
              <span className="flex row ">
                <span>Age:</span> 23
              </span>
              <span className="flex row">
                <span>Phone:</span> 052-834-9626
              </span>
              <span className="flex row">
                <span>Email:</span> yoniarm123@gmail.com
              </span>
            </div>
            <a
              href={resume}
              download
              className="flex align-center justify-center"
            >
              Resume
              <img src={arrowRight} alt="arrowRight" />
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
