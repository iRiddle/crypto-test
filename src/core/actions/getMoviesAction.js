import {
  GET_MOVIES_PENDING,
  GET_MOVIES_FULFILLED,
  GET_MOVIES_REJECTED,
  GET_MOVIES_TRIGGER
} from "../constants/getMoviesConstants";

export const getMoviesPending = () => ({
  type: GET_MOVIES_PENDING
});

export const getMoviesFulfilled = data => ({
  type: GET_MOVIES_FULFILLED,
  data
});

export const getMoviesRejected = error => ({
  type: GET_MOVIES_REJECTED,
  error
});

export const getMoviesTrigger = query => ({
  type: GET_MOVIES_TRIGGER,
  query
});
