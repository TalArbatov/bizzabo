import React from 'react';

const Venue = ({
  venue = {}
}) => {
  // TODO: do not map by def index, find a unique key to map with
  const { city, country, region } = venue;
  return (
    <div>
      <h2>Venue</h2>
      <p>{ city }</p>
      <p>{ country }</p>
      <p>{ region }</p>
    </div>
  )
};

export default Venue;