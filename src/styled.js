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

export const StyledSearch = styled.div`
  .search-input {
    width: 100%;
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
`;

export const StyledInfoRow = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0;
  flex-direction: row;
  img {
    width: 150px;
    height: 150px;
    background-size: cover;
    border-radius: 10px;
    margin-right: 10px;
  }
  span {
    font-size: 25px;
    font-style: italic
  }
  justify-content: start;
  align-items: center;
`;
