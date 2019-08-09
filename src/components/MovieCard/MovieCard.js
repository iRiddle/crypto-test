import React from "react";
import styled from "styled-components";

import favoriteStar from "../../static/icons/-favourite-star.svg";

const MovieCard = ({ title, overview, rate, releaseDate }) => {
  return (
    <ContainerMovieStyled>
      <LabelMovieStyled title>{title}</LabelMovieStyled>
      <LabelMovieStyled overview>{overview}</LabelMovieStyled>
      <LabelMovieStyled rate>
        Рейтинг:
        {rate}
        <img src={favoriteStar} width="20px" height="20px" alt="star" />
      </LabelMovieStyled>

      <LabelMovieStyled>Год: {releaseDate}</LabelMovieStyled>

      <LabelMoreStyled>
        <span>Подробнее</span>
      </LabelMoreStyled>
    </ContainerMovieStyled>
  );
};

const ContainerMovieStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 12px;
  max-width: 300px;
  min-width: 300px;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    border-color: #de8927;
  }
`;

const LabelMovieStyled = styled.div`
  font-size: ${props => props.title && "2rem"};
  text-align: ${props => props.overview && "justify"};
  margin-top: 8px;
  cursor: pointer;
`;

const LabelMoreStyled = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    text-decoration: underline;
    cursor: pointer;
    color: #de8927;
  }
`;

export default MovieCard;
