import { takeLatest, put, call } from "redux-saga/effects";
import { GET_MOVIE_INFO_TRIGGER } from "../constants/getMovieInfoConstants";
import AXIOS from "../api";

import {
  getMovieInfoFulfilled,
  getMovieInfoRejected,
  getMovieInfoPending
} from "../actions/getMovieInfoAction";

export function* getMovieInfoAction(action) {
  const { query } = action;
  try {
    yield put(getMovieInfoPending());
    const response = yield call(() => {
      return AXIOS.get(`/movie/${query}`);
    });
    yield put(getMovieInfoFulfilled(response.data));
  } catch (error) {
    yield put(getMovieInfoRejected(error));
  }
}

export default function* watchFetchMovieInfo() {
  yield takeLatest(GET_MOVIE_INFO_TRIGGER, getMovieInfoAction);
}
