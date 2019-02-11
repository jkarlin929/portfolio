import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div id="footer" className="footer">
        <p>Contact:  <a id="footer-contact" href="mailto:jkarlin929@gmail.com"> <i className="fas fa-envelope-square"></i> Gmail</a> <br /></p>
        <p>Connect:  <a id="footer-contact" href="https://www.linkedin.com/in/jason-karlin/"> <i className="fab fa-linkedin"></i> LinkedIn </a></p>
      </div>
    )
  }
}

export default Footer;
