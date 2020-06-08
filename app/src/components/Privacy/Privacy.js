import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import './Privacy.css'

function Privacy() {
  return (
    <div>
      <Container className="way-containery text-center">
        <Row>
          <Col lg={12}>
            <article>
              <div className="header-block">
                <h1>PRIVACY POLICY</h1>
              </div>

              <h2>Way Privacy Policy</h2>
            </article>

          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Privacy