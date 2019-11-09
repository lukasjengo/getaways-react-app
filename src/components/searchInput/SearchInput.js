import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTours, getFilterText } from 'redux/tour/tourActions';
import { selectAllTours } from 'redux/tour/tourSelectors';

import FilteredListDropdown from 'components/filteredListDropdown/filteredListDropdown';

import { StyledForm, StyledInput } from './styles';

const SearchInput = ({ getTours, getFilterText, allTours }) => {
  if (allTours.length < 1) getTours();

  const [modalVisible, setmodalVisible] = useState(false);
  const inputNode = useRef(null);

  const onChange = () => {
    if (inputNode.current.value.length >= 1) {
      setmodalVisible(true);
      getFilterText(inputNode.current.value);
    } else {
      setmodalVisible(false);
    }
  };
  const onBlur = e => {
    setTimeout(() => {
      inputNode.current.value = '';
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
        ref={inputNode}
        required
      />
      <FilteredListDropdown modalVisible={modalVisible} />
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
