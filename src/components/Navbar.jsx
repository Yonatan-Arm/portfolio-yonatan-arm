import React, { useState } from "react";
import menu from "../assets/imgs/menu.svg";
import arrowUp from "../assets/imgs/arrow-up.svg";
import logo from "../assets/imgs/logo.svg";
import x from "../assets/imgs/x-lg.svg";
export default function Navbar() {
  const [isOpenModel, setIsOpenModel] = useState(false);


  return (
    <section className="navbar flex space-between align-center justify-center">
      <img src={logo} alt="logo" />
      <div className="nav flex">
        <div className="navigation flex row">
          <span><a href="#">Home</a></span>
          <span><a href="#About">About</a></span>
          <span><a href="#Skills">Skills</a></span>
          <span><a href="#Education">Education</a></span>
          <span><a href="#Projects">Projects</a></span>
          <span><a href="#Contact">Contact</a></span>
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
            <span  >Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Education</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        )}
      </div>
      <button className="top-btn flex justify-center align-center" onClick={()=>window.scrollTo(0,0)}>
      ^
      </button>
    </section>
  );
}
