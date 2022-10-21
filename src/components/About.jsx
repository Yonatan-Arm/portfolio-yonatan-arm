import React from "react";
import profile from "../assets/imgs/profile-link.jpeg";
import arrowRight from "../assets/imgs/arrow-right.svg";
import userImg from '../assets/imgs/man-user.svg'

export default function About() {
  return (
    <section className="about-section">
      <h2>
        <img src={userImg} alt="" />
        About <span>Me</span>
      </h2>
      <div className="about-content flex row">
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
        <div className="content flex column">
          <h3> I'm Yonatan</h3>
          <span> Full Stack Developer</span>
          <p>
            I am a Full-Stack developer, I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <div className="contact-details ">
            <span className="flex row "><span>Age:</span>  23</span>
            <span className="flex row"><span>Phone:</span> 052-834-9626</span>
            <span className="flex row"><span>Email:</span> yoniarm123@gmail.com</span>
          </div>
          <button className="flex align-center justify-center">Resume
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
    </section>
  );
}
