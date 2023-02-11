import React, { useState } from "react";
import menu from "../assets/imgs/menu.svg";
import logo from "../assets/imgs/logo.svg";
import x from "../assets/imgs/x-lg.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [isOpenModel, setIsOpenModel] = useState(false);


  return (
    <section className="navbar flex space-between align-center justify-center">
      <img src={logo} alt="logo" onClick={()=>window.scrollTo(0,0)} />
      <div className="nav flex">
        <div className="navigation flex row">
          <span><AnchorLink href="#home">Home</AnchorLink></span>
          <span><AnchorLink href="#about">About </AnchorLink></span>
          <span><AnchorLink href="#skills">Skills</AnchorLink></span>
          <span><AnchorLink href="#education">Education</AnchorLink></span>
          <span><AnchorLink href="#projects">Projects</AnchorLink></span>
          <span><AnchorLink href="#contact">Contact</AnchorLink></span>
        </div>
      </div>
      <div className="mobile-nav">
        {isOpenModel ? (
          <img src={x} alt="x"  onClick={() => setIsOpenModel(!isOpenModel)} />
        ) : (
          <img
            src={menu}
            alt="menu"
            onClick={() => setIsOpenModel(!isOpenModel)}
          />
        )}
        {isOpenModel && (
          <div className="navigation flex column">
          <span><AnchorLink href="#home">Home</AnchorLink></span>
          <span><AnchorLink href="#about">About </AnchorLink></span>
          <span><AnchorLink href="#skills">Skills</AnchorLink></span>
          <span><AnchorLink href="#education">Education</AnchorLink></span>
          <span><AnchorLink href="#projects">Projects</AnchorLink></span>
          <span><AnchorLink href="#contact">Contact</AnchorLink></span>
          </div>
        )}
      </div>
      <button className="top-btn flex justify-center align-center" onClick={()=>window.scrollTo(0,0)}>
      ^
      </button>
    </section>
  );
}
