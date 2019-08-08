import { createSelector } from "reselect";

const get = require("lodash/get");

export const filtersSelector = store => store.filters;

export const getFilterMovieSelector = createSelector(
  filtersSelector,
  g => get(g, "movieName", "")
);

export const getFilterGenreSelector = createSelector(
  filtersSelector,
  g => get(g, "selectedOptionGenre", [])
);

export const getFilterRangeSelector = createSelector(
  filtersSelector,
  g => get(g, "rangeValue", [])
);

export const getFilterYearSelector = createSelector(
  filtersSelector,
  g => get(g, "selectedOptionYear.value", "")
);
