import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getArtistUrl, getArtistEventsUrl } from '../../utils';
import InfoRow from './InfoRow';
import { StyledInfo } from '../../styles';
import EventList from './EventList';
import { useDispatch } from 'react-redux';
import { updateEvent } from '../../actions/events';

const Info = ({
  artistName
}) => {
  const dispatch = useDispatch();

  const [artist, setArtist] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchArtist();
    fetchEvents();
  }, [artistName]);

  const fetchArtist = () => {
    artistName !== '' && axios.get(getArtistUrl(artistName), { params: { app_id: '123' } })
    .then(res => {
        res.data && setArtist(res.data);
    });
  }

  const fetchEvents = () => {
    artistName !== '' && axios.get(getArtistEventsUrl(artistName), { params: { app_id: '123' } })
    .then(res => {
        res.data && setEvents(res.data); 
    });
  }

  const displayEvent = eventId => {
    const selectedEvent = events.find(event => event.id === eventId);
    dispatch(updateEvent(selectedEvent));
  };

  const renderInfo = () => {
    return artistName !== '' && Object.keys(artist).length !== 0 ? (
      <>
        <InfoRow src={ artist.image_url } name={ artist.name }/>
        <EventList events={ events } displayEvent={ eventId => displayEvent(eventId) }/>
      </>
    ) : <div></div>;
  };

  return (
    <StyledInfo>
      { renderInfo() }
    </StyledInfo>
  );
};

export default Info;