import React, {Component} from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return(
  <div className="grid">
    <div className="citibikeProject">
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Image className="images" src="https://media.giphy.com/media/1Qn3B22t2gEbRNZC4g/giphy.gif" thumbnail responsive />
            <p>A CitiBike Locator using Google Maps API, Javascript on the front end, Node and Express on the back end</p>
            <a href="https://citibikers.herokuapp.com/">|  CitiBike Locator |</a>
            <a href="https://git.generalassemb.ly/jkarlin929/Js-Citibike">| Github Repo For This Project | </a>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className="thankHeavenProject">
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Image className="images" src="https://media.giphy.com/media/1wrljsSfgWp7NeZ2hl/giphy.gif" thumbnail responsive />
            <p> A group project created a client using React, Webpack as a compiler, Express, Node, and Postgres </p>
            <a href="https://thank-heaven.herokuapp.com"> | Thank Heaven: Children's Boutique |</a>
            <a href="https://git.generalassemb.ly/Anson-Jameron/thank-heaven">|  Github Repo For This Project | </a>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className="moonProject">
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Image className="images" src="https://media.giphy.com/media/23cXQxgrvG4eNeuJZF/giphy.gif" thumbnail responsive />
            <p>An Express with Node and EJS Astronomy Project </p>
            <a href="https://astronobject.herokuapp.com/">  | Astronomer's Guide |</a>
            <a href="https://git.generalassemb.ly/jkarlin929/MoonPhase">| Github Repo For This Project | </a>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className="wordGame">
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Image className="images" src="https://media.giphy.com/media/iB52Yt0VWdgDQ8FudX/giphy.gif" thumbnail responsive />
            <p>A word game built using HTML5, CSS and Javascript</p>
            <a href="https://hellish-word-game.herokuapp.com/index.html">| Word Game |</a>
            <a href="https://git.generalassemb.ly/jkarlin929/PROJECT-1-PROMPT">| Github Repo For This Project | </a>
          </Col>
        </Row>
      </Grid>
    </div>
        <div className="codepen">
          <p>Some Codepens I'm Proud Of</p>
            <a href="https://codepen.io/jkarlin929/pen/dZLveB">| Color Switcher | </a>
            <a href="https://codepen.io/jkarlin929/pen/mqoQKo">| Tic Tac Toe |</a>
        </div>
  </div>
    )
  }
}

export default Projects;