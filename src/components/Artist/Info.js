import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { getArtistUrl, getArtistEventsUrl } from '../../utils';
import InfoRow from './InfoRow';
import { StyledInfo } from '../../styled';
import EventList from './EventList';

const Info = ({
  artistName
}) => {
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
        console.log(res.data);
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
        console.log('tal1', res.data);
        setEvents(res.data);
      } else {
        console.log('no such artist as', artistName);
      }
    })
  }

  return (
    <StyledInfo>
      <InfoRow src={ artist.image_url } name={ artist.name }/>
      <EventList events={ events }/>
    </StyledInfo>
  )
};

export default Info;