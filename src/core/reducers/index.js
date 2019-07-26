import { combineReducers } from "redux";
import genres from "./getGenresReducer";
const rootReducer = combineReducers({
  genres
});

export default rootReducer;
