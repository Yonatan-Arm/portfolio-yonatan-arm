import React from "react";
import laptopImg from '../assets/imgs/laptop.svg'
import { Fade } from "react-reveal";

export default function Skills() {
  const skills = [
    "ReactJS",
    "Vue",
    "ExpressJS",
    "NodeJS",
    "Redux",
    "TypeScript",
    "Bootstrap",
    "JavaScript",
    "CSS3",
    "MongoDB",
    "Sass",
    "Heroku",
    "Html5",
    "Github",
  ];
  return (
    <section className="skills-section" id="skills">
      <h2 className="flex align-center justify-center">
        <img src={laptopImg} alt="laptop-img" ></img>
        Skills & <span> Abilities</span>
      </h2>
      <Fade top big>
      <div>
        {!skills ? (
          <div> loading... </div>
        ) : (
          <div className="tech-section">
            {skills.map((skill) => (
              <div key={skill} className='tech-preview flex column align-center'>
                <img
                  src={`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1664890931/Best-portfolio/${skill.toLocaleLowerCase()}.png`}
                  alt="tech-img"
                ></img>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      </Fade>
    </section>
  );
}
