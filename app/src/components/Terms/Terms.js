import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import './Terms.css'

function Privacy() {
  return (
    <div>
      <Container className="way-containery text-center">
        <Row>
          <Col lg={12}>
            <article>
              <div className="header-block">
                <h1>TERMS OF SERVICE</h1>
              </div>
              <h2>Way Terms of Service</h2>
            </article>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Privacy