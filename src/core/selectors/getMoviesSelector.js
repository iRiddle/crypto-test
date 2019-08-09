import { createSelector } from "reselect";

const get = require("lodash/get");
const isEmpty = require("lodash/isEmpty");

const movies = store => get(store, "movies", []);
const filters = store => get(store, "filters", {});
export const moviesPendingSelector = store => get(store, "movies.isFetching", false);

const moviesData = createSelector(
  movies,
  m => get(m, "movies.results", [])
);

const getFilterRate = createSelector(
  filters,
  f => get(f, "rate", [])
);

const getFilterGenre = createSelector(
  filters,
  f => get(f, "genres", [])
);

const getFilterGenreIds = createSelector(
  getFilterGenre,
  f => f.map(genre => genre.id)
);

export const getMoviesSelector = createSelector(
  moviesData,
  getFilterRate,
  getFilterGenreIds,
  (md, fr, fg) => {
    const minRate = fr.slice(0, 1)[0];
    const maxRate = fr.slice(-1)[0];
    let filteredByGenresArray = [];
    const filteredByRateArray = md.filter(
      movie => movie.vote_average >= minRate && movie.vote_average <= maxRate
    );
    if (!isEmpty(fg)) {
      filteredByGenresArray = filteredByRateArray.filter(movie => {
        const genres = movie.genre_ids;
        for (let i = 0; i < fg.length; i++) {
          const isGenred = genres.some(genreFilter => genreFilter === fg[i]);
          if (isGenred) {
            return movie;
          }
        }
      });
    }

    return isEmpty(filteredByGenresArray)
      ? filteredByRateArray
      : filteredByGenresArray;
  }
);
