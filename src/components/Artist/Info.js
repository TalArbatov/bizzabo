import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { getArtistUrl, getArtistEventsUrl } from '../../utils';
import InfoRow from './InfoRow';
import { StyledInfo } from '../../styled';
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
      if (res.data) {
        setArtist(res.data);
      } else {
        console.log('no such artist as', artistName);
      }
    })
  }

  const fetchEvents = () => {
    axios.get(getArtistEventsUrl(artistName), { params: { app_id: '123' } })
    .then(res => {
      if (res.data) {
        setEvents(res.data);
      } else {
        console.log('no events for', artistName);
      }
    })
  }

  const displayEvent = eventId => {
    const selectedEvent = events.find(event => event.id === eventId);
    dispatch(updateEvent(selectedEvent));
  };

  return (
    <StyledInfo>
      <InfoRow src={ artist.image_url } name={ artist.name }/>
      <EventList events={ events } displayEvent={ eventId => displayEvent(eventId) }/>
    </StyledInfo>
  )
};

export default Info;