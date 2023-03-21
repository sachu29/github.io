import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImg from "../assets/developerImage.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg" src={HeroImg} alt="HeroImg" />
      </div>
      <div className="hero-content">
        <p className="hero-content__description">HI I'M A DEVELOPER</p>
        <h1 className="hero-content__heading">React Developer</h1>
        <div className="hero-content__button-section">
          <Link to="/projects" className="btn">
            My Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
