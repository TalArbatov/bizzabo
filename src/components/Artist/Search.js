import React, { useState } from 'react';
import Info from './Info';

const Search = () => {
  const [artistName, setArtistName] = useState('');
  return (
    <div>
      <input type="text" value={ artistName } placeholder="Search artist..." onChange={ e => setArtistName(e.target.value) }/>
      <Info artistName={ artistName }/>
    </div>
  )
};

export default Search;