import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './Confirm.css';

import grayLogo from './assets/gray-logo.svg';
import store from './assets/store.svg';


function Start() {
    return (
        <div className="get-started">
            <Container className="way-containerc pt-5">
        
                <div className="white-containerz">
                <Row>
                    <Col className = "togo" xs={12}>
                         <h1><span className="way-c">WAY</span> to go!</h1>
                    </Col>      
                 </Row>
                <Row>
                    <Col lg={6}>
                            <div className="home-titles">
                                 <p>
                                 Your customers will love engaging with your restaurant through Way.                                </p>
                                <p>
                                We look forward to helping you transform your in-store experience.                                </p>
                                <p>
                                We will be in touch shortly!
                                  </p>
                            </div>
                        </Col>
                    <Col lg={6} className="store text-center">
                        <img src={store} alt="Store open"/>
                    </Col>
                </Row>
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
