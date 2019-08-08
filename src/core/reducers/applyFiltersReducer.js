import { APPLY_FILTERS } from "../constants/filtersConstants";

const filters = (state = {}, action) => {
  switch (action.type) {
    case APPLY_FILTERS:
      return action.data;
    default:
      return state;
  }
};

export default filters;
