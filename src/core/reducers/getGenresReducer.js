import { combineReducers } from "redux";

import {
  GET_GENRES_PENDING,
  GET_GENRES_FULFILLED,
  GET_GENRES_REJECTED
} from "../constants/getGenresConstants";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_GENRES_REJECTED:
    case GET_GENRES_FULFILLED:
      return false;
    case GET_GENRES_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_GENRES_REJECTED:
      return action.error;
    default:
      return state;
  }
};

const genres = (state = [], action) => {
  switch (action.type) {
    case GET_GENRES_FULFILLED:
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  genres
});

export default reducer;
