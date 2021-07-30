import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const events = useSelector(state => state.events.favorites);
  return (
    <div>
      {
        events.map((event, index) => (
          <div key={ index }>
            <p>{ event.title }</p>
          </div>
        ))
      }
    </div>
  )
};

export default Favorites;