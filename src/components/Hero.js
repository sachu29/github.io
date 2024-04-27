import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImg from "../assets/developerImage.jpg";
import  data from './Data/Data'

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg" src={HeroImg} alt="HeroImg" />
      </div>
      <div className="hero-content">
        <h1 className="hero-content__heading">{ data[0].developer }</h1>
        <p className="hero-content__description">
          {data[0].heroContent}
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
