import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFilterText } from 'redux/tour/tourActions';

import FilteredListDropdown from 'components/filteredListDropdown/filteredListDropdown';

import { StyledForm, StyledInput } from './styles';

const SearchInput = ({ getFilterText }) => {
  const formNode = useRef(null);
  const inputNode = useRef(null);

  const [visible, setVisible] = useState(false);

  let history = useHistory();
  useEffect(
    () =>
      history.listen(() => {
        setVisible(false);
        inputNode.current.value = '';
      }),
    //eslint-disable-next-line
    []
  );

  const handleClickOutside = e => {
    if (formNode.current.contains(e.target)) {
      // outside click
      return;
    }
    setVisible(false);
    inputNode.current.value = '';
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    //eslint-disable-next-line
  }, [visible]);

  const onChange = e => {
    getFilterText(e.target.value);
    if (e.target.value.length !== 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <StyledForm ref={formNode} onSubmit={e => e.preventDefault()}>
      <StyledInput
        type="text"
        placeholder="Search for tours"
        required
        ref={inputNode}
        onChange={onChange}
      />
      {visible && <FilteredListDropdown />}
    </StyledForm>
  );
};

SearchInput.propTypes = {
  getFilterText: PropTypes.func.isRequired,
};

export default connect(null, { getFilterText })(SearchInput);
