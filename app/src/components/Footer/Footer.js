import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import './Footer.css';

import logo from './assets/waylogo.svg';


function Footer() {
    return (
        <div>
            <div className="way-footer text-center">
                <Container fluid className="footer-container" >
                    <Row>
                        <Col className="mo-center" sm={2}>
                            <Link className="unset" to="/"><img className="way-logo" src={logo} alt="Way Logo" /></Link>
                        </Col>

                        <Col className="footer-links" sm>
                            <h5 className="title">WAY</h5>
                            <ul className="clear-padding-inline">
                                <li className="list-unstyled">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/#How">How It Works</Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </Col>



                        <Col className="footer-links" sm>
                            <h5 className="title">MERCHANTS</h5>
                            <ul className="clear-padding-inline">
                                <li className="list-unstyled">
                                    <Link to="/start">Get Started</Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/#benefits">Benefits</Link>
                                </li>
                            </ul>
                        </Col>



                        <Col className="footer-links" sm>
                            <h5 className="title">FOLLOW US</h5>
                            <ul className="clear-padding-inline">
                                <li className="list-unstyled">
                                    <a href="#!">Facebook</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Instagram</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Twitter</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="holding">
                    <hr />
                    <h3>© 2020 WAY Holdings, Inc.</h3>
                </div>
            </div>
            {/* <div className="legal-navbar">
                <ul className="legal-nav">
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div> */}
            <Container fluid>
                <Row className="legal-navbar">
                    <Col sm={3}></Col>
                    <Col sm={6} >
                        <ul className="legal-nav">
                            <li><a id="terms" href="/terms">Terms of Service</a></li>
                            <li><a id="privacy" href="/privacy">Privacy Policy</a></li>
                        </ul></Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div >

    )
}

export default Footer