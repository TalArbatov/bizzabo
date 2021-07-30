import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

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
