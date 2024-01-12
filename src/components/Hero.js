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
        <h1 className="hero-content__heading">Python Developer</h1>
        <p className="hero-content__description">
          “ I'm a self taught Developer,I'm a guy who is always excited to do creative
          works. Nowadays my coding life becomes Learning in Loop, Storing
          memories in variables and Executing actions as functions . I believe
          that everyday is a new learning experience. I'm a well organized and
          good social person, who always takes care of mine and people around me
          as well.”
        </p>
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
