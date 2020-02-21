import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { selectFilteredTours } from 'redux/tour/tourSelectors';

import FilteredListDropdownItem from 'components/filteredListDropdownItem/filteredListDropdownItem';

import { ModalWrapper } from './styles';
import { AppState } from 'redux/rootReducer';

const FilteredListDropdown = () => {
  const filteredTours = useSelector(
    (state: AppState) => selectFilteredTours(state),
    shallowEqual
  );
  return (
    <ModalWrapper>
      {filteredTours.map(tour => (
        <FilteredListDropdownItem
          key={tour.id}
          id={tour.id}
          name={tour.name}
          location={tour.startLocation.description}
          startDate={tour.startDates[0].split('T')[0]}
          ratingsAverage={tour.ratingsAverage}
          slug={tour.slug}
        />
      ))}
    </ModalWrapper>
  );
};

export default FilteredListDropdown;
