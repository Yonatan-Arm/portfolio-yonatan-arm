import React, { useEffect, useState } from "react";
import { projectService } from "../services/project.service.js";
import laptopImg from "../assets/imgs/laptop.svg";
import arrowRightImg from "../assets/imgs/arrow-right.svg";
import codeImg from "../assets/imgs/code.svg";
import eyeImg from "../assets/imgs/eye.svg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await projectService.query();
      const projectToDisplay = res.slice(0, 6);
      setProjects(projectToDisplay);
    };
    fetchData();
    return () => {
      setProjects([]);
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="flex align-center justify-center">
        <img src={laptopImg} alt="laptop-img"></img>
        Projects <span> Made</span>
      </h2>
      <Fade top big>
        <div className=" flex">
          {!projects ? (
            <div> loading... </div>
          ) : (
            <div className="projects-cards flex">
              {projects.map((project) => (
                <div key={project._id} className="project-preview">
                  <img
                    src={
                      "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1653388477/protfolio/" +
                      project.title +
                      ".jpg"
                    }
                    alt="project-img"
                  />
                  <div className="content">
                    <h2 className="tag">{project.title}</h2>
                    <span className="text-center">{project.label}</span>
                    <div className="desc flex column justify-center">
                      <p>{project.description}</p>
                      <div className="btns flex space-between">
                        <a
                          href={project.gameCode}
                          target="blank"
                          className="flex row justify-center align-center"
                        >
                          code
                          <img src={codeImg} alt="img-code" />
                        </a>
                        <a
                          href={project.gameUrl}
                          target="blank"
                          className="flex row justify-center align-center"
                        >
                          view
                          <img src={eyeImg} alt="img-code" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center align-center">
          <Link to="/projects" className="flex justify-center align-center">
            View All
            <img src={arrowRightImg} alt="arrow-Right-Img" />
          </Link>
        </div>
      </Fade>
    </section>
  );
}
