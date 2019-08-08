import { createSelector } from "reselect";

const get = require("lodash/get");

const movies = store => get(store, "movies", []);
const filters = store => get(store, "filters", {});

const getFilterRate = createSelector(
  filters,
  f => get(f, "rangeValue", [])
);

// createSelector for getFilterGenreIds

const getFilterGenreIds = createSelector(
  filters,
  f => console.log(f)
);

export const getMoviesSelector = createSelector(
  movies,
  getFilterRate,
  getFilterGenreIds,
  (m, fr, fg) => console.log(m, fr, fg)
);
