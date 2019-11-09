import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledButtonUnderline } from './styles';

const CustomButton = ({ color, type, onClick, children }) => {
  return type === 'underline' ? (
    <StyledButtonUnderline onClick={onClick}>{children}</StyledButtonUnderline>
  ) : (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default CustomButton;
