import { takeLatest, put, call } from "redux-saga/effects";
import { GET_GENRES_TRIGGER } from "../constants/getGenresConstants";
import AXIOS  from "../api";

import {
  getGenresFulfilled,
  getGenresRejected,
  getGenresPending
} from "../actions/getGenresAction";

export function* getGenresAction() {
  try {
    yield put(getGenresPending());
    const response = yield call(() => {
      return AXIOS.get("/genre/movie/list");
    });
    yield put(getGenresFulfilled(response.data));
  } catch (error) {
    yield put(getGenresRejected(error));
  }
}

export default function* watchFetchGenres() {
  yield takeLatest(GET_GENRES_TRIGGER, getGenresAction);
}
