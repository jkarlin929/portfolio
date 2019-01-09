import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div className="about">
        <p id="about">I am a <strong>Web Developer</strong> in NYC. I have experience with: Javascript <i class="fab fa-js-square"></i>, Node.js <i class="fab fa-node-js"></i>, React <i class="fab fa-react"></i>, HTML5 <i class="fab fa-html5"></i>, CSS3 <i class="fab fa-css3-alt"></i> and Express.</p>
        <Jumbotron id="projectsTitle">Projects</Jumbotron>
        </div>
    )
  }
}

export default About;
