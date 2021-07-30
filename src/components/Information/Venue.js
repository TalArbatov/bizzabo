import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Venue = ({
  venue = {}
}) => {
  // TODO: do not map by def index, find a unique key to map with
  const { city, country, region } = venue;
  return (
    <Card className="event-card">
      <CardContent>
        <div className="event-info-sub-column">
          <h2>Venue</h2>
          <p>{ city }, { region }, { country }</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Venue;