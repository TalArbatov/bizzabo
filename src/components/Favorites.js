import React from 'react';
import { useSelector } from 'react-redux';
import { StyledFavorites } from '../styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Favorites = () => {
  const events = useSelector(state => state.events.favorites);
  const renderFavorites = () => {
    return events.length === 0 ? <div></div> : (
      <StyledFavorites>
        <h2>Favorites</h2>
        <div>
          {
            events.map((event, index) => (
              <div className="favorite-card-content">
                <img src="../../../assets/star.svg" />
                <Card className="event-card" key={ index }>
                  <CardContent>
                    <span>{ event.title }</span>
                  </CardContent>
                </Card>
              </div>
            ))
          }
        </div>
    </StyledFavorites>
    );
  }
  return renderFavorites();
};

export default Favorites;