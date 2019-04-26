import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Topnav = () => (
  <div>
  <span>
    A Collection by Jason Karlin
  </span>
  <AnchorLink className='nav-item' href="#about">About</AnchorLink>
  <AnchorLink offset='30' className='nav-item' href="#projects-title">Projects</AnchorLink>
    Résumé
  <AnchorLink className='nav-item' href="#footer">Contact</AnchorLink>
  </div>
)

export default Topnav;
