import { createSelector } from 'reselect';

const selectTour = state => state.tour;

export const selectAllTours = createSelector(
  [selectTour],
  tour => tour.allTours
);

export const selectTourFilterText = createSelector(
  [selectTour],
  tour => tour.filter.text
);

export const selectFilteredTours = createSelector(
  [selectAllTours, selectTourFilterText],
  (allTours, filterText) =>
    allTours.filter(tour => tour.name.toLowerCase().includes(filterText))
);
