import React from 'react';
import { Row, Col, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import driversLicense from './img/driving-license.png';
import childSupport from './img/custody.png';
import secondHelpings from './img/second-helpings.png';
import callCenter from './img/call-center.png';
import voiceAssistant from './img/voice-assistant.png';
const PLACEHOLDER_IMAGE_SRC = 'https://via.placeholder.com/300x150';

const cards = [
  {
    icon: voiceAssistant,
    href: '/',
    title: 'Get Help using Voice Assistance',
    text: 'Example of overriding placeholder text'
  },
  {
    icon: driversLicense,
    href: '/',
    title: 'Driver License'
  },
  {
    icon: childSupport,
    href: 'https://www.in.gov/judiciary/2625.htm',
    title: 'Child Support Calculator',
  },
  {
    icon: secondHelpings,
    href: 'https://www.secondhelpings.org/',
    title: 'Second Helpings'
  },
  {
    icon: PLACEHOLDER_IMAGE_SRC,
    href: '/',
    title: 'Employer'
  },
  {
    icon: callCenter,
    href: '/',
    title: 'Call our Call Center'
  }
];


export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Row className="dashboard">
        {cards.map(card => (
          <Col xs={12} sm={4} md={3}>
            <OverlayTrigger
              trigger='hover'
              key={'right'}
              placement={'right'}
              overlay={
                <Popover
                  id={`popover-positioned-${card.title}`}
                  title={card.title ? card.title : 'Placeholder Title'}
                >
                  {card.text ? card.text : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
                </Popover>
              }
            >
              <a href={card.href} target='_new'>
                <Card className={'h-100'}>
                  <Card.Title className={'text-center'}>
                    {card.title ? card.title : 'Placeholder Title'}
                  </Card.Title>
                  <Card.Body style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                  }}>
                    <Card.Img variant='top' className='custom-card-img' src={card.icon ? card.icon : PLACEHOLDER_IMAGE_SRC} />
                  </Card.Body>
                </Card>
              </a>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </div>
  );
};