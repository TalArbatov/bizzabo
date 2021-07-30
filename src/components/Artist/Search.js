import React, { useState } from 'react';
import Info from './Info';
import TextField from '@material-ui/core/TextField';
import { StyledSearch } from '../../styled';

const Search = () => {
  const [artistName, setArtistName] = useState('');
  return (
    <StyledSearch>
      {/* <input type="text" value={ artistName } placeholder="Search artist..." onChange={ e => setArtistName(e.target.value) }/> */}
      <TextField className="search-input" label="Search artists..." variant="outlined" value={ artistName } onChange={ e => setArtistName(e.target.value) }/>
      <Info artistName={ artistName }/>
    </StyledSearch>
  )
};

export default Search;