import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  return <div>{children}</div>;
};

const CardStyled = styled(Card)`
  display: flex;
  padding: 12px;
  margin: 12px;
  background-color: pink;
`;

export default CardStyled;
