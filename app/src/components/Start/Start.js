import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './Start.css';

import grayLogo from './assets/gray-logo.svg';

function Start() {
    return (
        <div className="get-started">
            <Container className="way-containerc pt-5">
                <Row className="text-center">
                    <Col xs={12}>
                        <h1 className="increase">Increase your store sales today.</h1>
                    </Col>
                    <Col xs={12}>
                        <p className="increasep">Fill out the form below to get started!</p>
                    </Col>
                </Row>
                <div className="white-container">
                    <Form>
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
                                <Form.Group controlId="restaurantName">
                                    <Form.Label className="label">Restaurant Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="restaurantAddress">
                                    <Form.Label className="label">Restaurant Address</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="text-center mt-4">
                            <Col  className="way-buttons" xs={12}>

                            <Button  variant="primary" type="submit">
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
