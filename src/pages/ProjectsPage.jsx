import React, { useEffect, useState } from "react";
import { projectService } from "../services/project.service.js";
import laptopImg from "../assets/imgs/laptop.svg";
import arrowLeftImg from "../assets/imgs/arrow-left.svg";
import codeImg from "../assets/imgs/code.svg";
import eyeImg from "../assets/imgs/eye.svg";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const data = await projectService.query();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      setProjects([]);
    };
  }, []);

  return (
    <section className="projects-page">
      <h2 className="flex align-center justify-center">
        <img src={laptopImg} alt="laptop-img"></img>
        Projects <span> Made</span>
      </h2>
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
                        href="/"
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
        <Link to="/" className="flex justify-center align-center">
          <img src={arrowLeftImg} alt="arrow-Left-Img" />
          Back To Home
        </Link>
      </div>
    </section>
  );
}
