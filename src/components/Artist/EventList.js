import React from 'react';
import Event from './Event';

const EventList = ({
  events = []
}) => {
  console.log('tal2', events);
  return (
    <div>
      { events.map(event => <Event key={ event.id } title={ event.title }/>) }
    </div>
  )
};

export default EventList;