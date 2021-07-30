import React, { useState } from 'react';

const Search = () => {
  const [artist, setArtist] = useState('');
  return (
    <div>
      <input type="text" value={ artist } placeholder="Search artist..." onChange={ e => setArtist(e.target.value) }/>
    </div>
  )
};

export default Search;