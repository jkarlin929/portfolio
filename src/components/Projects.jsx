import React, {Component} from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return(
      <div className="projects">
      <p>Projects</p>

      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image className="images" src="https://media.giphy.com/media/iB52Yt0VWdgDQ8FudX/giphy.gif" rounded responsive />
            <a href="https://hellish-word-game.herokuapp.com/index.html">Word Game | </a>
            <a href="https://git.generalassemb.ly/jkarlin929/PROJECT-1-PROMPT">  Github Repo For This Project | </a>
            <Image className="images" src="https://media.giphy.com/media/23cXQxgrvG4eNeuJZF/giphy.gif" rounded responsive />
            <a href="https://astronobject.herokuapp.com/">  Astronomer's Guide | </a>
            <a href="https://git.generalassemb.ly/jkarlin929/MoonPhase">  Github Repo For This Project | </a>
            <Image className="images" src="https://media.giphy.com/media/1wrljsSfgWp7NeZ2hl/giphy.gif" rounded responsive />
            <a href="https://thank-heaven.herokuapp.com">  Thank Heaven: Children's Boutique | </a>
            <a href="https://git.generalassemb.ly/Anson-Jameron/thank-heaven">  Github Repo For This Project | </a>
            <Image className="images" src="https://media.giphy.com/media/1Qn3B22t2gEbRNZC4g/giphy.gif" rounded responsive />
            <a href="https://citibikers.herokuapp.com/">  CitiBike Locator |</a>
            <a href="https://git.generalassemb.ly/jkarlin929/Js-Citibike">  Github Repo For This Project | </a>
          </Col>
        </Row>
      </Grid>

        <div className="codepen">
          <p>Some Codepens I'm Proud Of</p>
            <a href="https://codepen.io/jkarlin929/pen/dZLveB">Color Switcher | </a>
            <a href="https://codepen.io/jkarlin929/pen/mqoQKo">Tic Tac Toe </a>
        </div>

      </div>
    )
  }
}

export default Projects;