import React from 'react';
import { Row, Col, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import driversLicense from './img/driving-license.png';
import childSupport from './img/custody.png';
import secondHelpings from './img/second-helpings.png';
import callCenter from './img/call-center.png';
import voiceAssistant from './img/voice-assistant.png';
import millionJobs from './img/70-million-jobs.png';
const PLACEHOLDER_IMAGE_SRC = 'https://via.placeholder.com/300x150';


const cards = [
  {
    icon: voiceAssistant,
    href: '/',
    title: 'Get Help using Voice Assistance',
    text: 'Use your phone or Amazon Alexa device to help navigate our voice operated shortcuts.'
  },
  {
    icon: driversLicense,
    href: 'https://www.in.gov/bmv/2532.htm',
    title: 'Driver License',
    text: 'Drier\'s License BMV link for information and starting the process. If you\'d like assitance with this process please click into the call center dashboard icon.'
  },
  {
    icon: childSupport,
    href: 'https://www.in.gov/judiciary/2625.htm',
    title: 'Child Support Calculator',
    text: 'This calculator helps calculate the expected amount of support you\'d expect to pay'
  },
  {
    icon: secondHelpings,
    href: 'https://www.secondhelpings.org/',
    title: 'Second Helpings',
    text: 'Second Helpings is an organization that helps transform lives through food. They help train underemployed and unemployed Hoosiers find meaningful jobs in the culinary industry'
  },
  {
    icon: millionJobs,
    href: 'https://www.70millionjobs.com/search',
    title: 'Help me find jobs in Indiana',
    text: '70 Million Jobs is a national organization that helps felons find jobs. Click the link and type your location in the input field to find jobs in your area.'
  },
  {
    icon: callCenter,
    href: '/',
    title: 'Call our Call Center',
    text: 'For expert advice and additional resources please call our call center. If you\'d like to apply for position at the call center you may use the 70 Million Jobs link and search for "Call Center"'
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