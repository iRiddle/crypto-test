import React from "react";
import styled, { css } from "styled-components";

const Button = props => {
  console.log(props);
  return <button >ds</button>;
};

const ButtonStyled = styled(Button)`
  display: flex;

  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default ButtonStyled;
