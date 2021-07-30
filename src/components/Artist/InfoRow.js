import React from 'react';
import { StyledInfoRow } from '../../styled';

const InfoRow = ({
  src = '',
  name = ''
}) => {
  return (
    <StyledInfoRow>
      <img src={ src } />
      <span>{ name }</span>
    </StyledInfoRow>
  );
};

export default InfoRow;