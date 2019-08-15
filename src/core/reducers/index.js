import { combineReducers } from "redux";

import genres from "./getGenresReducer";
import movies from "./getMoviesReducer";
import movieInfo from "./getMovieInfoReducer";
import filters from "./applyFiltersReducer";

const rootReducer = combineReducers({
  genres,
  filters,
  movies,
  movieInfo
});

export default rootReducer;
