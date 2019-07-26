import { AXIOS } from "../api";

import { takeEvery, takeLatest, put, call } from "redux-saga/effects";

export const GET_GENRES_PENDING = "GENRES::GET_GENRES_PENDING";
export const GET_GENRES_FULFILLED = "GENRES::GET_GENRES_FULFILLED";
export const GET_GENRES_REJECTED = "GENRES::GET_GENRES_REJECTED";

export const getGenresPending = () => ({
  type: GET_GENRES_PENDING
});

export const getGenresFulfilled = data => ({
  type: GET_GENRES_FULFILLED,
  payload: data
});

export const getGenresRejected = error => ({
  type: GET_GENRES_REJECTED,
  payload: error
});

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
    console.log(data);
    yield put(getGenresFulfilled(data));
  } catch (error) {
    yield put(getGenresRejected(error));
  }
}

export default function* watchFetchGenres() {
  yield takeLatest("FETCHED_GENRES", getGenresAction);
}
