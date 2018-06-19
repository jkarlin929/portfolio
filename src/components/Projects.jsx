import React, {Component} from 'react';
import { Grid, Col, Row, Image, Well } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return(
  <div className="grid">
    <div className="projects">
      <Grid>
        <Row>
          <Col xs={12}>
          <Well bsSize="small">
            <h2>Thank Heaven: Children's Boutique</h2>
            <a href="https://thank-heaven.herokuapp.com"> <Image className="images" src="https://media.giphy.com/media/1wrljsSfgWp7NeZ2hl/giphy.gif" thumbnail responsive /> </a>
            <p> A group project created for a client using React, Webpack as a compiler, Express, Node, and Postgres. </p>
            <a href="https://thank-heaven.herokuapp.com"> | <i class="fas fa-external-link-alt"></i> Thank Heaven: Children's Boutique | </a>
            <a href="https://github.com/jkarlin929/thank-heaven">|  <i class="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6}>
          <Well bsSize="large">
            <h2><i class="fas fa-bicycle"></i> CitiBike Locator</h2>
              <a href="https://citibikers.herokuapp.com/" > <Image className="images" src="https://media.giphy.com/media/1Qn3B22t2gEbRNZC4g/giphy.gif" thumbnail responsive /> </a>
              <p>A CitiBike Locator using Google Maps API, Javascript on the front end, Node and Express on the back end.</p>
              <a href="https://citibikers.herokuapp.com/">| <i class="fas fa-external-link-alt"></i> CitiBike Locator | </a>
              <a href="https://github.com/jkarlin929/citibike">| <i class="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6}>
          <Well bsSize="large">
          <h2><i class="fas fa-user-astronaut"></i> Astronomer's Guide </h2>
            <a href="https://astronobject.herokuapp.com/"> <Image className="images" src="https://media.giphy.com/media/23cXQxgrvG4eNeuJZF/giphy.gif" thumbnail responsive /> </a>
            <p>An Express with Node and Javascript Astronomy Web App. </p>
            <br />
            <a href="https://astronobject.herokuapp.com/"> | <i class="fas fa-external-link-alt"></i> Astronomer's Guide | </a>
            <a href="https://github.com/jkarlin929/moon_app">| <i class="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
          <Col xs={12}>
          <Well bsSize="small">
          <h2>Word Guessing Game</h2>
            <a href="https://hellish-word-game.herokuapp.com/index.html"> <Image className="images" src="https://media.giphy.com/media/iB52Yt0VWdgDQ8FudX/giphy.gif" thumbnail responsive /> </a>
            <p>A word game built using HTML5, CSS and Javascript.</p>
            <a href="https://hellish-word-game.herokuapp.com/index.html">| <i class="fas fa-external-link-alt"></i> Word Game | </a>
            <a href="https://github.com/jkarlin929/word-game">| <i class="fab fa-github"></i> Repository | </a>
            </Well>
          </Col>
        </Row>
      </Grid>
    </div>
        <div className="codepen">
          <p> <i class="fab fa-codepen"></i> Codepens I enjoyed creating:</p>
            <a href="https://codepen.io/jkarlin929/pen/dZLveB">| <i class="fab fa-codepen"></i> Color Switcher | </a>
            <a href="https://codepen.io/jkarlin929/pen/mqoQKo">| <i class="fab fa-codepen"></i> Tic Tac Toe |</a>
        </div>
  </div>
    )
  }
}

export default Projects;