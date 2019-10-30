import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectFilteredTours } from 'redux/tour/tourSelectors';

import FilteredListModalItem from 'components/filteredListModalItem/FilteredListModalItem';

import { ModalWrapper } from './styles';

const FilteredListModal = ({ filteredTours, modalVisible }) => {
  return modalVisible ? (
    <ModalWrapper modalVisible={modalVisible}>
      {filteredTours.map(tour => (
        <FilteredListModalItem
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

FilteredListModalItem.propTypes = {
  filteredTours: PropTypes.array,
  modalVisible: PropTypes.bool
};

const mapStateToProps = state => ({
  filteredTours: selectFilteredTours(state)
});

export default connect(mapStateToProps)(FilteredListModal);
