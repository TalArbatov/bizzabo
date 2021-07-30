import React, { useState } from 'react';
import Info from './Info';
import TextField from '@material-ui/core/TextField';
import { StyledSearch } from '../../styled';
import _ from 'lodash';
import config from '../../config';

const Search = () => {
  const [artistName, setArtistName] = useState('');

  const handleSetArtistName = _.debounce(name => {
    setArtistName(name);
  }, config.DEBOUNCE_TIME);

  return (
    <StyledSearch>
      <TextField className="search-input" label="Search artists..." variant="outlined" onChange={ e => handleSetArtistName(e.target.value) }/>
      <Info artistName={ artistName }/>
    </StyledSearch>
  );
};

export default Search;