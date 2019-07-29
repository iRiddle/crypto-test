import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  margin: 12px;
  background-color: pink;
  border: 2px solid palevioletred;
`;

export default Card;
