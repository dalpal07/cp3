import React from 'react';
import './about.css';
import studiousGirl from './studious-girl.png'

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div>
          <h1>About Young Learning</h1>
          <img id="about-img" src={studiousGirl}/>
          <div id="about-info">
            Young Learning aims to help young children who are just beginning their quest
            for knowledge. Specifically, this program is meant for kids who have no prior
            knowledge of counting, the ABC's, basic shapes, or basic colors. The founder
            of this Young Learning is Dallin Bartholomew. This program is based off of
            his early works made with <a href="https://scratch.mit.edu/">Scratch</a>. The
            first of which was Dr. Bartholomew's
            <a href="https://scratch.mit.edu/projects/513159627/"> Monster Counter</a>.
          </div>
        </div>
    );
  }
}

export default About;