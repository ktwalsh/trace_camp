import React from 'react';
import './App.css';
import { getEvents } from './eventWorker'
import Event from "./components/Event"
import Attendee from './components/Attendee';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Details from './components/Details';
import Home from './components/Home';
import AllEvents from "./components/AllEvents"
import EventDetail from './components/EventDetail'
import CreateEvent from './components/CreateEvent'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/allevents" exact component={AllEvents} />
        <Route path="/event/:event_id" component={EventDetail} />
        <Route path="/myevents" component={Event} />
        <Route path='/create' component={CreateEvent} />
        <Route path="/attendees/:event_id/" exact component={Attendee} />
        <Route path="/attendees/:event_id/details/:attendee_id" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
