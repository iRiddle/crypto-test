import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  dispaly: flex;
  background: #d0dde7;
  margin: ${props => (props.isFilter ? "25vh 0" : "none")};
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.filters ? "row" : "column")};
`;
