import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './Contact.css';

import grayLogo from './assets/gray-logo.svg';


function Start() {
    return (
        <div className="get-started">
            <Container className="way-containerc pt-5">
                <Row className="text-center">
                    <Col xs={12}>
                        <h1 className="increase">Get in touch.</h1>
                    </Col>
                    <Col xs={12}>
                        <p className="increasep">If you’re interested in learning more about Way, we’d love to hear from you. Fill out the form below with your contact information, or email us at info@paywithway.com, and we’ll be in touch shortly!</p>
                    </Col>
                </Row>
                <div className="white-container">
                    <Form >
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="fname">
                                    <Form.Label className="label">First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="lname">
                                    <Form.Label className="label">Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="email">
                                    <Form.Label className="label">Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="phone">
                                    <Form.Label className="label">Phone Number</Form.Label>
                                    <Form.Control type="tel" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="businessName">
                                    <Form.Label className="label">Business Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="businessAddress">
                                    <Form.Label className="label">Business Address</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group controlId="message">
                                    <Form.Label className="label">Message</Form.Label>
                                    <Form.Control as="textarea" rows="4" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="text-center mt-4">
                            <Col className="way-buttons" xs={12}>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Row className="text-center mt-5">
                    <Col xs={12}>
                        <img src={grayLogo} alt="Logo"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    }
 


export default Start
