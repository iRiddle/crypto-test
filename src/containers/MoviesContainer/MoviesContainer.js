import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styled from "styled-components";

import { Lines } from "react-preloaders";
import Loader from "react-loader-spinner";

import { getMoviesTrigger } from "../../core/actions/getMoviesAction";
import { getMovieInfoTrigger } from "../../core/actions/getMovieInfoAction";

import {
  getFilterMovieSelector,
  getFilterGenreSelector,
  getFilterRangeSelector,
  getFilterYearSelector
} from "../../core/selectors/appliedFiltersSelector";
import {
  movieInfoSelector,
  movieInfoPendingSelector
} from "../../core/selectors/getMovieInfoSelector";

import { moviesPendingSelector } from "../../core/selectors/getMoviesSelector";

import { getMoviesSelector } from "../../core/selectors/getMoviesSelector";

import MovieInfo from "./MovieInfo";
import MovieCard from "../../components/MovieCard/MovieCard";
import FilterSticker from "../../components/FilterSticker/FilterSticker";
import { TitleH2 } from "../../components/Title/Title";

import { Container } from "../style.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const isEmpty = require("lodash/isEmpty");

const MoviesContainer = ({
  getMoviesTrigger,
  getMovieInfoTrigger,

  filterMovie,
  filterGenre,
  filterRange,
  filterYear,

  movies,
  moviesPending,

  movieInfo,
  movieInfoPending
}) => {
  const [sideBarIsOpen, handleSideBarOpen] = useState(false);
  const [filmId, handleSideBarClose] = useState(-1);
  useEffect(() => {
    getMoviesTrigger({ filterMovie, filterYear });
  }, []);

  const getMovieInfo = movieId => {
    if (movieId === filmId) {
      handleSideBarOpen(false);
      handleSideBarClose(-1);
      return;
    }
    handleSideBarClose(movieId);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    handleSideBarOpen(true);
    getMovieInfoTrigger(movieId);
  };

  const addToViewedStorage = idMovie => {
    let viewedMovies = JSON.parse(localStorage.getItem("viewedMoviesArray"));
    if (viewedMovies === null) {
      viewedMovies = [];
    }
    if (!viewedMovies.some(movie => movie === idMovie)) {
      viewedMovies.push(idMovie);
    }
    localStorage.setItem("viewedMoviesArray", JSON.stringify(viewedMovies));
  };

  return (
    <div>
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
        <FiltersContainer>
          <a href="/">На страницу фильтров</a>
        </FiltersContainer>
      </Container>
      <PayloadContainer>
        <MovieContainer>
          {moviesPending ? (
            <Lines />
          ) : !movies.length ? (
            <TitleH2 title="Фильмы не найден" />
          ) : (
            movies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                rate={movie.vote_average}
                releaseDate={movie.release_date}
                onClick={() => getMovieInfo(movie.id)}
              />
            ))
          )}
        </MovieContainer>
        {sideBarIsOpen && (
          <SidebarContainer>
            {movieInfoPending ? (
              <Loader type="Puff" color="#00BFFF" height="100" width="100" />
            ) : (
              <MovieInfo
                img={movieInfo.poster_path}
                title={movieInfo.title}
                tagline={movieInfo.tagline}
                overview={movieInfo.overview}
                rate={movieInfo.vote_average}
                releaseDate={movieInfo.release_date}
                duration={movieInfo.runtime}
                genres={movieInfo.genres}
                onClick={() => addToViewedStorage(movieInfo.id)}
              />
            )}
          </SidebarContainer>
        )}
      </PayloadContainer>
    </div>
  );
};

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-self: center;
`;

const PayloadContainer = styled.div`
  display: flex;
  width: 100%;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;
  background-color: #fff;
  box-shadow: -4px 0 5px -5px #333;
  z-index: 1;
  span {
    text-align: center;
    margin-top: 24px;
  }
`;

const mapStateToProps = state => ({
  filterMovie: getFilterMovieSelector(state),
  filterGenre: getFilterGenreSelector(state),
  filterRange: getFilterRangeSelector(state),
  filterYear: getFilterYearSelector(state),

  movies: getMoviesSelector(state),
  moviesPending: moviesPendingSelector(state),

  movieInfo: movieInfoSelector(state),
  movieInfoPending: movieInfoPendingSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMoviesTrigger, getMovieInfoTrigger }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
