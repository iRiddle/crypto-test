import { APPLY_FILTERS } from "../constants/filtersConstants";

export const applyFilters = data => ({
  type: APPLY_FILTERS,
  data
});
