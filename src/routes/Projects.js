import React from 'react'
import CommonHero from '../components/Common/CommonHero';
import MyWork from './../components/Projects/My work/MyWork';

const Projects = () => {
  return (
    <div>
      <CommonHero heading="My Projects" paragraph="Here you can see some of my project work" />
      <MyWork />
    </div>
  )
}

export default Projects