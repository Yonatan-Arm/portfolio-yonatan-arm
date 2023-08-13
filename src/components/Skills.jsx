import React from "react";
import laptopImg from '../assets/imgs/laptop.svg'
import { Fade } from "react-reveal";
import { CloudinaryContext, Image } from 'cloudinary-react';


export default function Skills() {
  const skills = [
    "ReactJS",
    "Vue",
    "ExpressJS",
    "NodeJS",
    "Redux",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Sass",
    "Github",
    "Firebase",
    "MySQL",
    "html5",
    "css3",
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
                   <CloudinaryContext cloudName="yonatan-cajan22" style={{height:"100%"}} >
                  <Image
                    publicId={"Best-portfolio/"+skill.toLocaleLowerCase()+".png"}
                    alt="project-img"
                  ></Image>
                  </CloudinaryContext>
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
