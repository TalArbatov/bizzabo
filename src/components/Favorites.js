import React, { useEffect } from 'react';
import { StyledFavorites } from '../styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { setFavorites } from '../actions/events';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../actions/events';

const Favorites = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // set favorites from localStorage to state
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    dispatch(setFavorites(favorites))
  }, []);
  const events = useSelector(state => state.events.favorites);
  
  const handleRemoveFromFavorites = eventId => {
    console.log(eventId);
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    localStorage.setItem('favorites', JSON.stringify(favorites.filter(event => event.id !== eventId)));
    dispatch(removeFromFavorites(eventId));
  };

  const renderFavorites = () => {
    return events.length === 0 ? <div></div> : (
      <StyledFavorites>
        <h2>Favorites</h2>
        <div>
          {
            events.map((event, index) => (
              <div className="favorite-card-wrapper" key={ index }>
                <img className="star-icon" src="../../../assets/star.svg" />
                <Card className="event-card">
                  <CardContent>
                    <div className="favorite-card-content">
                      <span>{ event.title === '' ? <i>No name</i> : event.title }</span>
                      <div onClick={ () => handleRemoveFromFavorites(event.id) }>
                        <img className="trashcan-icon" src="../../../assets/trashcan.svg" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          }
        </div>
    </StyledFavorites>
    );
  };
  return renderFavorites();
};

export default Favorites;