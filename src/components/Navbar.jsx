import React, { useState } from "react";
import menu from "../assets/imgs/menu.svg";
import logo from "../assets/imgs/logo.svg";
import x from "../assets/imgs/x-lg.svg";
export default function Navbar() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <section className="navbar flex space-between align-center justify-center">
      <img src={logo} alt="logo" />
      <div className="nav flex">
        <div className="navigation flex row">
          <span>Home</span>
          <span>About</span>
          <span>Skills</span>
          <span>Education</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="mobile-nav">
        {isOpenModel ? (
          <img src={x} alt="x"   onClick={() => setIsOpenModel(!isOpenModel)} />
        ) : (
          <img
            src={menu}
            alt="menu"
            onClick={() => setIsOpenModel(!isOpenModel)}
          />
        )}
        {isOpenModel && (
          <div className="navigation flex column">
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Education</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        )}
      </div>
    </section>
  );
}
