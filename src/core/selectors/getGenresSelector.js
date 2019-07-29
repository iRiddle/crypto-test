import { createSelector } from "reselect";

const get = require("lodash/get");

const genres = store => store.genres;
export const getGenresSelector = createSelector(
  genres,
  g => get(g, "genres.genres", [])
);
