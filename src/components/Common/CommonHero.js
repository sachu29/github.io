import React from "react";
import "./CommonHero.css";

const CommonHero = (props) => {
  return (
    <div className="commonHero">
      <div className="commonHero__heading-content">
        <h1 className="commonHero__heading">{ props.heading}</h1>
        <p className="commonHero__paragraph">{ props.paragraph}</p>
      </div>
    </div>
  );
};

export default CommonHero;
