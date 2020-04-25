import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './Response.css';

import grayLogo from './assets/gray-logo.svg';
import store from './assets/store.svg';


function Start() {
    return (
        <div className="get-started">
            <Container className="way-containerc pt-5">
        
                <div className="white-containerz">
                <Row>
                    <Col className = "togo" xs={12}>
                         <h1>A response is on the <span className="way-c">WAY</span>!</h1>
                    </Col>      
                 </Row>
                <Row>
                    <Col lg={6}>
                            <div className="home-titles">
                                 <p>
                                 Thank you for your message.                               </p>
                                <p>
                                We look forward to connecting to learn more about how we can help you. </p>                
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
