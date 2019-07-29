<<<<<<< HEAD
import { AXIOS } from "../api";

import { takeLatest, put, call } from "redux-saga/effects";

export const GET_GENRES_PENDING = "GENRES::GET_GENRES_PENDING";
export const GET_GENRES_FULFILLED = "GENRES::GET_GENRES_FULFILLED";
export const GET_GENRES_REJECTED = "GENRES::GET_GENRES_REJECTED";
=======
import {
  GET_GENRES_PENDING,
  GET_GENRES_FULFILLED,
  GET_GENRES_REJECTED,
  GET_GENRES_TRIGGER
} from "../constants/getGenresConstants";
>>>>>>> 4b991128458b20967247e60b1a23625f6450463e

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

<<<<<<< HEAD
export function* getGenresAction() {
  try {
    yield put(getGenresPending());
    const data = yield call(() => {
      return AXIOS.get(
        "/movie/list?api_key=5fcdb863130c33d2cb8f1612b76cbd30&language=ru-RU"
      ).then(response => {
        console.log(response);
      });
    });
    yield put(getGenresFulfilled(data));
  } catch (error) {
    yield put(getGenresRejected(error));
  }
}

export default function* watchFetchGenres() {
  yield takeLatest("FETCHED_GENRES", getGenresAction);
}
=======
export const getGenresTrigger = () => ({
  type: GET_GENRES_TRIGGER
});
>>>>>>> 4b991128458b20967247e60b1a23625f6450463e
