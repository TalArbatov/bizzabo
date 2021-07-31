import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
    .event-card {
      margin-bottom: 20px;
      background-color: #fafafa;
      width: 100%;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 25px 60px;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
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
    object-fit: cover;
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

export const StyledInformation = styled.div`
  .event-info-sub-column {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center !important;
`;

export const StyledFavorites = styled.div`
  > div {
    width: 100%;
  }
  .favorite-card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .favorite-card-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .star-icon {
      margin-right: 15px;
      margin-bottom: 20px;
    }
    .trashcan-icon {
      height: 20px;
      width: 20px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;