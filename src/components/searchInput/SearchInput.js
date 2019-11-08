import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTours, getFilterText } from 'redux/tour/tourActions';
import { selectAllTours } from 'redux/tour/tourSelectors';

import FilteredListModal from 'components/filteredListModal/FilteredListModal';

import { StyledForm, StyledInput } from './styles';

const SearchInput = ({ getTours, getFilterText, allTours }) => {
  if (allTours.length < 1) getTours();

  const [modalVisible, setmodalVisible] = useState(false);
  const searchQuery = createRef();
  const onChange = e => {
    if (searchQuery.current.value.length >= 1) {
      setmodalVisible(true);
      getFilterText(searchQuery.current.value);
    } else {
      setmodalVisible(false);
    }
  };
  const onBlur = e => {
    setTimeout(() => {
      searchQuery.current.value = '';
      setmodalVisible(false);
    }, 180);
  };
  return (
    <StyledForm
      onChange={onChange}
      onBlur={onBlur}
      onSubmit={e => e.preventDefault()}
    >
      <StyledInput
        type='text'
        placeholder='Search for tours'
        ref={searchQuery}
        required
      />
      <FilteredListModal modalVisible={modalVisible} />
    </StyledForm>
  );
};

SearchInput.propTypes = {
  getTours: PropTypes.func.isRequired,
  getFilterText: PropTypes.func.isRequired,
  allTours: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  allTours: selectAllTours(state)
});

export default connect(
  mapStateToProps,
  { getTours, getFilterText }
)(SearchInput);
