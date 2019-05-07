import React from "react";
import Event from './Event.js'

const EventList = (props) =>{
  const events = props.events.map((event) => {
    return (
      <Event name = {event.name} date = {event.date} description = {event.description}/>
    )
  })
    return (
      <div> {events} </div>
    )
  }

export default EventList;
