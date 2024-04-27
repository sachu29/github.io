import React from "react";
import CommonHero from "../components/Common/CommonHero";
import AboutHero from "./../components/About/AboutHero";
import data from '../components/Data/Data'
const About = () => {
  return (
    <div>
      <CommonHero heading="About Me" paragraph={`I'm a ${data[0].developer}`} />
      <AboutHero />
    </div>
  );
};

export default About;
