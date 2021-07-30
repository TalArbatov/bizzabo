import React from 'react';
import Search from './Artist/Search';
import EventInformation from './EventInformation';
import Favorites from './Favorites';
import { StyledWrapper } from '../styled';


const Wrapper = () => {
  return (
    <StyledWrapper>
      <Search />
      <EventInformation />
      <Favorites />
    </StyledWrapper>
  )
};

export default Wrapper;