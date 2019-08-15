import { combineReducers } from "redux";

import {
  GET_MOVIE_INFO_PENDING,
  GET_MOVIE_INFO_FULFILLED,
  GET_MOVIE_INFO_REJECTED
} from "../constants/getMovieInfoConstants";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_MOVIE_INFO_REJECTED:
    case GET_MOVIE_INFO_FULFILLED:
      return false;
    case GET_MOVIE_INFO_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_MOVIE_INFO_REJECTED:
      return action.error;
    default:
      return state;
  }
};

const movieInfo = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIE_INFO_FULFILLED:
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  movieInfo
});

export default reducer;
