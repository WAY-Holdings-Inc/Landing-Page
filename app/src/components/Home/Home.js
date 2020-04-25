import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import Footer from '../Footer/Footer';

import './Home.css'

import store from './assets/store.svg';
import arrow from './assets/arrow.svg';
import phone from './assets/phone.svg';
import restaurant1 from './assets/restaurant-1.svg';
import restaurant2 from './assets/restaurant-2.svg';
import restaurant3 from './assets/restaurant-3.svg';
import experience from './assets/experience.svg';
import commissions from './assets/commissions.svg';
import ipad from './assets/ipad.svg';
import customers from './assets/customers.svg';
import iphone from './assets/iphone.svg';
import map from './assets/map.svg';


function Home() {
    return (
        <div>
            <Container fluid className="way-containerl way-intro">
                <Row>
                    <Col lg={7}>
                        <div className="home-title">
                                <h1>
                                    <span className="way-c">Way</span> is here to help
                                </h1>
                                <p>
                                    During this time of uncertainty, we understand how difficult it is to be a restaurant in Ithaca. As Cornell students, we wanted to do our part to help our community as it adjusts to new conditions during the COVID-19 pandemic. With that in mind, we created a way for you to thrive in the new age of no-contact.
                                </p>

                                <div className="d-block">
                            <p className="way-c mb-0"><a href="#learn" style={{all: "unset"}}>Learn More</a></p>
                            <a className="arrow-down"href="#learn" style={{all: "unset"}}><img src={arrow} alt="Down arrow"/></a>
                        </div>
                        </div>
                       
                    </Col>
                    <Col lg={5} className="store text-center">
                        <img src={store} alt="Store open"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="way-containerl way-intro" id="learn">
                <Row className="parent">
                    <Col className="phonez text-center b" lg={6}>
                        <img src={phone} className="" alt="Phone"/>
                    </Col>
                    <Col className="phonez c">
                        <h1 className="way-phone-text">Improve your margins with <span className="way-underline">contactless</span> ordering & payments</h1>
                        <p className="" >Respond to the coronavirus by bringing the safety of online-delivery into your restaurant, without the costly commissions. Our mobile ordering and payments platform enables contactless in-store operations.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="way-container way-bg text-white text-center pt-5" id="How">
                <Row className="steps">
                    <Col xs={12}>
                        <h1 className="text-center">How Way works for your restaurant</h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <img className="way-restaurant-image" src={restaurant1} alt="Restaurant1"/>
                        <div className="way-restaurant-texts">
                            <h3>Customers Scan</h3>
                            <p>Customers scan a QR code to view your digital menu, place an order, and pay with Way.</p>
                        </div>
                    </Col>
                    <Col>
                        <img className="way-restaurant-image" src={restaurant2} alt="Restaurant1"/>
                        <div className="way-restaurant-texts">
                            <h3>You Prepare</h3>
                            <p>Your restaurant accepts and prepares the order, contact-free. No paper tickets, no cards, no cash, no pens.</p>
                        </div>
                    </Col>
                    <Col>
                        <img className="way-restaurant-image" src={restaurant3} alt="Restaurant1"/>
                        <div className="way-restaurant-texts">
                            <h3>Everyone Enjoys</h3>
                            <p>Customers get their order without having to wait in line and you boost in-store sales with less effort.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="way-why text-center steps why" id="benefits">
                <Row>
                    <Col xs={12}><h3>Why Way?</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}><p className="text-black">We help businesses like yours elevate their in-store experience and become local favorites.</p></Col>
                </Row>
            </Container>
            <Container className="way-containerl way-right">
                <Row className="parent">
                    <Col className ="c" lg={5}>
                        <h1>Experience more in-store</h1>
                        <p>
                            We offer digital tools to modernize your front and back of house operations. Our platform is purpose-built to increase your orders, throughput, and customer satisfaction.
                        </p>
                    </Col>
                    <Col className="text-center b">
                        <img src={experience} alt="Store open"/>
                    </Col>
                </Row>
            </Container>
            <Container className="way-containerl way-left-sp">
                <Row className="parent">
                    <Col lg={5} className="text-center b">
                        <img src={commissions} alt="Commissions"/>
                    </Col>
                    <Col  className ="c">
                        <h1>Pay zero Commissions</h1>
                        <p>
                            Accept digital orders without the commissions and service fees charged by third-party delivery companies. Save anywhere from 10%-30% on every order.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="way-containerl way-right-ipad way-efficiency way-coloured">
                <Row>
                    <Col lg={6}>
                        <h1>Increase efficiency</h1>
                        <p className="text-white">
                            Our platform lets your walk-in customers order and pay digitally, so you can serve more guests with less effort. We’ll handle the orders and payments, so you can focus on safe, paperless service.
                        </p>
                    </Col>
                    <Col className="text-center">
                        <img src={ipad} alt="iPad"/>
                    </Col>
                </Row>
            </Container>
            <Container className="way-containerl way-left">
                <Row className="parent">
                    <Col lg={6} className="text-center b">
                        <img src={customers} alt="Customers"/>
                    </Col>
                    <Col className="c"> 
                        <h1>Delight your customers</h1>
                        <p>Save your guests time and hassle by letting them scan to order and pay the second they arrive. Our platform queues orders in the cloud so you can reduce your line at the register.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="way-container way-bg way-right-sp text-white way-coloured">
                <Row>
                    <Col lg={7}>
                        <h1>Boost your digital presence</h1>
                        <p >
                            Make the first impression count with your digital menu. From hand-picked photos to personalized design, we offer the custom solutions you need to create the image you want.
                        </p>
                    </Col>
                    <Col className="text-center">
                        <img src={iphone} alt="iPad"/>
                    </Col>
                </Row>
            </Container>
            <Container className="way-containerl way-left">
                <Row className="parent">
                    <Col lg={6} className="text-center b">
                        <img src={map} alt="Map"/>
                    </Col>
                    <Col className="c"> 
                        <h1>Reach new customers</h1>
                        <p>Grow your sales by connecting with more people when they’re hungry. We feature your menu on our platform so that new customers can discover your restaurant.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center way-get-started mb-5">
                <Row>
                    <Col className = "transform"xs={12}>
                        <h1>Transform your ordering and payments.</h1>
                    </Col>
                    <Col xs={12}>
                        <h1>Countless benefits, one <span className="way-c">WAY</span>.</h1>
                    </Col>
                    <Col xs={12} className="text-center mt-5">
                        <span className="way-buttondown"><Link to="/start" style={{all: 'unset'}}>Get Started</Link></span>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Home
