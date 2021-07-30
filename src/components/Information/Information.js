import React from 'react';
import Event from './Event';
import SpecialOffers from './SpecialOffers';
import Venue from './Venue';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../actions/events';
import { StyledInformation } from '../../styles';
import Button from '@material-ui/core/Button';

const Information = () => {
  const dispatch = useDispatch();

  const event = useSelector(state => state.events.selectedEvent);
  const favorites = useSelector(state => state.events.favorites);

  const handleAddToFavorites = () => {
    const eventToSave = {
      id: event.id,
      title: event.title
    };
    localStorage.setItem('favorites', JSON.stringify([eventToSave, ...favorites]));
    dispatch(addToFavorites(eventToSave));
  };

  const handleRemoveFromFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.filter(event => event.id !== event.id)));
    dispatch(removeFromFavorites(event.id));
  };

  const inFavorites = !!favorites.find(favorite => favorite.id === event.id);

  const renderInfo = () => {
    return Object.keys(event).length !== 0 ? ( // TODO: validate object type as well
      <StyledInformation className="event-info-sub-column">
        <Event 
          title={ event.title } 
          date={ event.datetime } 
          lineup={ event.lineup }
          url={ event.url } />
        <Venue venue={ event.venue }/>
        <SpecialOffers offers={ event.offers }/>
        { !inFavorites ? <Button variant="contained" onClick={ handleAddToFavorites }>Add to favorites</Button> : <Button variant="contained" onClick={ handleRemoveFromFavorites }>Remove from favorites</Button> }
      </StyledInformation>
    ) : <div></div>;
  }
  return renderInfo();
};

export default Information;