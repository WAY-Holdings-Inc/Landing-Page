import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import logo from './assets/waylogo.svg';

function Header(props) {
  const [expanded, setExpanded] = React.useState(false);

  const { simple } = props;
  const simpleNav = {
    class: simple ? 'justify-content-center' : '',
  }
  return (
    <Navbar expanded={expanded} className={`way-nav ${simpleNav.class}`} collapseOnSelect expand="xl" bg="white" variant="light">
      <Navbar.Brand className="way-logo"><Link className="unset" to="/"><img src={logo} alt="Way Logo" /></Link></Navbar.Brand>
      {
        simple ? '' :
          <React.Fragment>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-nav" />
            <Navbar.Collapse className="justify-content-end way-options" id="responsive-nav">
              <Nav.Link onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option"><Link className="unset" smooth={true} to="/#How">How it Works</Link></Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option"><Link className="unset" smooth={true} to="/#benefits">Benefits</Link></Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option"><Link className="unset" to="/about">About</Link></Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option"><Link className="unset" to="/contact">Contact Us</Link></Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} data-toggle="collapse" className="way-button"><Link className="unset" to="/start">Get Started</Link></Nav.Link>
            </Navbar.Collapse>
          </React.Fragment>
      }
    </Navbar>
  );
}

export default Header;