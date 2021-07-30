import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
`;

export const StyledInfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  img {
    width: 100px;
    height: 100px;
    background-size: cover;
  }
  justify-content: space-between;
  align-items: center;
`;
