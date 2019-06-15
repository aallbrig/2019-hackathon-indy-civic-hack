import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className='navbar-dark bg-primary'>
      <Navbar.Brand as={Link} to='/'>Soteria's Lighthouse</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/dashboard'>
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/call-center'>
            Call Center
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/voice-assistance'>
            Voice Assistance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/about'>
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}