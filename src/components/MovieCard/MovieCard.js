import React from "react";
import { format } from "date-fns";

import styled from "styled-components";

import favoriteStar from "../../static/icons/-favourite-star.svg";

var ruLocale = require("date-fns/locale/ru");

const MovieCard = ({ title, overview, rate, releaseDate, onClick, id }) => {
  const isAddedToStorage = id => {
    let viewedMovies = JSON.parse(localStorage.getItem("viewedMoviesArray"));
    if (viewedMovies === null) {
      return false;
    } else {
      if (viewedMovies.some(movie => movie === id)) return true;
    }
    return false;
  };

  return (
    <ContainerMovieStyled>
      <LabelMovieStyled title>
        <div>{title}</div>
        {isAddedToStorage(id) && <span class="dot" title="Просмотрено" />}
      </LabelMovieStyled>
      <LabelMovieStyled overview>{overview}</LabelMovieStyled>
      <LabelMovieStyled rate>
        Рейтинг: {' '}
        {rate}
        <img src={favoriteStar} width="20px" height="20px" alt="star" />
      </LabelMovieStyled>

      <LabelMovieStyled>
        Дата: {format(releaseDate, "DD MMMM YYYY", { locale: ruLocale })}
      </LabelMovieStyled>

      <ButtonMoreStyled onClick={onClick} primary>
        Подробнее
      </ButtonMoreStyled>
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
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.title && "2rem"};
  text-align: ${props => props.overview && "justify"};
  margin-top: 8px;
  cursor: pointer;
  
  div {
    max-width: 60%;
  }

  span {
    height: 15px;
    width: 15px;
    background-color: #00bf63;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
    border: 0.5px solid #000000
  }
`;

const ButtonMoreStyled = styled.div`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  margin-top: 8px;
  border-radius: 3px;
  cursor: pointer;
`;

export default MovieCard;
