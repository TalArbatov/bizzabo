import React from 'react';
import Event from './Event';

const EventList = ({
  events = [],
  displayEvent
}) => {
  return (
    <div>
      { events.map(event => 
        <Event 
          key={ event.id } 
          displayEvent={ eventId => displayEvent(eventId) }
          id={ event.id }
          title={ event.title }/>
      )}
    </div>
  );
};

export default EventList;