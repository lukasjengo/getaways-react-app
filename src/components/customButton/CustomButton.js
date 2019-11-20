import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledButtonUnderline } from './styles';

const CustomButton = ({ color, type, size, onClick, children }) => {
  return type === 'underline' ? (
    <StyledButtonUnderline size={size} onClick={onClick}>
      {children}
    </StyledButtonUnderline>
  ) : (
    <StyledButton size={size} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
