import React from 'react';
import { StyledInfoRow } from '../../styles';

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