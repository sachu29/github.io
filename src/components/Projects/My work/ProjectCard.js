import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectCard.css";
// import ProjectCardDatas from "./ProjectCardDatas";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card">
        <div className="project-card__image">
          <img src={props.imgsrc} alt="project" />
        </div>
        <div className="project-card__content">
          <div className="project-card__title">{props.title}</div>
          <p className="project-card__paragraph">{props.text}</p>
        </div>
        <div className="project-card__button-section">
          <div className="project-card__buttons">
            <NavLink target={"_blank"}  to={props.view} className="btn">
              View
            </NavLink>
            <NavLink target={"_blank"} to={props.source} className="btn">
              Source
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
