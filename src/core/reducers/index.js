import { combineReducers } from "redux";

import genres from "./getGenresReducer";
import movies from "./getMoviesReducer";
import filters from "./applyFiltersReducer";

const rootReducer = combineReducers({
  genres,
  filters,
  movies
});

export default rootReducer;
