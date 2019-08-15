import { createSelector } from "reselect";

const get = require("lodash/get");
// const isEmpty = require("lodash/isEmpty");

export const movieInfoSelector = state => get(state, "movieInfo.movieInfo", {});
export const movieInfoPendingSelector = state =>
  get(state, "movieInfo.isFetching", '');
