import {
  GET_GENRES_PENDING,
  GET_GENRES_FULFILLED,
  GET_GENRES_REJECTED,
  GET_GENRES_TRIGGER
} from "../constants/getGenresConstants";

export const getGenresPending = () => ({
  type: GET_GENRES_PENDING
});

export const getGenresFulfilled = data => ({
  type: GET_GENRES_FULFILLED,
  data
});

export const getGenresRejected = error => ({
  type: GET_GENRES_REJECTED,
  error
});

export const getGenresTrigger = () => ({
  type: GET_GENRES_TRIGGER
});
