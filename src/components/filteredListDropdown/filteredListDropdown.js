import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectFilteredTours } from 'redux/tour/tourSelectors';

import FilteredListDropdownItem from 'components/filteredListDropdownItem/filteredListDropdownItem';

import { ModalWrapper } from './styles';

const FilteredListDropdown = ({ filteredTours }) => {
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

FilteredListDropdownItem.propTypes = {
  filteredTours: PropTypes.array
};

const mapStateToProps = state => ({
  filteredTours: selectFilteredTours(state)
});

export default connect(mapStateToProps)(FilteredListDropdown);
