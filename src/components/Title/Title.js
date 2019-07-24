import React from "react";
import styled from "styled-components";

export const TitleH1 = ({ title }) => {
  return <TitleH1Styled>{title}</TitleH1Styled>;
};

export const TitleH2 = ({ title }) => {
  return <TitleH2Styled>{title}</TitleH2Styled>;
};

export const TitleCard = ({ title }) => {
  return <TitleCardStyled>{title}</TitleCardStyled>;
};

const TitleH1Styled = styled.h1`
  color: palevioletred;
  margin: 0;
  padding: 0.5em 0.25em;
`;

const TitleH2Styled = styled.h2`
  color: black;
  margin 0;
  padding: 0.5em 0.25em;
`;

const TitleCardStyled = styled.span``;
