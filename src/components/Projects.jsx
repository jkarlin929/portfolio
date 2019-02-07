import React, { Component } from 'react';
import { Grid, Col, Row, Image, Well, Jumbotron } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return(
  <div className="grid">
    <div className="projects" id="projects">
    <Jumbotron id="projectsTitle">Projects</Jumbotron>
      <Grid>
        <Row>
          <Col xs={12}>
          <Well bsSize="small">
            <h2>Thank Heaven: Children's Boutique</h2>
            <a href="https://thank-heaven.herokuapp.com">
            <Image className="images" src="https://media.giphy.com/media/1wrljsSfgWp7NeZ2hl/giphy.gif" thumbnail responsive /> </a>
            <p> A group project created for a client using React, Webpack, Express, Node.js, and Postgresql. </p>
            <a href="https://thank-heaven.herokuapp.com"> | <i className="fas fa-external-link-alt"></i> Thank Heaven: Children's Boutique | </a>
            <a href="https://github.com/jkarlin929/thank-heaven">|  <i className="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6}>
          <Well bsSize="large">
            <h2>CitiBike Locator</h2>
              <a href="https://citibikers.herokuapp.com/">
              <Image className="images" src="https://media.giphy.com/media/1Qn3B22t2gEbRNZC4g/giphy.gif" thumbnail responsive /> </a>
              <p>A CitiBike Locator using Google Maps API, Javascript on the front end, Node.js and Express on the back end.</p>
              <a href="https://citibikers.herokuapp.com/">| <i className="fas fa-bicycle"></i> CitiBike Locator | </a>
              <a href="https://github.com/jkarlin929/citibike">| <i className="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6}>
          <Well bsSize="large">
          <h2>Astronomer's Guide</h2>
            <a href="https://astronobject.herokuapp.com/">
            <Image className="images" src="https://media.giphy.com/media/23cXQxgrvG4eNeuJZF/giphy.gif" thumbnail responsive /> </a>
            <p>An Express with Node.js and Javascript Astronomy Web App. </p>
            <a href="https://astronobject.herokuapp.com/"> | <i className="fas fa-user-astronaut"></i> Astronomer's Guide | </a>
            <a href="https://github.com/jkarlin929/moon_app">| <i className="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6}>
          <Well bsSize="large">
          <h2>Word Guessing Game</h2>
            <a href="https://hellish-word-game.herokuapp.com/index.html"> <Image className="images" src="https://media.giphy.com/media/iB52Yt0VWdgDQ8FudX/giphy.gif" thumbnail responsive /> </a>
            <p>A word game built using HTML5, CSS and Javascript.</p>
            <a href="https://hellish-word-game.herokuapp.com/index.html">| <i className="fas fa-external-link-alt"></i> Word Game | </a>
            <a href="https://github.com/jkarlin929/word-game">| <i className="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6}>
          <Well bsSize="large">
          <h2>Grocery List</h2>
            <a href="https://rocky-escarpment-47175.herokuapp.com/"><Image className="images" src="https://media.giphy.com/media/oX7sukXJrig21asjv4/giphy.gif" thumbnail responsive /> </a>
            <p>CRUD app built using Ruby and Rails</p>
            <a href="https://rocky-escarpment-47175.herokuapp.com/">| <i className="fas fa-shopping-cart"></i> Grocery List on GitHub | </a>
            <a href="https://github.com/jkarlin929/grocery-list-rails-crud">| <i className="fab fa-github"></i> Repository | </a>
          </Well>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
    )
  }
}

export default Projects;
