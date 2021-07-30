import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { getArtist } from '../../utils';

const Info = ({
  artistName
}) => {
  const [artist, setArtist] = useState({});

  useEffect(() => {
    artistName !== '' && axios.get(getArtist(artistName), { params: { app_id: '123' } }).then(res => {
      console.log(res.data);
    })
  }, [artistName])
  return (
    <div>
      app
    </div>
  )
};

export default Info;