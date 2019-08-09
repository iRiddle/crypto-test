import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styled from "styled-components";
import { Lines } from "react-preloaders";

import { getMoviesTrigger } from "../../core/actions/getMoviesAction";

import {
  getFilterMovieSelector,
  getFilterGenreSelector,
  getFilterRangeSelector,
  getFilterYearSelector
} from "../../core/selectors/appliedFiltersSelector";

import { moviesPendingSelector } from "../../core/selectors/getMoviesSelector";

import { getMoviesSelector } from "../../core/selectors/getMoviesSelector";

import MovieCard from "../../components/MovieCard/MovieCard";
import FilterSticker from "../../components/FilterSticker/FilterSticker";
import { TitleH2 } from "../../components/Title/Title";

import { Container } from "../style.js";

const isEmpty = require("lodash/isEmpty");

const MoviesContainer = ({
  getMoviesTrigger,
  filterMovie,
  filterGenre,
  filterRange,
  filterYear,

  movies,
  moviesPending
}) => {
  useEffect(() => {
    getMoviesTrigger({ filterMovie, filterYear });
  }, []);

  return (
    <>
      <Container isHeader>
        <FiltersContainer>
          <TitleH2 title="Наименование фильма" />
          <FilterSticker title={filterMovie} />
        </FiltersContainer>
        {!isEmpty(filterGenre) && (
          <FiltersContainer>
            <TitleH2 title="Жанры" />
            <FilterSticker title={filterGenre} />
          </FiltersContainer>
        )}
        <FiltersContainer>
          <TitleH2 title="Рейтинг" />
          <FilterSticker title={filterRange} />
        </FiltersContainer>
        {!isEmpty(filterYear) && (
          <FiltersContainer>
            <TitleH2 title="Годы" />
            <FilterSticker title={filterYear} />
          </FiltersContainer>
        )}
      </Container>

      <MovieContainer>
        {moviesPending ? (
          <Lines />
        ) : !movies.length ? (
          <TitleH2 title="Фильмы не найден" />
        ) : (
          movies.map(movie => (
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              rate={movie.vote_average}
              releaseDate={movie.release_date}
            />
          ))
        )}
      </MovieContainer>
    </>
  );
};

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const mapStateToProps = state => ({
  filterMovie: getFilterMovieSelector(state),
  filterGenre: getFilterGenreSelector(state),
  filterRange: getFilterRangeSelector(state),
  filterYear: getFilterYearSelector(state),

  movies: getMoviesSelector(state),
  moviesPending: moviesPendingSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMoviesTrigger }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
