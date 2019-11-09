import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectFilteredTours } from 'redux/tour/tourSelectors';

import FilteredListDropdownItem from 'components/filteredListDropdownItem/filteredListDropdownItem';

import { ModalWrapper } from './styles';

const FilteredListDropdown = ({ filteredTours, modalVisible }) => {
  return modalVisible ? (
    <ModalWrapper modalVisible={modalVisible}>
      {filteredTours.map(tour => (
        <FilteredListDropdownItem
          key={tour.id}
          name={tour.name}
          location={tour.startLocation.description}
          startDate={tour.startDates[0].split('T')[0]}
          slug={tour.slug}
        />
      ))}
    </ModalWrapper>
  ) : null;
};

FilteredListDropdownItem.propTypes = {
  filteredTours: PropTypes.array,
  modalVisible: PropTypes.bool
};

const mapStateToProps = state => ({
  filteredTours: selectFilteredTours(state)
});

export default connect(mapStateToProps)(FilteredListDropdown);