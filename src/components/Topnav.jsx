import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Topnav extends Component {
  render() {
    return(
      <div className="topnav" id="topnav">
        <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <span>
            A Collection by Jason Karlin
          </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
  <Navbar.Collapse>
      <Nav pullRight>
          <NavItem componentClass='span' className='span-item' eventKey={1}>
            <AnchorLink className='nav-item' href="#about">About</AnchorLink>
          </NavItem>
          <NavItem componentClass='span' className='span-item' eventKey={2} href="#projects-title">
            <AnchorLink offset='30' className='nav-item' href="#projects-title">Projects</AnchorLink>
          </NavItem>
          <NavItem eventKey={3} href="https://resume.creddle.io/resume/6edfwq1hu6u">
            Résumé
          </NavItem>
          <NavItem componentClass='span' className='span-item' eventKey={4} href="#footer">
            <AnchorLink className='nav-item' href="#footer">Contact</AnchorLink>
          </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
    )
  }
}

export default Topnav;
