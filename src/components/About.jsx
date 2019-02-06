import React, { Component } from 'react';
import { Image, Jumbotron } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div className="about">
        <p id="about">I am a <strong>Web Developer</strong> in NYC. I have experience with: Javascript <i className="fab fa-js-square"></i>, Node.js <i className="fab fa-node-js"></i>, React <i className="fab fa-react"></i>, HTML5 <i className="fab fa-html5"></i>, CSS3 <i className="fab fa-css3-alt"></i> and Express.</p>
        <Jumbotron id="projectsTitle">Projects</Jumbotron>
        </div>
    )
  }
}

export default About;
