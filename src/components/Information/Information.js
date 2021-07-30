import React from 'react';
import Event from './Event';
import SpecialOffers from './SpecialOffers';
import Venue from './Venue';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../actions/events';

const Information = () => {
  const dispatch = useDispatch();

  const event = useSelector(state => state.events.selectedEvent);
  const favorites = useSelector(state => state.events.favorites);

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({
      id: event.id,
      title: event.title
    }));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(event.id));
  };

  const inFavorites = !!favorites.find(favorite => favorite.id === event.id);

  const renderInfo = () => {
    return Object.keys(event).length !== 0 ? ( // TODO: validate object type as well
      <div>
        <Event 
          title={ event.title } 
          date={ event.datetime } 
          lineup={ event.lineup }
          url={ event.url } />
        <Venue venue={ event.venue }/>
        <SpecialOffers offers={ event.offers }/>
        { !inFavorites ? <button onClick={ handleAddToFavorites }>Add to favorites</button> : <button onClick={ handleRemoveFromFavorites }>Remove from favorites</button> }
      </div>
    ) : null
  }
  return renderInfo();
};

export default Information;