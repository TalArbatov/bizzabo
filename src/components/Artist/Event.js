import React from 'react';

const Event = ({
  title,
  id,
  displayEvent
}) => {
  return (
    <div onClick={ () => displayEvent(id) }>
      <p>{ title }</p>
    </div>
  )
};

export default Event;