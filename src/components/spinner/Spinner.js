import React from 'react';

import { SpinnerContainer, StyledSpinner } from './styles';

const Spinner = ({ size, color }) => (
  <SpinnerContainer size={size}>
    <StyledSpinner size={size} color={color} />
  </SpinnerContainer>
);

export default Spinner;
