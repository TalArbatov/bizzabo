import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Event = ({
  title = '',
  id,
  displayEvent
}) => {
  return (
    <Card className="event-card" onClick={ () => displayEvent(id) }>
      <CardContent>
        <span>{ title === '' ? <i>No name</i> : title }</span> 
      </CardContent>
    </Card>
  );
};

export default Event;