import React from "react";
import "./MyWork.css";
import ProjectCard from "./ProjectCard";
import ProjectCardDatas from "./ProjectCardDatas";

const MyWork = (props) => {
  return (
    <div className="project">
      <h1 className="project__heading">My Projects Work</h1>
      <div className="project__container">
        {ProjectCardDatas.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
