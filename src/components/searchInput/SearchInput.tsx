import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFilterText } from 'redux/tour/tourActions';

import FilteredListDropdown from 'components/filteredListDropdown/filteredListDropdown';

import { StyledForm, StyledInput } from './styles';

const SearchInput: React.FC = () => {
  const formNode = useRef<HTMLFormElement>(null);
  const inputNode = useRef<HTMLInputElement>(null);

  const [visible, setVisible] = useState(false);
  let history = useHistory();

  const dispatch = useDispatch();
  useEffect(
    () =>
      history.listen(() => {
        setVisible(false);
        inputNode.current!.value = '';
      }),
    //eslint-disable-next-line
    []
  );

  const handleClickOutside = (e: MouseEvent) => {
    if (formNode.current!.contains(e.target as Node)) {
      // outside click
      return;
    }
    setVisible(false);
    inputNode.current!.value = '';
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

  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = e => {
    dispatch(getFilterText(e.target.value));
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

export default SearchInput;
