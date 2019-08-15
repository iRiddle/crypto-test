import React from "react";
import styled from "styled-components";

const FilterSticker = ({ title }) => {
  return Array.isArray(title) ? (
    <StickerArrayStyled>
      {title.map(item => (
        <StickerStyled key={item.value || item}>
          {item.value || item}
        </StickerStyled>
      ))}
    </StickerArrayStyled>
  ) : (
    <StickerStyled>{title || title.label}</StickerStyled>
  );
};

const StickerStyled = styled.span`
  padding: 10px;
  margin-right: 10px;
  border: 2px solid palevioletred;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
`;

const StickerArrayStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export default FilterSticker;
