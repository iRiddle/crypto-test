import { combineReducers } from "redux";

import {
  GET_MOVIES_PENDING,
  GET_MOVIES_FULFILLED,
  GET_MOVIES_REJECTED
} from "../constants/getMoviesConstants";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_MOVIES_REJECTED:
    case GET_MOVIES_FULFILLED:
      return false;
    case GET_MOVIES_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_MOVIES_REJECTED:
      return action.error;
    default:
      return state;
  }
};

const movies = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES_FULFILLED:
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  movies
});

export default reducer;
