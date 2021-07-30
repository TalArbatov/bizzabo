import React, { useState } from 'react';
import Info from './Info';
import TextField from '@material-ui/core/TextField';
import { StyledSearch } from '../../styled';
import _ from 'lodash';

const Search = () => {
  const [artistName, setArtistName] = useState('');

  const handleSetArtistName = _.debounce(name => {
    console.log('test', name);
    setArtistName(name);
  }, 500)
  return (
    <StyledSearch>
      {/* <input type="text" value={ artistName } placeholder="Search artist..." onChange={ e => setArtistName(e.target.value) }/> */}
      <TextField className="search-input" label="Search artists..." variant="outlined" onChange={ e => handleSetArtistName(e.target.value) }/>
      <Info artistName={ artistName }/>
    </StyledSearch>
  )
};

export default Search;