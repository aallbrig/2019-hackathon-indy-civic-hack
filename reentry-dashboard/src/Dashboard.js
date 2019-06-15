import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import driversLicense from './img/driving-license.png';
import childSupport from './img/custody.png';
import secondHelpings from './img/second-helpings.png';
import callCenter from './img/call-center.png';
import voiceAssistant from './img/voice-assistant.png';

export default function Dashboard() {
  const imageSrc = 'https://via.placeholder.com/300x150';
  return (
    <div>
      <h2>Dashboard</h2>
      <Row>
        <Col>
          <Card>
            <a href="/" target="_new"><Card.Img variant="top" className="custom-card-img" src={driversLicense} /></a>
            <Card.Body>
              <center><Card.Title>Licenses and Documentation help</Card.Title></center>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="/" target="_new">
                <Button variant="primary" size="md" block>
                  Go somewhere
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <a href="https://www.in.gov/judiciary/2625.htm?fbclid=IwAR1ad-QkZ_1dzN3qi4dZZ6Kh1yuNL6K11HdwlZOnxo036jSZGgbKXqUnwok" target="_new">
              <Card.Img variant="top" className="custom-card-img" src={childSupport} />
            </a>
            <Card.Body>
              <center><Card.Title>Child Support</Card.Title></center>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="https://www.in.gov/judiciary/2625.htm?fbclid=IwAR1ad-QkZ_1dzN3qi4dZZ6Kh1yuNL6K11HdwlZOnxo036jSZGgbKXqUnwok" target="_new">
                <Button variant="primary" size="md" block>
                  Go somewhere
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <a href="https://www.secondhelpings.org/" target="_new">
              <Card.Img variant="top" className="custom-card-img" src={secondHelpings} 
              alt="Second Helpings, transforming lives through the power of food" />
            </a>
            <Card.Body>
              <center><Card.Title>Second Helpings</Card.Title></center>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="https://www.secondhelpings.org/" target="_new">
                <Button variant="primary" size="md" block>
                  Go somewhere
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <a href="/" target="_new">
              <Card.Img variant="top" className="custom-card-img" src={imageSrc} />
            </a>
            <Card.Body>
              <center><Card.Title>Employer</Card.Title></center>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="/">
                <Button variant="primary" size="md" block>
                  Go somewhere
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <a href="/" target="_new">
              <Card.Img variant="top" className="custom-card-img" src={callCenter} />
            </a>
            <Card.Body>
              <center><Card.Title>Get Help</Card.Title></center>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="/" target="_new">
                <Button variant="primary" size="md" block>
                  Go somewhere
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <a href="/" target="_new">
              <Card.Img variant="top" className="custom-card-img" src={voiceAssistant} />
            </a>
            <Card.Body>
              <center><Card.Title>Voice Assistance</Card.Title></center>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="/">
                <Button variant="primary" size="md" block>
                  Go somewhere
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};