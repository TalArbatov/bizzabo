import React from 'react';

const Event = ({
  title,
  date,
  lineup = [],
  url
}) => {
  return (
    <div>
      <h2>Event</h2>
      <p>{ title }</p>
      <p>{ date }</p>
      <p>{ lineup.join(', ') }</p>
      <p><a href={ url }>More information</a></p>
    </div>
  )
};

export default Event;