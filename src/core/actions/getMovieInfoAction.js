import {
  GET_MOVIE_INFO_PENDING,
  GET_MOVIE_INFO_FULFILLED,
  GET_MOVIE_INFO_REJECTED,
  GET_MOVIE_INFO_TRIGGER
} from "../constants//getMovieInfoConstants";

export const getMovieInfoPending = () => ({
  type: GET_MOVIE_INFO_PENDING
});

export const getMovieInfoFulfilled = data => ({
  type: GET_MOVIE_INFO_FULFILLED,
  data
});

export const getMovieInfoRejected = error => ({
  type: GET_MOVIE_INFO_REJECTED,
  error
});

export const getMovieInfoTrigger = query => ({
  type: GET_MOVIE_INFO_TRIGGER,
  query
});
