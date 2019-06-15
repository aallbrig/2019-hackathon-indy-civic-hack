import React from 'react';
import { Row, Col, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import driversLicense from './img/driving-license.png';
import childSupport from './img/custody.png';
import secondHelpings from './img/second-helpings.png';
import callCenter from './img/call-center.png';
import voiceAssistant from './img/voice-assistant.png';
import millionJobs from './img/70-million-jobs.png';
import doctor from './img/doctor.png';
import mentalHealth from './img/love.png';
import food from './img/diet.png';
import WIC from './img/mother-with-baby-in-arms.png';
import volunteerAmerica from './img/logo-national-color.png';
import volunteer from './img/help.png';
import twoOneOne from './img/indiana211_logo_transparent.png';
import callCenterJobs from './img/jobs.png';

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
    icon: doctor,
    href: 'https://in211.communityos.org/guided_search/render/ds/%7B%22service%5C%5Cservice_taxonomy%5C%5Cmodule_servicepost%22%3A%7B%22value%22%3A%5B%7B%22taxonomy_id%22%3A410693%7D%5D%2C%22operator%22%3A%5B%22contains_array%22%5D%7D%2C%22agency%5C%5Cagency_system%5C%5Cname%22%3A%7B%22value%22%3A%22VLTEST%22%2C%22operator%22%3A%5B%22notequals%22%5D%7D%7D?localHistory=WgdEKyTRtEurzvkOb3B8Zw',
    title: 'Healthcare in Indiana',
    text: 'Finding healthcare can be a hassle, we\'ve found some clinics in your area. Please click here or use our Call Center or Voice Commands for assistance.'
  },
  {
    icon: mentalHealth,
    href: 'https://www.in.gov/fssa/dmha/2686.htm',
    title: 'Therapy and Family Counseling',
    text: 'Reentry can be hard on anyone, even the family. We\'ve gathered a resource to help with family counseling, support groups, or even addiction treament for drugs/alcohol. Family and mental health are building blocks for sobriety and moving on. If you would like any assistance please use the Call Center or user our Voice Commands.'
  },
  {
    icon: callCenter,
    href: '/',
    title: 'Call our Call Center',
    text: 'For expert advice and additional resources please call our call center.'
  },
  {
    icon: callCenterJobs,
    href: '/',
    title: 'Call our Call Center',
    text: 'If you\'d like to apply for position at the call center click here.'
  },
  {
    icon: volunteerAmerica,
    href: 'https://www.voa.org/correctional-re-entry-services',
    title: 'Volunteers of America',
    text: 'If you\'d like to help out or volunteer Volunteers of America. They specialize in reentry services and impact million nationally.'
  },
  {
    icon: food,
    href: 'https://www.in.gov/fssa/dfr/2691.htm',
    title: 'SNAP food assistance',
    text: 'Supplemental Nutrition Assistance Program information. Click here or use our Call Center or Voice Commands.'
  },
  {
    icon: WIC,
    href: 'https://www.in.gov/isdh/19691.htm',
    title: 'WIC assistance',
    text: 'Here is a resource for the Indiana Women, Infants, and Children Program. It includes imformation on how to apply, benefits, contact information, and documents. Click here or use our Call Center or Voice Commands.'
  },
  {
    icon: volunteer,
    href: 'https://www.in.gov/isdh/19691.htm',
    title: 'Indiana Volunteer Opportunities',
    text: 'Indiana has some volunteer opportunities and classes if you\'d like to learn or help fellow Hoosiers. Click here or use our Call Center or Voice Commands.'
  },
  {
    icon: twoOneOne,
    href: 'https://in211.communityos.org/',
    title: '2-1-1 resource',
    text: '2-1-1 is a free service that connects Hoosiers with help. Click here or use our Call Center or Voice Commands.'
  },
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