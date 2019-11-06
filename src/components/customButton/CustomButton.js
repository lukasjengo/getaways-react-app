import React from 'react';

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

export default CustomButton;
