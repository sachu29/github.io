import "../Common/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [color, setColor] = useState(false);

  const hamburgerClick = () => {
    setHamburger(!hamburger);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" target={"_top"}>
        <h1>Saran <span style={{ color : "rgb(248, 217, 15)"}}>M</span></h1>
      </Link>
      <ul className={hamburger ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link target={"_top"} to="/">Home</Link>
        </li>
        <li>
          <Link target={"_top"} to="/about">About Me</Link>
        </li>
        <li>
          <Link target={"_top"} to="/projects">My Projects</Link>
        </li>
        <li>
          <Link target={"_top"} to="/contact">Contact Me</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={hamburgerClick}>
        {hamburger ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
