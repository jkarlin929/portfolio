import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Col, Image } from 'react-bootstrap';

class Topnav extends Component {
  render() {
    return(
      <div className="topnav" id="topnav">
        <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            A Collection by Jason Karlin
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
  <Navbar.Collapse>
      <Nav pullRight>
          <NavItem eventKey={1} href="#about">
            About
          </NavItem>
          <NavItem
            eventKey={2} href="#projects"> Projects
          </NavItem>
          <NavItem eventKey={3} href="https://resume.creddle.io/resume/6edfwq1hu6u"> Résumé
          </NavItem>
          <NavItem eventKey={4} href="#footer">
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
