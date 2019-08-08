import { fork, all } from "redux-saga/effects";
import watchFetchGenres from "./getGenresSaga";
import watchFetchMovies from "./getMoviesSaga";

export default function* rootSaga() {
  yield all([fork(watchFetchGenres), fork(watchFetchMovies)]);
}
