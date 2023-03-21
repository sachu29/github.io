import React from "react";
import "./AboutHero.css";
import { Link } from "react-router-dom";
import ReactBg1 from "../../assets/ReactBg2.jpg";
import ReactBg2 from "../../assets/ReactBg1.jpg";

const AboutHero = () => {
  return (
    <div className="about">
      <div className="about__left">
        <h1>Who Am I?</h1>
        <p>
          I'm a react frontend developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="about__right">
        <div className="about__heroImg">
          <div className="img-stack top">
            <img className="reactImg" src={ReactBg1} alt="React" />
          </div>
          <div className="img-stack bottom">
            <img className="reactImg" src={ReactBg2}  alt="React" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
