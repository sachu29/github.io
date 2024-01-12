import React from "react";
import CommonHero from "../components/Common/CommonHero";
import AboutHero from "./../components/About/AboutHero";
const About = () => {
  return (
    <div>
      <CommonHero heading="About Me" paragraph="I'm a Python developer" />
      <AboutHero />
    </div>
  );
};

export default About;
