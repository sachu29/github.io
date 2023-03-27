import React from "react";
import Hero from "../components/Hero";
import AboutHero from "./../components/About/AboutHero";
import MyWork from "./../components/Projects/My work/MyWork";

const Home = () => {
  return (
    <div>
      <Hero id="/my-portfolio/src/routes/Home.js" />
      <AboutHero />
      <MyWork />
    </div>
  );
};

export default Home;
