import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import favoriteStar from "../../static/icons/-favourite-star.svg";

var ruLocale = require("date-fns/locale/ru");

const MovieInfo = ({
  img,
  title,
  tagline,
  overview,
  rate,
  releaseDate,
  duration,
  genres,
  onClick
}) => {
  return (
    <MovieInfoContainer>
      <ImageInfo src={`https://image.tmdb.org/t/p/original/${img}`} />
      <MainInfo>
        <span>{title}</span>
        <span>
          {rate}
          <img src={favoriteStar} width="15px" height="15px" alt="star" />
        </span>
      </MainInfo>
      <MainInfo>
        <p>{overview}</p>
      </MainInfo>
      <MainInfo>
        <span>Слоган: {tagline || '-'}</span>
      </MainInfo>
      <MainInfo>
        <span>Длительность: {duration} мин.</span>
      </MainInfo>
      <MainInfo>
        {genres.map(genre => (
          <span key={genre.id} style={{ margin: "0 6px" }}>
            {genre.name}
          </span>
        ))}
      </MainInfo>
      <MainInfo>
        <span>{format(releaseDate, "DD MMMM YYYY", { locale: ruLocale })}</span>
      </MainInfo>
      <MainInfo>
        <ButtonMoreStyled onClick={onClick}>Просмотрено?</ButtonMoreStyled>
      </MainInfo>
    </MovieInfoContainer>
  );
};

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageInfo = styled.img`
  width: 100%
  height: 500px
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  span {
    font-size: 18px;
  }

  p {
    text-align: justify;
    padding: 0 6px;
  }
`;
const ButtonMoreStyled = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  margin-top: 8px;
  border-radius: 3px;
  cursor: pointer;
`;
export default MovieInfo;
