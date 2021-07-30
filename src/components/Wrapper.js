import React from 'react';
import Search from './Artist/Search';
import Favorites from './Favorites';
import { StyledWrapper } from '../styled';
import Information from './Information/Information';

const Wrapper = () => {
  return (
    <StyledWrapper>
      <Search />
      <Information />
      <Favorites />
    </StyledWrapper>
  );
};

export default Wrapper;