import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import skew from './assets/slant.svg';
import efficiency from './assets/efficiency.svg';
import digital from './assets/digital.svg';
import arrow from '../Home/assets/arrow.svg';

import './About.css';



function About() {
    return (
        <div>
            <Container className="way-containery text-center way-mission" id="abouts">
                <Row>
                    <Col lg={12}>
                        <h1>
                            Our mission is to make everyday life more efficient.
                        </h1>
                    </Col>
                    <Col lg={12}>
                        <p className="way-mission-text">
                            Way is a technology company that builds digital infrastructure for restaurants. Local businesses use our tools to accept payments, elevate their service offerings, and manage their operations more efficiently.
                        </p> 
                        <div className="d-blocka learn text-center">
                            <p className="way-c mb-0"><a href="#efficiency" style={{all: 'unset'}}>Learn More</a></p>
                            <a href="#efficiency" style={{all: 'unset'}}><img src={arrow} alt="Down arrow"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="skew" src={skew} alt="Angled Slope"/>

            <Container fluid className="way-containerx way-bg-gray about-padding way-benefit" id="efficiency">
                <Row>
                    <Col lg={6}>
                    <div className="digital">

                        <h3>
                            The power of efficiency
                        </h3>
                        <div className="way-gray">
                            <p>
                                Time is the one commodity that consumers and businesses cannot buy more of. With so much competing for our attention in today’s fast paced world, it is more important than ever that we aim to preserve our most scarce resource. At Way, we’re working to make everyday life more efficient, for all of us.
                            </p>
                            <p>
                                Our transformative in-store ordering platform saves customers anywhere from five to twenty minutes every time they visit a restaurant, which can compound to more than a year over the course of a lifetime.
                            </p>
                        </div>
                    </div>
                    </Col>
                    <Col className="text-center">
                        <img className="aboutimg" src={efficiency} alt="Efficiency"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="way-containerz way-bg-gray about-padding way-benefit">
                <Row className="parent">
                    <Col lg={6} className="text-center b">
                        <img className="aboutimg" src={digital} alt="Efficiency"/>
                    </Col>
                    <Col className="c">
                    <div className="digital">
                        <h3>
                            The power of digital payments
                        </h3>
                        <div className="way-gray">
                            <p>
                                Despite QR code payments being faster, safer, and less expensive than alternative payment mehods, only about 1 percent of global payments take their digital form.
                            </p>
                            <p>
                                Lagged processing times, frequent chip malfunctions, and a complex global payments system are limiting the economic impact of efficient service.
                            </p>
                            <p>
                                Eliminating the barriers to efficient payments in the service industry helps to empower local businesses and enhance consumer experiences.
                            </p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )


}

export default About
