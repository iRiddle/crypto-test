import { createSelector } from "reselect";

const get = require("lodash/get");

export const filtersSelector = store => store.filters;

export const getFilterMovieSelector = createSelector(
  filtersSelector,
  g => get(g, "title", "")
);

export const getFilterGenreSelector = createSelector(
  filtersSelector,
  g => get(g, "genres", [])
);

export const getFilterRangeSelector = createSelector(
  filtersSelector,
  g => get(g, "rate", [])
);

export const getFilterYearSelector = createSelector(
  filtersSelector,
  g => get(g, "year.value", "")
);
