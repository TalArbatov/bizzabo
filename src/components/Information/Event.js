import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Event = ({
  title,
  date,
  lineup = [],
  url
}) => {
  const parseHour = hour => {
    return hour.split(':').slice(0, 2).join(':');
  };

  const parseDate = date => {
    const arr = date.split('-');
    const [year, month, dayAndHour] = arr;
    const arr2 = dayAndHour.split('T');
    const [day, hour] = arr2;
    return `${day}/${month}/${year} at ${parseHour(hour)}`
  };

  return (
    <Card className="event-card">
      <CardContent>
        <div className="event-info-sub-column">
          <h2>Event</h2>
          <p>{ title }</p>
          <p><b>Date: </b>{ parseDate(date) }</p>
          <p><b>Lineup: </b>{ lineup.join(', ') }</p>
          <p><a href={ url }>More information</a></p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Event;