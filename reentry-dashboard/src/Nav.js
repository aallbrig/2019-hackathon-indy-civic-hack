import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, RouteHandler, Link } from 'react-router';


export default function NavComponent() {
  return (
    <Nav>
      <LinkContainer to='/dashboard'>
        <Nav.Item>
          <Nav.Link eventKey={1}>Dashboard</Nav.Link>
        </Nav.Item>
      </LinkContainer>
      <LinkContainer to='/call-center'>
        <Nav.Item>
          <Nav.Link>Call Center</Nav.Link>
        </Nav.Item>
      </LinkContainer>
      <LinkContainer to='/voice-assistant'>
        <Nav.Item>
          <Nav.Link>Voice Assistant</Nav.Link>
        </Nav.Item>
      </LinkContainer>
      <LinkContainer to='/about'>
        <Nav.Item>
          <Nav.Link>About</Nav.Link>
        </Nav.Item>
      </LinkContainer>
    </Nav>
  );
};
