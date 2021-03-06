import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import Dashboard from './Dashboard';
import Home from './Home';
import About from './About';
import CallCenter from './CallCenter';
import Header from './Header';
import VoiceAssistance from './VoiceAssistance';

import './App.css';

export default function App() {
  return (
    <Router>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossOrigin='anonymous'
      />
      <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/pulse/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-/uQFqO50IaQu2rNJYKPpV7zwsWJtd6V4DGX4wMw1ATz4KPuZEV96qQ2heVAw2kr2" crossOrigin="anonymous" />

      <Container>
        <Header />

        <Route exact path='/' component={() => (<Redirect to='/dashboard' />)} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/call-center' component={CallCenter} />
        <Route path='/voice-assistance' component={VoiceAssistance} />
        <Route path='/about' component={About} />
        <Route component={() => (<Redirect to='/dashboard' />)} />
      </Container>
    </Router>
  );
};
