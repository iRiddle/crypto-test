import React from "react";
import styled from "styled-components";

const TextInput = ({ value, placeholder, onChange }) => {
  return (
    <TextInputContainer
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const TextInputContainer = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default TextInput;
