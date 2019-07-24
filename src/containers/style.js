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
  width: 100%;
  background: #d0dde7;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.filters ? "row" : "column")};
`;
