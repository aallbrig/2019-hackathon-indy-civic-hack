import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import driversLicense from './img/driving-license.png';
import childSupport from './img/custody.png';
import secondHelpings from './img/second-helpings.png';
import callCenter from './img/call-center.png';
import voiceAssistant from './img/voice-assistant.png';

const PLACEHOLDER_IMAGE_SRC = 'https://via.placeholder.com/300x150';

const cards = [
  {
    icon: <a href="/" target="_new"><Card.Img variant="top" className="custom-card-img" src={driversLicense} /></a>,
    title: 'Licenses and Documentation help',
    text: 'Example of overriding placeholder text'
  },
  {
    icon: <a href="https://www.in.gov/judiciary/2625.htm?fbclid=IwAR1ad-QkZ_1dzN3qi4dZZ6Kh1yuNL6K11HdwlZOnxo036jSZGgbKXqUnwok" target="_new">
      <Card.Img variant="top" className="custom-card-img" src={childSupport} />
    </a>,
    title: 'Child Support',
  },
  {
    icon: <a href="https://www.secondhelpings.org/" target="_new">
      <Card.Img variant="top" className="custom-card-img" src={secondHelpings}
                alt="Second Helpings, transforming lives through the power of food" />
    </a>,
    title: 'Second Helpings'
  },
  {
    icon: <a href="/" target="_new">
      <Card.Img variant="top" className="custom-card-img" src={PLACEHOLDER_IMAGE_SRC} />
    </a>,
    title: 'Employer'
  },
  {
    icon: <a href="/" target="_new">
      <Card.Img variant="top" className="custom-card-img" src={callCenter} />
    </a>,
    title: 'Get Help'
  },
  {
    icon: <a href="/" target="_new">
      <Card.Img variant="top" className="custom-card-img" src={voiceAssistant} />
    </a>,
    title: 'Voice Assistance'
  }
];


export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Row>
        {cards.map(card => (
          <Col xs={12} sm={4} md={3}>
            <Card>
              {card.icon ? card.icon : <Card.Img variant="top" className="custom-card-img" src={PLACEHOLDER_IMAGE_SRC} />}
              <Card.Body>
                <center>
                  <Card.Title>
                    {card.title ? card.title : 'Placeholder Title'}
                  </Card.Title>
                </center>
                <Card.Text>
                  {card.text ? card.text : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};