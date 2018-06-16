import React, {Component} from 'react';
import { Navbar, Nav, NavItem, Col, Image } from 'react-bootstrap';

class Topnav extends Component {
  render() {
    return(
      <div className="topnav" id="topnav">
        <Navbar inverse collapseOnSelect>
          <Col xs={6} md={3}>
            <Image id="photo" src="http://res.cloudinary.com/jkarlin929/image/upload/v1520994430/photoofme2_ysepvv.jpg" circle responsive />
            </Col>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#topnav">Jason Karlin</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
  <Navbar.Collapse>
      <Nav pullLeft>
          <NavItem eventKey={1} href="#about">
            About
          </NavItem>
          <NavItem eventKey={2} href="https://www.linkedin.com/in/jason-karlin/"> LinkedIn
          </NavItem>
          <NavItem eventKey={3} href="#footer">
          Contact
          </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
    )
  }
}

export default Topnav;