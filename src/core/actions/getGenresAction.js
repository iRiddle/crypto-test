import { AXIOS } from "../api";

import { takeEvery, put } from "redux-saga/effects";

export const GET_GENRES_PENDING = "GENRES::GET_GENRES_PENDING";
export const GET_GENRES_FULFILLED = "GENRES::GET_GENRES_FULFILLED";
export const GET_GENRES_REJECTED = "GENRES::GET_GENRES_REJECTED";

const getGenresPending = () => ({
  type: GET_GENRES_PENDING
});

const getGenresFulfilled = data => ({
  type: GET_GENRES_FULFILLED,
  payload: data
});

const getGenresRejected = error => ({
  type: GET_GENRES_REJECTED,
  payload: error
});

function* getGenres() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch("https://dog.ceo/api/breeds/image/random").then(res =>
        res.json()
      );
    });
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}
