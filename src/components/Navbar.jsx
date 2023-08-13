import React, { useState } from "react";
import menu from "../assets/imgs/menu.svg";
import logo from "../assets/imgs/logo.svg";
import x from "../assets/imgs/x-lg.svg";
import arrowUpSrc from "../assets/imgs/arrow-up.svg";
import { HashLink as Link } from 'react-router-hash-link';


export default function Navbar() {
  const [isOpenModel, setIsOpenModel] = useState(false);


  return (
    <section className="navbar flex space-between align-center justify-center">
      <img src={logo} alt="logo" onClick={()=>window.scrollTo(0,0)} />
      <div className="nav flex">
        <div className="navigation flex row">
          <span><Link to="/#home">Home</Link></span>
          <span><Link to="/#about">About </Link></span>
          <span><Link to="/#skills">Skills</Link></span>
          <span><Link to="/#education">Education</Link></span>
          <span><Link to="/#projects">Projects</Link></span>
          <span><Link to="/#contact">Contact</Link></span>
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
          <span><Link to="/#home">Home</Link></span>
          <span><Link to="/#about">About </Link></span>
          <span><Link to="/#skills">Skills</Link></span>
          <span><Link to="/#education">Education</Link></span>
          <span><Link to="/#projects">Projects</Link></span>
          <span><Link to="/#contact">Contact</Link></span>
          </div>
        )}
      </div>
      <button className="top-btn flex justify-center align-center" onClick={()=>window.scrollTo(0,0)}>
      <img src={arrowUpSrc} alt="arrowup" />
      </button>
    </section>
  );
}
