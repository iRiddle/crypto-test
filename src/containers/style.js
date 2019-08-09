import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: auto !important;
    position: relative !important
  },
  html {
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: ${props => props.isHeader && "flex"};
  flex-direction: ${props => props.isHeader && "row"};
  justify-content: ${props => props.isHeader && "space-around"};
  background: #d0dde7
  margin: ${props => (props.isFilter ? "25vh 0" : "none")};
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.filters ? "row" : "column")};
`;
