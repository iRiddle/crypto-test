import { takeLatest, put, call } from "redux-saga/effects";
import { GET_MOVIES_TRIGGER } from "../constants/getMoviesConstants";
import AXIOS from "../api";

import {
  getMoviesFulfilled,
  getMoviesRejected,
  getMoviesPending
} from "../actions/getMoviesAction";

export function* getMoviesAction(action) {
  const { query } = action;
  const { filterMovie, filterYear } = query;
  try {
    yield put(getMoviesPending());
    const response = yield call(() => {
      return AXIOS.get(`/search/movie?query=${filterMovie}&primary_release_year=${filterYear}`);
    });
    yield put(getMoviesFulfilled(response.data));
  } catch (error) {
    yield put(getMoviesRejected(error));
  }
}

export default function* watchFetchMovies() {
  yield takeLatest(GET_MOVIES_TRIGGER, getMoviesAction);
}
