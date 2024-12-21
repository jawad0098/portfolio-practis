import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="container nav-bar">
        <div className="left nav-items">Portfolio</div>
        <div className="right-nav">
          <a href="#home" className="nav-items">Home</a>
          <a href="#experience" className="nav-items">Experience</a>
          <a href="#skills" className="nav-items">Skills</a>
          <a href="#projects" className="nav-items">Projects</a>
          <a href="#contact" className="nav-items">Contact</a>
        </div>
        <div className="menu-icon">
          {toggle ? (
            <RxCross2 onClick={closeMenu} size={30} className="menu-toggle" />
          ) : (
            <HiOutlineMenuAlt2 onClick={openMenu} size={30} className="menu-toggle" />
          )}
        </div>
      </div>
      {toggle && (
        <div className="mobile-menu">
          <ul>
            <li className="menu-item"><a href="#home">Home</a></li>
            <li className="menu-item"><a href="#experience">Experience</a></li>
            <li className="menu-item"><a href="#skills">Skills</a></li>
            <li className="menu-item"><a href="#projects">Projects</a></li>
            <li className="menu-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
