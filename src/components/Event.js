import React from 'react';

const Event = (props) => {
return (
  <div className = "Event">
    <h3>{props.name}</h3>
    <h3>{props.date}</h3>
    <h3>{props.description}</h3>
  </div>
)

}
export default Event;
