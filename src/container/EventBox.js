import React, { Component } from 'react';
import EventList from '../components/EventList.js'
import EventForm from '../components/EventForm.js'

class EventBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventData: []
    };

    this.handleEventSubmit = this.handleEventSubmit.bind(this)
  }

  handleEventSubmit(newEvent){
    const updateEvents = [...this.state.eventData, newEvent]
    this.setState({eventData: updateEvents})
  }

  render(){
    return (
      <div className="event-card">
        <h3>Event</h3>
          <EventList events={this.state.eventData} />
        <h3>New event</h3>
          <EventForm handleEventSubmit={this.handleEventSubmit}/>
      </div>
    );
  }
}


export default EventBox;
