import React from 'react';

import { SpinnerContainer, StyledSpinner } from './styles';

const Spinner = ({ size }) => (
  <SpinnerContainer size={size}>
    <StyledSpinner size={size} />
  </SpinnerContainer>
);

export default Spinner;
