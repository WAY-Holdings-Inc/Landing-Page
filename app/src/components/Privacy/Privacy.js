import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import '../LegalComponents/LegalStyles.css';

import { Link, TitledParagraph, ListHeader } from '../LegalComponents/LegalComponents'

function Privacy() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>
            <section id="[8]">
              <br />
              <h1>Privacy Policy</h1>
              <br /><br />
              <h2>Way Privacy Policy</h2>
              <br />
              <p><span className="subtitle">Date of Last Revision: June 2020</span></p>
              <br />
            </section>
            <section>
              <p>
                Welcome to the website (the “<span class="bold">Site</span>”) of Way Holdings Inc. (<span class="bold">“Company,” “we,” “us,”</span><span class="bold"> or “our”</span>). Way provides digital solutions to streamline merchant operations (collectively, including the Site and any related mobile applications, the “<span class="bold">Service</span>”).
              </p>
              <p>
                Way Holdings, Inc. (<span class="bold">“Company,” “we,” “us,”</span><span class="bold"> or “our”</span>) has prepared this Privacy Policy to explain what Personal Data (defined below) we collect, how we use and share that data, and your choices concerning our data practices. Through our mobile application (the “<span class="bold">App</span>”), we facilitate orders and payments (such services, including <Link src="www.paywithway.com" /> (the “<span class="bold">Site</span>”) and the App, are referred to collectively in this Privacy Policy as the “<span class="bold">Service</span>”).
              </p>
              <p>
                This Privacy Policy explains what Personal Data (defined below) we collect, how we use and share that data, and your choices concerning our data practices. This Privacy Policy is incorporated into and forms part of our Terms of Service.
              </p>
              <p>
                Before using the Service or submitting any Personal Data to Company, please review this Privacy Policy carefully and contact us if you have any questions. By using the Service, you agree to the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not access the Site or otherwise use the Service.
              </p>
            </section>
            <section>
              <ListHeader large content="1. PERSONAL DATA WE COLLECT" />
              <p>
                We collect information that alone or in combination with other information in our possession could be used to identify you (“<span class="bold">Personal Data</span>”) as follows:
              </p>
              <TitledParagraph noindent header="Personal Data You Provide:" content="We collect Personal Data when you enter information into our sites or applications. The Personal Data collected during these interactions may vary based on what you choose to share with us, but it will generally include name, email, telephone number, location. We collect your location information through the App using your device IP address, WiFi, Bluetooth, and GPS coordinates (e.g. latitude/longitude) of your mobile device. If you have given the App permission to access your location, we may collect your device’s location even if you are not using the Service and store your location history. If you want to opt-out of the collection of your location data, please adjust your settings in your mobile device to limit the App’s access to your location data." />
              <p>
                <span class="bold">Personal Data We Collect Through Our Social Media Pages:</span>
                We have pages on social media sites like Instagram, Facebook, Medium, Twitter, and LinkedIn (“Social Media Pages”). When you interact with our Social Media Pages, we will collect Personal Data that you elect to provide to us, such as your contact details. In addition, the companies that host our Social Media Pages may provide us with aggregate information and analytics regarding the use of our Social Media Pages
                <Link jump src="[8]" />.
              </p>
            </section>

          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Privacy