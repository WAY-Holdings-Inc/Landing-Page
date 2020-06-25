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
              <Nav.Link as={Link} onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option" smooth={true} to="/#How">How it Works</Nav.Link>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option" smooth={true} to="/#benefits">Benefits</Nav.Link>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option" to="/about">About</Nav.Link>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} data-toggle="collapse" className="nav-option" to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} data-toggle="collapse" className="way-button" to="/start">Get Started</Nav.Link>
            </Navbar.Collapse>
          </React.Fragment>
      }
    </Navbar>
  );
}

export default Header;